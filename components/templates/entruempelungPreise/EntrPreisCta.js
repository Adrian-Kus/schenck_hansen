import Link from "next/link";
import cta from "styles/Cta.module.css";
import { IoIosArrowForward } from "react-icons/io";

function EntrPreisCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>
          Buchen Sie Ihr Jetzt Ihre Entrümpelung in Hamburg
        </h2>
        <h3 className={cta.subheader}>
          Vereinbaren Sie jetzt schnell und einfach einen Termin mit uns
        </h3>
        <p className={cta.text}>
          Schreiben Sie uns eine Nachricht oder rufen Sie einfach an und
          erzählen Sie uns von Ihrem Vorhaben. Wir sagen Ihnen, wie wir Sie als
          Partner bei Ihrer Entrümpelung unterstützen können.
        </p>
        <Link href="/kontakt">
          <a target="_blank" rel="noreferrer" className={cta.btn}>
            <span className={cta.btn_inner}>
              Jetzt Kontakt aufnehmen
              <IoIosArrowForward className={cta.btn__icon} />
            </span>
          </a>
        </Link>
      </div>
    </>
  );
}

export default EntrPreisCta;
