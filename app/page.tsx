import type { ReactNode } from "react";
import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#elements", label: "Elements" },
  { href: "#activities", label: "Activities" },
  { href: "#join", label: "Join" },
  { href: "#partnership", label: "Partnership" },
  { href: "#contact", label: "Contact" }
];

const elements = [
  {
    id: "food",
    title: "食",
    en: "Food",
    lead: "バランスの取れた食事で、健康な身体をつくる。"
  },
  {
    id: "move",
    title: "動",
    en: "Move",
    lead: "適度な運動で、心身をいきいきと活性化する。"
  },
  {
    id: "beauty",
    title: "美",
    en: "Beauty",
    lead: "美に気を配ることで、自分らしく輝く力を育てる。"
  },
  {
    id: "mind",
    title: "心",
    en: "Mind",
    lead: "十分な休養で心身を癒し、明日への活力へつなげる。"
  }
];

const activities = [
  {
    label: "Food & Wellness",
    title: "食と健康の講座",
    body: "食卓や地域の食材を入口に、日々の健康を考える学びと体験をつくります。"
  },
  {
    label: "Movement",
    title: "からだを動かす企画",
    body: "ストレッチや軽い運動を通じて、無理なく続けられる健康習慣を届けます。"
  },
  {
    label: "Self Care",
    title: "美容・セルフケア",
    body: "整える時間を、心身の健やかさへつなげる体験として企画します。"
  },
  {
    label: "Dialogue",
    title: "心を整える交流",
    body: "休養、対話、学びの場を通じて、人と人が自然につながる時間を育てます。"
  }
];

const joinSteps = [
  {
    title: "知る",
    body: "結の考え方や、食・動・美・心の取り組みに触れる。"
  },
  {
    title: "参加する",
    body: "講座、体験、交流の場に参加し、自分の暮らしに持ち帰る。"
  },
  {
    title: "一緒につくる",
    body: "地域、企業、専門家とともに、健康づくりの場を企画する。"
  }
];

const partnershipItems = [
  "健康づくりイベント",
  "食育・運動・美容・休養の講座",
  "地域マルシェや交流企画",
  "企業の健康経営・福利厚生",
  "地域資源を活かした体験",
  "専門家・講師・クリエイター連携"
];

const heroImages = [
  {
    src: "/images/hero-table.png",
    alt: "自然光の中の食卓とごはん"
  },
  {
    src: "/images/hero-rice.png",
    alt: "手に持った稲穂と地域の風景"
  },
  {
    src: "/images/hero-rest.png",
    alt: "夕方の窓辺で静かに休息する様子"
  },
  {
    src: "/images/hero-movement.png",
    alt: "窓辺でゆっくり身体を伸ばす様子"
  },
  {
    src: "/images/hero-community.png",
    alt: "自然光の中で人が集まりお茶を囲む様子"
  }
];

const quietPhotos = [
  {
    src: "/images/hero-table.png",
    alt: "食卓と地域の食材",
    title: "食卓・地域の食材"
  },
  {
    src: "/images/hero-rice.png",
    alt: "稲穂を持つ手元",
    title: "地域の空気"
  },
  {
    src: "/images/hero-rest.png",
    alt: "夕方の窓辺で休息する様子",
    title: "心を整える"
  },
  {
    src: "/images/hero-community.png",
    alt: "お茶を囲む交流の場",
    title: "人と人のつながり"
  }
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
      <Image src="/images/logo-musubu-mark.png" alt="" fill sizes="(max-width: 720px) 58vw, 360px" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
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
    <div className="hero-rotator" aria-label="MUSUBUの世界観を表す写真">
      {heroImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
        />
      ))}
    </div>
  );
}

