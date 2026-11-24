
{
const WA='5516992440470';
const GEO='-20.5265417,-47.3840619';
/* Dados legais (RDC 44/2009, RDC 67/2007, Decreto 7.962/2013): preencher antes de vender */
const LEGAL={fantasia:'Farmácia Sete Lírios Manipulação',razao:'',cnpj:'',end:'Av. Brasil, 815, sala 2, Vila Aparecida, Franca/SP, CEP 14401-240',horario:'Seg a sáb 8h–20h · Dom 9h–12h',tel:'WhatsApp (16) 99244-0470',email:'',rt:'',crf:'',licenca:'',afe:'',ae:''};
const HOURS=[[0,9,12],[1,8,20],[2,8,20],[3,8,20],[4,8,20],[5,8,20],[6,8,20]];
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const wa=m=>'https://wa.me/'+WA+'?text='+encodeURIComponent(m);
const V=document.getElementById('view');
const LIVE=/vercel\.app$|\.com\.br$/.test(location.hostname);

/* objetivos (inspirado na navegação por objetivo do e-commerce de manipulação) */
const OBJ=[
 ['performance','Performance','Treino, força e recuperação','#1f5f2c','#0d2a1b','bolt'],
 ['energia','Energia e foco','Disposição para a rotina','#2b7339','#123a24','spark'],
 ['imunidade','Imunidade','Defesas em dia','#3d7a2f','#123a24','shield'],
 ['sono','Sono e bem-estar','Descanso e equilíbrio','#24524a','#0d2a1b','moon'],
 ['pele','Pele','Dermocosméticos manipulados','#6b5a2a','#2a2410','drop'],
 ['cabelo','Cabelo e unhas','Fios e unhas fortes','#5c4a1f','#241c0b','leaf'],
 ['articulacoes','Articulações e ossos','Movimento com conforto','#1f4f5f','#0d2229','bone'],
 ['mulher','Saúde da mulher','Cuidado em cada fase','#5f2c4f','#2a0d22','flower']
];
const ICO={bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>',moon:'<path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10Z"/>',drop:'<path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"/>',leaf:'<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Z"/><path d="M5 19 13 11"/>',bone:'<path d="M7 7a2.5 2.5 0 1 1 3-3l7 7a2.5 2.5 0 1 1 3 3 2.5 2.5 0 1 1-3 3l-7-7a2.5 2.5 0 1 1-3-3Z"/>',flower:'<circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 1 0 7M12 22a4 4 0 0 1 0-7M2 12a4 4 0 0 1 7 0M22 12a4 4 0 0 1-7 0"/>',rx:'<path d="M6 3h9l3 3v15H6z"/><path d="M9 10h6M9 14h6M9 18h3"/>',flask:'<path d="M10 2v6L5 18a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V2"/><path d="M8 2h8"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9Z"/>',chat:'<path d="M4 5h16v11H8l-4 4z"/>',card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',book:'<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6"/>'};
const ico=(k,cls)=>'<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+ICO[k]+'</svg>';

/* fórmulas: sem preço nem promessa; valor e dose definidos no orçamento, conforme a prescrição */
/* [id, nome, objetivo, forma, apresentação, cor da cápsula, receita obrigatória, descrição educativa] */
const F=[
 ['creatina','Creatina monohidratada','performance','Sachê ou cápsulas','Dose personalizada','#ffffff',0,'Um dos ativos mais estudados no esporte. A farmácia ajusta a forma (sachê, cápsula) e a quantidade conforme a orientação do seu nutricionista ou médico.'],
 ['beta-alanina','Beta-alanina','performance','Cápsulas ou sachê','Dose personalizada','#f2efe4',0,'Ativo usado em protocolos de treino de alta intensidade. A dose e o momento de uso são definidos pelo profissional que acompanha você.'],
 ['magnesio-dimalato','Magnésio dimalato','performance','Cápsulas','60 cápsulas','#d9e8d5',0,'Forma de magnésio frequentemente usada por quem treina. Sem corantes, com a dose indicada na sua prescrição.'],
 ['coq10','Coenzima Q10','energia','Cápsulas oleosas','30 ou 60 cápsulas','#f0b429',0,'Ativo presente naturalmente nas células. A manipulação permite ajustar a concentração ao que foi prescrito.'],
 ['complexo-b','Complexo B','energia','Cápsulas','60 cápsulas','#e9a23b',0,'Associação de vitaminas do complexo B em dose personalizada, sem excesso de ativos que você não precisa.'],
 ['rhodiola','Rhodiola rosea','energia','Cápsulas','Extrato padronizado','#c98a4b',0,'Fitoterápico de extrato padronizado. Use somente com orientação de profissional habilitado.'],
 ['composto-imunidade','Composto para imunidade','imunidade','Cápsulas','60 cápsulas','#1f5f2c',0,'Associação de vitamina C, própolis, acerola e equinácea, preparada conforme a fórmula indicada pelo profissional.'],
 ['vitamina-c-zinco','Vitamina C + zinco','imunidade','Cápsulas','60 cápsulas','#f6d365',0,'Vitamina C e zinco na concentração definida na prescrição, em cápsulas fáceis de engolir.'],
 ['vitamina-d3','Vitamina D3','imunidade','Cápsulas ou gotas','Dose conforme exame','#fbe38e',0,'A dose de vitamina D costuma ser definida a partir do exame de sangue. Envie a receita para o orçamento.'],
 ['magnesio-treonato','Magnésio treonato','sono','Cápsulas','60 cápsulas','#cfd8e8',0,'Forma de magnésio muito procurada para rotinas noturnas. Dose definida pelo profissional.'],
 ['l-teanina','L-teanina','sono','Cápsulas','60 cápsulas','#e7e3f3',0,'Aminoácido presente no chá-verde, manipulado na quantidade indicada para você.'],
 ['glicina','Glicina','sono','Sachê ou cápsulas','Dose personalizada','#f4f4f4',0,'Aminoácido usado em rotinas de descanso. A farmácia prepara em sachê ou cápsula, como você preferir.'],
 ['serum-antissinais','Sérum antissinais','pele','Sérum facial','30 ml','#7fd1c1',0,'Sérum manipulado com ativos escolhidos para o seu tipo de pele, com textura leve e rótulo personalizado.'],
 ['espuma-limpeza','Espuma de limpeza facial','pele','Espuma','100 ml','#ffffff',0,'Limpeza facial com ativos definidos para pele oleosa, mista ou sensível, preparada sob medida.'],
 ['colageno','Colágeno hidrolisado','pele','Sachê ou cápsulas','30 doses','#f3e6d6',0,'Peptídeos de colágeno em sachê ou cápsula, sem açúcar e no sabor que você preferir.'],
 ['biotina','Biotina','cabelo','Cápsulas','60 cápsulas','#ead7a6',0,'Vitamina do complexo B usada em fórmulas para cabelo e unhas, na concentração da sua prescrição.'],
 ['silicio','Silício orgânico','cabelo','Cápsulas','60 cápsulas','#dfe9e2',0,'Ativo usado em fórmulas de cabelo, pele e unhas. Dose definida pelo profissional.'],
 ['locao-capilar','Loção capilar','cabelo','Loção','60 ou 120 ml','#9bd1e8',1,'Loções capilares com ativos de uso tópico. Algumas só podem ser preparadas com receita: envie a sua para o orçamento.'],
 ['colageno-ii','Colágeno tipo II não desnaturado','articulacoes','Cápsulas','30 cápsulas','#f1ead8',0,'Ativo em dose baixa, usado em fórmulas para articulações. Ideal manipular junto com outros ativos da sua prescrição.'],
 ['d3-k2','Vitamina D3 + K2','articulacoes','Cápsulas ou gotas','30 ou 60 doses','#fbe38e',0,'Associação muito prescrita para a saúde dos ossos. Dose definida a partir do seu exame.'],
 ['calcio-magnesio','Cálcio + magnésio','articulacoes','Cápsulas','60 cápsulas','#f7f7f2',0,'Minerais combinados na proporção indicada pelo profissional, em cápsulas de tamanho confortável.'],
 ['ferro-quelato','Ferro quelato','mulher','Cápsulas','30 ou 60 cápsulas','#b23a3a',0,'Forma de ferro com boa tolerância. Use somente após avaliação, porque a dose depende do exame.'],
 ['acido-folico','Ácido fólico','mulher','Cápsulas','30 ou 60 cápsulas','#f6d365',0,'Muito prescrito no planejamento da gestação. A dose é definida pelo médico.'],
 ['hormonios','Fórmulas hormonais','mulher','Cápsulas ou creme','Conforme receita','#e7c6d6',1,'Fórmulas com hormônios só são preparadas mediante receita médica, conferida pelo farmacêutico.']
];
const BY={};F.forEach(x=>BY[x[0]]=x);
const objOf=id=>OBJ.find(o=>o[0]===id);

/* embalagem gerada (pote âmbar/verde com rótulo Sete Lírios) */
function jar(f,big){
  const c=f[5],dark=f[2]==='pele'||f[3].includes('Loção')||f[3].includes('Sérum')||f[3].includes('Espuma');
  const label=f[1].length>18?f[1].slice(0,17)+'…':f[1];
  if(dark) return '<svg viewBox="0 0 120 140" role="img" aria-label="'+esc(f[1])+'"><rect x="44" y="8" width="32" height="20" rx="4" fill="#ffffff" stroke="#cfdcd3"/><rect x="34" y="26" width="52" height="106" rx="14" fill="'+c+'" stroke="#00000014"/><rect x="38" y="58" width="44" height="50" rx="5" fill="#fff"/><path d="M60 64c-3 3-3 7 0 10 3-3 3-7 0-10Z" fill="#b98d3b"/><text x="60" y="86" text-anchor="middle" font-family="Georgia,serif" font-size="7.5" fill="#1f5f2c">Sete Lírios</text><text x="60" y="97" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="5.6" fill="#10231a">'+esc(label.toUpperCase().slice(0,14))+'</text></svg>';
  return '<svg viewBox="0 0 120 140" role="img" aria-label="'+esc(f[1])+'"><rect x="30" y="10" width="60" height="22" rx="5" fill="'+(f[0]==='composto-imunidade'?'#1f5f2c':'#ffffff')+'" stroke="#cfdcd3"/><rect x="26" y="30" width="68" height="102" rx="12" fill="#e9f1ec" stroke="#00000012"/>'+
   [0,1,2,3,4,5].map(i=>'<rect x="'+(32+(i%3)*19)+'" y="'+(38+Math.floor(i/3)*10)+'" width="16" height="7" rx="3.5" fill="'+c+'" stroke="#0000001a"/>').join('')+
   '<rect x="30" y="62" width="60" height="52" rx="5" fill="#fff" stroke="#e2ebe5"/><path d="M60 67c-3.5 3.5-3.5 8 0 11.5 3.5-3.5 3.5-8 0-11.5Z" fill="#b98d3b"/><path d="M54 72c1 4 3 6 6 6.5M66 72c-1 4-3 6-6 6.5" stroke="#b98d3b" stroke-width="1.4" fill="none"/><text x="60" y="89" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="#1f5f2c">Sete Lírios</text><text x="60" y="101" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="800" font-size="5.4" fill="#10231a">'+esc(label.toUpperCase().slice(0,16))+'</text><text x="60" y="109" text-anchor="middle" font-family="Montserrat,sans-serif" font-size="4.6" fill="#4d6256">MANIPULAÇÃO</text></svg>';
}

/* lista de orçamento */
let L={};try{L=JSON.parse(localStorage.getItem('sl_list')||'{}')}catch(e){}
const saveL=()=>{try{localStorage.setItem('sl_list',JSON.stringify(L))}catch(e){};paintQ()};
const qcount=()=>Object.values(L).reduce((a,b)=>a+b,0);
function paintQ(){const n=qcount();document.getElementById('qn').textContent=n;document.getElementById('qn2').textContent=n?'('+n+')':''}
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2200)}

