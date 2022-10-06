import cta from "styles/Cta.module.css";
import { IoIosArrowForward } from "react-icons/io";

function EntrEimsCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>
          Entrümpelung Hamburg Eimsbüttel - Unser Angebot
        </h2>
        <h3 className={cta.subheader}>
          Sie möchten ein Angebot, dass Sie nicht ablehnen können?
        </h3>
        <p className={cta.text}>
          Jede Entrümpelung starten wir mit einer Besichtigung dessen, was Sie
          los werden wollen. So können wir Ihnen immer ein Angebot erstellen,
          das optimal auf Ihre Bedürfnisse zugeschnitten ist. Reservieren Sie
          jetzt online Ihren Wunschtermin für eine kostenlose & unverbindliche
          Videobesichtigung.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          className={cta.btn}
          href="https://angebot.schenck-hansen.de/online-besichtigung/"
        >
          <span className={cta.btn_inner}>
            Jetzt Termin reservieren
            <IoIosArrowForward className={cta.btn__icon} />
          </span>
        </a>
      </div>
    </>
  );
}

export default EntrEimsCta;
