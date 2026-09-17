import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./contact-form";
import MobileMenu from "./mobile-menu";
import MotionExperience from "./motion";
import s from "./renewal.module.css";

export const metadata: Metadata = {
  title: "一般社団法人 結 / MUSUBU — 暮らしを整え、人と人を結ぶ。",
  description: "食・動・美・心の調和から、健やかな毎日へ。一般社団法人 結は、管理栄養士の専門性を軸に、地域・企業・専門家と健康づくりの輪を育てます。",
  robots: { index: false, follow: false },
  icons: { icon: "/images/renewal-musubu-mark.png" }
};

const nav = [["about", "結の想い"], ["elements", "食・動・美・心"], ["activities", "できること"], ["message", "代表メッセージ"]];
const elements = [
  {name:"食", en:"FOOD", color:"#E8C766", image:"element-food.jpg", alt:"ごはんと野菜のある食卓のイメージ", title:"食から、暮らしへ。", body:"食べることは、身体をつくるだけではありません。気持ちを整え、生活のリズムをつくり、人と人がつながるきっかけにもなります。", tags:"栄養講座 / 食生活相談 / 健康レシピ / 食育"},
  {name:"動", en:"MOVEMENT", color:"#D9877B", image:"element-move.jpg", alt:"自然光の中で身体を動かすイメージ", title:"動きから、めぐりへ。", body:"身体を動かすことは、心と身体のめぐりを整える入口です。無理な運動ではなく、その人の生活に合った小さな習慣から。", tags:"運動習慣 / 健康イベント / 姿勢 / 体験型プログラム"},
  {name:"美", en:"BEAUTY", color:"#9DBE9A", image:"element-beauty.jpg", alt:"自然光の中で自分をいたわるイメージ", title:"美しさから、自信へ。", body:"自分を整える時間は、心の健やかさにもつながります。食、睡眠、姿勢、肌、表情、気持ち。そのすべてが、その人らしい美しさをつくります。", tags:"美容と健康 / セルフケア / 休養 / 自分らしさ"},
  {name:"心", en:"MIND", color:"#8FAFC7", image:"element-heart.jpg", alt:"お茶とともに心を休めるイメージ", title:"休むことから、明日へ。", body:"心をゆるめる時間。安心して話せる場。誰かとつながることで、少し軽くなる気持ち。頑張り続ける毎日に、休む時間を。", tags:"休養 / 睡眠 / 対話の場 / コミュニティ"}
];
const services = [
  ["健康講座", "管理栄養士の視点から、食事、栄養、予防、生活習慣をわかりやすく。企業研修、地域講座、学校・施設など、目的に合わせた学びを企画します。"],
  ["食生活相談・予防支援", "毎日の食事や生活習慣を見直し、その人の暮らしに合った、無理なく続けられる形を一緒に考えます。"],
  ["地域イベント", "マルシェ、交流会、体験会。食べる、話す、体験する場に、自然に健康を意識できるきっかけをつくります。"],
  ["美容・休養プログラム", "美容、セルフケア、睡眠、休養。自分らしく前向きに過ごすための整え方を、幅広い視点から届けます。"],
  ["企業・店舗とのコラボ企画", "健康メニュー、商品監修、セミナー、情報発信。企業や店舗、専門家とともに、想いが一度きりで終わらない形を考えます。"],
  ["コミュニティづくり", "人と人がつながり、学び合い、支え合える場を。暮らしの中に、健やかさを続けるための小さな輪を広げます。"]
];
function Label({children}:{children:React.ReactNode}) {return <p className={s.label}>{children}</p>;}
function Photo({src,alt,className="",priority=false}:{src:string;alt:string;className?:string;priority?:boolean}) {return <div data-parallax={!priority ? "true" : undefined} data-reveal={!priority ? "photo" : undefined} className={`${s.photo} ${className}`}><Image src={`/images/${src}`} alt={alt} fill sizes={priority ? "100vw" : "(max-width: 700px) 100vw, 55vw"} priority={priority}/></div>;}
function Mark({className=""}:{className?:string}) {return <Image className={className} src="/images/renewal-musubu-mark.png" width={190} height={105} alt=""/>;}