function card(f){const o=objOf(f[2]);return '<article class="card">'+(f[6]?'<span class="tag rx">Com receita</span>':'<span class="tag">'+esc(o[1])+'</span>')+'<a class="ph" href="#f-'+f[0]+'" aria-label="Ver '+esc(f[1])+'">'+jar(f)+'</a><h3><a href="#f-'+f[0]+'">'+esc(f[1])+'</a></h3><div class="meta">'+esc(f[3])+' · '+esc(f[4])+'</div><button class="btn" data-add="'+f[0]+'">Adicionar ao orçamento</button></article>'}
const rail=items=>'<div class="rail">'+items.map(card).join('')+'</div>';

/* horário */
const now=()=>{const p=new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',weekday:'short',hour:'numeric',hour12:false}).formatToParts(new Date());const g=t=>p.find(x=>x.type===t).value;return{d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')),h:+g('hour')%24}};
const N=now(),TD=HOURS[N.d],OPEN=N.h>=TD[1]&&N.h<TD[2];
const openTxt=OPEN?'Aberto agora · até '+TD[2]+'h':(N.h<TD[1]?'Fechado · abre hoje às '+TD[1]+'h':'Fechado · abre amanhã às '+HOURS[(N.d+1)%7][1]+'h');
document.getElementById('status').innerHTML='<i class="dot'+(OPEN?' on':'')+'"></i><span>'+esc(openTxt)+'</span>';

