// =====================================================================
// i18n.js — Sistema de traducción ES/EN/PT para ETHNOS
// Principal: español. Opciones: inglés, portugués.
// =====================================================================
const ETHNOS_I18N = {
  // Navbar
  nav_articulos:   {es:'Artículos', en:'Articles', pt:'Artigos'},
  nav_noticias:    {es:'Noticias', en:'News', pt:'Notícias'},
  nav_columnistas: {es:'Columnistas', en:'Columnists', pt:'Colunistas'},
  nav_africa:      {es:'África', en:'Africa', pt:'África'},
  nav_secciones:   {es:'Secciones', en:'Sections', pt:'Seções'},
  nav_nosotros:    {es:'Nosotros', en:'About', pt:'Sobre'},
  nav_acceder:     {es:'Acceder', en:'Sign in', pt:'Acessar'},
  nav_apoyanos:    {es:'Apóyanos', en:'Support us', pt:'Apoie-nos'},
  // Hero
  hero_eyebrow:    {es:'Revista de pensamiento afrodescendiente', en:'Afro-descendant thought magazine', pt:'Revista de pensamento afrodescendente'},
  hero_explorar:   {es:'Explorar la edición', en:'Explore the edition', pt:'Explorar a edição'},
  // Secciones
  portada_mes:     {es:'Portada del mes', en:'Cover of the month', pt:'Capa do mês'},
  la_edicion:      {es:'La edición', en:'The edition', pt:'A edição'},
  ult_publicaciones:{es:'Últimas publicaciones', en:'Latest publications', pt:'Últimas publicações'},
  actualidad:      {es:'Actualidad', en:'Current affairs', pt:'Atualidade'},
  noticias_diaspora:{es:'Noticias de la diáspora', en:'News from the diaspora', pt:'Notícias da diáspora'},
  las_voces:       {es:'Las voces', en:'The voices', pt:'As vozes'},
  quienes_escriben:{es:'Quienes escriben ETHNOS', en:'Who writes ETHNOS', pt:'Quem escreve ETHNOS'},
  raices_rutas:    {es:'Raíces y rutas', en:'Roots and routes', pt:'Raízes e rotas'},
  africa_diaspora: {es:'África y su diáspora', en:'Africa and its diaspora', pt:'África e sua diáspora'},
  postulate:       {es:'Postúlate como columnista', en:'Apply as a columnist', pt:'Candidate-se como colunista'},
  // Apoyo
  sosten_proyecto: {es:'Sostén el proyecto', en:'Support the project', pt:'Sustente o projeto'},
  hacer_donacion:  {es:'Hacer una donación', en:'Make a donation', pt:'Fazer uma doação'},
  suscribirme:     {es:'Suscribirme', en:'Subscribe', pt:'Inscrever-me'},
};

function ethGetLang(){ return localStorage.getItem('ethnos_lang') || 'es'; }
function ethSetLang(lang){
  localStorage.setItem('ethnos_lang', lang);
  ethApplyLang();
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
}
function ethT(key){
  const lang=ethGetLang();
  return (ETHNOS_I18N[key] && ETHNOS_I18N[key][lang]) || (ETHNOS_I18N[key] && ETHNOS_I18N[key].es) || key;
}
function ethApplyLang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(ETHNOS_I18N[k]) el.textContent=ethT(k);
  });
  document.documentElement.lang=ethGetLang();
}
