import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "一般社団法人 結 / MUSUBU",
  description:
    "一般社団法人 結は、食・動・美・心の調和から、人と人を結び、毎日の暮らしをやさしく整える健康づくりの団体です。"
};

const elements = [
  {
    key: "food",
    label: "食",
    title: "食から、暮らしへ。",
    body: "栄養は、毎日の選択をやさしく整える入口です。",
    tags: "栄養講座 / 食生活相談 / 健康レシピ"
  },
  {
    key: "move",
    label: "動",
    title: "動きから、めぐりへ。",
    body: "無理なく続く小さな運動が、心身を目覚めさせます。",
    tags: "運動習慣 / 健康イベント / 身体づくり"
  },
  {
    key: "beauty",
    label: "美",
    title: "美しさから、自信へ。",
    body: "自分を整える時間は、心の健やかさにもつながります。",
    tags: "美容と健康 / セルフケア / 整え方"
  },
  {
    key: "mind",
    label: "心",
    title: "休むことから、明日へ。",
    body: "心をゆるめる時間が、また歩き出す力になります。",
    tags: "休養 / 睡眠 / 対話の場"
  }
];

const activities = [
  "管理栄養士による健康講座",
  "食生活・予防に関するセミナー",
  "地域マルシェや交流イベント",
  "美容・健康・休養をテーマにしたワークショップ",
  "企業・店舗・専門家とのコラボ企画",
  "健康づくりを続けるためのコミュニティづくり"
];

const partners = [
  "結 × 地域イベント",
  "結 × 企業",
  "結 × 美容サロン",
  "結 × 医療・福祉",
  "結 × 学校",
  "結 × マルシェ",
  "結 × 店舗",
  "結 × 情報発信"
];

const consults = [
  "健康講座を開催したい",
  "食や栄養のセミナーを依頼したい",
  "地域イベントで健康企画を行いたい",
  "美容・健康・休養をテーマに連携したい",
  "一般社団法人 結と一緒に企画をつくりたい"
];