/* conteúdo */
const POSTS=[
 {s:'como-funciona-farmacia-de-manipulacao',t:'Como funciona uma farmácia de manipulação',c:'Manipulação',e:'Da receita ao pote: entenda cada etapa e por que a fórmula é feita só para você.',i:'flask',b:[['p','Na farmácia de manipulação, o medicamento ou suplemento é preparado sob medida, a partir de uma prescrição ou da orientação do farmacêutico. Nada fica pronto na prateleira: cada fórmula é pesada, misturada e embalada para uma pessoa.'],['h','1. A receita chega'],['p','Você envia a foto da receita pelo WhatsApp. O farmacêutico confere ativos, doses, forma farmacêutica e possíveis interações antes de qualquer orçamento.'],['h','2. O orçamento'],['p','Com a fórmula conferida, você recebe valor, prazo de preparo e opções de forma: cápsula, sachê, gotas, creme ou loção.'],['h','3. O preparo'],['p','No laboratório, os ativos são pesados em balança de precisão, misturados e encapsulados ou incorporados à base, com registro de lote e rótulo com seus dados de uso.'],['h','4. A entrega'],['p','A fórmula pronta é conferida mais uma vez e entregue na loja ou em casa, com as orientações de uso e conservação.'],['p','As informações deste artigo não substituem a orientação do seu médico, nutricionista ou farmacêutico.']]},
 {s:'capsula-sache-ou-liquido',t:'Cápsula, sachê ou líquido: como é escolhida a forma farmacêutica',c:'Fórmulas',e:'A mesma fórmula pode virar cápsula, sachê ou gotas. Veja o que muda.',i:'book',b:[['p','Uma das vantagens da manipulação é escolher como você vai usar a fórmula. A decisão leva em conta a dose, a estabilidade dos ativos e a sua rotina.'],['h','Cápsulas'],['p','São práticas para doses menores e ativos sem sabor agradável. Dá para ajustar o tamanho da cápsula para facilitar a deglutição.'],['h','Sachês'],['p','Funcionam bem para doses maiores, como as usadas no esporte. O pó é dissolvido em água ou bebida.'],['h','Gotas e líquidos'],['p','Ajudam quem tem dificuldade para engolir cápsulas e permitem ajustar a dose gota a gota, quando o ativo permite.'],['h','Cremes, géis e loções'],['p','Na dermatologia, a base é escolhida conforme o tipo de pele e a região de aplicação.'],['p','A forma final é sempre combinada com o farmacêutico, respeitando o que foi prescrito.']]},
 {s:'como-guardar-manipulados',t:'Como guardar seus manipulados para manter a qualidade',c:'Cuidados',e:'Calor e umidade são os maiores inimigos das fórmulas. Veja onde guardar.',i:'shield',b:[['p','Fórmulas manipuladas têm validade menor que a de produtos industrializados, porque não levam conservantes em excesso. Guardar bem faz diferença.'],['h','Longe do banheiro e da cozinha'],['p','Vapor e calor alteram cápsulas e pós. Prefira um armário seco e arejado, longe do sol.'],['h','Tampa sempre fechada'],['p','O pote foi escolhido para proteger os ativos. Não transfira para porta-comprimidos por muito tempo.'],['h','Geladeira só quando o rótulo pedir'],['p','Algumas fórmulas, principalmente cremes e probióticos, precisam de refrigeração. Siga o que estiver no rótulo.'],['h','Respeite a validade'],['p','Use até a data indicada. Se notar mudança de cor, cheiro ou textura, fale com a farmácia antes de usar.']]}
];
const FAQ=[
 ['Preciso de receita para manipular?','Depende do ativo. Vitaminas e suplementos podem ser preparados com orientação farmacêutica; medicamentos e fórmulas com hormônios exigem receita válida. Envie a sua pelo WhatsApp e o farmacêutico confere.'],
 ['Como peço um orçamento?','Monte sua lista no site ou envie a foto da receita pelo WhatsApp (16) 99244-0470. A equipe retorna com valor, prazo e forma de uso.'],
 ['Quanto tempo leva o preparo?','O prazo depende da fórmula e é informado no orçamento. Muitas fórmulas ficam prontas no mesmo dia.'],
 ['Vocês entregam?','Sim, em Franca. A taxa e o prazo de entrega são combinados no orçamento, conforme o bairro.'],
 ['Quais as formas de pagamento?','Pix, cartão de crédito, cartão de débito e dinheiro.'],
 ['A Sete Lírios também é drogaria e faz homeopatia?','Sim. Além da manipulação, temos homeopatia e itens de drogaria na loja da Av. Brasil, 815.']
];
const SLIDES=[
 ['#0d2a1b','Manipulação de alta performance','Fórmulas feitas <em>para o seu objetivo.</em>','Vitaminas, ativos para treino e dermocosméticos preparados sob medida, com conferência farmacêutica.',['Enviar minha receita','wa'],['Ver objetivos','#objetivos'],'capsulas','Potes de cápsulas manipuladas com rótulo Sete Lírios'],
 ['#123a24','Orçamento em minutos','Mande a foto da receita. <em>A gente resolve.</em>','O farmacêutico confere a fórmula e você recebe valor e prazo pelo WhatsApp.',['Como funciona','#receita'],['Falar no WhatsApp','wa'],'laboratorio','Cápsulas manipuladas no laboratório'],
 ['#2a2410','Dermocosméticos','Sua pele com <em>fórmula própria.</em>','Séruns, espumas de limpeza e cremes com os ativos certos para o seu tipo de pele.',['Ver cuidados com a pele','#o-pele'],null,'cosmeticos','Sérum e espuma facial manipulados Sete Lírios'],
 ['#0d2229','Manipulação · Homeopatia · Drogaria','Tudo em um só lugar, <em>na Av. Brasil.</em>','Retire na loja ou receba em Franca. Aberto todos os dias.',['Como chegar','route'],null,'fachada','Entrada da Farmácia Sete Lírios, número 815']
];
function heroCar(){
  const b=(x,cls)=>!x?'':x[1]==='wa'?'<a class="btn '+cls+' js-wa" data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#">'+x[0]+'</a>':x[1]==='route'?'<a class="btn '+cls+' js-route" href="#">'+x[0]+'</a>':'<a class="btn '+cls+'" href="'+x[1]+'">'+x[0]+'</a>';
  return '<section class="hcar" id="hcar" aria-roledescription="carrossel" aria-label="Destaques"><div class="hc-track" id="hcT" tabindex="0">'+SLIDES.map((s,i)=>{const h=i?'h2':'h1';return '<article class="hc-slide'+(i?'':' on')+'" style="--sbg:'+s[0]+'" aria-roledescription="slide" aria-label="'+(i+1)+' de '+SLIDES.length+'"><div class="hc-txt"><span class="kick">'+s[1]+'</span><'+h+'>'+s[2]+'</'+h+'><p>'+s[3]+'</p><div class="hc-cta">'+b(s[4],'lime')+b(s[5],'ghost')+'</div></div><div class="hc-pic"><img src="/img/'+s[6]+'-480.webp" srcset="/img/'+s[6]+'-480.webp 480w, /img/'+s[6]+'.webp 746w" sizes="(min-width:760px) 560px, 100vw" alt="'+s[7]+'" width="746" height="765"'+(i?' loading="lazy" decoding="async"':' fetchpriority="high"')+'></div></article>'}).join('')+'</div><button class="hc-nav prev" aria-label="Destaque anterior">‹</button><button class="hc-nav next" aria-label="Próximo destaque">›</button><div class="hc-dots" role="tablist">'+SLIDES.map((s,i)=>'<button role="tab" aria-label="Ir para o destaque '+(i+1)+'"'+(i?'':' class="on" aria-selected="true"')+'></button>').join('')+'</div></section>';
}
const trust=()=>'<div class="trust"><div class="in">'+[
 ['star','<span class="stars">★★★★★</span> 5,0 no Google','Avaliação dos clientes'],
 ['chat','Orçamento pelo WhatsApp','Envie a receita e receba em minutos'],
 ['flask','Conferência farmacêutica','Em todas as fórmulas'],
 ['truck','Entrega em Franca','Ou retire na Av. Brasil, 815']].map(t=>'<div class="tr"><i>'+ico(t[0])+'</i><div><b>'+t[1]+'</b><span>'+t[2]+'</span></div></div>').join('')+'</div></div>';
