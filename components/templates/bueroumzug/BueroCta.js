import cta from "styles/Cta.module.css";
import { IoIosArrowForward } from "react-icons/io";

function BueroCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>Büroumzug Hamburg - Ihr Angebot</h2>
        <h3 className={cta.subheader}>
          Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin
        </h3>
        <p className={cta.text}>
          Der erste Schritt zu einem erfolgreichen Firmenumzug ist einfach.
          Wählen Sie jetzt Ihren persönlichen Wunschtermin für eine
          unverbindliche Beratung und Besichtigung mit unseren Umzugsexperten
          bei Ihnen vor Ort.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          className={cta.btn}
          href="https://angebot.schenck-hansen.de/besichtigungstermin/"
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

export default BueroCta;
