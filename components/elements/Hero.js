import Image from "next/image";
import hero from "components/elements/Hero.module.css";
import { IoIosArrowForward } from "react-icons/io";

function Hero(props) {
  return (
    <>
      <div className={hero.container}>
        <div className={hero.container__left}>
          <h1 className={hero.first_header}>{props.hero_first_header}</h1>
          <h2 className={hero.second_header}>{props.hero_second_header}</h2>
          <p className={hero.text}>
            Erstellen Sie jetzt online mit nur wenigen Klicks Ihr ganz
            persön&shy;liches Umzugs&shy;angebot.
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
          <div className={hero.img}>
            <Image
              src={props.hero_image}
              alt={props.hero_alt}
              width="1100"
              height="1000"
            ></Image>
          </div>
          <div className={hero.img_large}>
            <Image
              src={props.hero_image_large}
              alt={props.hero_alt_large}
              width="1200"
              height="750"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