const objCards=()=>'<div class="objs">'+OBJ.map(o=>'<a class="obj" href="#o-'+o[0]+'" style="--c1:'+o[3]+';--c2:'+o[4]+'">'+ico(o[5],'big')+'<b>'+o[1]+'</b><span>'+o[2]+'</span><u>Ver fórmulas →</u></a>').join('')+'</div>';
const postCard=b=>'<a class="post" href="'+(LIVE?'/blog/':'#b-')+b.s+'"><div class="cv">'+ico(b.i)+'</div><div class="in"><small>'+esc(b.c)+'</small><h3>'+esc(b.t)+'</h3><p>'+esc(b.e)+'</p></div></a>';
const faqHtml=()=>FAQ.map(q=>'<details><summary>'+esc(q[0])+'</summary><p>'+esc(q[1])+'</p></details>').join('');
const rxSection=()=>`<section class="band" id="receita"><div class="wrap rxbox"><div><span class="kick" style="color:var(--goldl)">Manipule sua receita</span><h2 style="margin:10px 0 18px">Da receita ao pote em <em>3 passos.</em></h2><div class="steps"><div class="step"><i>1</i><div><b>Envie a foto da receita</b><span>Pelo WhatsApp, com todas as páginas legíveis.</span></div></div><div class="step"><i>2</i><div><b>Receba o orçamento</b><span>O farmacêutico confere a fórmula e envia valor, prazo e forma de uso.</span></div></div><div class="step"><i>3</i><div><b>Retire ou receba em casa</b><span>Pague por Pix, cartão ou dinheiro.</span></div></div></div><div class="hc-cta" style="margin-top:20px"><a class="btn lime js-wa" data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#">Enviar receita no WhatsApp</a></div></div><div class="pic"><img src="/img/laboratorio-480.webp" srcset="/img/laboratorio-480.webp 480w, /img/laboratorio.webp 519w" sizes="(min-width:760px) 480px, 92vw" alt="Cápsulas manipuladas em potes" width="519" height="335" loading="lazy" decoding="async"></div></div></section>`;

