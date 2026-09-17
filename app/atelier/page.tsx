import type { Metadata } from "next";
import Image from "next/image";
import RenewalContent from "../renewal/content";
import MobileMenu from "../renewal/mobile-menu";
import Opening from "./opening";
import s from "./atelier.module.css";

export const metadata: Metadata = {
  title: "MUSUBU — 一粒から、つながる暮らし。｜デザイン確認版",
  robots: { index: false, follow: false },
};

export default function AtelierPage() {
  return <RenewalContent className={s.experience} opening={<Opening/>} header={
    <header className={s.header}>
      <a href="#top" className={s.brand} aria-label="一般社団法人 結 トップへ">
        <Image src="/images/renewal-musubu-mark.png" width={68} height={38} alt=""/>
        <span>MUSUBU<small>一般社団法人 結</small></span>
      </a>
      <nav className={s.navigation} aria-label="メインナビゲーション">
        <a href="#about">結の想い</a><a href="#elements">食・動・美・心</a><a href="#activities">できること</a>
      </nav>
      <a className={s.contactLink} href="#contact">ご相談・お問い合わせ <span>↗</span></a>
      <MobileMenu/>
    </header>
  }/>;
}
