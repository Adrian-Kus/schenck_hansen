import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function UmzEimsText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>
            Umzugsunternehmen Eimsbüttel: Leistungen
          </h2>
          <h3 className={text.subheader}>
            Schenck & Hansen - die beste Art umzuziehen
          </h3>
          <p className={text.text}>
            Egal ob der praktischen Pack&shy;service, die Möbel&shy;montage oder
            die Entfernung des Teppichs in Ihrer alten Wohnung - in unserem
            Leis&shy;tungs&shy;spek&shy;trum für Ihren Umzug in Eims&shy;büttel
            ist alles dabei. Sie benötigen nur einen klas&shy;sischen
            Trans&shy;port? Kein Problem. Immer mit der Intention, das Maximum
            an Service&shy;qualität zu bieten, bekommen Sie von uns alles aus
            einer Hand.
          </p>
        </div>

        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/wohnzimmer_nach_umzug.jpg"
              alt="Wohnzimmer nach Umzug"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/wohnzimmer_nach_umzug_querformat.jpg"
              alt="Wohnzimmer nach Umzug - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_right_02}>
          <h2 className={text.header}>
            Umzugsunternehmen Eimsbüttel: Netzwerk
          </h2>
          <h3 className={text.subheader}>
            Wir sind Dienstleister und Netz&shy;werker.
          </h3>
          <p className={text.text}>
            Teamwork wird nicht nur inner&shy;halb unseres Unter&shy;nehmens
            ganz groß geschrieben. Wir zählen spezia&shy;lisierte
            Hand&shy;werks&shy;betriebe zu unseren vertrauens&shy;würdigen
            Partnern und machen richtig gerne gemein&shy;same Sache. So haben
            wir für Sie immer den richtigen Küchen&shy;bauer an unserer Seite.
          </p>
        </div>

        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/hund_sitzt_auf_umzugskartons_in_neuer_wohnung.jpg"
              alt="Hund sitzt auf Umzugskartons in neuer Wohnung"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/hund_sitzt_auf_umzugskartons_in_neuer_wohnung_querformat.jpg"
              alt="Hund sitzt auf Umzugskartons in neuer Wohnung - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_left_03}>
          <h2 className={text.header}>
            Umzugsunternehmen Eimsbüttel: Beratung
          </h2>
          <h3 className={text.subheader}>
            Ihr Umzug in Eimsbüttel startet mit kompetenter Beratung
          </h3>
          <p className={text.text}>
            Welche Service ergänzt Ihren Umzug am sinn&shy;vollsten? Mit welchem
            Preis müssen Sie rechnen? Sie haben wahr&shy;schein&shy;lich viele
            Fragen. Des&shy;wegen startet jeder neue Umzug mit einer
            ausführ&shy;liche Beratung und Video&shy;besichti&shy;gung. Sie
            erzählen uns von Ihrem Vor&shy;haben. Wir begut&shy;achten Ihr Hab
            und Gut. Gemein&shy;sam mit unseren Experten wählen Sie die
            Leis&shy;tungen aus, die perfekt an Ihren Bedürf&shy;nissen
            ausge&shy;richtet sind. So finden wir für Sie die optimale Lösung
            und begleiten Sie Schritt für Schritt durch jede Phase Ihres Umzugs.
          </p>
        </div>

        <div className={text.image_right_03}>
          <div className={text.image_right__img}>
            <Image
              src="/ein_und_auspackservice_des_umzugsunternehmens_eimsbuettel.jpg"
              alt="Ein- und Auspackservice des Umzugsunternehmens Eimsbüttel"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>
      </div>
    </>
  );
}

export default UmzEimsText;