function PhotoFrame({
  title,
  tone,
  src,
  alt
}: {
  title: string;
  tone: "table" | "move" | "care" | "rest";
  src?: string;
  alt?: string;
}) {
  return (
    <div className={`photo-frame photo-frame--${tone}`} aria-label={`${title}を想定した写真枠`}>
      {src ? <Image src={src} alt={alt ?? title} fill sizes="(max-width: 720px) 100vw, 42vw" /> : null}
      <span>{title}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="page">
      <header className="header">
        <div className="shell header__inner">
          <Logo />
          <nav className="nav" aria-label="主要ナビゲーション">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header__cta" href="#contact">
            お問い合わせ
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <HeroImageRotator />
          <div className="hero__shade" aria-hidden="true" />
          <div className="shell hero__inner reveal">
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
              <div className="hero__actions">
                <a href="#about">結について</a>
                <a href="#contact">相談する</a>
              </div>
            </div>
            <LogoMotif className="hero__motif" />
          </div>
        </section>

        <section className="intro-section">
          <div className="shell intro reveal">
            <p className="large-en">What is Musubu?</p>
            <div>
              <h2>暮らしの中に、やさしい健康のつながりを。</h2>
              <p>
                食べること、動くこと、美しく整えること、心を休めること。
                その小さな積み重ねが、人と人のつながりの中で続いていくように。
                結は、健康づくりの輪を地域や暮らしへ静かに広げていきます。
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="shell split">
            <div className="reveal">
              <SectionHeading eyebrow="ABOUT" title="一般社団法人 結について。">
                人と人がつながり、健康を育む場をつくります。
              </SectionHeading>
            </div>
            <div className="about__content reveal">
              <p>
                一般社団法人 結（むすぶ）は、人と人との繋がりを象徴する「あわじ結び」の想いを大切に、食・動・美・心の4つの要素から健康づくりを支える団体です。
              </p>
              <p>
                一人ひとりの暮らしが少しずつ整い、その輪が家族、地域、社会へと広がっていく。そんな未来を目指して、学び・体験・交流の場をつくります。
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
                <div>
                  <dt>Name</dt>
                  <dd>一般社団法人 結 / MUSUBU</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="quiet-photos" aria-label="結の世界観を表す写真">
          <div className="quiet-photos__track reveal">
            {quietPhotos.map((photo) => (
              <figure key={photo.src}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 720px) 78vw, 33vw" />
                <figcaption>{photo.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="elements" className="section elements">
          <LogoMotif className="elements__motif" />
          <div className="shell">
            <div className="section-center reveal">
              <SectionHeading eyebrow="FOUR ELEMENTS" title="4つの調和から、すこやかな毎日へ。">
                食・動・美・心。4色の結び紐には、健康につながる意味が込められています。
              </SectionHeading>
            </div>
            <div className="element-grid">
              {elements.map((item) => (
                <article className={`element element--${item.id} reveal`} key={item.id}>
                  <div className="element__title">
                    <span>{item.title}</span>
                    <small>{item.en}</small>
                  </div>
                  <p>{item.lead}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="section activities">
          <div className="shell">
            <div className="section-center reveal">
              <SectionHeading eyebrow="ACTIVITIES" title="学び、体験し、つながる。">
                まだ実績を大きく見せるのではなく、これから育てていく活動の方向性を丁寧に伝えます。
              </SectionHeading>
            </div>
            <div className="activity-layout">
              <div className="photo-stack reveal">
                <PhotoFrame
                  title="食卓・地域の食材"
                  tone="table"
                  src="/images/hero-table.png"
                  alt="自然光の中の食卓"
                />
                <PhotoFrame
                  title="からだを整える時間"
                  tone="rest"
                  src="/images/hero-movement.png"
                  alt="窓辺で身体を伸ばす様子"
                />
              </div>
              <div className="activity-list">
                {activities.map((item) => (
                  <article className="activity reveal" key={item.title}>
                    <p>{item.label}</p>
                    <h3>{item.title}</h3>
                    <span>{item.body}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="section join">
          <div className="shell join__inner reveal">
            <SectionHeading eyebrow="HOW TO JOIN" title="結とつながる、3つの入口。">
              まず知る。気になる場に参加する。そして、必要な人と一緒につくる。
            </SectionHeading>
            <div className="join-steps">
              {joinSteps.map((step, index) => (
                <article key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section message">
          <div className="shell split split--middle">
            <div className="message__visual reveal">
              <PhotoFrame
                title="休養・余白・整える時間"
                tone="care"
                src="/images/hero-rest.png"
                alt="夕方の窓辺で静かに休息する様子"
              />
            </div>
            <div className="message__text reveal">
              <SectionHeading eyebrow="MESSAGE" title="皆さまと共に、健康で輝く未来を結ぶ。">
                健康は、毎日の暮らしの中にある小さな選択から育まれるものです。
              </SectionHeading>
              <p>
                結は、食べること、動くこと、美しく整えること、心を休めることを通じて、誰もが自分らしく健やかに過ごせる未来を目指します。
              </p>
              <p className="signature">理事長　渡邉裕子</p>
            </div>
          </div>
        </section>

        <section id="partnership" className="section partnership">
          <div className="shell partnership__inner">
            <div className="reveal">
              <SectionHeading eyebrow="PARTNERSHIP" title="企業・地域の皆さまへ。">
                協賛、講座依頼、地域連携、健康づくり企画など、まだ形になる前の段階からご相談ください。
              </SectionHeading>
            </div>
            <div className="partner-list reveal">
              {partnershipItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="shell contact__inner reveal">
            <p className="large-en">CONTACT</p>
            <h2>ご相談・お問い合わせ</h2>
            <p>
              講座、イベント、地域連携、企業との協業など、まずはお気軽にご相談ください。
              公開用のお問い合わせ窓口は準備中です。
            </p>
            <div className="contact-box">
              <span>Contact Form</span>
              <strong>準備中</strong>
              <small>メールアドレス、フォームURL、住所、電話番号は確定後に掲載してください。</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer__inner">
          <div>
            <Image
              className="footer__logo-full"
              src="/images/logo-musubu-full.png"
              alt="一般社団法人 結 General Incorporated Association MUSUBU ロゴ"
              width={250}
              height={229}
            />
            <p>
              一般社団法人 結 / MUSUBU
              <br />
              人と人を結ぶ、健康づくりの輪。
            </p>
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
