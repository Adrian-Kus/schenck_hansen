import { IoIosArrowForward } from "react-icons/io";
import double from "components/elements/DoubleButtons.module.css";

function DoubleButtons() {
  return (
    <>
      <div className={double.buttons}>
        <a
          target="_blank"
          rel="noreferrer"
          className={double.buttons__btn_left}
          href="https://angebot.schenck-hansen.de/start/"
        >
          <span className={double.btn_inner}>
            Jetzt online Angebot erstellen
            <IoIosArrowForward className={double.btn_left__icon} />
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={double.buttons__btn_right}
          href="https://angebot.schenck-hansen.de/online-besichtigung/"
        >
          <span className={double.btn_inner}>
            Jetzt Termin reservieren
            <IoIosArrowForward className={double.btn_right__icon} />
          </span>
        </a>
      </div>
    </>
  );
}

export default DoubleButtons;
