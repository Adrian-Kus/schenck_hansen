import cta from "styles/Cta.module.css";
import { IoIosArrowForward } from "react-icons/io";

function KostenUmCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>
          Umzugsunternehmen Hamburg Kosten - Umzugskalkulator
        </h2>
        <h3 className={cta.subheader}>
          Berechnen Sie jetzt Ihren persönlichen Festpreis
        </h3>
        <p className={cta.text}>
          Erstellen Sie jetzt online kostenlos und unverbindlich mit nur wenigen
          Klicks Ihr ganz persönliches Umzugsangebot und erhalten Sie sofort 10%
          Online-Rabatt.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          className={cta.btn}
          href="https://angebot.schenck-hansen.de/start/"
        >
          <span className={cta.btn_inner}>
            Jetzt online Angebot erstellen
            <IoIosArrowForward className={cta.btn__icon} />
          </span>
        </a>
      </div>
    </>
  );
}

export default KostenUmCta;
