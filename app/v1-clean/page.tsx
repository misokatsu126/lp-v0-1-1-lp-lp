import type { Metadata } from "next";
import Image from "next/image";
import styles from "./v1-clean.module.css";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#elements", label: "Elements" },
  { href: "#activities", label: "Activities" },
  { href: "#director", label: "Director" },
  { href: "#partnership", label: "Partnership" },
  { href: "#contact", label: "Contact" }
];

const elements = [
  {
    title: "食",
    label: "Food",
    image: "/images/element-food.jpg",
    body: "バランスの取れた食事で、健康な身体をつくる。"
  },
  {
    title: "動",
    label: "Move",
    image: "/images/element-move.jpg",
    body: "適度な運動で、心身をいきいきと活性化する。"
  },
  {
    title: "美",
    label: "Beauty",
    image: "/images/element-beauty.jpg",
    body: "美に気を配ることで、自分らしく輝く力を育てる。"
  },
  {
    title: "心",
    label: "Mind",
    image: "/images/element-heart.jpg",
    body: "十分な休養で心身を癒し、明日への活力へつなげる。"
  }
];

const activities = [
  {
    title: "健康づくりの講座・ワークショップ",
    body: "食事、運動、美容、休養を暮らしの中で無理なく整える学びの場をつくります。"
  },
  {
    title: "地域と専門家をつなぐ場づくり",
    body: "参加者、地域、専門家が自然に出会い、健康づくりを一人で抱え込まない関係を育てます。"
  },
  {
    title: "情報発信・ブランディング支援",
    body: "健康分野を中心に、伝えたい想いが届く形になるよう情報発信を整えます。"
  }
];

export const metadata: Metadata = {
  title: "v1 clean | 一般社団法人 結 / MUSUBU",
  description:
    "一般社団法人 結 / MUSUBU の確認用 v1 clean ページ。食・動・美・心の調和から、毎日の暮らしをやさしく整える公式サイト初期版です。"
};

function SectionTitle({
  label,
  title,
  lead
}: {
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className={styles.sectionTitle}>
      <p>{label}</p>
      <h2>{title}</h2>
      {lead ? <span>{lead}</span> : null}
    </div>
  );
}

