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
  { href: "#concept", label: "結の想い" },
  { href: "#elements", label: "食・動・美・心" },
  { href: "#activities", label: "できること" },
  { href: "#profile", label: "理事長" },
  { href: "#partnership", label: "連携" },
  { href: "#contact", label: "お問い合わせ" }
];

const heroSlides: ImageItem[] = [
  {
    src: "/images/hero-rice-grains.jpg",
    alt: "白い米粒のマクロ写真"
  },
  {
    src: "/images/hero-food.webp",
    alt: "白い食卓に並ぶ和食"
  },
  {
    src: "/images/hero-movement.png",
    alt: "白い空間で身体を整える動き"
  },
  {
    src: "/images/hero-beauty.jpg",
    alt: "自然光の中で自分を整えるセルフケア"
  },
  {
    src: "/images/hero-mind-tea.svg",
    alt: "白い空間で心を休めるお茶の時間"
  }
];

const flowImages: ImageItem[] = [
  { src: "/images/hero-food.webp", alt: "白い朝と暮らしの食卓", label: "食" },
  { src: "/images/hero-movement.png", alt: "身体を整える動き", label: "動" },
  { src: "/images/hero-beauty.jpg", alt: "セルフケアの静かな時間", label: "美" },
  { src: "/images/hero-mind-tea.svg", alt: "心を休めるお茶の時間", label: "心" },
  { src: "/images/hero-community.png", alt: "人と人がつながる場", label: "結" }
];

const conceptImages: ImageItem[] = [
  { src: "/images/hero-rice-grains.jpg", alt: "白い米粒のマクロ写真", label: "食べること" },
  { src: "/images/hero-community.png", alt: "自然光の中で食卓を囲む人たち", label: "つながる場" }
];

const elements = [
  {
    title: "食から、暮らしへ。",
    label: "Food",
    mark: "食",
    accent: "#d8bf4f",
    image: "/images/hero-food.webp",
    body: "栄養は、毎日の選択をやさしく整える入口です。",
    tags: ["栄養講座", "食生活相談", "健康レシピ"]
  },
  {
    title: "動きから、めぐりへ。",
    label: "Movement",
    mark: "動",
    accent: "#d7a3b5",
    image: "/images/hero-movement.png",
    body: "無理なく続く小さな運動が、心身を目覚めさせます。",
    tags: ["運動習慣", "健康イベント", "身体づくり"]
  },
  {
    title: "美しさから、自信へ。",
    label: "Care",
    mark: "美",
    accent: "#8fb39b",
    image: "/images/hero-beauty.jpg",
    body: "自分を整える時間は、心の健やかさにもつながります。",
    tags: ["美容と健康", "セルフケア", "整え方"]
  },
  {
    title: "休むことから、明日へ。",
    label: "Rest",
    mark: "心",
    accent: "#7fb1cf",
    image: "/images/hero-mind-tea.svg",
    body: "心をゆるめる時間が、また歩き出す力になります。",
    tags: ["休養", "睡眠", "対話の場"]
  }
];

const activityItems = [
  { title: "健康講座", body: "管理栄養士の視点から、毎日の選択をやさしく整える学びを届けます。" },
  { title: "食生活・予防", body: "病気になる前のからだづくりを、暮らしに近い言葉で支えます。" },
  { title: "地域イベント", body: "マルシェや交流の場で、健康づくりを人とのつながりへ広げます。" },
  { title: "美容・休養", body: "自分を整える時間や心を休める時間を、健やかさの入口として扱います。" },
  { title: "コラボ企画", body: "企業、店舗、専門家と連携し、想いが続いていく場を一緒につくります。" },
  { title: "コミュニティ", body: "一人で頑張る健康づくりから、人と続ける健康づくりへ育てます。" }
];

const partnershipItems = [
  { title: "結 × 地域イベント", accent: "#d8bf4f" },
  { title: "結 × 企業", accent: "#d7a3b5" },
  { title: "結 × 美容サロン", accent: "#8fb39b" },
  { title: "結 × 医療・福祉", accent: "#7fb1cf" },
  { title: "結 × 学校", accent: "#d8bf4f" },
  { title: "結 × マルシェ", accent: "#d7a3b5" },
  { title: "結 × 店舗", accent: "#8fb39b" },
  { title: "結 × 情報発信", accent: "#7fb1cf" }
];

