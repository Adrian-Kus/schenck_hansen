import Image from "next/image";
import ReviewsSmall from "components/elements/ReviewsSmall";
import style from "components/templates/index/IndexHero.module.css";
import { IoIosArrowForward } from "react-icons/io";

function IndexHero() {
  return (
    <>
      <div className={style.container}>
        <div className={style.img}>
          <Image
            src="/umzugsunternehmen-hamburg.jpg"
            alt="Umzugsunternehmen Hamburg"
            layout="fill"
            priority
          ></Image>
        </div>
        <div className={style.media_container}>
          <div className={style.img_large}>
            <Image
              src="/umzugsunternehmen-hamburg-quer.jpg"
              alt="Umzugsunternehmen Hamburg"
              layout="fill"
              sizes="80vw"
            ></Image>
          </div>
        </div>
        <div className={style.container__right}>
          <h1 className={style.header}>Umzugsunternehmen Hamburg</h1>
          <p className={style.text}>
            Reservieren Sie online, ganz bequem mit nur wenigen Klicks, Ihren
            Wunschtermin für eine kostenlose & unverbindliche Videobesichtigung.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className={style.btn}
            href="https://angebot.schenck-hansen.de/online-besichtigung/"
          >
            <span className={style.btn_inner}>
              Jetzt Termin reservieren
              <IoIosArrowForward className={style.btn__icon} />
            </span>
          </a>
          <ReviewsSmall />
        </div>
      </div>
    </>
  );
}

export default IndexHero;
