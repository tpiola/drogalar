# Gera a versão de produção em OUT: HTML pré-renderizado (SEO/GEO), páginas do blog, sitemap, robots, llms.txt
import json, re, shutil, subprocess, time, os, html as H
from playwright.sync_api import sync_playwright
SRC='/home/claude/sl'; OUT='/home/claude/drogalar/public'
SITE='https://drogalar.vercel.app'
TODAY=time.strftime('%Y-%m-%d')
for d in ['img','fonts']:
    shutil.rmtree(f'{OUT}/{d}',ignore_errors=True)
shutil.copytree(f'{SRC}/img',f'{OUT}/img');os.makedirs(f'{OUT}/fonts')
for f in os.listdir(f'{SRC}/fonts'): shutil.copy(f'{SRC}/fonts/{f}',f'{OUT}/fonts/')
shutil.copy(f'{SRC}/favicon.svg',OUT)
base=open(f'{SRC}/index.html',encoding='utf-8').read()
_a=base.rindex('<script>');_b=base.index('</script>',_a)
APP=base[_a+8:_b]
assert 'route();' in APP
import hashlib
VER=hashlib.sha1(APP.encode()).hexdigest()[:8]
def absify(t):
    t=re.sub(r'(["\'(\s,])(img|fonts)/', r'\1/\2/', t)
    return t.replace('href="favicon.svg"','href="/favicon.svg"').replace('href="site.webmanifest"','href="/site.webmanifest"')
APP=absify(APP)
open(f'{OUT}/app.js','w',encoding='utf-8').write(APP)
base=base[:_a]+'<script src="/app.js?v='+VER+'" defer></script>'+base[_b+9:]
srv=subprocess.Popen(['python3','-m','http.server','8812','-d',SRC],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL);time.sleep(1)
pages={}
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={'width':1366,'height':900})
    pg.goto('http://localhost:8812/index.html');pg.wait_for_timeout(1200)
    posts=pg.evaluate("TZ.POSTS.map(b=>({s:b.s,t:b.t,e:b.e||'',c:b.c||''}))")
    faq=pg.evaluate("TZ.FAQ")
    def snap(hash):
        pg.evaluate(f"location.hash='{hash}'");pg.wait_for_timeout(700)
        return pg.evaluate("(()=>{const v=document.getElementById('view').cloneNode(true);v.classList.remove('vin');v.querySelectorAll('.hc-slide').forEach((s,i)=>s.classList.toggle('on',i===0));v.querySelectorAll('[style*=\"--i\"]').forEach(e=>e.style.removeProperty('--i'));return v.innerHTML})()")
    pages['inicio']=snap('#inicio')
    for po in posts: pages['b-'+po['s']]=snap('#b-'+po['s'])
    FF=pg.evaluate("TZ.F.map(f=>({id:f[0],n:f[1],o:f[2],fm:f[3],ap:f[4],rx:!!f[6],d:f[7]}))")
    OO=pg.evaluate("TZ.OBJ.map(o=>({id:o[0],n:o[1],d:o[2]}))")
    for o in OO: pages['o-'+o['id']]=snap('#o-'+o['id'])
    for f in FF: pages['f-'+f['id']]=snap('#f-'+f['id'])
    LEG={}
    for lg in ['info-farmaceutica','termos','privacidade']:
        pages[lg]=snap('#'+lg);LEG[lg]=pg.evaluate("(document.querySelector('#view h1')||{}).textContent||''")
    b.close()
srv.terminate()
def clip(t,n=155):
    t=t.strip()
    if len(t)<=n: return t
    c=t[:n].rsplit(' ',1)[0].rstrip(',;:·-')
    return c+'…'
def nested(h):
    h=h.replace('href="fonts/','href="/fonts/').replace('url(fonts/','url(/fonts/').replace('"img/','"/img/').replace("'img/","'/img/").replace(' img/',' /img/').replace(', img/',', /img/').replace('href="favicon.svg"','href="/favicon.svg"').replace('href="site.webmanifest"','href="/site.webmanifest"')
    return re.sub(r'<link rel="preload" as="image"[^>]*>\n','',h)
