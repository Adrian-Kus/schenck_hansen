import Image from "next/image";
import hero from "components/templates/index/IndexHero.module.css";
import { IoIosArrowForward } from "react-icons/io";

function IndexHero() {
  return (
    <>
      <div className={hero.container}>
        <div className={hero.container__left}>
          <h1 className={hero.first_header}>Umzugsunternehmen Hamburg</h1>
          <h2 className={hero.second_header}>Wir kümmern uns um Ihren Umzug</h2>
          <p className={hero.text}>
            Erstellen Sie jetzt online mit nur wenigen Klicks Ihr ganz
            persön&shy;liches Umzugsangebot.
          </p>
          <ul className={hero.list}>
            <li className={hero.list__item}>
              <div className={hero.list__item_img}>
                <Image
                  src="/checkmark.png"
                  alt="Erledigt Symbol"
                  width="170"
                  height="170"
                ></Image>
              </div>
              <span className={hero.list__item_text}>
                Jetzt mit 10% Online-Rabatt
              </span>
            </li>
            <li className={hero.list__item}>
              <div className={hero.list__item_img}>
                <Image
                  src="/checkmark.png"
                  alt="Erledigt Symbol"
                  width="170"
                  height="170"
                ></Image>
              </div>
              <span className={hero.list__item_text}>
                In wenigen Minuten zum Festpreis
              </span>
            </li>
            <li className={hero.list__item}>
              <div className={hero.list__item_img}>
                <Image
                  src="/checkmark.png"
                  alt="Erledigt Symbol"
                  width="170"
                  height="170"
                ></Image>
              </div>
              <span className={hero.list__item_text}>
                Kostenlos & unverbindlich
              </span>
            </li>
          </ul>
          <a
            target="_blank"
            rel="noreferrer"
            className={hero.btn}
            href="https://angebot.schenck-hansen.de/umziehen-lassen/"
          >
            <span className={hero.btn_inner}>
              Jetzt Angebot erstellen
              <IoIosArrowForward className={hero.btn__icon} />
            </span>
          </a>
        </div>
        <div className={hero.container__right}>
          <video
            className={hero.video}
            src="/umzugsunternehmen_hamburg_schenck_und_hansen.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <video
            className={hero.video_large}
            src="/umzugsunternehmen_hamburg_schenck_und_hansen_querformat.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </>
  );
}

export default IndexHero;