function home(){
  const pick=ids=>ids.map(i=>BY[i]);
  return heroCar()+trust()+
  `<section class="band" id="objetivos"><div class="wrap"><div class="shead"><div><span class="kick">Farmácia de manipulação</span><h2 style="margin-top:8px">Os melhores manipulados para os seus objetivos</h2></div><a href="#formulas">Ver todas as fórmulas →</a></div>${objCards()}</div></section>
  <section class="band" style="padding-top:0"><div class="wrap"><div class="shead"><h2>Fórmulas mais procuradas</h2><a href="#formulas">Ver todas →</a></div>${rail(pick(['creatina','composto-imunidade','magnesio-dimalato','d3-k2','coq10','serum-antissinais','colageno','biotina']))}<p class="note">Imagens ilustrativas. Ativos, doses e forma farmacêutica são definidos na prescrição ou com o farmacêutico, e o valor é informado no orçamento.</p></div></section>
  ${rxSection()}
  <section class="band"><div class="wrap"><div class="shead"><h2>Manipulados para performance</h2><a href="#o-performance">Ver todos →</a></div>${rail(F.filter(f=>f[2]==='performance'||f[2]==='energia'))}</div></section>
  <section class="band" style="background:var(--cream)"><div class="wrap split"><div class="pic"><img src="/img/cosmeticos-480.webp" srcset="/img/cosmeticos-480.webp 480w, /img/cosmeticos.webp 560w" sizes="(min-width:760px) 560px, 92vw" alt="Sérum antissinais e espuma de limpeza manipulados Sete Lírios" width="560" height="380" loading="lazy" decoding="async"></div><div><span class="kick">Dermocosméticos manipulados</span><h2 style="margin:10px 0 12px">Rótulo com o seu nome. Fórmula com os ativos certos.</h2><p style="color:var(--soft)">Séruns, espumas de limpeza, cremes e loções preparados para o seu tipo de pele, com a textura que você gosta de usar.</p><div class="chips"><span>Sérum facial</span><span>Limpeza</span><span>Hidratação</span><span>Fotoproteção</span></div><div class="hc-cta" style="margin-top:18px"><a class="btn" href="#o-pele">Ver cuidados com a pele</a></div></div></div></section>
  <section class="band"><div class="wrap"><div class="shead"><h2>Imunidade e bem-estar</h2><a href="#o-imunidade">Ver todos →</a></div>${rail(F.filter(f=>f[2]==='imunidade'||f[2]==='sono'))}</div></section>
  <section class="band" id="homeopatia" style="padding-top:0"><div class="wrap split"><div><span class="kick">Homeopatia e drogaria</span><h2 style="margin:10px 0 12px">Manipulação, homeopatia e drogaria no mesmo endereço.</h2><p style="color:var(--soft)">Na Av. Brasil, 815, você encontra fórmulas manipuladas, medicamentos homeopáticos e itens de drogaria e higiene. Atendimento de segunda a sábado das 8h às 20h e domingo das 9h às 12h.</p><div class="chips" id="drogaria"><span>Homeopatia</span><span>Medicamentos</span><span>Higiene e bebê</span><span>Dermocosméticos</span></div><div class="hc-cta" style="margin-top:18px"><a class="btn js-route" href="#">Como chegar</a><a class="btn ghost js-wa" data-m="Olá! Vim pelo site e queria saber sobre homeopatia." href="#" style="color:var(--g7)">Perguntar sobre homeopatia</a></div></div><div class="pic"><img src="/img/interior-480.webp" srcset="/img/interior-480.webp 480w, /img/interior.webp 870w" sizes="(min-width:760px) 560px, 92vw" alt="Interior da loja Sete Lírios com gôndolas verdes" width="870" height="775" loading="lazy" decoding="async"></div></div></section>
  <section class="band" style="background:var(--mint)"><div class="wrap split"><div class="panel rev" style="background:#fff"><div style="display:flex;align-items:center;gap:14px"><span class="score">5,0</span><div><div class="stars" style="font-size:22px">★★★★★</div><b>no Google</b></div></div><h3>O que os clientes destacam</h3><div class="chips"><span>Qualidade das fórmulas</span><span>Bom preço</span><span>Ótimo atendimento</span><span>Entrega rápida</span><span>Farmacêutico atencioso</span></div><div class="hc-cta"><a class="btn ghost" style="color:var(--g7)" href="https://maps.google.com/?cid=5423862063795385054">Ler as avaliações</a></div></div><div><span class="kick">Recompra sem esquecer</span><h2 style="margin:10px 0 12px">Tratamento contínuo? A gente avisa quando acabar.</h2><p style="color:var(--soft)">Diga quando começou o pote e quantas doses usa por dia. Mandamos um lembrete no WhatsApp alguns dias antes para você repetir a fórmula sem ficar sem.</p><div class="hc-cta" style="margin-top:18px"><a class="btn wa js-wa" data-m="Olá! Uso uma fórmula contínua da Sete Lírios e quero receber o lembrete de recompra pelo WhatsApp. Autorizo receber esse lembrete." href="#">Quero o lembrete</a></div></div></div></section>
  <section class="band"><div class="wrap"><div class="shead"><h2>Blog Sete Lírios</h2><a href="#blog">Ver todos →</a></div><div class="posts">${POSTS.map(postCard).join('')}</div>
  <div class="nl" style="margin-top:28px"><div><h2>Receba conteúdos e novidades</h2><p style="margin-top:8px;color:#dbe9df">Dicas de saúde, lançamentos e avisos da farmácia no WhatsApp ou e-mail. Não enviamos promoção de medicamentos.</p></div><form id="nlForm" novalidate><label class="fld">Seu nome<input name="n" autocomplete="name" required></label><label class="fld">WhatsApp ou e-mail<input name="c" required></label><label class="chk"><input type="checkbox" name="ok" required>Quero receber conteúdos da Sete Lírios. Li a <a href="#privacidade">Política de privacidade</a>.</label><button class="btn lime">Quero receber</button><div id="nlMsg" role="status"></div></form></div></div></section>
  <section class="band" id="duvidas" style="padding-top:0"><div class="wrap" style="max-width:860px"><h2 style="margin-bottom:10px">Dúvidas frequentes</h2>${faqHtml()}</div></section>`;
}
function listing(o,q){
  let items=F,t='Todas as fórmulas',d='Monte sua lista e receba o orçamento pelo WhatsApp.';
  if(o){items=F.filter(f=>f[2]===o[0]);t=o[1];d=o[2]+'. Fórmulas preparadas conforme a prescrição ou a orientação do farmacêutico.'}
  if(q){const k=q.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');items=F.filter(f=>(f[1]+' '+objOf(f[2])[1]+' '+f[7]).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').includes(k));t='Busca: '+q;d=items.length+' resultado(s).'}
  return `<section class="band"><div class="wrap"><div class="crumbs"><a href="#inicio">Início</a> › ${esc(t)}</div><h1 style="font-size:clamp(28px,4vw,40px)">${esc(t)}</h1><p style="color:var(--soft);margin:8px 0 20px">${esc(d)}</p>${items.length?'<div class="grid">'+items.map(card).join('')+'</div>':'<p>Não encontrou? <a class="js-wa" data-m="Olá! Vim pelo site e procuro: '+esc(q||'')+'" href="#">Pergunte no WhatsApp</a>: manipulamos muitas outras fórmulas.</p>'}<p class="note">Imagens ilustrativas. Valor, dose e forma farmacêutica definidos no orçamento, conforme a prescrição.</p></div></section>`+(o?rxSection():'');
}
function product(f){const o=objOf(f[2]);
  return `<section class="band"><div class="wrap"><div class="crumbs"><a href="#inicio">Início</a> › <a href="#o-${o[0]}">${esc(o[1])}</a> › ${esc(f[1])}</div><div class="pd"><div class="ph">${jar(f,1)}</div><div><span class="kick">${esc(o[1])}</span><h1>${esc(f[1])}</h1><p style="color:var(--soft);font-size:17px">${esc(f[3])} · ${esc(f[4])}</p><p style="margin:16px 0;font-size:17.5px">${esc(f[7])}</p>${f[6]?'<div class="alert rx"><b>Exige receita.</b> Esta fórmula só é preparada mediante prescrição válida, conferida pelo farmacêutico.</div>':'<div class="alert">A dose e a forma de uso são definidas pelo profissional que acompanha você ou com o farmacêutico. Valor informado no orçamento.</div>'}<div class="hc-cta" style="margin-top:18px"><button class="btn" data-add="${f[0]}">Adicionar ao orçamento</button><a class="btn wa js-wa" data-m="Olá! Vim pelo site e quero orçamento de ${esc(f[1])}. Vou enviar a receita." href="#">Orçamento com receita</a></div><p class="note">As informações desta página não substituem consulta, diagnóstico ou prescrição de profissional habilitado.</p></div></div></div></section>
  <section class="band" style="padding-top:0"><div class="wrap"><h2 style="margin-bottom:16px">Mais em ${esc(o[1])}</h2>${rail(F.filter(x=>x[2]===f[2]&&x[0]!==f[0]).concat(F.filter(x=>x[2]!==f[2]).slice(0,4)))}</div></section>`;
}
function blogList(){return `<section class="band"><div class="wrap"><div class="crumbs"><a href="#inicio">Início</a> › Blog</div><h1 style="font-size:clamp(28px,4vw,40px);margin-bottom:20px">Blog Sete Lírios</h1><div class="posts">${POSTS.map(postCard).join('')}</div></div></section>`}
function post(b){return `<section class="band"><div class="wrap art"><div class="crumbs"><a href="#inicio">Início</a> › <a href="#blog">Blog</a> › ${esc(b.c)}</div><span class="kick">${esc(b.c)}</span><h1>${esc(b.t)}</h1>${b.b.map(x=>x[0]==='h'?'<h2>'+esc(x[1])+'</h2>':'<p>'+esc(x[1])+'</p>').join('')}<p style="font-size:14px;color:var(--soft)">Conteúdo revisado pela equipe farmacêutica da Sete Lírios.</p><div class="hc-cta" style="margin-top:18px"><a class="btn lime js-wa" data-m="Olá! Li o blog e tenho uma dúvida." href="#">Tirar dúvida no WhatsApp</a></div></div></section>`+rxSection()}

