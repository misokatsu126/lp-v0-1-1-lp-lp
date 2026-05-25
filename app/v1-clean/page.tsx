import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import styles from "./v1-clean.module.css";

type ImageItem = {
  src: string;
  alt: string;
  label?: string;
};

const navItems = [
  { href: "#concept", label: "Concept" },
  { href: "#about", label: "About" },
  { href: "#elements", label: "Elements" },
  { href: "#activities", label: "Activities" },
  { href: "#profile", label: "Profile" },
  { href: "#contact", label: "Contact" }
];

const heroSlides: ImageItem[] = [
  {
    src: "/images/partnership.jpg",
    alt: "自然光の入る白い空間"
  },
  {
    src: "/images/element-food.jpg",
    alt: "自然光の食卓と食事"
  },
  {
    src: "/images/element-move.jpg",
    alt: "やわらかな光の中の動きのイメージ"
  },
  {
    src: "/images/element-beauty.jpg",
    alt: "自分を整える美容とケアのイメージ"
  },
  {
    src: "/images/element-heart.jpg",
    alt: "心を休める静かな時間のイメージ"
  }
];

const flowImages: ImageItem[] = [
  { src: "/images/element-food.jpg", alt: "食のイメージ", label: "食" },
  { src: "/images/element-move.jpg", alt: "動のイメージ", label: "動" },
  { src: "/images/element-beauty.jpg", alt: "美のイメージ", label: "美" },
  { src: "/images/element-heart.jpg", alt: "心のイメージ", label: "心" },
  { src: "/images/hero-community.png", alt: "結びを感じる穏やかな交流のイメージ", label: "結" }
];

const conceptImages: ImageItem[] = [
  { src: "/images/hero-rice-grains.jpg", alt: "白い米粒に自然光が差し込む写真", label: "From one grain" },
  { src: "/images/partnership.jpg", alt: "白い室内に光が入る写真", label: "Quiet place" }
];

const elements = [
  {
    title: "食から、暮らしへ。",
    label: "Food",
    mark: "食",
    accent: "#d8bf4f",
    image: "/images/element-food.jpg",
    body: "栄養は、毎日の選択をやさしく整える入口です。",
    support: "栄養講座 / 食生活相談 / 健康レシピ / 地域食材を活かした企画"
  },
  {
    title: "動きから、めぐりへ。",
    label: "Movement",
    mark: "動",
    accent: "#d7a3b5",
    image: "/images/element-move.jpg",
    body: "無理なく続く小さな運動が、心身を目覚めさせます。",
    support: "運動習慣づくり / 健康イベント / 日常で続けやすい身体づくり"
  },
  {
    title: "美しさから、自信へ。",
    label: "Care",
    mark: "美",
    accent: "#8fb39b",
    image: "/images/element-beauty.jpg",
    body: "自分を整える時間は、心の健やかさにもつながります。",
    support: "美容と健康の講座 / セルフケア / 年齢に合わせた整え方"
  },
  {
    title: "休むことから、明日へ。",
    label: "Rest",
    mark: "心",
    accent: "#7fb1cf",
    image: "/images/element-heart.jpg",
    body: "心をゆるめる時間が、また歩き出す力になります。",
    support: "休養 / 睡眠 / 対話の場 / 心身を整えるワークショップ"
  }
];

const activityItems = [
  "管理栄養士による健康講座",
  "食生活・予防に関するセミナー",
  "地域マルシェや交流イベント",
  "美容・健康・休養をテーマにしたワークショップ",
  "企業・店舗・専門家とのコラボ企画",
  "健康づくりを続けるためのコミュニティづくり"
];

const partnershipItems = [
  "結 × 地域イベント",
  "結 × 企業",
  "結 × 美容サロン",
  "結 × 医療・福祉",
  "結 × 学校",
  "結 × マルシェ",
  "結 × 店舗",
  "結 × 情報発信"
];

const consultItems = [
  "健康講座を開催したい",
  "食や栄養のセミナーを依頼したい",
  "地域イベントで健康企画を行いたい",
  "美容・健康・休養をテーマに連携したい",
  "一般社団法人 結と一緒に企画をつくりたい"
];

export const metadata: Metadata = {
  title: "v1 clean | 一般社団法人 結 / MUSUBU",
  description:
    "一般社団法人 結は、管理栄養士の専門性をもとに、食・動・美・心の4つの視点から、地域や人のつながりを通じた健康づくりを支える団体です。"
};

