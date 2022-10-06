import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function UmzAhrensText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>
            Umzugsunternehmen Ahrensburg: Leistungen
          </h2>
          <h3 className={text.subheader}>Alles können, nichts müssen.</h3>
          <p className={text.text}>
            Jeder Umzug ist individuell und hat seine eigenen spezi&shy;fischen
            Anforde&shy;rungen. Als Umzugs&shy;unternehmen für Ahrensburg bieten
            wir Ihnen neben dem klas&shy;sischen Umzug das volle
            Leistungs&shy;spektrum - vom sorg&shy;fältigen Pack&shy;service,
            über die Einlagerung Ihres Inventars bis zum Entfernen des Teppichs
            sowie der besen&shy;reinen Über&shy;gabe Ihrer alten Wohnung. Sie
            erhalten alles aus einer Hand. Stets auf hohem Niveau und immer mit
            dem Ziel das best&shy;mögliche Umzugs&shy;erlebnis zu schaffen.
            Dafür gehen wir gerne auch die extra Meile, um keine Wünsche offen
            zu lassen.
          </p>
        </div>

        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/eingepackte_stuehle_und_weiteres_umzugsgut.jpg"
              alt="Eingepackte Stühle und weiteres Umzugsgut"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/eingepackte_stuehle_und_weiteres_umzugsgut_querformat.jpg"
              alt="Eingepackte Stühle und weiteres Umzugsgut - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_right_02}>
          <h2 className={text.header}>Umzugsunternehmen Ahrensburg: Partner</h2>
          <h3 className={text.subheader}>
            Starke Partner und ein starkes Team für Ihren Umzug
          </h3>
          <p className={text.text}>
            Wir tauschen uns aus und arbeiten gerne mit Profis aus anderen
            Branchen zusammen. Mit unserem Netz&shy;werk aus verläss&shy;lichen
            Partnern vereinen und integrieren wir wert&shy;volles Know-how und
            bieten so den echten Full-Service rund um Ihren Umzug. Dank unseres
            Netz&shy;werks können wir Ihnen auch den Trans&shy;port von
            Schwer&shy;gut, bei&shy;spiels&shy;weise Klavier, Flügel oder
            Tresor, sowie die fach&shy;gerechte Küchen&shy;montage anbieten.
          </p>
        </div>

        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/gepackte_umzugskartons_des_umzugunternehmens_in_ahrensburg.jpg"
              alt="Gepackte Umzugskartons des Umzugunternehmens in Ahrensburg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/gepackte_umzugskartons_des_umzugunternehmens_in_ahrensburg_querformat.jpg"
              alt="Gepackte Umzugskartons des Umzugunternehmens in Ahrensburg - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_left_03}>
          <h2 className={text.header}>
            Umzugsunternehmen Ahrensburg: Beratung
          </h2>
          <h3 className={text.subheader}>
            Kompetente Beratung ganz bequem online per Video&shy;besichtigung
          </h3>
          <p className={text.text}>
            Lernen Sie uns kennen. Für ein ausführ&shy;liche Besichtigung per
            Video oder Video&shy;besichtigung nehmen wir uns gerne Zeit. Sie
            teilen uns Ihre Wünsche mit. Wir begut&shy;achten Ihr Hab und Gut.
            Gemeinsam wählen wir die Leis&shy;tungen aus, die Ihrem
            Umzugs&shy;vor&shy;haben am besten entsprechen. So können wir Ihnen
            pass&shy;genau den idealen Umzugs&shy;service anbieten und sorgen
            für einen reibungs&shy;losen und stress&shy;freien Umzug.
          </p>
        </div>

        <div className={text.image_right_03}>
          <div className={text.image_right__img}>
            <Image
              src="/umzug_einer_wohnung_mit_schenck_und_hansen.jpg"
              alt="Umzug einer Wohnung mit Schenck und Hansen"
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

export default UmzAhrensText;