const consultItems = [
  "健康講座を開催したい",
  "食や栄養のセミナーを依頼したい",
  "地域イベントで健康企画を行いたい",
  "美容・健康・休養をテーマに連携したい",
  "一般社団法人 結と一緒に企画をつくりたい"
];

export const metadata: Metadata = {
  title: "一般社団法人 結 / MUSUBU | 人と人を結ぶ、健康づくりの輪",
  description:
    "一般社団法人 結は、理事長・渡邉裕子の管理栄養士としての実務経験と想いから生まれた、食・動・美・心を結ぶウェルビーイング団体です。"
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
            <summary>目次</summary>
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
              その人らしい健やかさへ。
            </p>
            <p className={styles.heroPoem}>
              食べること。動くこと。整えること。休むこと。
              <br />
              そのすべてを、人とのつながりの中で。
            </p>
            <a className={styles.button} href="#contact">
              活動について相談する
            </a>
          </div>
        </section>

        <section id="concept" className={`${styles.section} ${styles.concept} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.conceptGrid}`}>
            <div className={styles.conceptCopy}>
              <p className={styles.sectionLabel}>結の想い</p>
              <h2 className={styles.sectionTitle}>
                健康は、食事だけで
                <br />
                できているわけではありません。
              </h2>
              <div className={styles.conceptText}>
                <p>
                  食べること。動くこと。自分を整えること。心を休めること。
                </p>
                <p>
                  そして、ひとりで抱え込まず、誰かとつながりながら続けていくこと。
                </p>
                <p>
                  一般社団法人 結は、食・動・美・心の調和から、一人ひとりが自分らしく健やかに生きるための輪を育てていきます。
                </p>
              </div>
            </div>
            <div className={styles.conceptPhotos} aria-label="結の世界観を表す写真">
              <PhotoFrame item={conceptImages[0]} className={styles.conceptPhotoMain} priority />
              <PhotoFrame item={conceptImages[1]} className={styles.conceptPhotoSub} />
            </div>
          </div>
        </section>

        <section className={`${styles.imageFlow} ${styles.reveal}`} aria-label="食・動・美・心・結のイメージ">
          <div className={styles.flowHead}>
            <p>食、動、美、心。暮らしの一つひとつが、人とつながる健やかさへ結ばれていく。</p>
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
              <p className={styles.sectionLabel}>一般社団法人 結</p>
              <h2 className={styles.sectionTitle}>人と人を結ぶ、健康づくりの輪。</h2>
            </div>
            <div className={styles.aboutBody}>
              <p className={styles.bodyText}>
                理事長・渡邉裕子の管理栄養士としての実務経験と、生活者に寄り添う想いから生まれたウェルビーイング団体です。食・動・美・心の4つの視点から、講座、相談、イベント、地域連携を通じて、一人では続けにくい健康づくりを、人とのつながりの中で支えていきます。
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
              <p className={styles.sectionLabel}>食・動・美・心</p>
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
                    item={{ src: item.image, alt: `${item.mark}を象徴する白いイメージ写真`, label: item.mark }}
                    className={styles.elementPhoto}
                    sizes="(max-width: 720px) 92vw, 44vw"
                  />
                  <div className={styles.elementText}>
                    <span className={styles.accentLine} aria-hidden="true" />
                    <p className={styles.elementMark}>{item.mark}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className={styles.tagList} aria-label={`${item.mark}でできること`}>
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className={`${styles.section} ${styles.activities} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.activitiesGrid}`}>
            <div className={styles.activitiesCopy}>
              <p className={styles.sectionLabel}>結ができること</p>
              <h2 className={styles.sectionTitle}>
                学び、体験し、
                <br />
                人がつながる。
              </h2>
              <p className={styles.bodyText}>
                結がつくるのは、一度きりの講座ではなく、暮らしに小さな変化が残る場。学び、体験し、人とつながることで、健康づくりは少しずつ続いていきます。
              </p>
            </div>
            <div className={styles.activityPhotos} aria-label="活動の空気感を表す写真">
              <PhotoFrame item={{ src: "/images/hero-community.png", alt: "人と人がつながる食卓のイメージ", label: "結" }} className={styles.activityPhotoLarge} />
              <PhotoFrame item={{ src: "/images/hero-food.webp", alt: "食を通じた学びのイメージ", label: "食" }} className={styles.activityPhotoSmall} />
              <PhotoFrame item={{ src: "/images/hero-mind-tea.svg", alt: "静かな対話と休息の場のイメージ", label: "心" }} className={styles.activityPhotoWide} />
            </div>
            <div className={styles.activityList}>
              {activityItems.map((item) => (
                <article className={styles.activityCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
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
            <div className={styles.trustCopy}>
              <p className={styles.sectionLabel}>なぜ、いま結なのか</p>
              <h2 className={styles.sectionTitle}>
                いま、暮らしを整える力が
                <br />
                必要とされています。
              </h2>
            </div>
            <div className={styles.trustPanel}>
              <div className={styles.trustText}>
                <p>
                  健康情報は増えているのに、続けることは簡単ではありません。
                </p>
                <p>
                  正しい食事を知っていても、心が疲れていれば続かないことがあります。
                </p>
                <p>
                  運動が大切だと分かっていても、一人では始めにくいことがあります。
                </p>
                <p>
                  美容や自分を整える時間が、心を前向きにしてくれることもあります。
                </p>
                <p>
                  だから結は、食・動・美・心を切り離さず、人とのつながりの中で続いていく健康づくりを大切にしています。
                </p>
              </div>
              <PhotoFrame
                item={{ src: "/images/hero-mind-tea.svg", alt: "静かに心を休めるお茶の時間" }}
                className={styles.trustPhoto}
                sizes="(max-width: 720px) 92vw, 42vw"
              />
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
              <p className={styles.sectionLabel}>理事長メッセージ</p>
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
                <p>2015年、仙台白百合女子大学 人間学部 健康栄養学科を卒業。</p>
                <p>
                  管理栄養士として病院に勤務し、給食管理・衛生管理・臨床栄養業務・栄養指導に従事しました。
                </p>
                <p>
                  その後、調剤薬局にて健康相談や健康セミナー講師を担当。病気になった後の支援だけでなく、病気になる前の予防や、地域に寄り添った健康づくりの大切さを学びました。
                </p>
                <p>
                  2020年より名古屋へ移住。フリーランス管理栄養士として特定保健指導に携わるほか、接客・サービス・店舗運営、健康を届けるための場づくりや伝え方にも取り組んでいます。
                </p>
                <p>
                  2024年7月、一般社団法人 結を設立。現在は「食・動・美・心」をテーマに、健康寿命の延伸、地域の健康づくり、人と人がつながるコミュニティづくりに取り組んでいます。
                </p>
              </div>
              <div className={styles.messageBox}>
                <p>
                  食べること、動くこと、自分を整えること、心を休めること。その一つひとつが響き合うことで、総合的な健やかさは育まれていく。
                </p>
                <p>
                  一般社団法人 結は、地域や人とのつながりの中で、一人ひとりが自分らしく健やかに生きるための輪を広げていきます。
                </p>
                <p>
                  皆さまと、健やかな未来を結んでいきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="partnership" className={`${styles.section} ${styles.partnershipSection} ${styles.reveal}`}>
          <div className={`${styles.sectionInner} ${styles.partnershipGrid}`}>
            <div>
              <p className={styles.sectionLabel}>ともにつくる健康づくり</p>
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
                <article
                  className={styles.partnershipCard}
                  key={item.title}
                  style={{ "--accent": item.accent } as CSSProperties}
                >
                  <span aria-hidden="true" />
                  <p>{item.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.contact} ${styles.reveal}`}>
          <div className={styles.contactInner}>
            <p className={styles.sectionLabel}>お問い合わせ</p>
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
