import text from "styles/TextModuleOne.module.css";
import Image from "next/image";

function UmzPinneText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.image_left_01}>
          <div className={text.image_left__img}>
            <Image
              src="/einpacken_von_umzugsgut_durch_das_umzugsunternehmen_pinneberg.jpg"
              alt="Einpacken von Umzugsgut durch das Umzugsunternehmen Pinneberg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/einpacken_von_umzugsgut_durch_das_umzugsunternehmen_pinneberg_querformat.jpg"
              alt="Einpacken von Umzugsgut durch das Umzugsunternehmen Pinneberg - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_01}>
          <h2 className={text.header}>
            Umzugsunternehmen Pinneberg: Leistungen
          </h2>
          <h3 className={text.subheader}>
            Ein Umzugs&shy;unter&shy;nehmen, alles drin
          </h3>
          <p className={text.text}>
            Sie benötigen einen Umzugs&shy;unter&shy;nehmen für Pinneberg? Und
            sie brauchen Umzugs&shy;kartons und Verpackungs&shy;material?
            Perfekt. Dann sind Sie bei uns genau richtig. Wenn Sie möchten sind
            unsere Umzüge aber weit mehr als nur ein Basis-Umzug. Weit weg vom
            Standard – unser Service ist so individuell wie Ihre
            Anforde&shy;rungen. Unsere Vision: ein ganz&shy;heit&shy;lichen
            Umzug der Extra&shy;klasse. Ein&shy;pack&shy;service,
            Möbel&shy;montage, Anschluss&shy;service, Einlage&shy;rung oder
            Küchen&shy;montage? Ihr persön&shy;licher Um&shy;zugs&shy;berater
            informiert Sie gerne.
          </p>
        </div>

        <div className={text.image_right_02}>
          <div className={text.image_right__img}>
            <Image
              src="/junges_glueckliches_paerchen_nach_einem_umzug_in_pinneberg.jpg"
              alt="Junges glückliches Pärchen nach einem Umzug in Pinneberg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/junges_glueckliches_paerchen_nach_einem_umzug_in_pinneberg_querformat.jpg"
              alt="Junges glückliches Pärchen nach einem Umzug in Pinneberg - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_left_02}>
          <h2 className={text.header}>
            Umzugsunternehmen Pnneberg: Leistungen
          </h2>
          <h3 className={text.subheader}>Auf der sicheren Seite</h3>
          <p className={text.text}>
            Mit unseren Umzugs&shy;leistungen bekom&shy;men Sie nicht nur einen
            Spitzen&shy;service sondern auch das gute Gefühl, dass Ihr Hab und
            Gut am Umzugs&shy;tag sicher ankommt. Achtsam&shy;keit und
            Sorg&shy;falt stehen bei der Ausführung stets an erster Stelle. Aus
            Über 120 Jahre Umzugs&shy;erfah&shy;rung wissen wir genau, auf was
            wir achten müssen, damit auch Ihr Umzug zu einem vollen Erfolg wird.
          </p>
        </div>

        <div className={text.image_left_03}>
          <div className={text.image_left__img}>
            <Image
              src="/moebel_und_kartons_fuer_umzug_in_pinneberg.jpg"
              alt="Möbel und Kartons für Umzug in Pinneberg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_03}>
          <h2 className={text.header}>Umzugsunternehmen Pnneberg: Beratung</h2>
          <h3 className={text.subheader}>
            Erzählen Sie uns von Ihrem Umzug in Pinneberg und wir machen in zu
            einem vollen Erfolg
          </h3>
          <p className={text.text}>
            Um die perfekten Voraus&shy;setzungen zu schaffen, starten unsere
            Umzüge mit der indivi&shy;duellen Beratung. Wir beraten Sie
            telefo&shy;nisch oder bei einer Video&shy;besichti&shy;gung, online
            oder bei Ihnen vor Ort. Genau zuhören, ausführ&shy;lich beraten und
            gemeinsam mit Ihnen die passenden Leistungen auswählen: Dieses Credo
            prägt unsere Arbeit und macht unsere Umzüge zu einem vollen Erfolg.
            Sie wissen schon genau was Sie brauchen? Dann können Sie auch mit
            unserem Umzugs&shy;kalkulator online in nur wenigen Minuten Ihr ganz
            persön&shy;liches Festpreis-Angebot erstellen.
          </p>
        </div>
      </div>
    </>
  );
}

export default UmzPinneText;
