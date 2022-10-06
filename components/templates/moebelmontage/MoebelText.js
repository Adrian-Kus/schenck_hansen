import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function MoebelText() {
  return (
    <>
      <div className={text.main_grid_without_double_img}>
        <div className={text.text_left_01}>
          <h2 className={text.header}> Möbelmontage Hamburg - Leistungen</h2>
          <h3 className={text.subheader}>
            Engagement & Kompetenz für Möbel aller Art
          </h3>
          <p className={text.text}>
            Egal ob Neu- oder Gebraucht&shy;möbel, in Ver&shy;bindung mit einem
            Umzug oder als eigen&shy;ständiger Service - wir kümmern uns um den
            fach&shy;ge&shy;rechten Auf- und Abbau Ihrer Möbel. Von IKEA-Möbeln,
            über Hülsta-Schrank&shy;wände, Roll&shy;regale und Betten. Aus
            jahr&shy;zehnte&shy;langer Erfahrung wissen wir genau, auf was wir
            achten müssen, damit Ihr Mobiliar fach&shy;gerecht und
            reibungs&shy;los de- und montiert wird. Und mit unserem
            profes&shy;sio&shy;nellen Netz&shy;werk an aus&shy;gewählten
            Partnern stellen wir sicher, dass auch kompli&shy;zierte Küchen am
            Ende des Tages perfekt verbaut sind.
          </p>
        </div>

        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/moebelmontage_hamburg_aufbau_einer_schrankwand.jpg"
              alt="Möbelmontage Hamburg - Aufbau einer Schrankwand"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/moebelmontage_hamburg_aufbau_einer_schrankwand_querformat.jpg"
              alt="Möbelmontage Hamburg - Aufbau einer Schrankwand - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_right_02}>
          <h2 className={text.header}>Möbelmontage für Gewerbekunden</h2>
          <h3 className={text.subheader}>
            Möbelmontage für Projekte jeder Größen&shy;ordnung
          </h3>
          <p className={text.text}>
            Sie benötigen einen Möbel&shy;monteur für Ihre Büro- oder
            Praxis&shy;aus&shy;stattung. Als Spezialist für die
            Möbel&shy;montage in Hamburg bieten wir auch den
            fach&shy;ge&shy;rechte Auf- und Abbau für Gewerbe&shy;kunden an.
            Unsere Experten stehen Ihnen sehr ger­ne mit Rat und Tat zur Sei­te
            und schnei­dert Ihnen ein pass­&shy;ge­nau­es Ange­bot
            ab&shy;ge­stimmt auf Ihre Bedürfnisse.
          </p>
        </div>

        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/schenck_und_hansen_moebelmontage_fuer_gewerbekunden_in_hamburg.jpg"
              alt="Schenck & Hansen Möbelmontage für Gewerbekunden in Hamburg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/schenck_und_hansen_moebelmontage_fuer_gewerbekunden_in_hamburg_querformat.jpg"
              alt="Schenck & Hansen Möbelmontage für Gewerbekunden in Hamburg - Querformat"
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

export default MoebelText;