/* orçamento */
const PAYI={pix:['Pix','<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z"/><path d="M14 14h2v2h-2zM18 14h2M14 18h2v2M18 18h2v2h-2"/>'],credito:['Crédito','<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><rect x="6" y="13" width="4" height="3" rx=".6"/>'],debito:['Débito','<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M6 15h6"/>'],dinheiro:['Dinheiro','<rect x="2" y="7" width="20" height="11" rx="2"/><circle cx="12" cy="12.5" r="2.8"/>']};
const payTile=k=>'<span class="ptile" role="img" aria-label="'+PAYI[k][0]+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9">'+PAYI[k][1]+'</svg><small>'+PAYI[k][0]+'</small></span>';
function quote(){
  const ids=Object.keys(L).filter(k=>BY[k]&&L[k]>0);
  const list=ids.length?ids.map(k=>{const f=BY[k];return '<div class="li"><div class="ph">'+jar(f)+'</div><div><b>'+esc(f[1])+'</b><div class="meta" style="font-size:14px;color:var(--soft)">'+esc(f[3])+(f[6]?' · exige receita':'')+'</div></div><div class="qty"><button data-q="'+k+'" data-d="-1" aria-label="Diminuir">−</button><span>'+L[k]+'</span><button data-q="'+k+'" data-d="1" aria-label="Aumentar">+</button></div></div>'}).join(''):'<div class="panel"><p>Sua lista está vazia. Escolha fórmulas no site ou envie direto a foto da receita.</p><div class="hc-cta" style="margin-top:14px"><a class="btn" href="#formulas">Ver fórmulas</a><a class="btn wa js-wa" data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#">Enviar receita</a></div></div>';
  return `<section class="band"><div class="wrap"><div class="crumbs"><a href="#inicio">Início</a> › Orçamento</div><h1 style="font-size:clamp(28px,4vw,40px);margin-bottom:6px">Meu orçamento</h1><p style="color:var(--soft);margin-bottom:20px">Sem pagamento agora: você recebe valor e prazo pelo WhatsApp e só confirma se quiser.</p>
  <div class="ob"><div>${list}</div>
  <form class="sum" id="qForm" novalidate><h2 style="font-size:22px">Seus dados</h2>
   <label class="fld">Nome<input name="nome" autocomplete="name" required></label>
   <label class="fld">WhatsApp<input name="tel" inputmode="tel" autocomplete="tel" placeholder="(16) 9...." required></label>
   <div class="fld">Você tem receita?<div class="opts"><label class="opt"><input type="radio" name="rx" value="Tenho receita e vou enviar a foto" checked><span>Tenho receita<small>Envio a foto no WhatsApp</small></span></label><label class="opt"><input type="radio" name="rx" value="Não tenho receita, quero orientação farmacêutica"><span>Quero orientação<small>Para vitaminas e suplementos</small></span></label></div></div>
   <div class="fld">Como prefere receber?<div class="opts"><label class="opt"><input type="radio" name="mode" value="Retirar na loja (Av. Brasil, 815)" checked><span>Retirar na loja<small>Av. Brasil, 815</small></span></label><label class="opt"><input type="radio" name="mode" value="Entrega em Franca"><span>Entrega em Franca<small>Taxa e prazo combinados no orçamento</small></span></label></div></div>
   <label class="fld" id="bairroF" style="display:none">Bairro<input name="bairro"></label>
   <label class="fld">Observações<textarea name="obs" placeholder="Ex.: prefiro sachê, tenho alergia a lactose..."></textarea></label>
   <label class="chk"><input type="checkbox" name="lgpd" required>Li os <a href="#termos">Termos</a> e a <a href="#privacidade">Política de privacidade</a> e autorizo o uso dos meus dados só para este orçamento.</label>
   <p class="err" id="qErr" role="alert"></p>
   <button class="btn wa full" style="min-height:56px">Enviar orçamento no WhatsApp</button>
   <div class="payi" style="justify-content:center">${['pix','credito','debito','dinheiro'].map(payTile).join('')}</div>
   <p style="font-size:13px;color:var(--soft);text-align:center">O site não pede dados de cartão nem envia sua receita para terceiros.</p></form></div></div></section>`;
}
const doc=(t,body)=>'<section class="band"><div class="wrap art"><div class="crumbs"><a href="#inicio">Início</a> › '+t+'</div><h1>'+t+'</h1>'+body+'</div></section>';
function lgRows(){const v=x=>x||'a informar';return [['Nome fantasia',LEGAL.fantasia],['Razão social',v(LEGAL.razao)],['CNPJ',v(LEGAL.cnpj)],['Endereço',LEGAL.end],['Horário',LEGAL.horario],['Contato',LEGAL.tel],['E-mail',v(LEGAL.email)],['Farmacêutico responsável',LEGAL.rt?LEGAL.rt+' · CRF-SP '+v(LEGAL.crf):'a informar'],['Licença sanitária',v(LEGAL.licenca)],['AFE Anvisa',v(LEGAL.afe)],['Autorização especial (AE)',v(LEGAL.ae)]]}
const PAGES={
 'info-farmaceutica':()=>doc('Informações farmacêuticas','<div class="panel" style="display:grid;gap:8px">'+lgRows().map(r=>'<div><b>'+esc(r[0])+':</b> '+esc(r[1])+'</div>').join('')+'</div><h2>Manipulação sob prescrição</h2><p>Medicamentos manipulados são preparados a partir de prescrição de profissional habilitado ou, no caso de vitaminas e suplementos permitidos, com orientação farmacêutica. Toda fórmula é conferida pelo farmacêutico antes do preparo.</p><h2>Fórmulas que exigem receita</h2><p>Fórmulas com hormônios, medicamentos de venda sob prescrição e substâncias controladas só são preparadas mediante receita válida. Substâncias sujeitas a controle especial seguem a Portaria 344/1998 e não são dispensadas sem a receita original.</p><h2>Alertas sanitários</h2><p>Recolhimentos e alertas de produtos são publicados pela Anvisa. <a href="https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento">Consultar alertas da Anvisa</a>.</p><h2>Fale com o farmacêutico</h2><p><a class="btn wa js-wa" data-m="Olá! Quero falar com o farmacêutico." href="#">Falar com o farmacêutico</a></p>'),
 'termos':()=>doc('Termos e condições','<p>Fornecedor: '+esc(LEGAL.fantasia)+' · '+esc(LEGAL.razao||'razão social a informar')+' · CNPJ '+esc(LEGAL.cnpj||'a informar')+' · '+esc(LEGAL.end)+' · '+esc(LEGAL.tel)+'.</p><h2>Como funciona o orçamento</h2><ul><li>O site não vende nem cobra: você monta uma lista ou envia a receita, e a farmácia responde pelo WhatsApp com valor, prazo e forma de uso.</li><li>O pedido só é confirmado depois que você aprova o orçamento.</li><li>Fórmulas que exigem receita só são preparadas após a conferência da prescrição pelo farmacêutico.</li></ul><h2>Prazos e entrega</h2><p>O prazo de preparo é informado no orçamento. Retirada na loja ou entrega em Franca, com taxa e prazo combinados antes da confirmação.</p><h2>Pagamento</h2><p>Pix, cartão de crédito, cartão de débito ou dinheiro.</p><h2>Arrependimento e trocas</h2><p>Por serem preparados de forma personalizada para cada pessoa, medicamentos manipulados não voltam ao estoque. Em caso de erro no preparo, avaria ou divergência com o orçamento, fale com a farmácia pelo WhatsApp para correção ou devolução do valor.</p>'),
 'privacidade':()=>doc('Política de privacidade (LGPD)','<p>Controlador: '+esc(LEGAL.fantasia)+' · CNPJ '+esc(LEGAL.cnpj||'a informar')+'. Encarregado de dados: a informar.</p><h2>Dados que usamos</h2><ul><li>Orçamento: nome, WhatsApp, bairro (se houver entrega) e itens, para responder seu pedido.</li><li>Receita: vista apenas pela equipe farmacêutica, para o preparo. Receita é dado de saúde e não é usada para outra finalidade.</li><li>Conteúdos e lembrete de recompra: só com o seu consentimento.</li></ul><h2>O que não fazemos</h2><ul><li>Não usamos seu histórico de fórmulas para publicidade.</li><li>Não enviamos dados de saúde para redes de anúncio.</li><li>Não vendemos nem compartilhamos seus dados, exceto quando a lei exige.</li></ul><h2>Seus direitos</h2><p>Peça acesso, correção ou exclusão dos seus dados pelo WhatsApp (16) 99244-0470.</p><h2>Armazenamento no aparelho</h2><p>A lista de orçamento fica salva só no seu navegador e pode ser apagada a qualquer momento.</p>')
};