def crumbs(items):
    return {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":i+1,"name":n,"item":SITE+u} for i,(n,u) in enumerate(items)]}
def page(view,title,desc,path,ld_extra=None,boot=None):
    PRE=(boot or '#inicio')[1:]
    h=base
    h=re.sub(r'<title>.*?</title>','<title>'+H.escape(title)+'</title>',h,1,flags=re.S)
    desc=clip(desc)
    h=re.sub(r'<meta name="description" content="[^"]*">','<meta name="description" content="'+H.escape(desc)+'">',h,1)
    h=h.replace(f'<link rel="canonical" href="{SITE}/">',f'<link rel="canonical" href="{SITE}{path}">')
    h=h.replace(f'<meta property="og:url" content="{SITE}/">',f'<meta property="og:url" content="{SITE}{path}">')
    h=re.sub(r'<meta property="og:title" content="[^"]*">','<meta property="og:title" content="'+H.escape(title)+'">',h,1)
    h=re.sub(r'<meta property="og:description" content="[^"]*">','<meta property="og:description" content="'+H.escape(desc)+'">',h,1)
    if ld_extra:
        for L in (ld_extra if isinstance(ld_extra,list) else [ld_extra]):
            h=h.replace('</script>\n<style>','</script>\n<script type="application/ld+json">'+json.dumps(L,ensure_ascii=False)+'</script>\n<style>',1)
    assert '<main id="view"' in h
    view=view.replace('href="#b-','href="/blog/').replace('href="#f-','href="/formula/').replace('href="#o-','href="/objetivo/')
    h=h.replace('<ul id="fobj"></ul>','<ul id="fobj">'+''.join(f'<li><a href="/objetivo/{o["id"]}">{H.escape(o["n"])}</a></li>' for o in OO)+'</ul>')
    h=h.replace('<ul id="ftop"></ul>','<ul id="ftop">'+''.join(f'<li><a href="/formula/{f["id"]}">{H.escape(f["n"])}</a></li>' for f in FF[:8])+'</ul>')
    for lg in ['info-farmaceutica','termos','privacidade']: h=h.replace(f'href="#{lg}"',f'href="/{lg}"')
    h=re.sub(r'(<main id="view")([^>]*>)\s*(</main>)',lambda m:m.group(1)+' data-pre="'+PRE+'"'+m.group(2)+view+m.group(3),h,1)
    if boot: h=h.replace('<main id="view"','<script>if(!location.hash)history.replaceState(null,"",location.pathname+"'+boot+'")</script>\n<main id="view"',1)
    return absify(h)
FAQLD={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in faq]}
home=page(pages['inicio'],'Sete Lírios Manipulação | Farmácia de manipulação em Franca/SP',
 'Farmácia de manipulação em Franca/SP com fórmulas de alta performance, vitaminas e dermocosméticos. Envie a receita e receba o orçamento pelo WhatsApp.','/',FAQLD)
open(f'{OUT}/index.html','w',encoding='utf-8').write(home)
urls=[('/','1.0')]
for po in posts:
    path='/blog/'+po['s']
    ld={"@context":"https://schema.org","@type":"BlogPosting","headline":po['t'],"description":po['e'],"inLanguage":"pt-BR","datePublished":TODAY,"dateModified":TODAY,"mainEntityOfPage":SITE+path,"image":SITE+"/img/potes-real.webp","author":{"@type":"Organization","name":"Sete Lírios Manipulação","url":SITE+"/"},"publisher":{"@id":SITE+"/#farmacia"}}
    h=page(pages['b-'+po['s']],po['t']+' | Sete Lírios Manipulação',(po['e'] or po['t']),path,ld,'#b-'+po['s'])
    h=nested(h)
    _unused=h.replace('href="fonts/','href="/fonts/').replace('url(fonts/','url(/fonts/').replace('"img/','"/img/').replace("'img/","'/img/").replace(' img/',' /img/').replace(', img/',', /img/').replace('href="favicon.svg"','href="/favicon.svg"').replace('href="site.webmanifest"','href="/site.webmanifest"')
    h=re.sub(r'<link rel="preload" as="image"[^>]*>\n','',h)
    os.makedirs(f'{OUT}/blog',exist_ok=True)
    open(f'{OUT}/blog/{po["s"]}.html','w',encoding='utf-8').write(h)
    urls.append((path,'0.7'))
os.makedirs(f'{OUT}/objetivo',exist_ok=True);os.makedirs(f'{OUT}/formula',exist_ok=True)
for o in OO:
    path='/objetivo/'+o['id'];its=[f for f in FF if f['o']==o['id']]
    ld=[{"@context":"https://schema.org","@type":"CollectionPage","name":o['n']+' · fórmulas manipuladas',"url":SITE+path,"inLanguage":"pt-BR","isPartOf":{"@id":SITE+"/#site"},"about":o['d'],"mainEntity":{"@type":"ItemList","itemListElement":[{"@type":"ListItem","position":i+1,"url":SITE+'/formula/'+f['id'],"name":f['n']} for i,f in enumerate(its)]}},crumbs([('Início','/'),(o['n'],path)])]
    h=nested(page(pages['o-'+o['id']],f"{o['n']}: fórmulas manipuladas em Franca/SP | Sete Lírios",f"{o['n']}: {o['d'].lower()}. Fórmulas manipuladas na dose da prescrição, com conferência farmacêutica. Orçamento pelo WhatsApp na Sete Lírios, Franca/SP.",path,ld,'#o-'+o['id']))
    open(f'{OUT}{path}.html','w',encoding='utf-8').write(h);urls.append((path,'0.8'))
