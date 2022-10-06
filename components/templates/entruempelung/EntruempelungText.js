import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function EntruempelungText() {
  return (
    <>
      <div className={text.main_grid_without_double_img}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>Entrümpelung für Firmenkunden</h2>
          <h3 className={text.subheader}>
            Sie haben Großes vor? Wir haben auch für Sie die passende Lösung.
          </h3>
          <p className={text.text}>
            Vor welchen Heraus&shy;forderung Sie auch stehen: Unser Team hat
            immer die pas&shy;sende Lö&shy;sung für Ihre
            Be&shy;dürf&shy;nis&shy;se. Vom Privat&shy;kunden bis zum
            Firmen&shy;kunden. Klein oder Groß. Egal ob Büro, Firma,
            Laden&shy;lokal oder Lager&shy;halle. Ent&shy;rüm&shy;pe&shy;lungen
            sind unsere Stärke. Beein&shy;druckt? Dann setzen Sie sich noch
            heute mit uns in Ver&shy;bindung. Ge&shy;mein&shy;sam
            er&shy;mit&shy;teln wir Ihren Be&shy;darf und er&shy;stel&shy;len
            Ihnen ein An&shy;gebot, in&shy;di&shy;vi&shy;duell und
            un&shy;ver&shy;bind&shy;lich, basierend auf Ihren Anforderungen.
          </p>
        </div>
        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/entruempelung_fuer_gewerbekunden.jpg"
              alt="Entrümpelung für Gewerbekunden"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/entruempelung_fuer_gewerbekunden_querformat.jpg"
              alt="Entrümpelung für Gewerbekunden - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>
        <div className={text.text_right_02}>
          <h2 className={text.header}>Entrümpelungen aller Art</h2>
          <h3 className={text.subheader}>
            Wir sind Ihr starker Partner, egal für welche Aufgabe
          </h3>
          <p className={text.text}>
            Über die Jahre haben wir immer und immer wieder
            Er&shy;fah&shy;rungen mit der Ent&shy;rüm&shy;pelung von Wohnungen
            in Hamburg ge&shy;sammelt. Wir küm&shy;mern uns
            ganz&shy;heit&shy;lich um die Um&shy;setzung, ent&shy;fernen Tapeten
            und Böden und legen so den Grund&shy;stein für eine
            er&shy;folg&shy;reiche Re&shy;no&shy;vierung.
          </p>
        </div>
        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/sperrmuell_vor_einem_haus.jpg"
              alt="Sperrmüll vor einem Haus"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/sperrmuell_vor_einem_haus_querformat.jpg"
              alt="Sperrmüll vor einem Haus - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>
      </div>
    </>
  );
}

export default EntruempelungText;