function Logo() {
  return (
    <a className={styles.brand} href="#top" aria-label="一般社団法人 結 トップへ">
      <Image
        className={styles.brandMark}
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

function PhotoFrame({
  item,
  className = "",
  sizes = "(max-width: 720px) 92vw, 44vw",
  priority = false
}: {
  item: ImageItem;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`${styles.photoFrame} ${className}`}>
      <Image src={item.src} alt={item.alt} fill sizes={sizes} priority={priority} />
      {item.label ? <figcaption>{item.label}</figcaption> : null}
    </figure>
  );
}

export default function V1CleanPage() {
  return (
    <div id="top" className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Logo />
          <nav className={styles.nav} aria-label="主要ナビゲーション">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <details className={styles.mobileMenu}>
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
        <section className={styles.hero} aria-label="一般社団法人 結 メインビジュアル">
          <div className={styles.heroMedia} aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <div
                className={styles.heroSlide}
                key={slide.src}
                style={{ "--delay": `${index * 7}s` } as CSSProperties}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            ))}
            <div className={styles.heroVeil} />
          </div>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>MUSUBU WELLNESS CIRCLE</p>
            <h1 className={styles.heroTitle}>
              暮らしを整え、
              <br />
              人と人を結ぶ。
            </h1>
            <p className={styles.heroLead}>
              食・動・美・心の調和から、
              <br />
              毎日のすこやかさを育てる。
            </p>
            <p className={styles.heroDescription}>
              一般社団法人 結は、管理栄養士の専門性をもとに、食・動・美・心の4つの視点から、地域や人のつながりを通じた健康づくりを支える団体です。
            </p>
            <a className={styles.button} href="#contact">
              活動について相談する
            </a>
          </div>
        </section>

        <section id="concept" className={`${styles.section} ${styles.concept} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.conceptGrid}`}>
            <div className={styles.conceptCopy}>
              <p className={styles.sectionLabel}>Concept</p>
              <h2 className={styles.sectionTitle}>
                一粒の食から、
                <br />
                暮らしへ。
                <br />
                暮らしから、結びへ。
              </h2>
              <p className={styles.bodyText}>
                食べること、動くこと、自分を整えること、心を休めること。
                その一つひとつが、人とのつながりの中で、毎日の健やかさへと結ばれていきます。
              </p>
            </div>
            <div className={styles.conceptPhotos} aria-label="結の世界観を表す写真">
              <PhotoFrame item={conceptImages[0]} className={styles.conceptPhotoMain} priority />
              <PhotoFrame item={conceptImages[1]} className={styles.conceptPhotoSub} />
            </div>
          </div>
        </section>

        <section className={`${styles.imageFlow} ${styles.reveal}`} aria-label="食・動・美・心・結のイメージ">
          <div className={styles.flowHead}>
            <p className={styles.sectionLabel}>Image Flow</p>
            <p>食、動、美、心。静かな写真の連なりから、結の輪郭へ。</p>
          </div>
          <div className={styles.flowGrid}>
            {flowImages.map((item, index) => (
              <PhotoFrame
                item={item}
                key={item.label}
                className={`${styles.flowItem} ${styles[`flowItem${index + 1}`]}`}
                sizes="(max-width: 720px) 88vw, 30vw"
              />
            ))}
          </div>
        </section>

        <section id="about" className={`${styles.section} ${styles.about} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.aboutGrid}`}>
            <div>
              <p className={styles.sectionLabel}>About</p>
              <h2 className={styles.sectionTitle}>結について。</h2>
            </div>
            <div className={styles.aboutBody}>
              <p className={styles.bodyText}>
                一般社団法人 結は、理事長・渡邉裕子の管理栄養士としての専門性と、生活者に寄り添う想いを中心にした健康づくりの場です。食・動・美・心の4つの視点から、講座、相談、イベント、地域連携を通じて、一人では続けにくい健康づくりを、人とのつながりの中で支えていきます。
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>正式名称</dt>
                  <dd>一般社団法人 結</dd>
                </div>
                <div>
                  <dt>設立日</dt>
                  <dd>2024年7月29日</dd>
                </div>
                <div>
                  <dt>理事長</dt>
                  <dd>渡邉 裕子</dd>
                </div>
                <div>
                  <dt>Theme</dt>
                  <dd>食・動・美・心</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="elements" className={`${styles.section} ${styles.elements} ${styles.reveal}`}>
          <div className={styles.sectionInner}>
            <div className={styles.elementsIntro}>
              <p className={styles.sectionLabel}>Four Elements</p>
              <h2 className={styles.sectionTitle}>
                4色の結び紐が、
                <br />
                すこやかな毎日へ。
              </h2>
              <p className={styles.bodyText}>
                ロゴモチーフの「あわじ結び」は、食・動・美・心の4要素が互いに支え合い、一つの健やかさへと結ばれていく姿を表しています。
              </p>
            </div>
            <div className={styles.elementList}>
              {elements.map((item) => (
                <article
                  className={styles.elementRow}
                  key={item.title}
                  style={{ "--accent": item.accent } as CSSProperties}
                >
                  <PhotoFrame
                    item={{ src: item.image, alt: `${item.mark}を象徴する白いイメージ写真`, label: item.label }}
                    className={styles.elementPhoto}
                    sizes="(max-width: 720px) 92vw, 44vw"
                  />
                  <div className={styles.elementText}>
                    <span className={styles.accentLine} aria-hidden="true" />
                    <p className={styles.elementMark}>{item.mark}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <p className={styles.supportText}>できること：{item.support}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className={`${styles.section} ${styles.activities} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.activitiesGrid}`}>
            <div className={styles.activitiesCopy}>
              <p className={styles.sectionLabel}>Activities</p>
              <h2 className={styles.sectionTitle}>
                学び、体験し、
                <br />
                人がつながる。
              </h2>
              <p className={styles.bodyText}>
                結は、講座やイベントを一度きりで終わらせるのではなく、参加した人の暮らしに小さな変化が残る場を育てます。
              </p>
            </div>
            <div className={styles.activityPhotos} aria-label="活動の空気感を表す写真">
              <PhotoFrame item={{ src: "/images/element-food.jpg", alt: "食を通じた学びのイメージ", label: "learn" }} className={styles.activityPhotoLarge} />
              <PhotoFrame item={{ src: "/images/hero-community.png", alt: "人と人がつながる場のイメージ", label: "connect" }} className={styles.activityPhotoSmall} />
              <PhotoFrame item={{ src: "/images/partnership.jpg", alt: "静かな対話と休息の場のイメージ", label: "place" }} className={styles.activityPhotoWide} />
            </div>
            <div className={styles.activityList}>
              {activityItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className={styles.activityCta}>
              <a className={styles.button} href="#contact">
                活動について相談する
              </a>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.trustSection} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.trustGrid}`}>
            <p className={styles.sectionLabel}>Reason / Trust</p>
            <div>
              <h2 className={styles.sectionTitle}>
                いま、暮らしを整える力が
                <br />
                必要とされています。
              </h2>
              <div className={styles.trustText}>
                <p>
                  健康情報は増えているのに、続けることは簡単ではありません。
                </p>
                <p>
                  食事だけ、運動だけ、美容だけ、休養だけでは、毎日は整いきらないことがあります。
                </p>
                <p>
                  だから結は、食・動・美・心を切り離さず、人とのつながりの中で続いていく健康づくりを大切にしています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className={`${styles.section} ${styles.profileSection} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.profileGrid}`}>
            <figure className={styles.profilePortrait}>
              <Image
                src="/images/director-watanabe-upload.jpg"
                alt="一般社団法人 結 理事長 渡邉裕子のプロフィール写真"
                fill
                sizes="(max-width: 720px) 88vw, 34vw"
              />
            </figure>
            <div className={styles.profileBody}>
              <p className={styles.sectionLabel}>Profile / Message</p>
              <h2 className={styles.sectionTitle}>
                暮らしに寄り添い、
                <br />
                健康づくりの輪を結ぶ。
              </h2>
              <p className={styles.profileName}>
                渡邉 裕子
                <span>一般社団法人 結 理事長 / 管理栄養士</span>
              </p>
              <div className={styles.profileText}>
                <p>2015年、仙台白百合女子大学 人間学部 健康栄養学科卒業。</p>
                <p>
                  管理栄養士として病院勤務を経て、給食管理・衛生管理・臨床栄養業務・栄養指導に従事しました。その後、調剤薬局にて健康相談や健康セミナー講師を担当。
                </p>
                <p>
                  現在は、特定保健指導を中心に、食・美容・予防の視点から健康支援を行っています。2024年7月、一般社団法人 結を設立しました。
                </p>
                <p>
                  健康分野の情報発信やWebでの見せ方にも携わり、想いが必要な人へ届くための形づくりも行っています。
                </p>
              </div>
              <div className={styles.messageBox}>
                <p>
                  食べること、動くこと、整えること、休むこと。
                  その一つひとつを、人とのつながりの中で支えていきたい。
                </p>
                <p>
                  一般社団法人 結は、食・動・美・心の調和から、毎日の暮らしをやさしく整え、皆さまと共に健やかな未来を結んでいきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="partnership" className={`${styles.section} ${styles.partnershipSection} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.partnershipGrid}`}>
            <div>
              <p className={styles.sectionLabel}>Partnership</p>
              <h2 className={styles.sectionTitle}>
                食・動・美・心 × 地域で、
                <br />
                新しい健康づくりを。
              </h2>
              <p className={styles.bodyText}>
                専門家、地域、参加者を結び、想いが一度きりで終わらない場へ。
                講座や地域連携など、小さな相談から一緒に整えます。
              </p>
            </div>
            <div className={styles.partnershipList}>
              {partnershipItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.contact} ${styles.reveal}`}>
          <div className={styles.contactInner}>
            <p className={styles.sectionLabel}>Contact</p>
            <h2 className={styles.contactTitle}>
              小さな相談から、
              <br />
              一緒に結んでいく。
            </h2>
            <p className={styles.contactLead}>相談できること</p>
            <div className={styles.consultList}>
              {consultItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className={styles.button} href="mailto:tcgmusubu@gmail.com">
              お問い合わせする
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Image
          className={styles.footerLogo}
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