export default function RenewalPage(){return <div className={s.page} id="top"><MotionExperience/>
  <a className={s.skip} href="#main">本文へ移動</a>
  <header className={s.header}>
    <a href="#top" aria-label="一般社団法人 結 トップへ" className={s.logo}><Mark/></a>
    <nav className={s.nav} aria-label="メインナビゲーション">{nav.map(([id,label])=><a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <a className={s.headerContact} href="#contact">ご相談・お問い合わせ <span aria-hidden="true">↗</span></a>
    <MobileMenu/>
  </header>
  <main id="main">
    <section data-hero className={s.hero} aria-labelledby="hero-title">
      <div className={s.heroVisual}><Photo src="rice-hero-v2.png" alt="白米の一粒一粒にやわらかな光が透ける" priority/></div>
      <div className={s.heroCopy}><Label>MUSUBU / WELLBEING IN EVERYDAY LIFE</Label><h1 id="hero-title">暮らしを整え、<br/>人と人を結ぶ。</h1><p className={s.heroLead}>食・動・美・心。<br/>健やかさは、日々のつながりから。</p></div>
      <div className={s.heroAside}><p>ひとりでは続かないことも、<br/>誰かとなら、少しずつ。</p><a className={s.button} href="#about">結について知る <span aria-hidden="true">↗</span></a></div>
      <a className={s.heroScroll} href="#about">SCROLL <span aria-hidden="true">↓</span></a>
    </section>
    <div className={s.heroFoot}><span>一般社団法人 結</span><span>食べる。動く。整える。休む。</span><a href="#contact">活動について相談する ↗</a></div>
    <section data-bridge className={s.bridge} aria-label="一粒から、暮らしへ"><div className={s.bridgeSticky}><div className={s.bridgePhoto}><Image src="/images/rice-serving-morning.png" loading="eager" alt="湯気の立つごはんをよそう手元のイメージ" fill sizes="100vw"/></div><div className={s.bridgeWords}><p>FROM A GRAIN TO A CONNECTION</p><h2><span>一粒から、暮らしへ。</span><span>その食卓から、つながりへ。</span></h2></div><svg className={s.connectingLines} viewBox="0 0 1000 180" fill="none" aria-hidden="true">{['#c9b66a','#c79286','#95ac91','#8aa5b4'].map((color,i)=><path key={color} pathLength="1" stroke={color} strokeWidth="1.5" d={`M -30 ${30+i*9} C 250 ${30+i*9}, 260 ${150-i*9}, 510 ${150-i*9} S 800 ${25+i*8}, 1030 ${75+i*10}`}/>)}</svg></div></section>
    <section id="about" className={s.intro}>
      <Label>Our thoughts</Label><h2 data-reveal="text">健やかさを、<br/>いつもの暮らしの中に。</h2><p>食べること。動くこと。<br/>自分を整えること。心を休めること。</p><p>そして、誰かと話し、学び、つながること。<br/>その小さな積み重ねが、<br/>自分らしく生きる力になっていく。</p><p>一般社団法人 結は、食・動・美・心を結び、<br/>人とのつながりの中で、健やかな毎日を育てます。</p>
    </section>
    <section className={s.about} aria-labelledby="thought-title"><Photo src="hero-table.png" alt="自然光に包まれた日々の食卓のイメージ" className={s.aboutRice}/><div className={s.aboutBody}><Label>Small things, every day</Label><h2 data-reveal="text" id="thought-title">健康は、食事だけで<br/>できているわけではありません。</h2><div className={s.offsetCopy} data-reveal="text"><p>栄養のある食事をとること。<br/>無理なく身体を動かすこと。<br/>自分をいたわり、休む時間を持つこと。</p><p>正しいことを知っていても、<br/>続けるのが難しい日もあります。</p><p>だから、一人で抱え込まなくていい。<br/>誰かとつながりながら、<br/>自分のペースで整えていく。</p><p>結は、その人らしい健やかさを<br/>支える場をつくります。</p></div></div></section>
    <section className={s.circleSection} aria-labelledby="circle-title"><div className={s.circleText}><Label>MUSUBU WELLNESS CIRCLE</Label><h2 data-reveal="text" id="circle-title">人と人を結ぶ、<br/>健康づくりの輪。</h2><p>学ぶ。体験する。話す。気づく。<br/>そして、また続けてみる。</p><p>目指すのは、暮らしに小さな変化が残る健康づくり。<br/>管理栄養士の専門性を軸に、地域、企業、店舗、<br className={s.desktopBreak}/>専門家、参加する人たちを結びます。</p><p>自分の健やかさが、家族へ、地域へ。<br/>その輪を、一緒に育てていきます。</p></div><div data-circle className={s.circle} aria-label="食・動・美・心を中心に、人、地域、企業、専門家がつながる輪"><Mark/>{["食","地域","動","企業","美","専門家","心","人"].map((label,i)=><span key={label} className={s[`orbit${i}`]}>{label}</span>)}</div></section>
    <section id="elements" className={s.section}><div className={s.sectionHeading}><div><Label>FOUR ELEMENTS</Label><h2 data-reveal="text">食べる。動く。<br/>整える。休む。</h2></div><p>「あわじ結び」に込めた、人と人のつながり。<br/>どれか一つだけを頑張るのではなく、<br/>その人の暮らしに合わせて、やさしく整えていく。</p></div><div data-journey className={s.journey}><div className={s.journeyStage} aria-hidden="true">{elements.map((e,i)=><div key={e.name} data-stage data-active={i===0 ? "true" : "false"} className={s.stageImage}><Image src={`/images/${e.image}`} alt="" fill sizes="55vw"/></div>)}<div className={s.journeyCaption}><span>FOUR ELEMENTS</span><span><b data-count>01</b> / 04</span></div></div><div className={s.elements}>{elements.map(e=><article data-story key={e.name} className={s.element} style={{"--element-color":e.color} as React.CSSProperties}><Photo src={e.image} alt={e.alt}/><div className={s.elementName}><span>{e.name}</span><small>{e.en}</small></div><h3>{e.title}</h3><p>{e.body}</p><p className={s.tags}>{e.tags}</p></article>)}</div></div></section>
    <section id="activities" className={`${s.section} ${s.activities}`}><div className={s.sectionHeading}><div><Label>WHAT WE DO</Label><h2 data-reveal="text">学び、体験し、<br/>人がつながる。</h2></div><p>「少しやってみよう」「誰かに話してみよう」<br/>「また来てみたい」。<br/>そんな気持ちが生まれる、暮らしに近い場を。</p></div><div className={s.services}>{services.map(([title,body],i)=><article data-reveal="text" key={title}><span className={s.number}>0{i+1}</span><h3>{title}</h3><p>{body}</p><a href={`#contact`} className={s.serviceLink} aria-label={`${title}について相談する`}>この活動について相談する <span aria-hidden="true">↗</span></a></article>)}</div></section>
    <section id="message" className={`${s.section} ${s.director}`}><div><Photo src="director-watanabe.jpg" alt="一般社団法人 結 理事長 渡邉裕子" className={s.directorPhoto}/><p className={s.directorCaption}>一般社団法人 結 理事長 / 管理栄養士<strong>渡邉 裕子</strong></p></div><div><Label>MESSAGE</Label><h2 data-reveal="text">暮らしに寄り添い、<br/>健康づくりの輪を結ぶ。</h2><p>管理栄養士として、病院での給食管理・衛生管理・臨床栄養業務・栄養指導に携わり、その後、調剤薬局での健康相談や健康セミナーを経験してきました。</p><p>現場で多くの方と関わる中で感じたのは、健康は知識だけでは続かないということです。</p><p>忙しさや不安、生活環境、人との関係の中で、続けることが難しくなる時があります。だからこそ、その人の暮らしに寄り添い、無理なく続けられる形にすること。そして、ひとりで抱え込まない場をつくることを大切にしています。</p><p>食べること、動くこと、自分を整えること、心を休めること。その一つひとつがつながり、その人らしい健やかさは育っていきます。</p><details className={s.biography}><summary>これまでの歩み</summary><dl><dt>2015</dt><dd>仙台白百合女子大学 人間学部 健康栄養学科卒業。病院・調剤薬局で栄養指導、健康相談、健康セミナーに従事。</dd><dt>2020</dt><dd>名古屋へ移住。フリーランス管理栄養士として特定保健指導に携わり、健康分野の情報発信・ブランディング支援にも取り組む。</dd><dt>2024</dt><dd>7月、一般社団法人 結を設立。食・動・美・心をテーマに、地域の健康づくりと人がつながる場づくりに取り組む。</dd></dl></details></div></section>
    <section id="partnership" className={s.partnership}><div className={s.sectionHeading}><div><Label>CREATE TOGETHER</Label><h2 data-reveal="text">食・動・美・心 × 地域で、<br/>新しい健康づくりを。</h2></div><p>地域イベントに健康企画を取り入れたい。<br/>企業で食や生活習慣のセミナーを行いたい。<br/>店舗や商品に、健康の視点を加えたい。<br/>そんな小さな相談から、一緒に形にしていきます。</p></div><div className={s.partners}>{["地域イベント","企業研修","美容サロン","飲食店","医療・福祉","学校","マルシェ","商品監修","情報発信","コミュニティづくり"].map(t=><a key={t} href="#contact"><span>結 ×</span> {t}</a>)}</div><div className={s.steps}>{[["相談する","想いや課題を伺う"],["一緒に考える","目的・対象・実現方法を整理する"],["人を結ぶ","地域や専門家と企画をつくる"],["次につなぐ","実施と発信、その先へ"]].map(([t,b],i)=><div key={t}><small>0{i+1}</small><h3>{t}</h3><p>{b}</p></div>)}</div></section>
    <section id="reports" className={`${s.section} ${s.reports}`}><div><Label>JOURNAL</Label><h2 data-reveal="text">小さな活動を、<br/>未来につながる記録へ。</h2><p>講座、イベント、相談、コラボレーション。<br/>一つひとつの活動を記録し、<br/>次の学びやつながりへ育てていきます。</p></div><div className={s.reportEmpty}><span>活動レポート・お知らせ</span><h3>日々の結びを、もっと身近に。</h3><p>活動の様子や最新のお知らせは、<br/>公式InstagramとXでお届けしています。</p><a className={s.textLink} href="https://www.instagram.com/musubu_kenkou/" target="_blank" rel="noopener noreferrer">Instagramで活動を見る <span aria-hidden="true">↗</span></a><a className={s.textLink} href="https://x.com/musubu_kenkou" target="_blank" rel="noopener noreferrer">公式Xでお知らせを見る <span aria-hidden="true">↗</span></a><p className={s.instagramHandle}>Instagram / X — @musubu_kenkou</p></div></section>
    <section id="contact" className={s.contact}><div className={s.contactIntro}><Label>CONTACT</Label><h2 data-reveal="text">小さな相談から、<br/>一緒に結んでいく。</h2><p>まだ形になっていない相談でも大丈夫です。<br/>想いや目的を伺いながら、<br/>結らしい形を一緒に考えていきます。</p><a href="mailto:info@musubu.or.jp" className={s.email}>info@musubu.or.jp</a><p className={s.contactNote}>メールでのお問い合わせも受け付けています。</p></div><ContactForm/></section>
    <section id="organization" className={`${s.section} ${s.organization}`}><div><Label>ORGANIZATION</Label><h2 data-reveal="text">結について</h2></div><dl>{[["法人名","一般社団法人 結（むすぶ）"],["英字表記","MUSUBU"],["設立","2024年7月29日"],["理事長","渡邉 裕子"],["主なテーマ","食・動・美・心"],["主な活動","健康講座、食生活相談、地域イベント、企業・店舗との連携、美容・休養に関する企画、コミュニティづくり"]].map(([t,d])=><div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl></section>
  </main><footer className={s.footer}><div><Mark/><p>食べること。動くこと。<br/>整えること。休むこと。</p><p>人とのつながりの中で、<br/>健やかな毎日を結んでいく。</p></div><div className={s.footerLinks}><a href="#about">結の想い</a><a href="#activities">結ができること</a><a href="#reports">活動レポート</a><a href="#organization">法人概要</a><a href="#contact">お問い合わせ</a><a href="https://www.instagram.com/musubu_kenkou/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://x.com/musubu_kenkou" target="_blank" rel="noopener noreferrer">公式X ↗</a></div><div className={s.footerBottom}><span>一般社団法人 結 / MUSUBU</span><small>© MUSUBU</small><a href="#top">ページの先頭へ ↑</a></div></footer>
</div>;}



