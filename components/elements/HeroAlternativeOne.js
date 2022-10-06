import Image from "next/image";
import hero from "components/elements/Hero.module.css";
import { IoIosArrowForward } from "react-icons/io";

function HeroAlternativeOne(props) {
  return (
    <>
      <div className={hero.container}>
        <div className={hero.container__left}>
          <h1 className={hero.first_header}>{props.hero_first_header}</h1>
          <h2 className={hero.second_header}>{props.hero_second_header}</h2>
          <p className={hero.text}>{props.hero_text}</p>
          <a
            target="_blank"
            rel="noreferrer"
            className={hero.btn}
            href={props.btn_href}
          >
            <span className={hero.btn_inner}>
              Jetzt Termin reservieren
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

export default HeroAlternativeOne;
