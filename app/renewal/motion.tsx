"use client";
import Script from "next/script";
import {useEffect,useState} from "react";
import s from "./renewal.module.css";

type SmoothScroll={raf:(time:number)=>void;destroy:()=>void};
declare global {interface Window {Lenis?:new(options:Record<string,unknown>)=>SmoothScroll}}
const clamp=(n:number)=>Math.max(0,Math.min(1,n));

export default function MotionExperience(){
 const [ready,setReady]=useState(false);
 const [paused,setPaused]=useState(false);
 const [reduced,setReduced]=useState(false);
 useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(q.matches);update();q.addEventListener('change',update);return()=>q.removeEventListener('change',update);},[]);
 useEffect(()=>{
  const root=document.getElementById('top');if(!root)return;
  if(paused||reduced){root.dataset.motion='off';const before=document.documentElement.style.scrollBehavior;document.documentElement.style.scrollBehavior='auto';return()=>{document.documentElement.style.scrollBehavior=before;};}
  root.dataset.motion='true';
  const html=document.documentElement;
  const oldScroll=html.style.scrollBehavior;html.style.scrollBehavior='auto';
  const lenis=ready&&window.Lenis?new window.Lenis({lerp:.085,smoothWheel:true,syncTouch:false,anchors:true,prevent:(node:HTMLElement)=>!!node.closest('textarea,select,[data-lenis-prevent]')}):undefined;
  const reveal=Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
  // Only conceal off-screen content; server HTML and in-view content always remain usable.
  reveal.forEach(el=>{if(el.getBoundingClientRect().top>innerHeight*.94)el.dataset.revealState='waiting';});
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){(entry.target as HTMLElement).dataset.revealState='visible';observer.unobserve(entry.target);}}),{threshold:0,rootMargin:'0px 0px -6% 0px'});
  reveal.forEach(el=>observer.observe(el));
  const hero=root.querySelector<HTMLElement>('[data-hero]');
  const images=Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'));
  const stories=Array.from(root.querySelectorAll<HTMLElement>('[data-story]'));
  const stages=Array.from(root.querySelectorAll<HTMLElement>('[data-stage]'));
  const journey=root.querySelector<HTMLElement>('[data-journey]');
  const tones=['#f0ede2','#eee5df','#e5eadf','#e3e9e9'];
  const bridge=root.querySelector<HTMLElement>('[data-bridge]');
  const circle=root.querySelector<HTMLElement>('[data-circle]');
  let frame=0;let lastY=-1;let lastHeight=0;let active=-1;let dirty=true;
  const resize=()=>{dirty=true;};
  window.addEventListener('resize',resize);
  const sizeObserver=new ResizeObserver(resize);sizeObserver.observe(root);
  const render=(time:number)=>{
   lenis?.raf(time);
   const y=window.scrollY;const vh=innerHeight;
   if(y!==lastY||lastHeight!==vh||dirty){
    lastY=y;lastHeight=vh;dirty=false;
    root.dataset.scrolled=y>100?'true':'false';
    const progress=y/Math.max(1,html.scrollHeight-vh);root.style.setProperty('--page-progress',String(progress));
    if(hero){const h=hero.offsetHeight;const p=clamp(y/h);hero.style.setProperty('--hero-y',(p*h*.22)+'px');hero.style.setProperty('--copy-y',(-p*90)+'px');hero.style.setProperty('--copy-opacity',String(1-clamp((p-.1)*1.6)));hero.style.setProperty('--hero-inset',(p*2.3)+'%');hero.style.setProperty('--hero-radius',(p*38)+'px');}
    images.forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom>0&&r.top<vh){const p=clamp((vh-r.top)/(vh+r.height));el.style.setProperty('--photo-y',((p-.5)*(innerWidth>760?64:24))+'px');}});
    if(stories.length&&journey){let index=0;stories.forEach((el,i)=>{if(el.getBoundingClientRect().top<vh*.58)index=i;});if(index!==active){active=index;stages.forEach((el,i)=>el.dataset.active=String(i===index));stories.forEach((el,i)=>el.dataset.active=String(i===index));journey.style.setProperty('--journey-tone',tones[index]);const count=journey.querySelector('[data-count]');if(count)count.textContent='0'+(index+1);}}
    if(bridge){const r=bridge.getBoundingClientRect();const p=clamp(-r.top/Math.max(1,r.height-vh));bridge.style.setProperty('--bridge-progress',String(p));bridge.dataset.second=String(p>.48);}
    if(circle){const r=circle.getBoundingClientRect();const p=clamp((vh-r.top)/(vh+r.height));circle.style.setProperty('--circle-turn',((p-.5)*35)+'deg');}
   }
   frame=requestAnimationFrame(render);
  };frame=requestAnimationFrame(render);
  return()=>{cancelAnimationFrame(frame);lenis?.destroy();observer.disconnect();sizeObserver.disconnect();window.removeEventListener('resize',resize);html.style.scrollBehavior=oldScroll;root.dataset.motion='off';reveal.forEach(el=>delete el.dataset.revealState);};
 },[ready,paused,reduced]);
 return <><link rel="stylesheet" href="/vendor/lenis/lenis.css"/><Script src="/vendor/lenis/lenis.min.js" strategy="afterInteractive" onReady={()=>setReady(true)}/><div className={s.readingProgress} aria-hidden="true"/>{!reduced&&<button type="button" className={s.motionToggle} aria-pressed={paused} onClick={()=>setPaused(v=>!v)}><span aria-hidden="true">{paused?'▶':'Ⅱ'}</span> {paused?'動きを楽しむ':'動きを控える'}</button>}</>;
}
