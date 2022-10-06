import Link from "next/link";
import cta from "styles/Cta.module.css";
import { IoIosArrowForward } from "react-icons/io";

function MoebelCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>Möbelmontage Hamburg - Unser Angebot</h2>
        <h3 className={cta.subheader}>
          Lernen Sie jetzt die Spezialisten für Ihre Möbel&shy;montage kennen
        </h3>
        <p className={cta.text}>
          Rufen Sie uns jetzt an oder schreiben Sie uns und vereinbaren Sie
          schnell und einfach einen Wunschtermin für Ihre Möbelmontage. Wir
          freuen uns auf Sie.
        </p>
        <Link href="/kontakt">
          <a target="_blank" rel="noreferrer" className={cta.btn}>
            <span className={cta.btn_inner}>
              Jetzt Termin reservieren
              <IoIosArrowForward className={cta.btn__icon} />
            </span>
          </a>
        </Link>
      </div>
    </>
  );
}

export default MoebelCta;
