import type { ReactNode } from "react";
import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#elements", label: "Elements" },
  { href: "#activities", label: "Activities" },
  { href: "#message", label: "Message" },
  { href: "#partnership", label: "Partnership" },
  { href: "#contact", label: "Contact" }
];

const heroImages = [
  { src: "/images/hero-table.png", alt: "自然光の食卓と白い器" },
  { src: "/images/hero-rice.png", alt: "稲穂を持つ手元" },
  { src: "/images/hero-rest.png", alt: "夕方の窓辺で休む様子" },
  { src: "/images/hero-movement.png", alt: "窓辺で身体を伸ばす様子" },
  { src: "/images/hero-community.png", alt: "お茶を囲む穏やかな交流" }
];

const elements = [
  {
    key: "food",
    title: "食",
    en: "Food",
    image: "/images/hero-table.png",
    alt: "自然光の食卓",
    body: "整った食卓から、日々のからだをやさしく支える。"
  },
  {
    key: "move",
    title: "動",
    en: "Movement",
    image: "/images/hero-movement.png",
    alt: "静かな運動の時間",
    body: "無理のない動きで、心身にしなやかな巡りをつくる。"
  },
  {
    key: "beauty",
    title: "美",
    en: "Care",
    image: "/images/hero-rice.png",
    alt: "手元と自然光",
    body: "整える時間を、自分らしく健やかに過ごす力へ。"
  },
  {
    key: "mind",
    title: "心",
    en: "Rest",
    image: "/images/hero-rest.png",
    alt: "夕方の窓辺で休む様子",
    body: "休むこと、話すこと、深く息をすることを大切に。"
  }
];

const activities = [
  {
    label: "Learning",
    title: "暮らしに近い学び",
    body: "食、運動、セルフケア、休養を、日常に持ち帰れる小さな体験へ。"
  },
  {
    label: "Gathering",
    title: "人が自然に集まる場",
    body: "マルシェ、講座、対話の時間を通じて、地域の中にゆるやかなつながりをつくります。"
  },
  {
    label: "Co-creation",
    title: "想いを企画に結ぶ",
    body: "企業、自治体、専門家、クリエイターとともに、健康づくりの場を形にします。"
  }
];

const joinNotes = [
  "結の考え方にふれる",
  "講座や体験に参加する",
  "一緒に場をつくる"
];

const partnershipItems = [
  "健康づくり企画",
  "食育・運動・休養の講座",
  "地域マルシェ",
  "福利厚生・健康経営",
  "専門家との連携"
];

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="一般社団法人 結 トップへ">
      <Image
        className="brand__mark-image"
        src="/images/logo-musubu-mark.png"
        alt=""
        width={150}
        height={82}
        aria-hidden="true"
      />
      <span className="brand__text">
        <strong>MUSUBU</strong>
        <small>一般社団法人 結</small>
      </span>
    </a>
  );
}

function LogoMotif({ className = "" }: { className?: string }) {
  return (
    <div className={`logo-motif ${className}`} aria-hidden="true">
      <Image src="/images/logo-musubu-mark.png" alt="" fill sizes="(max-width: 720px) 64vw, 420px" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-heading__lead">{children}</div> : null}
    </div>
  );
}

function HeroImageRotator() {
  return (
    <div className="hero-photo-rotator" aria-label="MUSUBUの世界観を表す写真">
      {heroImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="(max-width: 720px) 92vw, 42vw"
        />
      ))}
    </div>
  );
}

