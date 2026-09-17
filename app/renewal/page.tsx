import type { Metadata } from "next";
import RenewalContent from "./content";

export const metadata: Metadata = {
  title: "一般社団法人 結 / MUSUBU — 暮らしを整え、人と人を結ぶ。",
  description: "食・動・美・心の調和から、健やかな毎日へ。一般社団法人 結は、管理栄養士の専門性を軸に、地域・企業・専門家と健康づくりの輪を育てます。",
  robots: { index: false, follow: false },
  icons: { icon: "/images/renewal-musubu-mark.png" }
};

export default function RenewalPage(){return <RenewalContent/>;}