/* navegação */
function navCats(cur){document.getElementById('catnav').innerHTML='<a href="#formulas"'+(cur==='all'?' class="on"':'')+'>Todas</a>'+OBJ.map(o=>'<a href="#o-'+o[0]+'"'+(cur===o[0]?' class="on"':'')+'>'+o[1]+'</a>').join('')+'<a class="hl" href="#receita">Manipule sua receita</a><a href="#blog"'+(cur==='blog'?' class="on"':'')+'>Blog</a>'}
let S={q:''};
function anim(){V.querySelectorAll('.card,.obj,.post').forEach((c,i)=>c.style.setProperty('--i',Math.min(i,10)));V.classList.remove('vin');void V.offsetWidth;V.classList.add('vin');const rb=document.getElementById('rbar');rb.classList.remove('go');void rb.offsetWidth;rb.classList.add('go')}
function route(){
  const h=decodeURIComponent(location.hash.slice(1)||'inicio');let html,cur='',ld=null;
  if(h.startsWith('o-')&&objOf(h.slice(2))){cur=h.slice(2);html=listing(objOf(cur))}
  else if(h==='formulas'){cur='all';html=listing(null)}
  else if(h==='busca'){html=listing(null,S.q)}
  else if(h.startsWith('f-')&&BY[h.slice(2)]){const f=BY[h.slice(2)];cur=f[2];html=product(f)}
  else if(h==='blog'){cur='blog';html=blogList()}
  else if(h.startsWith('b-')&&POSTS.find(b=>b.s===h.slice(2))){cur='blog';html=post(POSTS.find(b=>b.s===h.slice(2)))}
  else if(h==='orcamento'){html=quote()}
  else if(PAGES[h]){html=PAGES[h]()}
  else{html=home();ld={'@context':'https://schema.org','@type':'FAQPage',mainEntity:FAQ.map(f=>({'@type':'Question',name:f[0],acceptedAnswer:{'@type':'Answer',text:f[1]}}))};
    if(['objetivos','receita','duvidas','homeopatia','drogaria'].includes(h)){const pre=V.dataset.pre==='inicio';if(pre)V.removeAttribute('data-pre');else V.innerHTML=html;navCats('');after();if(!pre)anim();const el=document.getElementById(h);if(el)el.scrollIntoView();return}}
  const pre=V.dataset.pre===h;if(pre){V.removeAttribute('data-pre')}else{V.innerHTML=html}
  navCats(cur);after();if(!pre){anim();window.scrollTo(0,0)}
  const old=document.getElementById('ldv');if(old)old.remove();
  if(ld){const s=document.createElement('script');s.type='application/ld+json';s.id='ldv';s.textContent=JSON.stringify(ld);document.head.appendChild(s)}
  const h1=V.querySelector('h1');document.title=(h==='inicio'||V.querySelector('.hcar')||!h1)?'Sete Lírios Manipulação | Farmácia de manipulação em Franca/SP':h1.textContent+' | Sete Lírios Manipulação';
}
function initHero(){
  const C=document.getElementById('hcar');if(!C)return;
  const T=C.querySelector('.hc-track'),Sl=[...T.children],D=[...C.querySelectorAll('.hc-dots button')];
  const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,DUR=6000;let cur=0,tm=null,paused=false;
  C.style.setProperty('--hcd',DUR+'ms');
  const set=i=>{cur=i;Sl.forEach((s,k)=>s.classList.toggle('on',k===i));D.forEach((d,k)=>{d.classList.toggle('on',k===i);d.setAttribute('aria-selected',k===i);if(k===i){d.style.animation='none';void d.offsetWidth;d.style.animation=''}})};
  const go=i=>{i=(i+Sl.length)%Sl.length;T.scrollTo({left:Sl[i].offsetLeft-T.offsetLeft,behavior:RM?'auto':'smooth'})};
  const arm=()=>{clearTimeout(tm);if(RM||paused)return;tm=setTimeout(()=>go(cur+1),DUR)};
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.6){set(Sl.indexOf(e.target));arm()}}),{root:T,threshold:[.6]});
  Sl.forEach(s=>io.observe(s));
  C.querySelector('.prev').onclick=()=>go(cur-1);C.querySelector('.next').onclick=()=>go(cur+1);D.forEach((d,i)=>d.onclick=()=>go(i));
  const pause=v=>{paused=v;C.classList.toggle('paused',v);v?clearTimeout(tm):arm()};
  C.addEventListener('mouseenter',()=>pause(true));C.addEventListener('mouseleave',()=>pause(false));C.addEventListener('focusin',()=>pause(true));C.addEventListener('focusout',()=>pause(false));
  T.addEventListener('touchstart',()=>clearTimeout(tm),{passive:true});T.addEventListener('touchend',()=>arm(),{passive:true});
  T.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
  document.addEventListener('visibilitychange',()=>document.hidden?clearTimeout(tm):arm());
  if(RM)C.classList.add('paused');arm();
}
function initRails(){V.querySelectorAll('.rail').forEach(r=>{if(r.parentElement.classList.contains('railw'))return;const w=document.createElement('div');w.className='railw';r.before(w);w.append(r);const p=document.createElement('button'),n=document.createElement('button');p.className='rnav p';n.className='rnav n';p.textContent='‹';n.textContent='›';p.setAttribute('aria-label','Anteriores');n.setAttribute('aria-label','Próximos');w.append(p,n);const st=()=>{p.disabled=r.scrollLeft<8;n.disabled=r.scrollLeft+r.clientWidth>=r.scrollWidth-8};p.onclick=()=>r.scrollBy({left:-r.clientWidth*.9});n.onclick=()=>r.scrollBy({left:r.clientWidth*.9});r.addEventListener('scroll',st,{passive:true});st()})}
function after(){
  initHero();initRails();
  document.querySelectorAll('.js-wa').forEach(a=>{a.href=wa(a.dataset.m||'Olá! Vim pelo site.');a.target='_blank';a.rel='noopener'});
  document.querySelectorAll('.js-route').forEach(a=>{a.href='https://www.google.com/maps/dir/?api=1&destination='+GEO;a.target='_blank';a.rel='noopener'});
  const nl=document.getElementById('nlForm');if(nl)nl.onsubmit=e=>{e.preventDefault();const F2=new FormData(nl);const m=document.getElementById('nlMsg');if(!F2.get('n')||!F2.get('c')||!F2.get('ok')){m.className='err';m.textContent='Preencha nome, contato e marque a autorização.';return}m.className='ok';m.textContent='Pronto! Abrimos o WhatsApp para confirmar seu cadastro.';window.open(wa('Olá! Quero receber os conteúdos da Sete Lírios. Nome: '+F2.get('n')+'. Contato: '+F2.get('c')+'. Autorizo o envio.'),'_blank','noopener');nl.reset()};
  const qf=document.getElementById('qForm');
  if(qf){qf.querySelectorAll('input[name=mode]').forEach(r=>r.onchange=()=>{document.getElementById('bairroF').style.display=qf.mode.value.startsWith('Entrega')?'grid':'none'});
    qf.onsubmit=e=>{e.preventDefault();const G=new FormData(qf),er=document.getElementById('qErr');let m='';
      if(!(G.get('nome')||'').trim())m='Informe seu nome.';else if((G.get('tel')||'').replace(/\D/g,'').length<10)m='Informe um WhatsApp com DDD.';else if(G.get('mode').startsWith('Entrega')&&!(G.get('bairro')||'').trim())m='Informe o bairro para a entrega.';else if(!G.get('lgpd'))m='Marque a autorização de uso dos dados.';
      er.textContent=m;if(m)return;
      const items=Object.keys(L).filter(k=>BY[k]&&L[k]>0).map(k=>'• '+L[k]+'× '+BY[k][1]+' ('+BY[k][3]+')').join('\n');
      const msg='Olá! Quero um orçamento na Sete Lírios.\n\n'+(items?'Itens:\n'+items+'\n\n':'')+'Receita: '+G.get('rx')+'\nReceber: '+G.get('mode')+(G.get('bairro')?' — '+G.get('bairro'):'')+'\nPagamento: a combinar (Pix, cartão ou dinheiro)'+(G.get('obs')?'\nObservações: '+G.get('obs'):'')+'\n\nNome: '+G.get('nome')+'\nWhatsApp: '+G.get('tel');
      window.open(wa(msg),'_blank','noopener');toast('Orçamento enviado para o WhatsApp');L={};saveL();setTimeout(route,300)}}
}
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-add]');if(a){const id=a.dataset.add;L[id]=(L[id]||0)+1;saveL();toast(BY[id][1]+' adicionado ao orçamento');return}
  const q=e.target.closest('[data-q]');if(q){const id=q.dataset.q;L[id]=Math.max(0,(L[id]||0)+(+q.dataset.d));if(!L[id])delete L[id];saveL();route();return}
});
document.getElementById('sForm').onsubmit=e=>{e.preventDefault();S.q=document.getElementById('sInput').value.trim();if(!S.q)return;if(location.hash==='#busca')route();else location.hash='busca'};
document.getElementById('payi').innerHTML=['pix','credito','debito','dinheiro'].map(payTile).join('');
document.getElementById('legal').innerHTML='<span>'+esc([LEGAL.fantasia,LEGAL.razao,LEGAL.cnpj&&'CNPJ '+LEGAL.cnpj,LEGAL.end,LEGAL.rt&&'Farmacêutico responsável: '+LEGAL.rt+(LEGAL.crf?' · CRF-SP '+LEGAL.crf:''),LEGAL.afe&&'AFE '+LEGAL.afe].filter(Boolean).join(' · '))+'</span><span>As informações deste site não substituem consulta, diagnóstico ou prescrição de profissional habilitado. Não se automedique. Imagens ilustrativas.</span><span><a href="#privacidade">Privacidade</a> · <a href="#termos">Termos</a> · <a href="#info-farmaceutica">Informações farmacêuticas</a></span>';
const wz=document.getElementById('waze');wz.href='https://waze.com/ul?ll='+GEO+'&navigate=yes';wz.target='_blank';wz.rel='noopener';
window.addEventListener('hashchange',route);
window.TZ={POSTS,FAQ};
paintQ();route();
}
