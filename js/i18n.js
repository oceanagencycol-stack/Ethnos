// =====================================================================
// i18n.js — Sistema de traducción ES/EN/PT para ETHNOS
// Principal: español. Opciones: inglés, portugués.
// Traduce TODOS los textos de interfaz del sitio.
// =====================================================================
const ETHNOS_I18N = {
  // ===== NAVBAR =====
  nav_articulos:   {es:'Artículos', en:'Articles', pt:'Artigos'},
  nav_noticias:    {es:'Noticias', en:'News', pt:'Notícias'},
  nav_columnistas: {es:'Columnistas', en:'Columnists', pt:'Colunistas'},
  nav_africa:      {es:'África', en:'Africa', pt:'África'},
  nav_secciones:   {es:'Secciones', en:'Sections', pt:'Seções'},
  nav_nosotros:    {es:'Nosotros', en:'About', pt:'Sobre'},
  nav_acceder:     {es:'Acceder', en:'Sign in', pt:'Acessar'},
  nav_apoyanos:    {es:'Apóyanos', en:'Support us', pt:'Apoie-nos'},

  // ===== HERO =====
  hero_eyebrow:    {es:'Revista de pensamiento afrodescendiente', en:'Afro-descendant thought magazine', pt:'Revista de pensamento afrodescendente'},
  hero_desc:       {es:'Política, territorio, historia y memoria de la diáspora africana en español, inglés y portugués. Desde las voces que la habitan.', en:'Politics, territory, history and memory of the African diaspora in Spanish, English and Portuguese. From the voices that inhabit it.', pt:'Política, território, história e memória da diáspora africana em espanhol, inglês e português. Das vozes que a habitam.'},
  hero_explorar:   {es:'Explorar la edición', en:'Explore the edition', pt:'Explorar a edição'},

  // ===== ARTÍCULOS =====
  portada_mes:     {es:'Portada del mes', en:'Cover of the month', pt:'Capa do mês'},
  la_edicion:      {es:'La edición', en:'The edition', pt:'A edição'},
  ult_publicaciones:{es:'Últimas publicaciones', en:'Latest publications', pt:'Últimas publicações'},
  edicion_desc:    {es:'Ensayos, columnas y editoriales sobre el pensamiento afrodescendiente contemporáneo.', en:'Essays, columns and editorials on contemporary Afro-descendant thought.', pt:'Ensaios, colunas e editoriais sobre o pensamento afrodescendente contemporâneo.'},

  // ===== NOTICIAS =====
  actualidad:      {es:'Actualidad', en:'Current affairs', pt:'Atualidade'},
  noticias_diaspora:{es:'Noticias de la diáspora', en:'News from the diaspora', pt:'Notícias da diáspora'},
  noticias_desc:   {es:'Lo que está pasando en el mundo afrodescendiente, actualizado por nuestro equipo y columnistas.', en:'What is happening in the Afro-descendant world, updated by our team and columnists.', pt:'O que está acontecendo no mundo afrodescendente, atualizado por nossa equipe e colunistas.'},
  noticias_nota:   {es:'Las noticias se actualizan por el equipo editorial y columnistas aprobados.', en:'News is updated by the editorial team and approved columnists.', pt:'As notícias são atualizadas pela equipe editorial e colunistas aprovados.'},
  ver_noticias:    {es:'Ver todas las noticias', en:'See all news', pt:'Ver todas as notícias'},

  // ===== COLUMNISTAS =====
  las_voces:       {es:'Las voces', en:'The voices', pt:'As vozes'},
  quienes_escriben:{es:'Quienes escriben ETHNOS', en:'Who writes ETHNOS', pt:'Quem escreve ETHNOS'},
  columnistas_desc:{es:'Pensadores, académicos y activistas de la diáspora africana en las Américas y el mundo.', en:'Thinkers, academics and activists of the African diaspora in the Americas and the world.', pt:'Pensadores, acadêmicos e ativistas da diáspora africana nas Américas e no mundo.'},
  quieres_escribir:{es:'¿Quieres escribir en ETHNOS?', en:'Do you want to write for ETHNOS?', pt:'Quer escrever na ETHNOS?'},
  postulate:       {es:'Postúlate como columnista', en:'Apply as a columnist', pt:'Candidate-se como colunista'},
  rol_directora:   {es:'Directora', en:'Director', pt:'Diretora'},
  rol_columnista:  {es:'Columnista', en:'Columnist', pt:'Colunista'},

  // ===== MAPA =====
  raices_rutas:    {es:'Raíces y rutas', en:'Roots and routes', pt:'Raízes e rotas'},
  africa_diaspora: {es:'África y su diáspora', en:'Africa and its diaspora', pt:'África e sua diáspora'},
  mapa_desc:       {es:'Explora las regiones del continente y las rutas de la diáspora africana. Toca cada región para conocer su historia.', en:"Explore the continent's regions and the routes of the African diaspora. Tap each region to learn its history.", pt:'Explore as regiões do continente e as rotas da diáspora africana. Toque em cada região para conhecer sua história.'},
  mapa_toca:       {es:'Toca una región', en:'Tap a region', pt:'Toque numa região'},
  mapa_origen:     {es:'El origen de todo', en:'The origin of everything', pt:'A origem de tudo'},
  mapa_intro:      {es:'África es la cuna de la humanidad y el origen de una de las culturas más ricas y diversas del planeta. Su historia, sus reinos y su gente se extendieron por el mundo a través de la diáspora. Toca cada región del mapa o una ruta de la diáspora para conocer su historia.', en:'Africa is the cradle of humanity and the origin of one of the richest and most diverse cultures on the planet. Its history, its kingdoms and its people spread throughout the world through the diaspora. Tap each region of the map or a diaspora route to learn its history.', pt:'A África é o berço da humanidade e a origem de uma das culturas mais ricas e diversas do planeta. Sua história, seus reinos e seu povo se espalharam pelo mundo através da diáspora. Toque em cada região do mapa ou numa rota da diáspora para conhecer sua história.'},

  // ===== SECCIONES TEMÁTICAS =====
  explora_tema:    {es:'Explora por tema', en:'Explore by topic', pt:'Explore por tema'},
  secciones:       {es:'Secciones', en:'Sections', pt:'Seções'},
  sec_politica:    {es:'Política', en:'Politics', pt:'Política'},
  sec_politica_d:  {es:'Poder, representación y derechos.', en:'Power, representation and rights.', pt:'Poder, representação e direitos.'},
  sec_territorio:  {es:'Territorio', en:'Territory', pt:'Território'},
  sec_territorio_d:{es:'Tierra, comunidad y autonomía.', en:'Land, community and autonomy.', pt:'Terra, comunidade e autonomia.'},
  sec_historia:    {es:'Historia', en:'History', pt:'História'},
  sec_historia_d:  {es:'Memoria y raíces de la diáspora.', en:'Memory and roots of the diaspora.', pt:'Memória e raízes da diáspora.'},
  sec_pensamiento: {es:'Pensamiento', en:'Thought', pt:'Pensamento'},
  sec_pensamiento_d:{es:'Teoría crítica y filosofía negra.', en:'Critical theory and Black philosophy.', pt:'Teoria crítica e filosofia negra.'},

  // ===== MANIFIESTO =====
  manifiesto:      {es:'Manifiesto', en:'Manifesto', pt:'Manifesto'},
  manifiesto_titulo:{es:'ETHNOS nace de una convicción: el pensamiento afrodescendiente no necesita intérpretes. Necesita plataformas.', en:'ETHNOS is born of a conviction: Afro-descendant thought does not need interpreters. It needs platforms.', pt:'A ETHNOS nasce de uma convicção: o pensamento afrodescendente não precisa de intérpretes. Precisa de plataformas.'},
  manifiesto_texto:{es:'Somos una revista digital dedicada al pensamiento crítico de la diáspora africana. Publicamos voces que han sido históricamente silenciadas, desde la academia, el activismo y el territorio, en español, inglés y portugués. Porque las ideas que nos nombran deben ser escritas por quienes las viven.', en:'We are a digital magazine dedicated to the critical thought of the African diaspora. We publish voices that have been historically silenced, from academia, activism and the territory, in Spanish, English and Portuguese. Because the ideas that name us must be written by those who live them.', pt:'Somos uma revista digital dedicada ao pensamento crítico da diáspora africana. Publicamos vozes historicamente silenciadas, da academia, do ativismo e do território, em espanhol, inglês e português. Porque as ideias que nos nomeiam devem ser escritas por quem as vive.'},

  // ===== APOYO / DONAR =====
  sosten_proyecto: {es:'Sostén el proyecto', en:'Support the project', pt:'Sustente o projeto'},
  apoyo_titulo:    {es:'El pensamiento libre se sostiene en comunidad', en:'Free thought is sustained by community', pt:'O pensamento livre se sustenta na comunidade'},
  apoyo_texto:     {es:'ETHNOS es independiente. Tu aporte permite que más voces de la diáspora encuentren un lugar donde ser leídas. Dona o suscríbete para apoyar el pensamiento afrodescendiente.', en:'ETHNOS is independent. Your contribution allows more voices of the diaspora to find a place to be read. Donate or subscribe to support Afro-descendant thought.', pt:'A ETHNOS é independente. Sua contribuição permite que mais vozes da diáspora encontrem um lugar para serem lidas. Doe ou inscreva-se para apoiar o pensamento afrodescendente.'},
  hacer_donacion:  {es:'Hacer una donación', en:'Make a donation', pt:'Fazer uma doação'},
  suscribirme:     {es:'Suscribirme', en:'Subscribe', pt:'Inscrever-me'},

  // ===== FOOTER =====
  footer_desc:     {es:'Revista de pensamiento crítico afrodescendiente y diáspora africana.', en:'Magazine of critical Afro-descendant thought and African diaspora.', pt:'Revista de pensamento crítico afrodescendente e diáspora africana.'},
  footer_navegar:  {es:'Navegar', en:'Navigate', pt:'Navegar'},
  footer_escribir: {es:'Escribir en ETHNOS', en:'Write for ETHNOS', pt:'Escrever na ETHNOS'},
  footer_apoyo:    {es:'Apoyo', en:'Support', pt:'Apoio'},
  footer_donar:    {es:'Donar', en:'Donate', pt:'Doar'},
  footer_suscribirse:{es:'Suscribirse', en:'Subscribe', pt:'Inscrever-se'},
  footer_sobre:    {es:'Sobre nosotros', en:'About us', pt:'Sobre nós'},
  footer_derechos: {es:'© 2026 ETHNOS. Pensamiento de la diáspora africana.', en:'© 2026 ETHNOS. Thought of the African diaspora.', pt:'© 2026 ETHNOS. Pensamento da diáspora africana.'},
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
