import Image from "next/image";
import mobile from "./mobile-hero.module.css";
import styles from "./rice.module.css";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#elements", label: "Elements" },
  { href: "#activities", label: "Activities" },
  { href: "#message", label: "Message" },
  { href: "#partnership", label: "Partnership" },
  { href: "#contact", label: "Contact" }
];

const elements = [
  {
    title: "食",
    label: "Food",
    image: "/images/hero-table.png",
    body: "一粒の食から、からだと暮らしをやさしく整える。"
  },
  {
    title: "動",
    label: "Movement",
    image: "/images/hero-movement.png",
    body: "無理のない動きで、日々にしなやかな巡りをつくる。"
  },
  {
    title: "美",
    label: "Care",
    image: "/images/hero-rice.png",
    body: "整える時間を、自分らしく健やかに過ごす力へ。"
  },
  {
    title: "心",
    label: "Rest",
    image: "/images/hero-mind-tea.svg",
    body: "休むこと、話すこと、深く息をすることを大切に。"
  }
];

const activities = [
  ["Learning", "暮らしに近い学び", "食、運動、セルフケア、休養を、日常に持ち帰れる小さな体験へ。"],
  ["Gathering", "人が自然に集まる場", "マルシェ、講座、対話の時間を通じて、地域の中にゆるやかなつながりをつくります。"],
  ["Co-creation", "想いを企画に結ぶ", "企業、自治体、専門家、クリエイターとともに、健康づくりの場を形にします。"]
];

const partners = ["健康づくり企画", "食育・運動・休養の講座", "地域マルシェ", "福利厚生・健康経営", "専門家との連携"];

function Logo() {
  return (
    <a className={styles.brand} href="#top" aria-label="一般社団法人 結 トップへ">
      <Image src="/images/logo-musubu-mark.png" alt="" width={150} height={82} aria-hidden="true" />
      <span>
        <strong>MUSUBU</strong>
        <small>一般社団法人 結</small>
      </span>
    </a>
  );
}

function Photo({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <figure className={styles.photo}>
      <Image src={src} alt={alt} fill sizes="(max-width: 720px) 92vw, 44vw" />
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <header className={`${styles.header} ${mobile.header}`}>
        <div className={`${styles.headerInner} ${mobile.headerInner}`}>
          <Logo />
          <nav className={styles.nav} aria-label="主要ナビゲーション">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <details className={mobile.menu}>
            <summary>Menu</summary>
            <nav aria-label="スマホナビゲーション">
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className={`${styles.hero} ${mobile.hero}`}>
          <div className={styles.riceImage} aria-hidden="true" />
          <div className={styles.riceVeil} aria-hidden="true" />
          <div className={mobile.visual} aria-hidden="true">
            <div className={mobile.visualSlides}>
              <div className={`${mobile.visualSlide} ${mobile.slideFood}`} />
              <div className={`${mobile.visualSlide} ${mobile.slideMove}`} />
              <div className={`${mobile.visualSlide} ${mobile.slideBeauty}`} />
              <div className={`${mobile.visualSlide} ${mobile.slideMind}`} />
            </div>
            <div className={mobile.visualVeil} />
            <Image
              className={mobile.visualLogo}
              src="/images/logo-musubu-full.png"
              alt=""
              width={250}
              height={229}
              priority
            />
          </div>
          <div className={`${styles.heroInner} ${mobile.copy}`}>
            <p className={styles.eyebrow}>MUSUBU WELLNESS CIRCLE</p>
            <h1>
              暮らしを整え、
              <br />
              人と人を結ぶ。
            </h1>
            <p className={styles.heroLead}>
              <span className={styles.desktopLead}>
                食・動・美・心の調和から、
                <br />
                毎日のすこやかさを育てる。
              </span>
              <span className={styles.mobileLead}>
                食・動・美・心の調和から、
                <br />
                毎日のすこやかさを育てる。
              </span>
            </p>
            <a className={styles.button} href="#about">
              結について
            </a>
            <div className={styles.heroDots} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.philosophy}`}>
          <div className={styles.narrow}>
            <p className={styles.largeEn}>From One Grain</p>
            <h2>
              一粒の食から、
              <br />
              暮らしへ。
              <br />
              暮らしから、結びへ。
            </h2>
            <p>
              食べることを入口に、からだを動かし、美しく整え、心を休める。
              結は、その小さな循環を人とのつながりの中で育てます。
            </p>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.pair}>
            <Photo src="/images/hero-community.png" alt="お茶を囲む穏やかな交流" label="MUSUBU" />
            <div className={styles.textBlock}>
              <p className={styles.eyebrow}>ABOUT</p>
              <h2>結について。</h2>
              <p>
                一般社団法人 結は、あわじ結びの想いを大切に、
                食・動・美・心から健康づくりを支える団体です。
              </p>
              <dl className={styles.facts}>
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

        <section id="elements" className={`${styles.section} ${styles.elements}`}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>FOUR ELEMENTS</p>
            <h2>
              4つの調和から、
              <br />
              すこやかな毎日へ。
            </h2>
          </div>
          <div className={styles.elementList}>
            {elements.map((item) => (
              <article className={styles.elementItem} key={item.title}>
                <Photo src={item.image} alt={`${item.title}を象徴する自然光の写真`} />
                <div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="activities" className={styles.section}>
          <div className={styles.activityFeature}>
            <div className={styles.textBlock}>
              <p className={styles.eyebrow}>ACTIVITIES</p>
              <h2>
                学び、
                <br />
                体験し、
                <br />
                つながる。
              </h2>
              <p>暮らしに近い場を、静かに育てていきます。</p>
            </div>
            <Photo src="/images/hero-table.png" alt="自然光の食卓" label="Food / Place / Dialogue" />
          </div>
          <div className={styles.lines}>
            {activities.map(([label, title, body]) => (
              <article className={styles.line} key={title}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="message" className={`${styles.section} ${styles.message}`}>
          <div className={styles.messageInner}>
            <div>
              <p className={styles.eyebrow}>MESSAGE</p>
              <h2>
                健やかな未来を、
                <br />
                皆さまと
                <br />
                共に結ぶ。
              </h2>
            </div>
            <div>
              <p>
                健康は、毎日の小さな選択から育まれるもの。
                結は、誰もが自分らしく過ごせる未来を目指します。
              </p>
              <p className={styles.signature}>理事長　渡邉裕子</p>
            </div>
          </div>
        </section>

        <section id="partnership" className={styles.section}>
          <div className={styles.pair}>
            <Photo src="/images/hero-mind-tea.svg" alt="白い部屋の窓辺にある茶器と枝葉" label="Partnership" />
            <div className={styles.textBlock}>
              <p className={styles.eyebrow}>PARTNERSHIP</p>
              <h2>
                企業・地域の
                <br />
                皆さまへ。
              </h2>
              <p>
                まだ形になる前の想いを、対話しながら企画へ。
                講座、地域連携、福利厚生などをご相談ください。
              </p>
              <div className={styles.partnerList}>
                {partners.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={styles.narrow}>
            <p className={styles.largeEn}>Contact</p>
            <h2>
              ご相談・
              <br />
              お問い合わせ
            </h2>
            <p>講座、イベント、地域連携、企業との協業など、まずはお気軽にご相談ください。</p>
            <a className={styles.button} href="mailto:tcgmusubu@gmail.com">
              お問い合わせする
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Image
          src="/images/logo-musubu-full.png"
          alt="一般社団法人 結 General Incorporated Association MUSUBU ロゴ"
          width={250}
          height={229}
        />
        <small>General Incorporated Association MUSUBU</small>
      </footer>
    </div>
  );
}
