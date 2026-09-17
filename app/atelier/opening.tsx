"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import s from "./atelier.module.css";

const clamp = (n:number) => Math.min(1,Math.max(0,n));
const ease = (n:number) => n*n*(3-2*n);

function Thread({className=""}:{className?:string}) {
  return <svg className={className} viewBox="0 0 800 260" fill="none" aria-hidden="true">
    {["#c2a35e","#bd8173","#83967a","#7e9daa"].map((color,i)=><path key={color} pathLength="1" stroke={color} strokeWidth="1.3" d={`M -25 ${205+i*7} C 150 ${205+i*7}, 240 ${15+i*7}, 372 ${38+i*7} C 560 ${72+i*7}, 430 ${265-i*7}, 316 ${179-i*7} C 205 ${105-i*7}, 583 ${-17+i*7}, 825 ${84+i*7}`}/>)}
  </svg>;
}

export default function Opening() {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const root=document.getElementById("top");
    const scene=el.querySelector<HTMLElement>("[data-grain-scene]");
    const hero=el.querySelector<HTMLElement>("[data-opening-hero]");
    const table=el.querySelector<HTMLElement>("[data-table-scene]");
    const query=matchMedia("(prefers-reduced-motion: reduce)");
    let frame=0;
    const render=()=>{
      frame=0;
      const reduced=query.matches||root?.dataset.motion==="off";
      el.dataset.still=String(reduced);
      if(!reduced){
        const vh=innerHeight;
        if(hero){const r=hero.getBoundingClientRect();hero.style.setProperty("--drift",`${clamp(-r.top/r.height)*80}px`);hero.style.setProperty("--hero-progress",String(clamp(-r.top/r.height)));}
        if(scene){const r=scene.getBoundingClientRect();const p=clamp(-r.top/Math.max(1,r.height-vh));
          scene.style.setProperty("--open",String(ease(clamp(p/.62))));
          scene.style.setProperty("--first",String(1-ease(clamp((p-.28)/.2))));
          scene.style.setProperty("--second",String(ease(clamp((p-.49)/.2))));
          scene.style.setProperty("--thread",String(ease(clamp((p-.4)/.55))));
        }
        if(table){const r=table.getBoundingClientRect();const p=clamp((vh-r.top)/(vh+r.height));table.style.setProperty("--table-drift",`${(p-.5)*36}px`);}
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
    <section data-opening-hero className={s.hero} aria-labelledby="opening-title">
      <div className={s.heroImage}>
        <Image src="/images/rice-hero-v2.png" fill priority sizes="100vw" alt="光を含んだ白い米粒の重なり"/>
        <div className={s.imageNotation} aria-hidden="true">THE BEGINNING OF EVERYDAY WELLBEING</div>
      </div>
      <div className={s.heroText}>
        <p className={s.eyebrow}>A LITTLE GRAIN, A GREATER BOND.</p>
        <h1 id="opening-title"><span>暮らしを整え、</span><span>人と人を結ぶ。</span></h1>
        <p className={s.heroDescription}>食べる。動く。整える。休む。<br/>小さな日々から、健やかなつながりを。</p>
        <a className={s.roundLink} href="#about">結の想いを知る <span aria-hidden="true">↗</span></a>
      </div>
      <div className={s.heroSignature}><span className={s.dots} aria-hidden="true"><i/><i/><i/><i/></span><span>食・動・美・心を、暮らしの中へ。</span></div>
      <a className={s.scroll} href="#grain"><span>SCROLL TO DISCOVER</span><span className={s.scrollLine} aria-hidden="true"/></a>
      <div className={s.heroNumber} aria-hidden="true">01 — 03<br/><span>A GRAIN / A TABLE / A CONNECTION</span></div>
    </section>

    <section id="grain" data-grain-scene className={s.grainScene} aria-labelledby="grain-title">
      <div className={s.grainSticky}>
        <div className={s.chapter}><span>01 / THE EVERYDAY</span><span>一粒から、はじまる。</span></div>
        <span className={s.backWord} aria-hidden="true">Nourish.</span>
        <div className={s.servingImage}><Image src="/images/rice-serving-morning.png" fill sizes="100vw" alt="朝の光の中、器へ温かいごはんをよそう手元のイメージ"/></div>
        <div className={s.grainFirst}><span className={s.smallIndex}>A GRAIN</span><h2 id="grain-title">一粒の、その先に。</h2><p>いつものごはん。<br/>いつもの「いただきます」。</p></div>
        <div className={s.grainSecond}><p className={s.eyebrow}>SMALL MOMENTS, LASTING CONNECTIONS.</p><h2>健やかさは、<br/>何気ない日々の中に。</h2></div>
        <Thread className={s.thread}/>
        <div className={s.sceneFoot}><span>食べることは、暮らしをつくること。</span><span aria-hidden="true">MUSUBU — 01</span></div>
      </div>
    </section>

    <section id="about" className={s.manifesto} aria-labelledby="philosophy-title">
      <div className={s.manifestoTop}><span className={s.eyebrow}>OUR PHILOSOPHY</span><span className={s.smallIndex}>02 / 人と人のあいだに。</span></div>
      <div className={s.manifestoBody}>
        <div><h2 id="philosophy-title" data-reveal="text">ひとりの健やかさが、<br/>誰かの健やかさに<br/>つながっていく。</h2><Thread className={s.manifestoThread}/></div>
        <div className={s.manifestoCopy}><p>ひとりでは続かないことも、<br/>誰かとなら、少しずつ。</p><p>食べること。身体を動かすこと。<br/>自分を整えること。心を休めること。</p><p>結は、食・動・美・心の調和から、<br/>毎日の暮らしをやさしく整える<br/>健康づくりの輪を育てています。</p><p className={s.manifestoSign}>一般社団法人 結</p></div>
      </div>
    </section>

    <section data-table-scene className={s.tableScene} aria-labelledby="table-title">
      <div className={s.tableHeading}><span className={s.eyebrow}>AROUND THE TABLE</span><span className={s.smallIndex}>03 / 食卓から、つながりへ。</span></div>
      <figure className={s.tableFigure}><div className={s.tableImage}><Image src="/images/shared-dining-edited.png" fill sizes="100vw" alt="自然光が差す部屋で、3人が食卓を囲むイメージ"/></div><figcaption>食べること。話すこと。つながること。</figcaption></figure>
      <div className={s.tableCopy}><div><p className={s.tableEnglish} aria-hidden="true">Better,<br/><em>together.</em></p><h2 id="table-title">誰かと囲む食卓に、<br/>健やかな明日の種がある。</h2></div><div className={s.tableBody}><p>食べること。話すこと。<br/>一緒に、笑うこと。</p><p>何気ない時間の中にある、<br/>人と人のつながりを大切に。</p><a className={s.roundLink} href="#elements">食・動・美・心を知る <span aria-hidden="true">↗</span></a></div></div>
    </section>
    <div className={s.transition}><span>EVERYDAY WELLBEING, TOGETHER.</span><span className={s.dots} aria-hidden="true"><i/><i/><i/><i/></span><span>ここから、結の健康づくり。</span></div>
  </div>;
}
