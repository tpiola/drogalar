
{
document.documentElement.classList.add('js');
const WA='5516992440470';
const GEO='-20.5265417,-47.3840619';
/* Dados legais (RDC 44/2009, RDC 67/2007, Decreto 7.962/2013): preencher antes de vender */
const LEGAL={fantasia:'Farmácia Sete Lírios Manipulação',razao:'',cnpj:'',end:'Av. Brasil, 815, sala 2, Vila Aparecida, Franca/SP, CEP 14401-240',horario:'Seg a sáb 8h–20h · Dom 9h–12h',tel:'WhatsApp (16) 99244-0470',email:'',rt:'',crf:'',licenca:'',afe:'',ae:''};
const HOURS=[[0,9,12],[1,8,20],[2,8,20],[3,8,20],[4,8,20],[5,8,20],[6,8,20]];
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const wa=m=>'https://wa.me/'+WA+'?text='+encodeURIComponent(m);
const V=document.getElementById('view');
const LIVE=/vercel\.app$|\.com\.br$/.test(location.hostname);
/* objetivos: [id, nome, descrição, cor, cor2, ícone, palavra do pôster] */
const OBJ=[
 ['performance','Performance','Treino, força e recuperação','#2f7a35','#0d2a1b','bolt','Força'],
 ['energia','Energia e foco','Disposição para treinar e render','#3c8a2c','#123a24','spark','Foco'],
 ['imunidade','Imunidade','Defesas em dia para não parar','#1f6b4a','#123a24','shield','Defesa'],
 ['sono','Sono e recuperação','Descanso que faz o treino render','#24526a','#0d2229','moon','Sono'],
 ['articulacoes','Articulações e ossos','Movimento com conforto','#1f5f6f','#0d2229','bone','Mover'],
 ['pele','Pele','Dermocosméticos manipulados','#7a6430','#2a2410','drop','Pele'],
 ['cabelo','Cabelo e unhas','Fios e unhas fortes','#6d5523','#241c0b','leaf','Fios'],
 ['mulher','Saúde da mulher','Cuidado em cada fase','#7a3563','#2a0d22','flower','Ela']
];
const ICO={scale:'<path d="M12 3v18M5 21h14M6 7h12M6 7l-3 6a3 3 0 0 0 6 0Zm12 0-3 6a3 3 0 0 0 6 0Z"/>',cap:'<rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-35 12 12)"/><path d="m9.5 6.7 4.6 6.6"/>',tag:'<path d="M3 12V4h8l10 10-8 8Z"/><circle cx="7.5" cy="8.5" r="1.5"/>',home:'<path d="M3 11 12 4l9 7v9H3Z"/><path d="M9 20v-6h6v6"/>',run:'<circle cx="14" cy="4" r="2"/><path d="M7 21l3-6 3 2v4M6 12l3-4 4 1 3 3h3"/>',desk:'<rect x="3" y="5" width="18" height="11" rx="2"/><path d="M8 20h8M12 16v4"/>',dumb:'<path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12"/>',check:'<path d="m5 12 4 4 10-10"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>',moon:'<path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10Z"/>',drop:'<path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"/>',leaf:'<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Z"/><path d="M5 19 13 11"/>',bone:'<path d="M7 7a2.5 2.5 0 1 1 3-3l7 7a2.5 2.5 0 1 1 3 3 2.5 2.5 0 1 1-3 3l-7-7a2.5 2.5 0 1 1-3-3Z"/>',flower:'<circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 1 0 7M12 22a4 4 0 0 1 0-7M2 12a4 4 0 0 1 7 0M22 12a4 4 0 0 1-7 0"/>',rx:'<path d="M6 3h9l3 3v15H6z"/><path d="M9 10h6M9 14h6M9 18h3"/>',flask:'<path d="M10 2v6L5 18a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V2"/><path d="M8 2h8"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9Z"/>',chat:'<path d="M4 5h16v11H8l-4 4z"/>',card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',book:'<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6"/>'};
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
const TOP=['creatina','beta-alanina','magnesio-dimalato','coq10','composto-imunidade','d3-k2','magnesio-treonato','colageno','biotina','serum-antissinais'];

/* pote gerado: estética esportiva (preto + faixa lima) para treino; branco + faixa verde para o resto */
function jar(f,cls){
  const big=/\b(j1|big)\b/.test(cls||''),eager=/\bj[123]\b/.test(cls||'');
  return '<img class="pot '+(cls||'')+'" src="/img/pote/'+f[0]+'-240.webp" srcset="/img/pote/'+f[0]+'-240.webp 240w, /img/pote/'+f[0]+'.webp 480w" sizes="'+(big?'(min-width:820px) 300px, 50vw':'(min-width:820px) 180px, 40vw')+'" alt="'+esc(f[1])+', embalagem Sete Lírios (imagem ilustrativa)" width="240" height="300" '+(eager?(/\bj1\b/.test(cls)?'fetchpriority="high" ':''):'loading="lazy" ')+'decoding="async">';
}

/* lista de orçamento */
let L={};try{L=JSON.parse(localStorage.getItem('sl_list')||'{}')}catch(e){}
const saveL=()=>{try{localStorage.setItem('sl_list',JSON.stringify(L))}catch(e){};paintQ()};
const qcount=()=>Object.values(L).reduce((a,b)=>a+b,0);
function paintQ(){const n=qcount();document.getElementById('qn').textContent=n;document.getElementById('qn2').textContent=n?'('+n+')':'';paintGoal()}
function toast(t,link){const e=document.getElementById('toast');e.textContent=t;if(link){const a=document.createElement('a');a.href='#orcamento';a.textContent='Ver orçamento';a.onclick=()=>e.classList.remove('on');e.append(a)}e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2200)}

function fly(from){try{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;const tgt=[...document.querySelectorAll('#qn,.mbar .a3')].find(x=>x.offsetParent);if(!tgt)return;
  const bump=()=>{document.querySelectorAll('#qn,.mbar .a3').forEach(b=>{b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump')})};
  const src=from&&(from.closest('.card,.pd,.quiz')||from).querySelector('img.pot');if(RM||!src||!src.animate){bump();return}
  const a=src.getBoundingClientRect(),b=tgt.getBoundingClientRect();const c=src.cloneNode(true);c.classList.add('fly');c.removeAttribute('srcset');c.removeAttribute('loading');c.alt='';c.style.left=a.left+a.width/2-35+'px';c.style.top=a.top+a.height/2-44+'px';document.body.append(c);
  const dx=b.left+b.width/2-(a.left+a.width/2),dy=b.top+b.height/2-(a.top+a.height/2);
  c.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${dx*.5}px,${dy*.5-90}px) scale(.7)`,opacity:1,offset:.55},{transform:`translate(${dx}px,${dy}px) scale(.15)`,opacity:.3}],{duration:800,easing:'cubic-bezier(.5,0,.3,1)'}).onfinish=()=>{c.remove();bump()};
}catch(_){}}
function card(f){const o=objOf(f[2]);return '<article class="card"><div class="bdg"><span class="o">'+esc(o[1].split(' ')[0])+'</span>'+(f[6]?'<span class="rx">Sob receita</span>':'<span class="f">Fórmula Sete Lírios</span>')+'</div><button class="qa" data-add="'+f[0]+'" aria-label="Adicionar '+esc(f[1])+' ao orçamento">+</button><a class="ph" href="#f-'+f[0]+'" tabindex="-1" aria-hidden="true">'+jar(f)+'</a><div class="bd"><span class="meta">'+esc(f[3])+' · '+esc(f[4])+'</span><h3><a href="#f-'+f[0]+'">'+esc(f[1])+'</a></h3><div class="pr"><b>Valor sob orçamento</b>Pix, cartão ou dinheiro</div><button class="btn dark" data-add="'+f[0]+'">Orçar fórmula</button></div></article>'}
const rail=items=>'<div class="rail">'+items.map(card).join('')+'</div>';

/* horário real da loja (fuso de São Paulo) → contagem regressiva */
const nowSP=()=>{const p=new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',weekday:'short',hour:'numeric',minute:'numeric',second:'numeric',hour12:false}).formatToParts(new Date());const g=t=>p.find(x=>x.type===t).value;return{d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')),h:+g('hour')%24,m:+g('minute'),s:+g('second')}};
function shop(){const n=nowSP(),t=n.h*3600+n.m*60+n.s,td=HOURS[n.d];
  if(t>=td[1]*3600&&t<td[2]*3600)return{open:1,left:td[2]*3600-t,txt:'Aberto · fecha em',until:td[2]};
  let d=n.d,add=0;if(t>=td[2]*3600){d=(d+1)%7;add=86400-t}else{add=-t}
  const nx=HOURS[d];return{open:0,left:add+nx[1]*3600,txt:'Fechado · abre em',until:nx[1]}}
const dg=s=>{s=Math.max(0,s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60,p=v=>String(v).padStart(2,'0');return '<span class="dg" aria-hidden="true"><span>'+p(Math.min(h,99))+'</span><i>:</i><span>'+p(m)+'</span><i>:</i><span>'+p(x)+'</span></span>'};
function tick(){const st=shop();
  const c=document.getElementById('clock');if(c)c.innerHTML='<i class="dot'+(st.open?' on':'')+'"></i><b>'+st.txt+'</b>'+dg(st.left)+'<span class="pill">Enviar receita →</span>';
  document.querySelectorAll('[data-live]').forEach(e=>{e.querySelector('.dg').outerHTML=dg(st.left);const s=e.querySelector('small');if(s)s.textContent=st.open?'Fecha em':'Abre em'})}

/* conteúdo */
const POSTS=[
 {s:'como-funciona-farmacia-de-manipulacao',t:'Como funciona uma farmácia de manipulação',c:'Manipulação',e:'Da receita ao pote: entenda cada etapa e por que a fórmula é feita só para você.',i:'flask',b:[['p','Na farmácia de manipulação, o medicamento ou suplemento é preparado sob medida, a partir de uma prescrição ou da orientação do farmacêutico. Nada fica pronto na prateleira: cada fórmula é pesada, misturada e embalada para uma pessoa.'],['h','1. A receita chega'],['p','Você envia a foto da receita pelo WhatsApp. O farmacêutico confere ativos, doses, forma farmacêutica e possíveis interações antes de qualquer orçamento.'],['h','2. O orçamento'],['p','Com a fórmula conferida, você recebe valor, prazo de preparo e opções de forma: cápsula, sachê, gotas, creme ou loção.'],['h','3. O preparo'],['p','No laboratório, os ativos são pesados em balança de precisão, misturados e encapsulados ou incorporados à base, com registro de lote e rótulo com seus dados de uso.'],['h','4. A entrega'],['p','A fórmula pronta é conferida mais uma vez e entregue na loja ou em casa, com as orientações de uso e conservação.'],['p','As informações deste artigo não substituem a orientação do seu médico, nutricionista ou farmacêutico.']]},
 {s:'capsula-sache-ou-liquido',t:'Cápsula, sachê ou líquido: como é escolhida a forma farmacêutica',c:'Fórmulas',e:'A mesma fórmula pode virar cápsula, sachê ou gotas. Veja o que muda.',i:'book',b:[['p','Uma das vantagens da manipulação é escolher como você vai usar a fórmula. A decisão leva em conta a dose, a estabilidade dos ativos e a sua rotina.'],['h','Cápsulas'],['p','São práticas para doses menores e ativos sem sabor agradável. Dá para ajustar o tamanho da cápsula para facilitar a deglutição.'],['h','Sachês'],['p','Funcionam bem para doses maiores, como as usadas no esporte. O pó é dissolvido em água ou bebida.'],['h','Gotas e líquidos'],['p','Ajudam quem tem dificuldade para engolir cápsulas e permitem ajustar a dose gota a gota, quando o ativo permite.'],['h','Cremes, géis e loções'],['p','Na dermatologia, a base é escolhida conforme o tipo de pele e a região de aplicação.'],['p','A forma final é sempre combinada com o farmacêutico, respeitando o que foi prescrito.']]},
 {s:'como-guardar-manipulados',t:'Como guardar seus manipulados para manter a qualidade',c:'Cuidados',e:'Calor e umidade são os maiores inimigos das fórmulas. Veja onde guardar.',i:'shield',b:[['p','Fórmulas manipuladas têm validade menor que a de produtos industrializados, porque não levam conservantes em excesso. Guardar bem faz diferença.'],['h','Longe do banheiro e da cozinha'],['p','Vapor e calor alteram cápsulas e pós. Prefira um armário seco e arejado, longe do sol.'],['h','Tampa sempre fechada'],['p','O pote foi escolhido para proteger os ativos. Não transfira para porta-comprimidos por muito tempo.'],['h','Geladeira só quando o rótulo pedir'],['p','Algumas fórmulas, principalmente cremes e probióticos, precisam de refrigeração. Siga o que estiver no rótulo.'],['h','Respeite a validade'],['p','Use até a data indicada. Se notar mudança de cor, cheiro ou textura, fale com a farmácia antes de usar.']]}
];
const FAQ=[
 ['Fórmula manipulada é mais barata que a industrializada?','Depende do ativo e da dose. A vantagem da manipulação é juntar vários ativos em uma única cápsula, na dose da sua prescrição. Mande a receita e compare pelo orçamento.'],
 ['Posso tomar creatina e outras fórmulas junto?','Muitas combinações são comuns, mas quem define é o profissional que acompanha você. Na conferência, o farmacêutico verifica a receita e tira dúvidas pelo WhatsApp.'],
 ['Preciso de receita para manipular?','Depende do ativo. Vitaminas e suplementos podem ser preparados com orientação farmacêutica; medicamentos e fórmulas com hormônios exigem receita válida. Envie a sua pelo WhatsApp e o farmacêutico confere.'],
 ['Como peço um orçamento?','Monte sua lista no site ou envie a foto da receita pelo WhatsApp (16) 99244-0470. A equipe retorna com valor, prazo e forma de uso.'],
 ['Quanto tempo leva o preparo?','O prazo depende da fórmula e é informado no orçamento. Muitas fórmulas ficam prontas no mesmo dia.'],
 ['Vocês entregam?','Sim, em Franca. A taxa e o prazo de entrega são combinados no orçamento, conforme o bairro.'],
 ['Quais as formas de pagamento?','Pix, cartão de crédito, cartão de débito e dinheiro.'],
 ['A Sete Lírios também é drogaria e faz homeopatia?','Sim. Além da manipulação, temos homeopatia e itens de drogaria na loja da Av. Brasil, 815.']
];
const SLIDES=[
 {k:'Alta performance',t:['Sua fórmula de','<em>alta performance</em>','começa aqui.'],p:'Creatina, beta-alanina, magnésio e mais, manipulados na dose da sua prescrição no nosso laboratório em Franca.',a:['Enviar minha receita','wa'],b:['Ver desempenho físico','#o-performance'],art:['creatina','beta-alanina','magnesio-dimalato'],bg:'#0e1410'},
 {k:'Manipulação individualizada',t:['Cada cápsula','pesada para','<em>uma pessoa só.</em>'],p:'Do ativo ao rótulo, toda fórmula passa pela conferência do farmacêutico.',a:['Como funciona','#receita'],b:['Falar com farmacêutico','wa2'],img:'capsulas-real',op:'center 45%',alt:'Encapsulação de fórmula no laboratório da Sete Lírios',bg:'#0e1410'},
 {k:'Orçamento pelo WhatsApp',t:['Mande a foto','da receita.','<em>Respondemos em minutos.</em>'],p:'O farmacêutico confere a fórmula e envia valor, prazo e forma de uso. Você só confirma se quiser.',a:['Enviar receita agora','wa'],b:null,img:'potes-real',op:'center 45%',alt:'Fórmulas manipuladas da Sete Lírios no balcão',bg:'#0e1410'},
 {k:'Av. Brasil, 815 · Franca',t:['Manipulação,','homeopatia','<em>e drogaria.</em>'],p:'Retire na loja ou receba em Franca. Segunda a sábado das 8h às 20h, domingo das 9h às 12h.',a:['Como chegar','route'],b:null,img:'fachada-real',op:'center 30%',alt:'Fachada da Farmácia Sete Lírios',bg:'#0e1410'}
];
const pk=ids=>ids.map(i=>BY[i]||F[0]);
function heroArt(s){if(!s.art)return '';if(s.art==='steps')return '<div class="hc-art" aria-hidden="true"><div class="steps3">'+[['1','Foto da receita'],['2','Conferência farmacêutica'],['3','Valor e prazo no WhatsApp']].map((x,i)=>'<div style="margin-left:'+(i*22)+'px"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join('')+'</div></div>';const a=pk(s.art);return '<div class="hc-art" aria-hidden="true"><div class="stack"><span class="plinth"></span>'+jar(a[1],'j2')+jar(a[0],'j1')+jar(a[2],'j3')+'</div></div>'}
function heroCar(){
  const b=(x,cls)=>{if(!x)return '';const ar=cls?'':'<span class="ar" aria-hidden="true">→</span>';
    if(x[1]==='wa')return '<a class="btn '+cls+' js-wa" data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#">'+x[0]+ar+'</a>';
    if(x[1]==='wa2')return '<a class="btn '+cls+' js-wa" data-m="Olá! Quero falar com o farmacêutico." href="#">'+x[0]+ar+'</a>';
    if(x[1]==='route')return '<a class="btn '+cls+' js-route" href="#">'+x[0]+ar+'</a>';
    return '<a class="btn '+cls+'" href="'+x[1]+'">'+x[0]+ar+'</a>'};
  return '<section class="hcar" id="hcar" aria-roledescription="carrossel" aria-label="Destaques"><div class="hc-track" tabindex="0">'+SLIDES.map((s,i)=>{const h='h2';
    return '<article class="hc-slide'+(s.img?' ph':'')+(s.cls?' '+s.cls:'')+(i?'':' on')+'" style="--sbg:'+s.bg+'" aria-roledescription="slide" aria-label="'+(i+1)+' de '+SLIDES.length+'">'+(s.img?'<div class="photo" style="--op:'+(s.op||'center')+'"><img src="/img/'+s.img+'-480.webp" srcset="/img/'+s.img+'-480.webp 520w, /img/'+s.img+'.webp 1000w" sizes="(min-width:820px) 62vw, 100vw" alt="'+s.alt+'" width="1000" height="1000" loading="lazy" decoding="async"></div>':'')+'<div class="hc-txt"><span class="kick">'+s.k+'</span><'+h+'>'+s.t.map(x=>'<span>'+x+'</span>').join('')+'</'+h+'><p>'+s.p+'</p><div class="hc-cta">'+b(s.a,'')+b(s.b,'ghost')+'</div></div>'+heroArt(s)+'</article>'}).join('')+
  '</div><button class="hc-nav prev" aria-label="Destaque anterior">‹</button><button class="hc-nav next" aria-label="Próximo destaque">›</button><div class="hc-dots" role="tablist" aria-label="Escolher destaque">'+SLIDES.map((s,i)=>'<button role="tab" aria-label="Destaque '+(i+1)+'"'+(i?'':' class="on" aria-selected="true"')+'></button>').join('')+'</div></section>';
}
const trust=()=>'<div class="trust"><div class="in">'+[
 ['<i class="st">5,0</i>','Nota 5,0 no Google','Avaliação dos clientes'],
 ['chat','Orçamento pelo WhatsApp','Envie a receita e receba em minutos'],
 ['flask','Conferência farmacêutica','Em todas as fórmulas'],
 ['truck','Entrega em Franca','Ou retire na Av. Brasil, 815']].map(t=>'<div class="tr">'+(t[0][0]==='<'?t[0]:'<i>'+ico(t[0])+'</i>')+'<div><b>'+t[1]+'</b><span>'+t[2]+'</span></div></div>').join('')+'</div></div>';
const circs=()=>'<div class="railw"><div class="circs">'+OBJ.map(o=>'<a class="circ" href="#o-'+o[0]+'"><span class="c">'+ico(o[5])+'</span><b>'+o[1].replace(' e recuperação','').replace(' e ossos','').replace(' e unhas','')+'</b></a>').join('')+'</div></div>';
const OT=[['performance','Treino pesado','Performance','Creatina, beta-alanina, magnésio e mais.','#0a841c','#fff',['beta-alanina','creatina']],
 ['energia','Disposição','Energia e foco','Para render no treino e no dia a dia.','#dff2e0','#0d5a17',['rhodiola','coq10']],
 ['imunidade','Defesas em dia','Imunidade','Para não parar a rotina de treinos.','#f6efdc','#5e4313',['d3-k2','composto-imunidade']],
 ['sono','Descanso que rende','Sono e recuperação','A recuperação também é treino.','#e2f0f0','#14484b',['l-teanina','magnesio-treonato']]];
const otiles=()=>'<div class="otiles rv">'+OT.map(o=>'<a class="ot" href="#o-'+o[0]+'" style="--tb:'+o[4]+';--tc:'+o[5]+'"><div><small>'+o[1]+'</small><b>'+o[2]+'</b><p>'+o[3]+'</p><u>Ver fórmulas →</u></div><div class="jj" aria-hidden="true">'+pk(o[6]).map(f=>jar(f)).join('')+'</div></a>').join('')+'</div>';
const live=()=>{const st=shop();return '<a class="live js-wa rv" data-live data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#"><div class="mid">Receita na mão? <i>Manda no zap.</i></div><div class="cd"><small>'+(st.open?'Fecha em':'Abre em')+'</small>'+dg(st.left)+'</div><span class="go">Enviar receita →</span></a>'};
const postCard=b=>'<a class="post" href="'+(LIVE?'/blog/':'#b-')+b.s+'"><div class="cv">'+ico(b.i)+'</div><div class="in"><small>'+esc(b.c)+'</small><h3>'+esc(b.t)+'</h3><p>'+esc(b.e)+'</p></div></a>';
const faqHtml=()=>'<div class="faq">'+FAQ.map(q=>'<details><summary>'+esc(q[0])+'</summary><p>'+esc(q[1])+'</p></details>').join('')+'</div>';
const shead=(h,a,l,p)=>'<div class="shead">'+(p?'<span class="kick">'+p+'</span>':'')+'<h2>'+h+'</h2>'+(a?'<a href="'+a+'">'+(l||'Ver todos')+' →</a>':'')+'</div>';
const rxSection=()=>`<section class="band" id="receita"><div class="wrap"><div class="rxbox rv"><div><span class="kick">Manipule sua receita</span><h2 style="margin:10px 0 20px">Da receita ao pote em <em>3 passos</em></h2><div class="steps"><div class="step"><i>1</i><div><b>Envie a foto da receita</b><span>Pelo WhatsApp, com todas as páginas legíveis.</span></div></div><div class="step"><i>2</i><div><b>Receba o orçamento</b><span>O farmacêutico confere a fórmula e envia valor, prazo e forma de uso.</span></div></div><div class="step"><i>3</i><div><b>Retire ou receba em casa</b><span>Pague por Pix, cartão ou dinheiro.</span></div></div></div><div class="hc-cta" style="margin-top:20px"><a class="btn wa js-wa" data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#">Enviar receita no WhatsApp<span class="ar" aria-hidden="true">→</span></a></div></div><figure class="pic"><img src="/img/laboratorio-real-480.webp" srcset="/img/laboratorio-real-480.webp 520w, /img/laboratorio-real.webp 1000w" sizes="(min-width:820px) 520px, 92vw" alt="Farmacêutica preparando cápsulas no laboratório da Sete Lírios" width="1000" height="2168" loading="lazy" decoding="async" style="object-position:center 45%"><figcaption>Nosso laboratório · Franca</figcaption></figure></div></div></section>`;
const banners=()=>`<section class="band" style="padding-top:8px"><div class="wrap"><div class="bgrid rv">
 <a class="bn" href="#o-pele" style="--op:center 30%"><img src="/img/dermo-real-480.webp" srcset="/img/dermo-real-480.webp 520w, /img/dermo-real.webp 1000w" sizes="(min-width:820px) 700px, 92vw" alt="" width="1000" height="1778" loading="lazy" decoding="async"><b>Dermo <i>manipulado</i></b><span>Séruns, espumas e cremes com os ativos certos para a sua pele.</span><u>Ver cuidados com a pele →</u></a>
 <a class="bn js-route" href="#" style="--op:center 35%"><img src="/img/fachada-real-480.webp" srcset="/img/fachada-real-480.webp 520w, /img/fachada-real.webp 1000w" sizes="(min-width:820px) 700px, 92vw" alt="" width="1000" height="1421" loading="lazy" decoding="async"><b>Av. Brasil, <i>815</i></b><span>Manipulação, homeopatia e drogaria no mesmo endereço, na Vila Aparecida.</span><u>Como chegar →</u></a>
 <a class="bn tall" id="homeopatia" href="#drogaria"><img src="/img/loja-real-480.webp" srcset="/img/loja-real-480.webp 520w, /img/loja-real.webp 1000w" sizes="(min-width:820px) 560px, 92vw" alt="" width="1000" height="959" loading="lazy" decoding="async"><b>Homeopatia <i>e drogaria</i></b><span>Medicamentos homeopáticos, drogaria, higiene e bebê no mesmo endereço da manipulação.</span><u>Ver a loja →</u></a>
</div></div></section>`;

const caps=()=>'<div class="caps" aria-hidden="true">'+[[8,18,30,'#0a841c',6,14,-20],[38,8,22,'#c9a24c',8,-12,18],[60,80,28,'#0a841c',7,18,-16],[88,24,20,'#c9a24c',9,-14,-24],[72,48,18,'#5bb86a',6.5,10,20]].map(c=>'<i style="left:'+c[0]+'%;top:'+c[1]+'%;--s:'+c[2]+'px;--c1:'+c[3]+';--d:'+c[4]+'s;--x:'+c[5]+'px;--y:'+c[6]+'px;--r:'+(c[0]*3)+'deg"></i>').join('')+'</div>';
const QS=[['check','Conferência farmacêutica em toda fórmula'],['scale','Pesagem individual dos ativos'],['tag','Rótulo com lote e validade'],['flask','Laboratório próprio em Franca'],['chat','Orçamento pelo WhatsApp'],['truck','Retire na loja ou receba em casa']];
const qstrip=()=>{const one=QS.map(q=>'<span>'+ico(q[0])+q[1]+'</span>').join('');return '<div class="qstrip" aria-hidden="true"><div class="row">'+one+one+'</div></div>'};
const PROC=[['rx','Receita conferida','O farmacêutico confere ativos, doses e interações.'],['scale','Pesagem','Cada ativo é pesado para a sua fórmula, uma a uma.'],['cap','Manipulação','Encapsulação ou preparo na forma escolhida.'],['tag','Rotulagem','Rótulo com seu nome, lote, validade e modo de uso.'],['truck','Pronto para você','Retire na Av. Brasil, 815 ou receba em Franca.']];
const procSection=()=>`<section class="band" style="padding-top:6px"><div class="wrap">${shead('Como sua fórmula é <em>feita</em>','','','Do laboratório para você')}<div class="procw rv"><figure class="ph2"><img src="/img/capsulas-real-480.webp" srcset="/img/capsulas-real-480.webp 520w, /img/capsulas-real.webp 1000w" sizes="(min-width:1100px) 300px, 1px" alt="Encapsulação de fórmula no laboratório da Sete Lírios" width="1000" height="1774" loading="lazy" decoding="async"></figure><div class="proc rv">${PROC.map((s,i)=>'<div class="pstep" style="--i:'+i+'"><i>'+ico(s[0])+'</i><b>'+s[1]+'</b><span>'+s[2]+'</span></div>').join('')}</div></div></div></section>`;
/* quiz: encontra fórmulas por objetivo e rotina; o farmacêutico confirma */
const QZ={o:null,r:null,s:0};
const RT=[['dumb','Musculação ou treino de força'],['run','Corrida, bike ou endurance'],['desk','Rotina corrida, pouco treino'],['home','Quero mais qualidade de vida']];
function quizBody(){
  if(QZ.s===0)return '<div class="qs"><h3>1. Qual é o seu objetivo agora?</h3><div class="qopts">'+OBJ.map(o=>'<button class="qopt" data-qo="'+o[0]+'"><i>'+ico(o[5])+'</i>'+o[1]+'</button>').join('')+'</div></div>';
  if(QZ.s===1)return '<div class="qs"><h3>2. Como é a sua rotina?</h3><div class="qopts">'+RT.map((r,i)=>'<button class="qopt" data-qr="'+i+'"><i>'+ico(r[0])+'</i>'+r[1]+'</button>').join('')+'</div><button class="qback" data-qb>← Voltar</button></div>';
  const o=objOf(QZ.o),its=F.filter(f=>f[2]===QZ.o).slice(0,3);while(its.length<3){const x=F.find(f=>!its.includes(f)&&(f[2]==='imunidade'||f[2]==='sono'));if(!x)break;its.push(x)}
  const msg='Olá! Fiz o teste no site. Objetivo: '+o[1]+'. Rotina: '+RT[QZ.r][1]+'. Quero a orientação do farmacêutico sobre: '+its.map(f=>f[1]).join(', ')+'.';
  return '<div class="qs"><span class="kick">Seu ponto de partida</span><h3 style="margin-top:8px">'+esc(o[1])+' · '+esc(RT[QZ.r][1])+'</h3><p style="color:var(--mut);margin-bottom:12px">Fórmulas que o farmacêutico costuma avaliar para esse objetivo. A escolha final e a dose dependem de você, da sua rotina e da prescrição.</p><div class="qres">'+its.map(f=>'<a href="#f-'+f[0]+'">'+jar(f)+esc(f[1])+'</a>').join('')+'</div><div class="hc-cta"><button class="btn" data-qadd="'+its.map(f=>f[0]).join(',')+'">Adicionar ao orçamento<span class="ar" aria-hidden="true">→</span></button><a class="btn wa" href="'+wa(msg)+'" target="_blank" rel="noopener">Falar com o farmacêutico</a></div><button class="qback" data-qr0>↺ Refazer o teste</button></div>';
}
const quizSection=()=>`<section class="band" id="quiz" style="padding-top:6px"><div class="wrap"><div class="quiz rv"><div class="qa1"><svg class="lily" aria-hidden="true" viewBox="42 7 116 124"><use href="#sl-lily"/></svg><span class="kick">Teste rápido · 30 segundos</span><h2>Qual fórmula combina com a sua rotina?</h2><p>Responda duas perguntas e veja por onde começar. Depois, o farmacêutico confere tudo com você pelo WhatsApp.</p><div class="qbar" id="qbar"><i class="on"></i><i></i><i></i></div></div><div class="qb" id="qb" aria-live="polite">${quizBody()}</div></div></div></section>`;
function paintQuiz(){const b=document.getElementById('qb');if(!b)return;b.innerHTML=quizBody();document.querySelectorAll('#qbar i').forEach((x,i)=>x.classList.toggle('on',i<=QZ.s))}

const OC={performance:'#0a841c',energia:'#3f9a1f',imunidade:'#1a7a52',sono:'#245f7a',articulacoes:'#2b6c6c',pele:'#8a6a2c',cabelo:'#7a5a24',mulher:'#7c3a62'};
const objCards=()=>'<div class="railw"><div class="objs">'+OBJ.map(o=>{const its=F.filter(f=>f[2]===o[0]).slice(0,2);return '<a class="obj" href="#o-'+o[0]+'" style="--oc:'+OC[o[0]]+'"><span class="t">'+esc(o[1])+'</span><span class="pp" aria-hidden="true">'+its.map(f=>jar(f)).join('')+'</span><span class="s"><span>'+esc(o[2])+'</span><b aria-hidden="true">→</b></span></a>'}).join('')+'</div></div>';
const campBox=()=>{const st=shop();return '<a class="cbox js-wa" data-live data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#"><div><span class="lb">Atendimento hoje</span><b>Receita na mão?</b></div><div class="cd"><small>'+(st.open?'Fecha em':'Abre em')+'</small>'+dg(st.left)+'</div><span class="go">Enviar receita no WhatsApp</span></a>'};
function home(){
  return heroCar()+trust()+
  `<section class="band" id="objetivos"><div class="wrap"><div class="obw"><div><h1>Farmácia de manipulação</h1><h2>Os melhores manipulados para seus objetivos</h2><p>Fórmulas preparadas no nosso laboratório em Franca, na dose da sua prescrição.</p></div>${objCards()}</div></div></section>
  <section class="band" style="padding-top:0"><div class="wrap">${shead('Manipulados mais buscados','#formulas')}<div class="camp rv">${campBox()}${rail(pk(TOP))}</div><p class="note">Imagens ilustrativas. Ativos, doses e forma farmacêutica são definidos na prescrição ou com o farmacêutico; o valor é informado no orçamento.</p></div></section>
  <section class="band" style="padding-top:0"><div class="wrap rv">${shead('Manipulados para desempenho físico','#o-performance')}${rail(F.filter(f=>f[2]==='performance'||f[2]==='energia'))}</div></section>
  ${banners()}
  <section class="band" style="padding-top:0"><div class="wrap rv">${shead('Imunidade, sono e recuperação','#o-imunidade')}${rail(F.filter(f=>['imunidade','sono','articulacoes'].includes(f[2])))}</div></section>
  ${rxSection()}
  ${procSection()}
  <section class="band" style="padding-top:0" id="drogaria"><div class="wrap rv">${shead('Pele, cabelo e saúde da mulher','#o-pele')}${rail(F.filter(f=>['pele','cabelo','mulher'].includes(f[2])))}</div></section>
  ${quizSection()}
  <section class="band" style="padding-top:0"><div class="wrap"><div class="cons rv"><img src="/img/consultorio-real-480.webp" srcset="/img/consultorio-real-480.webp 520w, /img/consultorio-real.webp 1000w" sizes="(min-width:1100px) 560px, 92vw" alt="Consultório farmacêutico da Sete Lírios" width="1000" height="1762" loading="lazy" decoding="async" style="object-position:center 40%"><div><span class="kick">Consultório farmacêutico</span><h2 style="margin:10px 0 14px">Fale com quem prepara a sua fórmula</h2><p style="color:var(--mut)">Dúvida sobre dose, horário ou como combinar com o treino? Na loja tem consultório farmacêutico, e pelo WhatsApp você conversa com a equipe que confere cada fórmula.</p><div class="chips"><span>Orientação sobre uso</span><span>Conferência da receita</span><span>Ajuste de forma farmacêutica</span></div><div class="hc-cta" style="margin-top:20px"><a class="btn js-wa" data-m="Olá! Quero falar com o farmacêutico da Sete Lírios." href="#">Falar com o farmacêutico<span class="ar" aria-hidden="true">→</span></a></div></div></div></div></section>
  <section class="band" style="padding-top:0"><div class="wrap split rv"><div class="panel"><div style="display:flex;align-items:center;gap:16px"><span class="score">5,0</span><div><div class="stars" style="font-size:22px">★★★★★</div><b>no Google</b></div></div><h3 style="font-size:24px;margin:16px 0 4px">O que os clientes destacam</h3><div class="chips"><span>Qualidade das fórmulas</span><span>Bom preço</span><span>Ótimo atendimento</span><span>Entrega rápida</span><span>Farmacêutico atencioso</span></div><div class="hc-cta" style="margin-top:18px"><a class="btn dark" href="https://maps.google.com/?cid=5423862063795385054" target="_blank" rel="noopener">Ler as avaliações</a></div></div><div class="panel dk"><span class="kick">Constância é resultado</span><h2 style="margin:10px 0 12px">Uso contínuo? <em>A gente avisa</em> antes de acabar</h2><p>Diga quando começou o pote e quantas doses usa por dia. Você recebe um lembrete no WhatsApp para não quebrar a sequência.</p><div class="hc-cta" style="margin-top:18px"><a class="btn js-wa" data-m="Olá! Quero receber lembrete de recompra da minha fórmula. Comecei o pote em: __ / uso __ doses por dia." href="#">Quero o lembrete<span class="ar" aria-hidden="true">→</span></a></div></div></div></section>
  <section class="band" style="padding-top:0"><div class="wrap rv">${shead('Blog Sete Lírios','#blog')}<div class="posts">${POSTS.map(postCard).join('')}</div></div></section>
  <section class="band" id="duvidas" style="padding-top:0"><div class="wrap rv" style="max-width:900px">${shead('Dúvidas frequentes')}${faqHtml()}</div></section>`;
}
function listing(o,q){
  let items=F,t='Todas as fórmulas',d='Monte sua lista e receba o orçamento pelo WhatsApp.';
  if(o){items=F.filter(f=>f[2]===o[0]);t=o[1];d=o[2]+'. Fórmulas preparadas conforme a prescrição ou a orientação do farmacêutico.'}
  if(q){const k=q.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');items=F.filter(f=>(f[1]+' '+objOf(f[2])[1]+' '+f[7]).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').includes(k));t='Busca: '+q;d=items.length+' resultado(s).'}
  return `<section class="band"><div class="wrap"><div class="crumbs"><a href="#inicio">Início</a> / ${esc(t)}</div><h1 style="font-size:clamp(38px,4.6vw,58px)">${esc(t)}</h1><p style="color:var(--mut);margin:10px 0 24px">${esc(d)}</p>${items.length?'<div class="grid">'+items.map(card).join('')+'</div>':'<p>Não encontrou? <a class="js-wa" style="color:var(--g)" data-m="Olá! Vim pelo site e procuro: '+esc(q||'')+'" href="#">Pergunte no WhatsApp</a>: manipulamos muitas outras fórmulas.</p>'}<p class="note">Imagens ilustrativas. Valor, dose e forma farmacêutica definidos no orçamento, conforme a prescrição.</p></div></section>`+(o?rxSection():'');
}

function tabsFor(f){const o=objOf(f[2]);
  const T=[['Sobre',`<p>${esc(f[7])}</p><p style="margin-top:10px"><b>Objetivo:</b> ${esc(o[1])} · <b>Forma:</b> ${esc(f[3])} · <b>Apresentação:</b> ${esc(f[4])}</p>`],
   ['Como é feito','<ul><li>O farmacêutico confere a receita ou a orientação antes do preparo.</li><li>Os ativos são pesados individualmente para a sua fórmula.</li><li>Preparo na forma escolhida: '+esc(f[3].toLowerCase())+'.</li><li>Rótulo com seu nome, lote, validade e modo de uso.</li></ul>'],
   ['Cuidados','<ul><li>Use na dose e no horário indicados pelo profissional que acompanha você.</li><li>Gestantes, lactantes, pessoas com doenças crônicas ou que usam outros medicamentos devem falar com o médico antes.</li><li>Em caso de reação, suspenda o uso e procure orientação.</li><li>Este produto não substitui uma alimentação equilibrada.</li></ul>'],
   ['Conservação','<ul><li>Guarde em local seco, longe do calor e da luz, com a tampa bem fechada.</li><li>Não guarde no banheiro nem dentro do carro.</li><li>Mantenha fora do alcance de crianças.</li><li>Respeite a validade impressa no rótulo.</li></ul>']];
  return '<div class="tabs2"><div role="tablist" aria-label="Informações da fórmula">'+T.map((x,i)=>'<button role="tab" id="tb'+i+'" aria-controls="tp'+i+'" aria-selected="'+(i?'false':'true')+'" tabindex="'+(i?-1:0)+'">'+x[0]+'</button>').join('')+'</div>'+T.map((x,i)=>'<div role="tabpanel" id="tp'+i+'" aria-labelledby="tb'+i+'"'+(i?' hidden':'')+'>'+x[1]+'</div>').join('')+'</div>';
}
const guar=()=>'<div class="guar"><div><i>'+ico('check')+'</i>Conferência farmacêutica</div><div><i>'+ico('tag')+'</i>Lote e validade no rótulo</div><div><i>'+ico('chat')+'</i>Dúvidas pelo WhatsApp</div></div>';
function product(f){const o=objOf(f[2]);
  const rel=F.filter(x=>x[2]===f[2]&&x[0]!==f[0]).slice(0,2);while(rel.length<2)rel.push(F.find(x=>x[0]!==f[0]&&!rel.includes(x)));
  const trio=[f].concat(rel);
  return `<section class="band"><div class="wrap"><div class="crumbs"><a href="#inicio">Início</a> / <a href="#o-${o[0]}">${esc(o[1])}</a> / ${esc(f[1])}</div><div class="pd"><div class="gal"><small>Imagem ilustrativa · Embalagem Sete Lírios · Manipulação individualizada</small>${jar(f,'big')}<div class="stripe">Fórmula <b>Sete Lírios</b></div></div><div><span class="kick">${esc(o[1])}</span><h1>${esc(f[1])}</h1><p class="sub">${esc(f[3])} · ${esc(f[4])}</p><p style="margin:16px 0 0;font-size:18px;color:#2c4733">${esc(f[7])}</p>${f[6]?'<div class="alert rx"><b>Exige receita.</b> Esta fórmula só é preparada mediante prescrição válida, conferida pelo farmacêutico.</div>':'<div class="alert">A dose e a forma de uso são definidas pelo profissional que acompanha você ou com o farmacêutico. Valor informado no orçamento.</div>'}
  <div class="combo"><h3>Complemente o seu cuidado</h3><div class="cb">${trio.map((x,i)=>'<label><input type="checkbox" name="trio" value="'+x[0]+'" checked aria-label="Incluir '+esc(x[1])+'">'+jar(x)+'<span>'+(i?'':'<b>Este item: </b>')+esc(x[1])+'</span></label>').join('')}</div><div class="hc-cta" style="margin-top:14px;justify-content:space-between;align-items:center"><span style="color:var(--mut);font-size:15px">Valor de cada item informado no orçamento</span><button class="btn dark" data-addtrio>Adicionar ao orçamento</button></div></div>
  <div class="qsel" role="radiogroup" aria-label="Quantidade de potes"><label><input type="radio" name="qp" value="1" checked><span>1 pote<small>Para começar</small></span></label><label><input type="radio" name="qp" value="2"><span>2 potes<small>Uso contínuo</small></span></label><label><input type="radio" name="qp" value="3"><span>3 potes<small>Tratamento longo</small></span></label></div>
  <div class="hc-cta" style="margin-top:18px"><button class="btn" data-add="${f[0]}" data-qsel>Adicionar ao orçamento<span class="ar" aria-hidden="true">→</span></button><a class="btn wa js-wa" data-m="Olá! Vim pelo site e quero orçamento de: ${esc(f[1])}." href="#">Orçar no WhatsApp</a></div>${guar()}</div></div>${tabsFor(f)}</div></section>
  <div class="pbar"><button class="btn" data-add="${f[0]}" data-qsel>Adicionar ao orçamento</button><a class="btn wa js-wa" data-m="Olá! Vim pelo site e quero orçamento de: ${esc(f[1])}." href="#" aria-label="Orçar ${esc(f[1])} no WhatsApp">WhatsApp</a></div>
  <section class="band" style="padding-top:0"><div class="wrap">${shead('Mais em '+esc(o[1]))}${rail(F.filter(x=>x[2]===f[2]&&x[0]!==f[0]).concat(F.filter(x=>x[2]!==f[2]).slice(0,4)))}</div></section>`;
}
function blogList(){return `<section class="band"><div class="wrap"><div class="crumbs"><a href="#inicio">Início</a> / Blog</div><h1 style="font-size:clamp(28px,4vw,40px);margin-bottom:20px">Blog Sete Lírios</h1><div class="posts">${POSTS.map(postCard).join('')}</div></div></section>`}
function post(b){return `<section class="band"><div class="wrap art"><div class="crumbs"><a href="#inicio">Início</a> / <a href="#blog">Blog</a> / ${esc(b.c)}</div><span class="kick">${esc(b.c)}</span><h1>${esc(b.t)}</h1>${b.b.map(x=>x[0]==='h'?'<h2>'+esc(x[1])+'</h2>':'<p>'+esc(x[1])+'</p>').join('')}<p style="font-size:14px;color:var(--soft)">Conteúdo revisado pela equipe farmacêutica da Sete Lírios.</p><div class="hc-cta" style="margin-top:18px"><a class="btn lime js-wa" data-m="Olá! Li o blog e tenho uma dúvida." href="#">Tirar dúvida no WhatsApp</a></div></div></section>`+rxSection()}
const PAYI={pix:['Pix','<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z"/><path d="M14 14h2v2h-2zM18 14h2M14 18h2v2M18 18h2v2h-2"/>'],credito:['Crédito','<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><rect x="6" y="13" width="4" height="3" rx=".6"/>'],debito:['Débito','<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M6 15h6"/>'],dinheiro:['Dinheiro','<rect x="2" y="7" width="20" height="11" rx="2"/><circle cx="12" cy="12.5" r="2.8"/>']};
const payTile=k=>'<span class="ptile" role="img" aria-label="'+PAYI[k][0]+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9">'+PAYI[k][1]+'</svg><small>'+PAYI[k][0]+'</small></span>';
function quote(){
  const ids=Object.keys(L).filter(k=>BY[k]&&L[k]>0);
  const list=ids.length?ids.map(k=>{const f=BY[k];return '<div class="li"><div class="ph">'+jar(f)+'</div><div><b>'+esc(f[1])+'</b><div class="meta" style="font-size:14px;color:var(--soft)">'+esc(f[3])+(f[6]?' · exige receita':'')+'</div></div><div class="qty"><button data-q="'+k+'" data-d="-1" aria-label="Diminuir">−</button><span>'+L[k]+'</span><button data-q="'+k+'" data-d="1" aria-label="Aumentar">+</button></div></div>'}).join(''):'<div class="panel"><p>Sua lista está vazia. Escolha fórmulas no site ou envie direto a foto da receita.</p><div class="hc-cta" style="margin-top:14px"><a class="btn" href="#formulas">Ver fórmulas</a><a class="btn wa js-wa" data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#">Enviar receita</a></div></div>';
  return `<section class="band"><div class="wrap"><div class="crumbs"><a href="#inicio">Início</a> / Orçamento</div><h1 style="font-size:clamp(28px,4vw,40px);margin-bottom:6px">Meu orçamento</h1><p style="color:var(--soft);margin-bottom:20px">Sem pagamento agora: você recebe valor e prazo pelo WhatsApp e só confirma se quiser.</p>
  <div class="ob"><div>${list}</div>
  <form class="sum" id="qForm" novalidate><h2 style="font-size:22px">Seus dados</h2>
   <label class="fld">Nome<input name="nome" autocomplete="name" required></label>
   <label class="fld">WhatsApp<input name="tel" inputmode="tel" autocomplete="tel" placeholder="(16) 9...." required></label>
   <div class="fld">Você tem receita?<div class="opts"><label class="opt"><input type="radio" name="rx" value="Tenho receita e vou enviar a foto" checked><span>Tenho receita<small>Envio a foto no WhatsApp</small></span></label><label class="opt"><input type="radio" name="rx" value="Não tenho receita, quero orientação farmacêutica"><span>Quero orientação<small>Para vitaminas e suplementos</small></span></label></div></div>
   <div class="fld">Como prefere receber?<div class="opts"><label class="opt"><input type="radio" name="mode" value="Retirar na loja (Av. Brasil, 815)" checked><span>Retirar na loja<small>Av. Brasil, 815</small></span></label><label class="opt"><input type="radio" name="mode" value="Entrega em Franca"><span>Entrega em Franca<small>Taxa e prazo combinados no orçamento</small></span></label></div></div>
   <label class="fld" id="bairroF" style="display:none">Bairro<input name="bairro"></label>
   <label class="fld">Observações<textarea name="obs" placeholder="Ex.: prefiro sachê, tenho alergia a lactose..."></textarea></label>
   <label class="chk"><input type="checkbox" name="lgpd" required><span>Li os <a href="#termos">Termos</a> e a <a href="#privacidade">Política de privacidade</a> e autorizo o uso dos meus dados só para este orçamento.</span></label>
   <p class="err" id="qErr" role="alert"></p>
   <button class="btn wa full" style="min-height:56px">Enviar orçamento no WhatsApp</button>
   <div class="payi" style="justify-content:center">${['pix','credito','debito','dinheiro'].map(payTile).join('')}</div>
   <p style="font-size:13px;color:var(--soft);text-align:center">O site não pede dados de cartão nem envia sua receita para terceiros.</p></form></div></div></section>`;
}
const doc=(t,body)=>'<section class="band"><div class="wrap art"><div class="crumbs"><a href="#inicio">Início</a> / '+t+'</div><h1>'+t+'</h1>'+body+'</div></section>';
function lgRows(){const v=x=>x||'a informar';return [['Nome fantasia',LEGAL.fantasia],['Razão social',v(LEGAL.razao)],['CNPJ',v(LEGAL.cnpj)],['Endereço',LEGAL.end],['Horário',LEGAL.horario],['Contato',LEGAL.tel],['E-mail',v(LEGAL.email)],['Farmacêutico responsável',LEGAL.rt?LEGAL.rt+' · CRF-SP '+v(LEGAL.crf):'a informar'],['Licença sanitária',v(LEGAL.licenca)],['AFE Anvisa',v(LEGAL.afe)],['Autorização especial (AE)',v(LEGAL.ae)]]}
const PAGES={
 'info-farmaceutica':()=>doc('Informações farmacêuticas','<div class="panel" style="display:grid;gap:8px">'+lgRows().map(r=>'<div><b>'+esc(r[0])+':</b> '+esc(r[1])+'</div>').join('')+'</div><h2>Manipulação sob prescrição</h2><p>Medicamentos manipulados são preparados a partir de prescrição de profissional habilitado ou, no caso de vitaminas e suplementos permitidos, com orientação farmacêutica. Toda fórmula é conferida pelo farmacêutico antes do preparo.</p><h2>Fórmulas que exigem receita</h2><p>Fórmulas com hormônios, medicamentos de venda sob prescrição e substâncias controladas só são preparadas mediante receita válida. Substâncias sujeitas a controle especial seguem a Portaria 344/1998 e não são dispensadas sem a receita original.</p><h2>Alertas sanitários</h2><p>Recolhimentos e alertas de produtos são publicados pela Anvisa. <a href="https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento">Consultar alertas da Anvisa</a>.</p><h2>Fale com o farmacêutico</h2><p><a class="btn wa js-wa" data-m="Olá! Quero falar com o farmacêutico." href="#">Falar com o farmacêutico</a></p>'),
 'termos':()=>doc('Termos e condições','<p>Fornecedor: '+esc(LEGAL.fantasia)+' · '+esc(LEGAL.razao||'razão social a informar')+' · CNPJ '+esc(LEGAL.cnpj||'a informar')+' · '+esc(LEGAL.end)+' · '+esc(LEGAL.tel)+'.</p><h2>Como funciona o orçamento</h2><ul><li>O site não vende nem cobra: você monta uma lista ou envia a receita, e a farmácia responde pelo WhatsApp com valor, prazo e forma de uso.</li><li>O pedido só é confirmado depois que você aprova o orçamento.</li><li>Fórmulas que exigem receita só são preparadas após a conferência da prescrição pelo farmacêutico.</li></ul><h2>Prazos e entrega</h2><p>O prazo de preparo é informado no orçamento. Retirada na loja ou entrega em Franca, com taxa e prazo combinados antes da confirmação.</p><h2>Pagamento</h2><p>Pix, cartão de crédito, cartão de débito ou dinheiro.</p><h2>Arrependimento e trocas</h2><p>Por serem preparados de forma personalizada para cada pessoa, medicamentos manipulados não voltam ao estoque. Em caso de erro no preparo, avaria ou divergência com o orçamento, fale com a farmácia pelo WhatsApp para correção ou devolução do valor.</p>'),
 'privacidade':()=>doc('Política de privacidade (LGPD)','<p>Controlador: '+esc(LEGAL.fantasia)+' · CNPJ '+esc(LEGAL.cnpj||'a informar')+'. Encarregado de dados: a informar.</p><h2>Dados que usamos</h2><ul><li>Orçamento: nome, WhatsApp, bairro (se houver entrega) e itens, para responder seu pedido.</li><li>Receita: vista apenas pela equipe farmacêutica, para o preparo. Receita é dado de saúde e não é usada para outra finalidade.</li><li>Conteúdos e lembrete de recompra: só com o seu consentimento.</li></ul><h2>O que não fazemos</h2><ul><li>Não usamos seu histórico de fórmulas para publicidade.</li><li>Não enviamos dados de saúde para redes de anúncio.</li><li>Não vendemos nem compartilhamos seus dados, exceto quando a lei exige.</li></ul><h2>Seus direitos</h2><p>Peça acesso, correção ou exclusão dos seus dados pelo WhatsApp (16) 99244-0470.</p><h2>Armazenamento no aparelho</h2><p>A lista de orçamento fica salva só no seu navegador e pode ser apagada a qualquer momento.</p>')
};
/* navegação com mega menu */
const chev='<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="m2.5 4.5 3.5 3.5 3.5-3.5"/></svg>';
function navCats(cur){
  const mm=o=>{const its=F.filter(f=>f[2]===o[0]);return '<div class="mm"><div class="in"><div><h3>'+esc(o[1])+'</h3><ul><li><a class="all" href="#o-'+o[0]+'">Ver todos</a></li>'+its.map(f=>'<li><a href="#f-'+f[0]+'">'+esc(f[1])+'</a></li>').join('')+'</ul></div><div><h3>Mais buscados</h3><ul>'+TOP.slice(0,6).map(i=>'<li><a href="#f-'+i+'">'+esc(BY[i][1])+'</a></li>').join('')+'</ul></div><a class="promo js-wa" data-m="Olá! Vim pelo site e quero enviar minha receita para orçamento." href="#"><svg aria-hidden="true" viewBox="42 7 116 124"><use href="#sl-lily"/></svg><b>Tem receita?<br><i>Manda no zap.</i></b><span>O farmacêutico confere e responde com valor e prazo.</span></a></div></div>'};
  document.getElementById('catnav').innerHTML=OBJ.slice(0,7).map(o=>'<li><a href="#o-'+o[0]+'"'+(cur===o[0]?' class="on"':'')+'>'+o[1].replace(' e recuperação','').replace(' e ossos','')+chev+'</a>'+mm(o)+'</li>').join('')+'<li><a href="#quiz">Teste rápido</a></li><li><a href="#formulas"'+(cur==='all'?' class="on"':'')+'>Todas</a></li><li><a href="#blog"'+(cur==='blog'?' class="on"':'')+'>Blog</a></li><li><a class="hl" href="#receita">Manipule sua receita</a></li>';
}
let S={q:''};
function anim(){V.querySelectorAll('.card,.circ,.post').forEach((c,i)=>c.style.setProperty('--i',Math.min(i,10)));V.classList.remove('vin');void V.offsetWidth;V.classList.add('vin');const rb=document.getElementById('rbar');rb.classList.remove('go');void rb.offsetWidth;rb.classList.add('go')}
function route(){
  const cn=document.querySelector('.cats');if(cn&&cn.matches(':hover')){cn.classList.add('x');cn.addEventListener('mouseleave',()=>cn.classList.remove('x'),{once:true})}if(document.activeElement&&document.activeElement.closest&&document.activeElement.closest('#catnav'))document.activeElement.blur();
  const h=decodeURIComponent(location.hash.slice(1)||'inicio');let html,cur='',ld=null;
  document.querySelectorAll('.tabs a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+(['homeopatia','drogaria','blog'].includes(h)||h.startsWith('b-')?(h.startsWith('b-')?'blog':h):'inicio')));
  if(h.startsWith('o-')&&objOf(h.slice(2))){cur=h.slice(2);html=listing(objOf(cur))}
  else if(h==='formulas'){cur='all';html=listing(null)}
  else if(h==='busca'){html=listing(null,S.q)}
  else if(h.startsWith('f-')&&BY[h.slice(2)]){const f=BY[h.slice(2)];cur=f[2];html=product(f)}
  else if(h==='blog'){cur='blog';html=blogList()}
  else if(h.startsWith('b-')&&POSTS.find(b=>b.s===h.slice(2))){cur='blog';html=post(POSTS.find(b=>b.s===h.slice(2)))}
  else if(h==='orcamento'){html=quote()}
  else if(PAGES[h]){html=PAGES[h]()}
  else{html=home();ld={'@context':'https://schema.org','@type':'FAQPage',mainEntity:FAQ.map(f=>({'@type':'Question',name:f[0],acceptedAnswer:{'@type':'Answer',text:f[1]}}))};
    if(['objetivos','receita','duvidas','homeopatia','drogaria','quiz'].includes(h)){const pre=V.dataset.pre==='inicio';if(pre)V.removeAttribute('data-pre');else if(!V.querySelector('.hcar'))V.innerHTML=html;navCats('');after();if(!pre)anim();const el=document.getElementById(h);if(el)el.scrollIntoView();return}}
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
  C.classList.remove('pz');const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.6){set(Sl.indexOf(e.target));arm()}}),{root:T,threshold:[.6]});
  Sl.forEach(s=>io.observe(s));
  C.querySelector('.prev').onclick=()=>go(cur-1);C.querySelector('.next').onclick=()=>go(cur+1);D.forEach((d,i)=>d.onclick=()=>go(i));
  const pause=v=>{paused=v;C.classList.toggle('paused',v);v?clearTimeout(tm):arm()};
  C.addEventListener('mouseenter',()=>pause(true));C.addEventListener('mouseleave',()=>pause(false));C.addEventListener('focusin',()=>pause(true));C.addEventListener('focusout',()=>pause(false));
  T.addEventListener('touchstart',()=>clearTimeout(tm),{passive:true});T.addEventListener('touchend',()=>arm(),{passive:true});
  T.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
  document.addEventListener('visibilitychange',()=>document.hidden?clearTimeout(tm):arm());
  if(RM)C.classList.add('paused');arm();
}
function initRails(){V.querySelectorAll('.rail,.circs').forEach(r=>{const w=r.parentElement.classList.contains('railw')?r.parentElement:null;let box=w;if(!box){box=document.createElement('div');box.className='railw';r.before(box);box.append(r)}if(box.querySelector('.rnav'))return;const p=document.createElement('button'),n=document.createElement('button');p.className='rnav p';n.className='rnav n';p.textContent='‹';n.textContent='›';p.setAttribute('aria-label','Anteriores');n.setAttribute('aria-label','Próximos');box.append(p,n);const st=()=>{p.disabled=r.scrollLeft<8;n.disabled=r.scrollLeft+r.clientWidth>=r.scrollWidth-8};p.onclick=()=>r.scrollBy({left:-r.clientWidth*.9});n.onclick=()=>r.scrollBy({left:r.clientWidth*.9});r.addEventListener('scroll',st,{passive:true});st()})}
function initReveal(){V.querySelectorAll('.rv').forEach(r=>r.querySelectorAll('.card,.post,.ot,.step,.pstep').forEach((c,i)=>c.style.setProperty('--i',Math.min(i,7))));V.querySelectorAll('.circs .circ').forEach((c,i)=>c.style.setProperty('--i',i));const els=V.querySelectorAll('.rv:not(.in),.shead:not(.in),.circs:not(.in)');if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});els.forEach(e=>{const r=e.getBoundingClientRect();if(r.top<innerHeight)e.classList.add('in');else io.observe(e)})}
function paintGoal(){const n=qcount(),g=document.getElementById('goal');if(!g)return;g.innerHTML='<span>'+(n?'Sua lista: <b>'+n+' fórmula'+(n>1?'s':'')+'</b> · enviar orçamento':'Monte sua lista e receba o <b>orçamento no WhatsApp</b>')+'</span><span class="bars">'+[1,2,3].map(i=>'<i'+(n>=i?' class="on"':'')+'></i>').join('')+'</span>'}
function after(){
  document.body.classList.toggle('haspbar',!!V.querySelector('.pbar'));
  initHero();initRails();initReveal();tick();
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
  const qo=e.target.closest('[data-qo]');if(qo){QZ.o=qo.dataset.qo;QZ.s=1;paintQuiz();return}
  const qr=e.target.closest('[data-qr]');if(qr){QZ.r=+qr.dataset.qr;QZ.s=2;paintQuiz();return}
  if(e.target.closest('[data-qb]')){QZ.s=0;paintQuiz();return}
  if(e.target.closest('[data-qr0]')){QZ.s=0;QZ.o=QZ.r=null;paintQuiz();return}
  const qa=e.target.closest('[data-qadd]');if(qa){qa.dataset.qadd.split(',').forEach(id=>L[id]=(L[id]||0)+1);saveL();fly(qa);toast('Fórmulas do teste no orçamento',1);return}
  const tb=e.target.closest('[role=tab]');if(tb){selTab(tb);return}
  const t3=e.target.closest('[data-addtrio]');if(t3){const ch=[...V.querySelectorAll('input[name=trio]:checked')].map(x=>x.value);if(!ch.length){toast('Marque ao menos uma fórmula');return}ch.forEach(id=>L[id]=(L[id]||0)+1);saveL();fly(t3);toast(ch.length+' fórmula'+(ch.length>1?'s':'')+' no orçamento',1);return}
  const a=e.target.closest('[data-add]');if(a){const id=a.dataset.add;const qs=a.hasAttribute('data-qsel')?V.querySelector('input[name=qp]:checked'):null;const n=qs?+qs.value:1;L[id]=(L[id]||0)+n;saveL();fly(a);toast((n>1?n+'× ':'')+BY[id][1]+' no orçamento',1);return}
  const q=e.target.closest('[data-q]');if(q){const id=q.dataset.q;L[id]=Math.max(0,(L[id]||0)+(+q.dataset.d));if(!L[id])delete L[id];saveL();route();return}
});

