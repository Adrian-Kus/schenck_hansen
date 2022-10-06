import Link from "next/link";
import cta from "styles/Cta.module.css";
import { IoIosArrowForward } from "react-icons/io";

function KleintrCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>
          Buchen Sie Ihr Jetzt Ihren Kleintransport Hamburg
        </h2>
        <h3 className={cta.subheader}>
          Starten auch Sie jetzt Ihren Kleintransport mit uns
        </h3>
        <p className={cta.text}>
          Lernen Sie uns jetzt kennen. Schreiben Sie uns eine Nachricht oder
          rufen Sie einfach an und lassen Sie uns über Ihren
          Klein&shy;trans&shy;port sprechen. Wir freuen uns auf Sie.
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

export default KleintrCta;