export default function Home() {
  return (
    <main className="page" id="top">
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="一般社団法人 結 トップへ">
          <img src="/images/musubu-mark.png" alt="" />
          <span>
            <strong>一般社団法人 結</strong>
            <small>MUSUBU</small>
          </span>
        </a>
        <nav>
          <a href="#concept">結の想い</a>
          <a href="#elements">食・動・美・心</a>
          <a href="#activities">できること</a>
          <a href="#profile">理事長</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
      </header>

      <section className="hero" aria-label="一般社団法人 結 メインビジュアル">
        <img className="heroImage" src="/images/hero-rice.png" alt="白い米粒のマクロ写真" />
        <div className="heroVeil" />
        <div className="heroCopy">
          <p className="eyebrow">MUSUBU WELLNESS CIRCLE</p>
          <h1>
            暮らしを整え、
            <br />
            人と人を結ぶ。
          </h1>
          <p className="lead">
            食・動・美・心の調和から、
            <br />
            その人らしい健やかさへ。
          </p>
          <p className="quiet">
            一般社団法人 結は、管理栄養士の専門性をもとに、地域や人のつながりを通じた健康づくりを支える団体です。
          </p>
          <a className="button" href="#contact">活動について相談する</a>
        </div>
      </section>

      <section id="concept" className="section concept reveal">
        <div className="sectionText">
          <p className="sectionLabel">結の想い</p>
          <h2>
            健康は、食事だけで
            <br />
            できているわけではありません。
          </h2>
          <p>
            食べること。動くこと。自分を整えること。心を休めること。そして、ひとりで抱え込まず、誰かとつながりながら続けていくこと。
          </p>
          <p>
            一般社団法人 結は、食・動・美・心の調和から、一人ひとりが自分らしく健やかに生きるための輪を育てていきます。
          </p>
        </div>
        <div className="conceptPhotos">
          <figure className="photo tall"><img src="/images/hero-community.png" alt="人と人がつながる食卓" /></figure>
          <figure className="photo small"><img src="/images/hero-food.webp" alt="白い食卓の和食" /></figure>
        </div>
      </section>

      <section className="photoBand reveal" aria-label="結の世界観を表す写真">
        <figure className="photo"><img src="/images/hero-food.webp" alt="食" /><figcaption>食</figcaption></figure>
        <figure className="photo"><img src="/images/hero-beauty.jpg" alt="美" /><figcaption>美</figcaption></figure>
        <figure className="photo wide"><img src="/images/hero-community.png" alt="結" /><figcaption>結</figcaption></figure>
      </section>

      <section id="elements" className="section elements reveal">
        <div className="sectionText centered">
          <p className="sectionLabel">食・動・美・心</p>
          <h2>
            4色の結び紐が、
            <br />
            すこやかな毎日へ。
          </h2>
          <p>
            ロゴモチーフの「あわじ結び」は、食・動・美・心の4要素が互いに支え合い、一つの健やかさへと結ばれていく姿を表しています。
          </p>
        </div>
        <div className="elementGrid">
          {elements.map((item) => (
            <article className={`element ${item.key}`} key={item.key}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <small>{item.tags}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="activities" className="section activities reveal">
        <div className="sectionText">
          <p className="sectionLabel">結ができること</p>
          <h2>
            学び、体験し、
            <br />
            人がつながる。
          </h2>
          <p>
            結がつくるのは、一度きりの講座ではなく、暮らしに小さな変化が残る場。学び、体験し、人とつながることで、健康づくりは少しずつ続いていきます。
          </p>
          <a className="button" href="#contact">活動について相談する</a>
        </div>
        <div className="activitySide">
          <figure className="photo"><img src="/images/hero-community.png" alt="交流の場" /></figure>
          <ul>
            {activities.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="reason reveal">
        <div>
          <p className="sectionLabel">なぜ、いま結なのか</p>
          <h2>
            いま、暮らしを整える力が
            <br />
            必要とされています。
          </h2>
        </div>
        <div className="reasonText">
          <p>健康情報は増えているのに、続けることは簡単ではありません。</p>
          <p>食事だけ、運動だけ、美容だけ、休養だけでは、毎日は整いきらないことがあります。</p>
          <p>だから結は、食・動・美・心を切り離さず、人とのつながりの中で続いていく健康づくりを大切にしています。</p>
        </div>
      </section>

      <section id="profile" className="section profile reveal">
        <figure className="portrait"><img src="/images/director-watanabe-upload.jpg" alt="一般社団法人 結 理事長 渡邉裕子のプロフィール写真" /></figure>
        <div className="profileText">
          <p className="sectionLabel">理事長メッセージ</p>
          <h2>
            暮らしに寄り添い、
            <br />
            健康づくりの輪を結ぶ。
          </h2>
          <p className="name">渡邉 裕子<span>一般社団法人 結 理事長 / 管理栄養士</span></p>
          <p>2015年、仙台白百合女子大学 人間学部 健康栄養学科を卒業。管理栄養士として病院に勤務し、給食管理・衛生管理・臨床栄養業務・栄養指導に従事しました。</p>
          <p>その後、調剤薬局にて健康相談や健康セミナー講師を担当。病気になった後の支援だけでなく、病気になる前の予防や、地域に寄り添った健康づくりの大切さを学びました。</p>
          <p>2024年7月、一般社団法人 結を設立。現在は「食・動・美・心」をテーマに、健康寿命の延伸、地域の健康づくり、人と人がつながるコミュニティづくりに取り組んでいます。</p>
          <blockquote>
            食べること、動くこと、自分を整えること、心を休めること。その一つひとつが響き合うことで、総合的な健やかさは育まれていく。皆さまと、健やかな未来を結んでいきます。
          </blockquote>
        </div>
      </section>

      <section id="partnership" className="section partnership reveal">
        <div className="sectionText centered">
          <p className="sectionLabel">ともにつくる健康づくり</p>
          <h2>
            食・動・美・心 × 地域で、
            <br />
            新しい健康づくりを。
          </h2>
          <p>専門家、地域、参加者を結び、想いが一度きりで終わらない場へ。講座や地域連携など、小さな相談から一緒に整えます。</p>
        </div>
        <div className="partnerGrid">
          {partners.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="contact" className="contact reveal">
        <p className="sectionLabel">お問い合わせ</p>
        <h2>
          小さな相談から、
          <br />
          一緒に結んでいく。
        </h2>
        <div className="consultGrid">
          {consults.map((item) => <span key={item}>{item}</span>)}
        </div>
        <a className="button" href="mailto:tcgmusubu@gmail.com">お問い合わせする</a>
      </section>

      <footer>
        <img src="/images/logo-musubu-full.png" alt="一般社団法人 結 MUSUBU ロゴ" />
        <small>General Incorporated Association MUSUBU</small>
      </footer>

      <style>{`
        :root { color-scheme: light; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fffdf8; color: #26221d; }
        a { color: inherit; text-decoration: none; }
        .page { min-height: 100vh; overflow-x: hidden; background: #fffdf8; font-family: "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif; letter-spacing: 0; }
        .siteHeader { position: fixed; inset: 0 0 auto; z-index: 20; min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 12px clamp(18px, 4vw, 48px); background: rgba(255, 253, 248, .76); border-bottom: 1px solid rgba(38,34,29,.07); backdrop-filter: blur(18px); }
        .brand { display: inline-flex; align-items: center; gap: 10px; min-width: 0; }
        .brand img { width: 58px; height: auto; object-fit: contain; }
        .brand span { display: grid; line-height: 1.2; }
        .brand strong { font-size: 13px; font-weight: 500; white-space: nowrap; }
        .brand small { color: rgba(38,34,29,.48); font-size: 10px; }
        nav { display: none; gap: 22px; color: rgba(38,34,29,.58); font-size: 12px; }
        .hero { position: relative; min-height: 100svh; display: grid; align-items: end; overflow: hidden; background: #f7f3ec; }
        .heroImage { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(1.02) contrast(1.06) saturate(.98); animation: slowZoom 18s ease-out both; }
        .heroVeil { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(255,253,248,.84), rgba(255,253,248,.36) 52%, rgba(255,253,248,.05)), linear-gradient(180deg, rgba(255,253,248,.08), rgba(255,253,248,.8)); }
        .heroCopy { position: relative; z-index: 2; width: min(1120px, calc(100% - 36px)); margin: 0 auto; padding: 128px 0 70px; }
        .eyebrow, .sectionLabel { margin: 0; color: rgba(38,34,29,.48); font-size: 12px; font-weight: 500; line-height: 1.8; }
        h1, h2, h3 { margin: 0; font-family: "Zen Kaku Gothic New", "Hiragino Mincho ProN", "Yu Mincho", serif; font-weight: 400; }
        h1 { margin-top: 22px; font-size: clamp(3rem, 12vw, 6rem); line-height: 1.22; }
        h2 { margin-top: 18px; font-size: clamp(2.1rem, 7.5vw, 4rem); line-height: 1.45; }
        h3 { font-size: 1.35rem; line-height: 1.55; }
        .lead { margin: 26px 0 0; max-width: 31em; color: #5d554c; font-size: clamp(1.05rem, 4vw, 1.35rem); line-height: 2; }
        .quiet { max-width: 42em; margin: 22px 0 0; color: rgba(65,58,50,.82); font-size: .95rem; line-height: 2; }
        .button { display: inline-flex; align-items: center; justify-content: center; min-height: 52px; margin-top: 32px; padding: 13px 24px; border: 1px solid rgba(86,119,122,.34); border-radius: 999px; background: rgba(255,253,248,.7); color: #456f73; font-size: .92rem; backdrop-filter: blur(12px); }
        .button::after { content: ">"; margin-left: 12px; }
        .section, .reason { width: min(1120px, calc(100% - 36px)); margin: 0 auto; padding: 96px 0; }
        .section { display: grid; gap: 44px; }
        .sectionText { max-width: 720px; }
        .sectionText.centered { margin-inline: auto; text-align: center; }
        .section p, .reason p, .contact p { color: #6b6258; font-size: .98rem; line-height: 2.05; }
        .conceptPhotos { position: relative; min-height: 420px; }
        .photo { position: relative; margin: 0; overflow: hidden; border-radius: 8px; background: #eeece5; box-shadow: 0 18px 58px rgba(38,34,29,.055); }
        .photo img { display: block; width: 100%; height: 100%; object-fit: cover; filter: brightness(1.02) contrast(1.04) saturate(.98); }
        .photo figcaption { position: absolute; left: 16px; bottom: 14px; border-radius: 999px; background: rgba(255,253,248,.76); padding: 6px 10px; color: rgba(38,34,29,.58); font-size: 11px; }
        .photo.tall { width: 74%; min-height: 420px; aspect-ratio: 4 / 5; }
        .photo.small { position: absolute; right: 0; bottom: 0; width: 48%; min-height: 190px; aspect-ratio: 4 / 3; }
        .photoBand { width: min(1180px, calc(100% - 32px)); margin: 0 auto; padding: 70px 0 104px; display: grid; gap: 18px; background: #fffdf8; }
        .photoBand .photo { min-height: 280px; aspect-ratio: 4 / 5; }
        .photoBand .wide { aspect-ratio: 16 / 10; }
        .elements { width: 100%; max-width: none; background: #f7f3ec; padding-inline: clamp(18px, 4vw, 48px); }
        .elements > * { width: min(1120px, 100%); margin-inline: auto; }
        .elementGrid { display: grid; gap: 14px; margin-top: 20px; }
        .element { border: 1px solid rgba(38,34,29,.08); border-radius: 8px; background: rgba(255,253,248,.68); padding: 24px; }
        .element span { display: inline-grid; place-items: center; width: 44px; height: 44px; margin-bottom: 18px; border-radius: 50%; font-family: serif; font-size: 1.35rem; }
        .element.food span { color: #b99a1d; background: rgba(242,210,86,.18); }
        .element.move span { color: #b56b82; background: rgba(231,154,184,.18); }
        .element.beauty span { color: #4f8d75; background: rgba(117,173,150,.18); }
        .element.mind span { color: #4e8eb8; background: rgba(120,183,223,.18); }
        .element p { margin: 14px 0 0; }
        .element small { display: block; margin-top: 18px; color: #70675c; line-height: 1.8; }
        .activitySide { display: grid; gap: 22px; }
        .activitySide .photo { min-height: 320px; aspect-ratio: 4 / 3; }
        ul { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
        li, .partnerGrid span, .consultGrid span { border: 1px solid rgba(38,34,29,.08); border-radius: 8px; background: rgba(255,253,248,.76); padding: 15px 16px; color: #5f574e; line-height: 1.6; }
        li::before, .consultGrid span::before { content: ""; display: inline-block; width: 7px; height: 7px; margin-right: 10px; border-radius: 50%; background: #8fb39b; vertical-align: .1em; }
        .reason { display: grid; gap: 34px; background: #f8f6f1; width: 100%; max-width: none; padding-inline: clamp(18px, 4vw, 48px); }
        .reason > * { width: min(1120px, 100%); margin-inline: auto; }
        .reasonText { display: grid; gap: 16px; }
        .reasonText p { margin: 0; padding-left: 18px; border-left: 1px solid rgba(86,119,122,.28); }
        .profile { align-items: start; }
        .portrait { margin: 0; width: min(520px, 100%); aspect-ratio: 2 / 3; overflow: hidden; border-radius: 8px; background: #eeeae2; box-shadow: 0 18px 58px rgba(38,34,29,.06); }
        .portrait img { width: 100%; height: 100%; object-fit: cover; object-position: center 38%; }
        .profileText { max-width: 720px; }
        .name { color: #2c2823 !important; font-family: serif; font-size: 1.35rem !important; }
        .name span { display: block; margin-top: 6px; color: #6b6258; font-family: sans-serif; font-size: .92rem; }
        blockquote { margin: 30px 0 0; border-top: 1px solid rgba(38,34,29,.12); padding-top: 26px; color: #5f574e; line-height: 2; }
        .partnership { background: #f8f6f1; width: 100%; max-width: none; padding-inline: clamp(18px, 4vw, 48px); }
        .partnership > * { width: min(1120px, 100%); margin-inline: auto; }
        .partnerGrid, .consultGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .contact { width: min(900px, calc(100% - 36px)); margin: 0 auto; padding: 106px 0 120px; text-align: left; }
        .contact h2 { margin-bottom: 30px; }
        footer { width: min(1120px, calc(100% - 36px)); margin: 0 auto; padding: 46px 0 60px; display: flex; justify-content: space-between; gap: 24px; border-top: 1px solid rgba(38,34,29,.1); color: rgba(38,34,29,.5); font-size: 11px; }
        footer img { width: min(180px, 58vw); height: auto; object-fit: contain; }
        .reveal { animation: reveal .9s cubic-bezier(.22, 1, .36, 1) both; }
        @keyframes reveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.045); } }
        @media (min-width: 760px) { nav { display: flex; } .section, .reason { padding-block: 132px; } .concept, .activities, .profile { grid-template-columns: .9fr 1.1fr; gap: 76px; } .photoBand { grid-template-columns: 1fr .82fr 1.28fr; align-items: end; } .photoBand .photo:nth-child(2) { transform: translateY(54px); } .elementGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); } .activitySide { grid-template-columns: .9fr 1fr; align-items: end; } .reason { grid-template-columns: .9fr 1.1fr; } .partnerGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); } .consultGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 520px) { .brand img { width: 52px; } .siteHeader { min-height: 66px; } h1 { font-size: 2.85rem; } h2 { font-size: 2.05rem; } .photo.small { position: relative; width: 76%; margin-left: auto; margin-top: -40px; } .partnerGrid, .consultGrid { grid-template-columns: 1fr; } footer { flex-direction: column; } }
        @media (prefers-reduced-motion: reduce) { .reveal, .heroImage { animation: none; } }
      `}</style>
    </main>
  );
}