function selTab(tb){const box=tb.closest('.tabs2');box.querySelectorAll('[role=tab]').forEach(x=>{const on=x===tb;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;box.querySelector('#'+x.getAttribute('aria-controls')).hidden=!on})}
document.addEventListener('keydown',e=>{const tb=e.target.closest&&e.target.closest('[role=tab]');if(!tb||!['ArrowRight','ArrowLeft'].includes(e.key))return;const all=[...tb.parentElement.children];const n=all[(all.indexOf(tb)+(e.key==='ArrowRight'?1:-1)+all.length)%all.length];selTab(n);n.focus();e.preventDefault()});
/* sugestões de busca */
(()=>{const inp=document.getElementById('sInput'),box=document.getElementById('sugg');let act=-1;
  const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const close=()=>{box.classList.remove('on');inp.setAttribute('aria-expanded','false');act=-1};
  const paint=()=>{const q=norm(inp.value.trim());if(q.length<2){close();return}
    const its=F.filter(f=>norm(f[1]+' '+objOf(f[2])[1]+' '+f[7]).includes(q)).slice(0,6);
    box.innerHTML=(its.length?its.map((f,i)=>'<a role="option" id="sg'+i+'" href="#f-'+f[0]+'">'+jar(f)+'<span>'+esc(f[1])+'<small>'+esc(f[3])+'</small></span><em>'+esc(objOf(f[2])[1].split(' ')[0])+'</em></a>').join('')+'<a class="all" href="#busca">Ver todos os resultados</a>':'<div class="none">Nada encontrado. <a class="js-wa" href="'+wa('Olá! Procuro: '+inp.value)+'" target="_blank" rel="noopener" style="color:var(--g2);font-weight:700">Pergunte no WhatsApp</a></div>');
    box.classList.add('on');inp.setAttribute('aria-expanded','true');act=-1};
  inp.addEventListener('input',paint);inp.addEventListener('focus',paint);
  inp.addEventListener('keydown',e=>{const it=[...box.querySelectorAll('a[role=option]')];if(e.key==='Escape'){close();return}
    if(!it.length||!['ArrowDown','ArrowUp'].includes(e.key))return;e.preventDefault();act=(act+(e.key==='ArrowDown'?1:-1)+it.length)%it.length;it.forEach((x,i)=>x.classList.toggle('act',i===act));inp.setAttribute('aria-activedescendant','sg'+act)});
  document.getElementById('sForm').addEventListener('submit',e=>{const it=box.querySelectorAll('a[role=option]');if(act>=0&&it[act]){e.stopImmediatePropagation();location.hash=it[act].getAttribute('href').slice(1)}close()},true);
  box.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;if(a.classList.contains('all')){e.preventDefault();S.q=inp.value.trim();if(location.hash==='#busca')route();else location.hash='busca'}close()});
  document.addEventListener('click',e=>{if(!e.target.closest('.search'))close()});
})();
/* cabeçalho compacto e voltar ao topo */
(()=>{const hd=document.querySelector('header'),tt=document.getElementById('totop');let tk=0;addEventListener('scroll',()=>{if(tk)return;tk=requestAnimationFrame(()=>{tk=0;const y=scrollY;hd.classList.toggle('sc',y>40);tt.classList.toggle('on',y>900)})},{passive:true});tt.onclick=()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})})();
document.getElementById('sForm').onsubmit=e=>{e.preventDefault();S.q=document.getElementById('sInput').value.trim();if(!S.q)return;if(location.hash==='#busca')route();else location.hash='busca'};
document.getElementById('payi').innerHTML=['pix','credito','debito','dinheiro'].map(payTile).join('');
document.getElementById('legal').innerHTML='<span>'+esc([LEGAL.fantasia,LEGAL.razao,LEGAL.cnpj&&'CNPJ '+LEGAL.cnpj,LEGAL.end,LEGAL.rt&&'Farmacêutico responsável: '+LEGAL.rt+(LEGAL.crf?' · CRF-SP '+LEGAL.crf:''),LEGAL.afe&&'AFE '+LEGAL.afe].filter(Boolean).join(' · '))+'</span><span>As informações deste site não substituem consulta, diagnóstico ou prescrição de profissional habilitado. Não se automedique. Imagens ilustrativas.</span><span><a href="#privacidade">Privacidade</a> · <a href="#termos">Termos</a> · <a href="#info-farmaceutica">Informações farmacêuticas</a></span>';
const wz=document.getElementById('waze');wz.href='https://waze.com/ul?ll='+GEO+'&navigate=yes';wz.target='_blank';wz.rel='noopener';
window.addEventListener('hashchange',route);
window.TZ={POSTS,FAQ};
document.getElementById('fobj').innerHTML=OBJ.map(o=>'<li><a href="#o-'+o[0]+'">'+esc(o[1])+'</a></li>').join('');
document.getElementById('ftop').innerHTML=TOP.slice(0,8).map(i=>'<li><a href="#f-'+i+'">'+esc(BY[i][1])+'</a></li>').join('');
tick();setInterval(tick,1000);
paintQ();route();
}
