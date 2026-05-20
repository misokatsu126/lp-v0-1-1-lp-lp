

import Image from "next/image";
import mobile from "./mobile-hero.module.css";
import styles from "./rice.module.css";
import motion from "./motion.module.css";
import MotionProvider from "./motion-provider";

/** 日本語の文字列を1文字ずつ <span> に分解してスタッガード・フェードインさせる */
function CharReveal({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  return (
    <span className={motion.charLine}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          className={motion.char}
          style={{ animationDelay: `${startDelay + i * 0.05}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

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
    accent: "#E6CC4A",
    image: "/images/element-food.jpg",
    body: "バランスの取れた食事で健康な身体を作る。"
  },
  {
    title: "動",
    label: "Movement",
    accent: "#DCA0B4",
    image: "/images/element-move.jpg",
    body: "適度な運動で心身を活性化する。"
  },
  {
    title: "美",
    label: "Care",
    accent: "#8CB4A0",
    image: "/images/element-beauty.jpg",
    body: "美に気を配ることで心も身体もいきいきと輝き、健康へと繋がる。"
  },
  {
    title: "心",
    label: "Rest",
    accent: "#78B4DC",
    image: "/images/element-heart.jpg",
    body: "十分な休養で心身を癒し、明日への活力へと繋がる。"
  }
];

const activities = [
  ["Learning", "暮らしに近い学び", "管理栄養士の視点を、日常に持ち帰れるやさしい学びへ。"],
  ["Gathering", "安心して集まれる場", "講座やマルシェ、対話の時間を通じて、地域の中にあたたかなつながりをつくります。"],
  ["Co-creation", "続いていく形へ", "専門家、地域、参加者を結び、一度きりで終わらない健康づくりへ育てます。"]
];

const partners = ["健康づくり企画", "食・動・美・心の講座", "地域マルシェ", "専門家との連携", "続いていく場づくり"];

function Logo() {
  return (
    <a className={styles.brand} href="#top" aria-label="一般社団法人 結 トップへ">
      <Image
        className={`${styles.brandMark} ${motion.breathe}`}
        src="/images/musubu-mark.png"
        alt=""
        width={971}
        height={523}
        aria-hidden="true"
        priority
      />
      <span className={styles.brandText}>
        <span className={styles.brandJP}>一般社団法人 結</span>
        <span className={styles.brandEN}>MUSUBU</span>
      </span>
    </a>
  );
}

function Photo({ src, alt, label }: { src: string; alt: string; label?: string }) {
  const toneClass = src.includes("heart")
    ? styles.photoHeart
    : src.includes("beauty")
      ? styles.photoBeauty
      : "";

  return (
    <figure className={`${styles.photo} ${toneClass} ${motion.kenburns}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 720px) 92vw, 44vw" />
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}

export default function Home() {
  return (
    <MotionProvider>
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
          <div className={motion.heroCrossfade} aria-hidden="true">
            <div className={`${motion.heroSlide} ${motion.heroSlide1}`} />
            <div className={`${motion.heroSlide} ${motion.heroSlide2}`} />
            <div className={`${motion.heroSlide} ${motion.heroSlide3}`} />
            <div className={`${motion.heroSlide} ${motion.heroSlide4}`} />
            <div className={`${motion.heroSlide} ${motion.heroSlide5}`} />
          </div>
          <div className={styles.riceImage} aria-hidden="true" />
          <div className={styles.riceVeil} aria-hidden="true" />
          <div className={mobile.visual} aria-hidden="true">
            <div className={mobile.visualSlides}>
              <div className={`${mobile.visualSlide} ${mobile.slideRice}`} />
              <div className={`${mobile.visualSlide} ${mobile.slideFood}`} />
              <div className={`${mobile.visualSlide} ${mobile.slideMove}`} />
              <div className={`${mobile.visualSlide} ${mobile.slideBeauty}`} />
              <div className={`${mobile.visualSlide} ${mobile.slideMind}`} />
            </div>
            <div className={mobile.visualVeil} />
            <Image
              className={mobile.visualLogo}
              src="/images/musubu-mark.png"
              alt=""
              width={971}
              height={523}
              priority
            />
          </div>
          <div className={`${styles.heroInner} ${mobile.copy}`}>
            <p className={styles.eyebrow}>MUSUBU WELLNESS CIRCLE</p>
            <h1>
              <CharReveal text="暮らしを整え、" />
              <br />
              <CharReveal text="人と人を結ぶ。" startDelay={0.5} />
            </h1>
            <p className={styles.heroLead}>
              食・動・美・心の調和から、
              <br />
              毎日のすこやかさを育てる。
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

        <section className={`${styles.section} ${styles.philosophy} ${motion.reveal}`}>
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
              食は、暮らしを整える小さな入口。
              動くこと、美しく整えること、心を休めることと結びながら、毎日のすこやかさを育てます。
            </p>
          </div>
        </section>

        <section id="about" className={`${styles.section} ${motion.reveal}`}>
          <div className={styles.pair}>
            <Photo src="/images/hero-community.png" alt="お茶を囲む穏やかな交流" label="MUSUBU" />
            <div className={styles.textBlock}>
              <p className={styles.eyebrow}>ABOUT</p>
              <h2>結について。</h2>
              <p className={styles.aboutTag}>人と人を結ぶ、健康づくりの輪。</p>
              <p>
                一般社団法人 結は、理事長・渡邉裕子の管理栄養士としての専門性と、
                生活者に寄り添う想いを中心にした健康づくりの場です。
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

        <section id="elements" className={`${styles.section} ${styles.elements} ${motion.reveal}`}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>FOUR ELEMENTS</p>
            <h2>
              4色の結び紐が、
              <br />
              すこやかな毎日へ。
            </h2>
            <p className={styles.sectionLede}>
              ロゴモチーフの「あわじ結び」は、食・動・美・心の4要素が互いに支え合い、
              一つの健やかさへと結ばれていく姿を表しています。
              どれか一つではなく、4色が響き合うとき、その人らしい輝きが生まれます。
            </p>
          </div>
          <div className={styles.elementList}>
            {elements.map((item) => (
              <article
                className={styles.elementItem}
                key={item.title}
                style={{ ["--accent" as string]: item.accent }}
              >
                <Photo src={item.image} alt={`${item.title}を象徴する自然光の写真`} />
                <div>
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: 28,
                      height: 3,
                      backgroundColor: item.accent,
                      borderRadius: 2,
                      marginBottom: 12,
                      verticalAlign: "middle"
                    }}
                  />
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="activities" className={`${styles.section} ${motion.reveal}`}>
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
              <p>理事長の想いを中心に、暮らしの近くで続く場を育てます。</p>
            </div>
            <Photo src="/images/element-food.jpg" alt="自然光の食卓と一汁一菜の食事" label="Food / Place / Dialogue" />
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

        <section id="message" className={`${styles.section} ${styles.message} ${motion.reveal}`}>
          <div className={styles.messageInner}>
            <div>
              <p className={styles.eyebrow}>MESSAGE</p>
              <h2>
                その人らしく、
                <br />
                無理なく、
                <br />
                健やかに。
              </h2>
            </div>
            <div>
              <p>
                食・動・美・心の4要素が響き合うとき、
                総合的な健やかさが育まれていく。
                食べること、動くこと、整えること、休むことを、
                地域や人とのつながりの中で支えていきます。
              </p>
              <p>
                皆さまと共に、健康で輝く未来を結んでいきたい。
              </p>
              <p className={styles.signature}>理事長　渡邉裕子</p>
            </div>
          </div>
        </section>

        <section id="partnership" className={`${styles.section} ${motion.reveal}`}>
          <div className={styles.pair}>
            <Photo src="/images/partnership.jpg" alt="白い部屋の窓辺にある休息の時間" label="Partnership" />
            <div className={styles.textBlock}>
              <p className={styles.eyebrow}>PARTNERSHIP</p>
              <h2>
                健康づくりを、
                <br />
                ひとりで抱えない形へ。
              </h2>
              <p>
                専門家、地域、参加者を結び、想いが一度きりで終わらない場へ。
                講座や地域連携など、小さな相談から一緒に整えます。
              </p>
              <div className={styles.partnerList}>
                {partners.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.contact} ${motion.reveal}`}>
          <div className={styles.narrow}>
            <p className={styles.largeEn}>Contact</p>
            <h2>
              ご相談・
              <br />
              お問い合わせ
            </h2>
            <p>講座、イベント、地域連携など、まだ形になる前の想いもお気軽にご相談ください。</p>
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
    </MotionProvider>
  );
}
