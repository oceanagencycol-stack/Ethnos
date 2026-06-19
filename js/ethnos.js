// =====================================================================
// ethnos.js — Configuración compartida de ETHNOS
// Cárgalo en todas las páginas. Requiere el SDK de Supabase antes.
// =====================================================================

// CONFIG: reemplaza con tus valores de Supabase (Project Settings → API)
const SUPABASE_URL = "https://jivgaxpejnytrkcllaal.supabase.c";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdmdheHBlam55dHJrY2xsYWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4OTMxMTUsImV4cCI6MjA5NzQ2OTExNX0.I8To37KPkojFiiXZbRok7Wqw4pe28tWo6m1lIgVpdEU";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ----- Auth -----
async function currentUser(){
  try{ const { data }=await sb.auth.getUser(); return data.user||null; }catch(e){ return null; }
}
async function currentProfile(){
  const u=await currentUser(); if(!u) return null;
  const { data }=await sb.from('profiles').select('*').eq('id',u.id).single();
  return data||null;
}
async function signOut(){ await sb.auth.signOut(); location.href='index.html'; }

// Proteger página: requiere sesión. Si rol obligatorio no coincide, redirige.
async function requireRole(roles){
  const p=await currentProfile();
  if(!p){ location.href='acceso.html'; return null; }
  if(roles && !roles.includes(p.role)){ location.href='index.html'; return null; }
  return p;
}

// ----- Helpers -----
function slugify(text){
  return (text||'').toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').replace(/-+/g,'-').slice(0,80);
}
function toast(msg, ok=true){
  let el=document.getElementById('ethToast');
  if(!el){ el=document.createElement('div'); el.id='ethToast';
    el.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;padding:12px 22px;border-radius:12px;font-weight:600;font-size:14px;font-family:Inter,sans-serif;opacity:0;transition:opacity .3s';
    document.body.appendChild(el); }
  el.style.background = ok ? '#A24B2A' : '#83391F';
  el.style.color = '#FBF8F1';
  el.textContent=msg; el.style.opacity='1';
  clearTimeout(el._t); el._t=setTimeout(()=>el.style.opacity='0',2800);
}

// Marcar artículo destacado (desmarca los demás)
async function setFeaturedArticle(id){
  await sb.from('articles').update({featured:false}).neq('id','00000000-0000-0000-0000-000000000000');
  return await sb.from('articles').update({featured:true}).eq('id',id);
}