function PhotoPanel({
  src,
  alt,
  label,
  className = ""
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  return (
    <figure className={`photo-panel ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 720px) 92vw, 44vw" />
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}

export default function Home() {
  return (
    <div id="top" className="page">
      <header className="header">
        <div className="shell-wide header__inner">
          <Logo />
          <nav className="nav" aria-label="主要ナビゲーション">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="shell-wide hero__layout reveal">
            <div className="hero__copy">
              <p className="eyebrow">MUSUBU WELLNESS CIRCLE</p>
              <h1>
                人と人を結ぶ、
                <br />
                健康づくりの輪。
              </h1>
              <p className="hero__lead">
                食・動・美・心の調和から、
                <br />
                毎日の暮らしをやさしく整える。
              </p>
            </div>
            <div className="hero__gallery" aria-label="自然光の暮らしを表す写真構成">
              <HeroImageRotator />
              <PhotoPanel
                className="hero__small hero__small--rice"
                src="/images/hero-rice.png"
                alt="稲穂を持つ手元"
              />
              <PhotoPanel
                className="hero__small hero__small--rest"
                src="/images/hero-rest.png"
                alt="夕方の窓辺で休む様子"
              />
              <PhotoPanel
                className="hero__small hero__small--community"
                src="/images/hero-community.png"
                alt="お茶を囲む穏やかな交流"
              />
              <LogoMotif className="hero__motif" />
            </div>
          </div>
        </section>

        <section className="philosophy">
          <div className="shell philosophy__inner reveal">
            <p className="large-en">Philosophy</p>
            <h2>
              暮らしの中に、
              <br />
              やさしい健康の
              <br />
              つながりを。
            </h2>
            <p>
              食べること、動くこと、整えること、休むこと。
              その小さな積み重ねを、人とのつながりの中で。
            </p>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="shell editorial-pair">
            <PhotoPanel src="/images/hero-community.png" alt="お茶を囲む穏やかな交流" label="MUSUBU" />
            <div className="editorial-text reveal">
              <SectionHeading eyebrow="ABOUT" title="結について。">
                人と人がつながり、健康を育む場をつくります。
              </SectionHeading>
              <p>
                一般社団法人 結は、あわじ結びの想いを大切に、
                食・動・美・心から健康づくりを支える団体です。
              </p>
              <dl className="facts">
                <div>
                  <dt>Founded</dt>
                  <dd>2024年7月29日</dd>
                </div>
                <div>
                  <dt>Director</dt>
                  <dd>渡邉裕子</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="elements" className="section elements">
          <LogoMotif className="elements__motif" />
          <div className="shell">
            <div className="section-heading section-heading--wide reveal">
              <p>FOUR ELEMENTS</p>
              <h2>
                4つの調和から、
                <br />
                すこやかな毎日へ。
              </h2>
            </div>
            <div className="element-editorial">
              {elements.map((item) => (
                <article className={`element-story element-story--${item.key} reveal`} key={item.key}>
                  <PhotoPanel src={item.image} alt={item.alt} />
                  <div>
                    <span>{item.en}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="section activities">
          <div className="shell activity-feature">
            <div className="activity-feature__copy reveal">
              <SectionHeading
                eyebrow="ACTIVITIES"
                title={
                  <>
                    学び、
                    <br />
                    体験し、
                    <br />
                    つながる。
                  </>
                }
              >
                暮らしに近い場を、静かに育てていきます。
              </SectionHeading>
            </div>
            <PhotoPanel src="/images/hero-table.png" alt="自然光の食卓" label="Food / Place / Dialogue" />
          </div>
          <div className="shell activity-lines">
            {activities.map((item) => (
              <article className="activity-line reveal" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="join" className="section join">
          <div className="shell join__inner reveal">
            <p className="large-en">Join Us</p>
            <h2>
              知ることから、
              <br />
              ゆるやかに
              <br />
              つながる。
            </h2>
            <div className="join-notes">
              {joinNotes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="message" className="section message">
          <div className="shell message__inner reveal">
            <div>
              <p className="eyebrow">MESSAGE</p>
              <h2>
                健やかな未来を、
                <br />
                皆さまと
                <br />
                共に結ぶ。
              </h2>
            </div>
            <div className="message__body">
              <p>
                健康は、毎日の小さな選択から育まれるもの。
                結は、誰もが自分らしく過ごせる未来を目指します。
              </p>
              <p className="signature">理事長　渡邉裕子</p>
            </div>
          </div>
        </section>

        <section id="partnership" className="section partnership">
          <div className="shell partnership__inner">
            <PhotoPanel src="/images/hero-rest.png" alt="夕方の窓辺で休む様子" label="Partnership" />
            <div className="editorial-text reveal">
              <SectionHeading
                eyebrow="PARTNERSHIP"
                title={
                  <>
                    企業・地域の
                    <br />
                    皆さまへ。
                  </>
                }
              >
                健康づくりの輪を、地域や働く場へ。
              </SectionHeading>
              <p>
                まだ形になる前の想いを、対話しながら企画へ。
                講座、地域連携、福利厚生などをご相談ください。
              </p>
              <div className="partner-list">
                {partnershipItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="shell contact__inner reveal">
            <p className="large-en">Contact</p>
            <h2>
              ご相談・
              <br />
              お問い合わせ
            </h2>
            <p>講座、イベント、地域連携、企業との協業など、まずはお気軽にご相談ください。</p>
            <a className="contact-button" href="mailto:tcgmusubu@gmail.com">
              お問い合わせする
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell-wide footer__inner">
          <div>
            <Image
              className="footer__logo-full"
              src="/images/logo-musubu-full.png"
              alt="一般社団法人 結 General Incorporated Association MUSUBU ロゴ"
              width={250}
              height={229}
            />
          </div>
          <nav aria-label="フッターナビゲーション">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