ON={o['id']:o['n'] for o in OO}
for f in FF:
    path='/formula/'+f['id']
    ld=[{"@context":"https://schema.org","@type":"WebPage","name":f['n']+' manipulado',"url":SITE+path,"inLanguage":"pt-BR","isPartOf":{"@id":SITE+"/#site"},"description":f['d'],"primaryImageOfPage":SITE+'/img/pote/'+f['id']+'.webp',"publisher":{"@id":SITE+"/#farmacia"}},crumbs([('Início','/'),(ON[f['o']],'/objetivo/'+f['o']),(f['n'],path)])]
    t1=f"{f['n']} manipulado em Franca/SP | Sete Lírios"
    if len(t1)>62: t1=f"{f['n']} manipulado | Sete Lírios"
    h=nested(page(pages['f-'+f['id']],t1,(f"{f['n']} ({f['fm'].lower()}). {f['d']} Orçamento pelo WhatsApp."),path,ld,'#f-'+f['id']))
    h=h.replace('content="https://drogalar.vercel.app/img/og.jpg"','content="'+SITE+'/img/pote/'+f['id']+'.webp"',1)
    open(f'{OUT}{path}.html','w',encoding='utf-8').write(h);urls.append((path,'0.7'))
for lg,tt in LEG.items():
    path='/'+lg
    h=nested(page(pages[lg],(tt or lg)+' | Sete Lírios Manipulação',f"{tt}. Farmácia Sete Lírios Manipulação, Av. Brasil, 815, Franca/SP.",path,crumbs([('Início','/'),(tt,path)]),'#'+lg))
    open(f'{OUT}{path}.html','w',encoding='utf-8').write(h);urls.append((path,'0.3'))
sm='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>{SITE}{u}</loc><lastmod>{TODAY}</lastmod><priority>{pr}</priority></url>\n' for u,pr in urls)+'</urlset>\n'
open(f'{OUT}/sitemap.xml','w').write(sm)
open(f'{OUT}/robots.txt','w').write(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n')
llms=f"""# Farmácia Sete Lírios Manipulação

> Farmácia de manipulação, homeopatia e drogaria em Franca/SP, com foco em fórmulas de alta performance, vitaminas e dermocosméticos manipulados. Orçamento de receitas pelo WhatsApp, com conferência farmacêutica.

## Dados da farmácia
- Nome: Farmácia Sete Lírios Manipulação (Sete Lírios Manipulação, Homeopatia e Drogaria)
- Endereço: Av. Brasil, 815, sala 2, Vila Aparecida, Franca/SP, CEP 14401-240
- WhatsApp: (16) 99244-0470
- Horário: segunda a sábado 8h às 20h; domingo 9h às 12h
- Pagamento: Pix, cartão de crédito, cartão de débito e dinheiro
- Instagram: https://www.instagram.com/farmaciasetelirios/
- Como chegar: https://www.google.com/maps/dir/?api=1&destination=-20.5265417,-47.3840619
- Avaliação no Google: 5,0

## Como pedir
- Envie a foto da receita pelo WhatsApp; o farmacêutico confere e envia valor, prazo e forma de uso.
- Fórmulas com hormônios e medicamentos sob prescrição só são preparados com receita válida.
- Retirada na loja ou entrega em Franca, combinadas no orçamento.

## Objetivos atendidos
- Performance, energia e foco, imunidade, sono e bem-estar, pele, cabelo e unhas, articulações e ossos, saúde da mulher.

## Perguntas frequentes
""" + ''.join(f"- {q} {a}\n" for q,a in faq) + "\n## Objetivos\n" + ''.join(f"- [{o['n']}]({SITE}/objetivo/{o['id']}): {o['d']}\n" for o in OO) + "\n## Fórmulas\n" + ''.join(f"- [{f['n']}]({SITE}/formula/{f['id']}): {f['fm']}, {f['ap']}. {f['d']}{' Exige receita.' if f['rx'] else ''}\n" for f in FF) + "\n## Blog\n" + ''.join(f"- [{po['t']}]({SITE}/blog/{po['s']}): {po['e']}\n" for po in posts) + f"\n## Páginas\n- [Início]({SITE}/)\n- [Informações farmacêuticas]({SITE}/info-farmaceutica)\n- [Termos]({SITE}/termos)\n- [Privacidade]({SITE}/privacidade)\n"
open(f'{OUT}/llms.txt','w',encoding='utf-8').write(llms)
print('pages',len(urls),'home KB',len(home)//1024)
