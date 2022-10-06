import cta from "styles/Cta.module.css";
import { IoIosArrowForward } from "react-icons/io";

function SeniorenCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>
          Seniorenumzug Hamburg - Ihre Persönliche Besichtigung
        </h2>
        <h3 className={cta.subheader}>
          Sind Sie bereit für Ihren Seniorenumzug?
        </h3>
        <p className={cta.text}>
          Reservieren Sie jetzt mit nur wenigen Klicks Ihren Wunschtermin für
          eine kostenlose & unverbindliche Beratung und Besichtigung bei Ihnen
          vor Ort.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          className={cta.btn}
          href="https://angebot.schenck-hansen.de/besichtigungstermin/"
        >
          <span className={cta.btn_inner}>
            Jetzt Wunschtermin wählen
            <IoIosArrowForward className={cta.btn__icon} />
          </span>
        </a>
      </div>
    </>
  );
}

export default SeniorenCta;