export default function V1CleanPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top" aria-label="一般社団法人 結 トップへ">
            <Image
              className={styles.brandMark}
              src="/images/musubu-mark.png"
              alt=""
              width={971}
              height={523}
              priority
            />
            <span>
              <strong>一般社団法人 結</strong>
              <small>MUSUBU</small>
            </span>
          </a>
          <nav className={styles.nav} aria-label="ページ内ナビゲーション">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>MUSUBU WELL-BEING</p>
              <h1>
                暮らしを整え、
                <br />
                人と人を結ぶ。
              </h1>
              <p className={styles.heroLead}>
                食・動・美・心の調和から、
                <br />
                毎日のすこやかさを育てる。
              </p>
              <div className={styles.accentDots} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <figure className={styles.heroVisual}>
              <Image
                src="/images/hero-rice.png"
                alt="やわらかな光の中で白米の粒が広がるマクロ写真"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 46vw"
              />
            </figure>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.intro}>
            <SectionTitle
              label="About"
              title="人と人を結ぶ、健康づくりの輪。"
              lead="食・動・美・心の調和から、毎日の暮らしをやさしく整える。"
            />
            <div className={styles.introText}>
              <p>
                一般社団法人 結は、食・動・美・心の調和を通して、人と人を結び、毎日の暮らしをやさしく整えるための場です。
                理事長の専門性と想いを中心に、地域・専門家・参加者がつながり、健康づくりを一人で抱え込まない仕組みへ育てていきます。
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>正式名称</dt>
                  <dd>一般社団法人 結</dd>
                </div>
                <div>
                  <dt>読み</dt>
                  <dd>むすぶ</dd>
                </div>
                <div>
                  <dt>英字名</dt>
                  <dd>MUSUBU</dd>
                </div>
                <div>
                  <dt>設立日</dt>
                  <dd>2024年7月29日</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="elements" className={`${styles.section} ${styles.elementsSection}`}>
          <div className={styles.sectionShell}>
            <SectionTitle
              label="Four Elements"
              title="食・動・美・心が、毎日の土台になる。"
            />
            <div className={styles.elementGrid}>
              {elements.map((item, index) => (
                <article className={styles.elementItem} key={item.title}>
                  <figure className={styles.elementImage}>
                    <Image
                      src={item.image}
                      alt={`${item.title}を表す写真`}
                      fill
                      sizes="(max-width: 720px) 84vw, (max-width: 1100px) 38vw, 250px"
                    />
                  </figure>
                  <div className={styles.elementText}>
                    <span>{item.label}</span>
                    <h3 data-tone={index}>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className={styles.section}>
          <div className={styles.split}>
            <SectionTitle
              label="Activities"
              title="学び、体験し、つながる。"
              lead="暮らしの近くで続く、やさしい健康づくりへ。"
            />
            <div className={styles.activityList}>
              {activities.map((item) => (
                <article className={styles.activityItem} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="director" className={`${styles.section} ${styles.directorSection}`}>
          <div className={styles.profile}>
            <figure className={styles.profileImage}>
              <Image
                src="/images/director-watanabe-upload.jpg"
                alt="一般社団法人 結 理事長 渡邉 裕子"
                fill
                sizes="(max-width: 800px) 82vw, 34vw"
              />
            </figure>
            <div className={styles.profileBody}>
              <p className={styles.kicker}>Director Profile</p>
              <h2>渡邉 裕子</h2>
              <p className={styles.role}>一般社団法人 結 理事長 / 管理栄養士</p>
              <div className={styles.profileText}>
                <p>
                  2015年、仙台白百合女子大学 人間学部 健康栄養学科卒業。
                  管理栄養士として病院勤務を経て、給食管理・衛生管理・臨床栄養業務・栄養指導に従事。その後、調剤薬局にて健康相談や健康セミナー講師を担当し、地域に寄り添った健康支援に携わる。
                </p>
                <p>
                  2020年より名古屋へ移住。
                  フリーランス管理栄養士として特定保健指導に従事するほか、接客・サービス・店舗運営など幅広い現場経験を積みながら、美容・健康・ライフスタイル分野での活動を開始。
                  また、Webデザインやホームページ制作にも携わり、健康分野を中心とした情報発信・ブランディング支援も行っている。
                </p>
                <p>
                  2024年7月、一般社団法人 結 を設立。
                  現在は理事長として、「食・動・美・心」をテーマに、健康寿命の延伸を目指した活動や、地域の健康づくり、人と人がつながるコミュニティづくりに取り組んでいる。
                </p>
              </div>
              <blockquote className={styles.message}>
                <p>
                  食・動・美・心の4要素が響き合うとき、総合的な健やかさが育まれていく。
                  食べること、動くこと、整えること、休むことを、地域や人とのつながりの中で支えていきます。
                  皆さまと、健やかな未来を結んでいきます。
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="partnership" className={styles.section}>
          <div className={styles.partnership}>
            <figure className={styles.partnershipImage}>
              <Image
                src="/images/partnership.jpg"
                alt="自然光の入る静かな空間"
                fill
                sizes="(max-width: 800px) 100vw, 42vw"
              />
            </figure>
            <div className={styles.partnershipText}>
              <SectionTitle
                label="Partnership"
                title="健康づくりを、一人で抱え込まない仕組みへ。"
              />
              <p>
                地域、専門家、参加者がそれぞれの立場から関わり合い、続いていく健康づくりの場を育てます。
                講座、イベント、地域連携など、小さな相談から丁寧に結んでいきます。
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={styles.contactInner}>
            <p className={styles.kicker}>Contact</p>
            <h2>お問い合わせ</h2>
            <p>
              講座、イベント、地域連携など、一般社団法人 結へのご相談はこちらからお問い合わせください。
            </p>
            <a className={styles.contactLink} href="mailto:tcgmusubu@gmail.com">
              tcgmusubu@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Image
          className={styles.footerMark}
          src="/images/musubu-mark.png"
          alt=""
          width={971}
          height={523}
        />
        <small>General Incorporated Association MUSUBU</small>
      </footer>
    </div>
  );
}
