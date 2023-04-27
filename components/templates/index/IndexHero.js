import Image from "next/image";
import hero from "components/templates/index/IndexHero.module.css";
import { IoIosArrowForward } from "react-icons/io";

function IndexHero() {
  return (
    <>
      <div className={hero.container}>
        <div className={hero.container__left}>
          <p className={hero.first_header}>Umzüge mit Schenck & Hansen</p>
          <h1 className={hero.second_header}>Umzugsunternehmen Hamburg</h1>
          <p className={hero.text}>
            Wir sind Ihr Umzugs&shy;unter&shy;nehmen in Hamburg für Nahumzüge
            und Fernumzüge. Nutzen Sie jetzt unseren Rechner für Ihr ganz
            persönliches Angebot.
          </p>
          <ul className={hero.list}>
            <li className={hero.list__item}>
              <div className={hero.list__item_img}>
                <Image
                  src="/checkmark.png"
                  alt="In Umzugsangebot vom Umzugsunternehmen Schenck & Hansen enthalten"
                  width="170"
                  height="170"
                ></Image>
              </div>
              <span className={hero.list__item_text}>
                Jetzt mit bis zu 100€ Online-Rabatt
              </span>
            </li>
            <li className={hero.list__item}>
              <div className={hero.list__item_img}>
                <Image
                  src="/checkmark.png"
                  alt="In Umzugsangebot vom Umzugsunternehmen Schenck & Hansen enthalten"
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
                  alt="In Umzugsangebot vom Umzugsunternehmen Schenck & Hansen enthalten"
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
            href="https://angebot.schenck-hansen.de/start/"
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
