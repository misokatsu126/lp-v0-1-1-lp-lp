"use client";
import {useRef} from "react";
import s from "./renewal.module.css";
export default function MobileMenu(){const ref=useRef<HTMLDetailsElement>(null);return <details ref={ref} className={s.mobileMenu} onKeyDown={e=>{if(e.key==='Escape'&&ref.current){ref.current.open=false;ref.current.querySelector('summary')?.focus();}}}><summary>メニュー</summary><nav aria-label="スマートフォンナビゲーション" onClick={e=>{if((e.target as HTMLElement).closest('a')&&ref.current)ref.current.open=false;}}>{[['about','結の想い'],['elements','食・動・美・心'],['activities','できること'],['message','代表メッセージ'],['reports','活動レポート'],['contact','お問い合わせ']].map(([id,label])=><a key={id} href={'#'+id}>{label}</a>)}</nav></details>;}
