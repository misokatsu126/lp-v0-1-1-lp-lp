"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import s from "./atelier.module.css";

const clamp = (n:number) => Math.min(1,Math.max(0,n));
const ease = (n:number) => n*n*(3-2*n);

function Thread({className=""}:{className?:string}) {
  return <svg className={className} viewBox="0 0 800 260" fill="none" aria-hidden="true">
    {["#c2a35e","#bd8173","#83967a","#7e9daa"].map((color,i)=><path key={color} pathLength="1" stroke={color} strokeWidth="1.4" strokeLinecap="round" vectorEffect="non-scaling-stroke" d={`M -25 ${205+i*6} C 130 ${215+i*6}, 206 ${48+i*5}, 366 ${38+i*5} C 504 ${28+i*5}, 486 ${217-i*5}, 366 ${207-i*5} C 228 ${197-i*5}, 270 ${67+i*5}, 404 ${75+i*5} C 552 ${83+i*5}, 573 ${232-i*5}, 825 ${90+i*5}`}/>)}
  </svg>;
}

export default function Opening() {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const root=document.getElementById("top");
    const scene=el.querySelector<HTMLElement>("[data-cinema]");
    const bridge=el.querySelector<HTMLElement>("[data-health-bridge]");
    const philosophy=el.querySelector<HTMLElement>("#about");
    const query=matchMedia("(prefers-reduced-motion: reduce)");
    let frame=0;
    const render=()=>{
      frame=0;
      const reduced=query.matches||root?.dataset.motion==="off";
      el.dataset.still=String(reduced);
      if(reduced){const copy=scene?.querySelector<HTMLElement>("[data-intro-copy]");if(copy)copy.inert=false;}
      if(!reduced){
        const vh=innerHeight;
        if(scene){const r=scene.getBoundingClientRect();const p=clamp(-r.top/Math.max(1,r.height-vh));
          const serving=ease(clamp((p-.17)/.17));const dining=ease(clamp((p-.57)/.16));const release=ease(clamp((p-.8)/.2));
          scene.style.setProperty("--serving",String(serving));scene.style.setProperty("--dining",String(dining));scene.style.setProperty("--release",String(release));
          scene.style.setProperty("--opening-copy",String(1-ease(clamp((p-.10)/.12))));
          scene.style.setProperty("--serving-copy",String(ease(clamp((p-.34)/.07))*(1-ease(clamp((p-.53)/.07)))));
          scene.style.setProperty("--dining-copy",String(ease(clamp((p-.74)/.07))));
          scene.style.setProperty("--travel",String(p));
          const copy=scene.querySelector<HTMLElement>("[data-intro-copy]");if(copy)copy.inert=p>.23;
        }
        if(bridge){const r=bridge.getBoundingClientRect();bridge.style.setProperty("--unfold",String(ease(clamp((vh-r.top)/(vh*.85)))));}
        if(philosophy){const r=philosophy.getBoundingClientRect();philosophy.style.setProperty("--connection",String(ease(clamp((vh-r.top)/(vh*.85)))));}
      }
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(render);};
    const observer=new MutationObserver(schedule);if(root)observer.observe(root,{attributes:true,attributeFilter:["data-motion"]});
    const sizes=new ResizeObserver(schedule);sizes.observe(el);
    window.addEventListener("scroll",schedule,{passive:true});window.addEventListener("resize",schedule);query.addEventListener("change",schedule);
    el.dataset.enhanced="true";render();
    return()=>{cancelAnimationFrame(frame);observer.disconnect();sizes.disconnect();window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);query.removeEventListener("change",schedule);};
  },[]);
  return <div ref={ref} className={s.opening}>
    <section data-cinema className={s.cinema} aria-label="一粒から、つながる暮らしへ">
      <div className={s.cinemaStage}>
        <div className={s.cinemaRice}><Image src="/images/rice-hero-v2.png" fill priority sizes="100vw" alt="光を含んだ白い米粒の重なり"/></div>
        <div className={s.cinemaServing}><Image src="/images/rice-serving-ivory-v2.png" fill loading="eager" sizes="100vw" alt="朝の光の中、ごはんをよそう手元のイメージ"/></div>
        <div className={s.cinemaTable}><Image src="/images/shared-table-four-v3.png" fill loading="eager" sizes="100vw" alt="4人が食卓を囲み、会話を楽しむイメージ"/></div>
        <div data-intro-copy className={s.cinemaIntro}>
          <p className={s.eyebrow}>A LITTLE GRAIN, A GREATER BOND.</p>
          <h1 id="opening-title">暮らしを整え、<br/>人と人を結ぶ。</h1>
          <p>食・動・美・心を、暮らしの中へ。</p>
          <a className={s.roundLink} href="#about">結の想いを知る <span aria-hidden="true">↗</span></a>
        </div>
        <div className={s.cinemaServingCopy} aria-hidden="true"><span>01 / NOURISH</span><p>健やかさは、<br/>毎日の小さなことから。</p></div>
        <div className={s.cinemaTableCopy} aria-hidden="true"><span>02 / TOGETHER</span><p>ひとりでは続かないことも、<br/>誰かとなら、少しずつ。</p></div>
        <div className={s.cinemaFooter} aria-hidden="true"><span>SCROLL TO DISCOVER</span><div><i/><i/><i/></div><span>MUSUBU</span></div>
      </div>
    </section>

    <section id="about" className={s.manifesto} aria-labelledby="philosophy-title">
      <div className={s.manifestoTop}><span className={s.eyebrow}>OUR PHILOSOPHY</span><span className={s.smallIndex}>02 / 人と人のあいだに。</span></div>
      <div className={s.manifestoBody}>
        <div><h2 id="philosophy-title" data-reveal="text"><span>人とともに、</span><span>続けられる</span><span>健康づくりを。</span></h2><Thread className={s.manifestoThread}/></div>
        <div className={s.manifestoCopy}><p><span className={s.meaningLine}>食べること。身体を動かすこと。</span><span className={s.meaningLine}>自分を整えること。心を休めること。</span></p><p>結は、食・動・美・心の調和から、人とともに続けられる健康づくりを支えます。</p><p>管理栄養士の専門性を軸に、講座や相談、地域での体験を通して。一人ひとりの暮らしに合う、小さな一歩を一緒に考えます。</p><p className={s.manifestoSign}>一般社団法人 結</p></div>
      </div>
    </section>

    <section data-health-bridge className={s.healthBridge} aria-labelledby="health-bridge-title">
      <p className={s.eyebrow}>FOUR ELEMENTS, ONE EVERYDAY.</p>
      <h2 id="health-bridge-title" data-reveal="text"><span>食・動・美・心。</span><span>つながり合う、</span><span>4つの視点。</span></h2>
      <div className={s.bridgeDrawing}><Thread className={s.bridgeThread}/><div className={s.bridgeElements}>{["食","動","美","心"].map((label,i)=><span key={label} style={{"--order":i} as React.CSSProperties}>{label}</span>)}</div></div>
      <p className={s.bridgeCopy}>どれか一つを頑張るより、<br/>今の自分に必要なことから。</p>

    </section>
  </div>;
}
