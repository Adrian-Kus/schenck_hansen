import text from "styles/TextModuleOne.module.css";
import Image from "next/image";

function UmzAltoText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.image_left_01}>
          <div className={text.image_left__img}>
            <Image
              src="/rotes_sofa_mit_umzugkartons_von_der_umzugsfirma_schenck_und_hansen.jpg"
              alt="Rotes Sofa mit Umzugkartons von der Umzugsfirma Schenck und Hansen"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/rotes_sofa_mit_umzugkartons_von_der_umzugsfirma_schenck_und_hansen_querformat.jpg"
              alt="Rotes Sofa mit Umzugkartons von der Umzugsfirma Schenck und Hansen - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_01}>
          <h2 className={text.header}>Umzugsunternehmen Altona: Leistungen</h2>
          <h3 className={text.subheader}>
            Alles was Sie für Ihr Umzug wirklich brauchen
          </h3>
          <p className={text.text}>
            Sie möchten mehr als nur den ein&shy;fachen Trans&shy;port Ihrer
            Möbel? Unser Team begleitet Sie auch über die Grenzen des
            klas&shy;sischen Umzugs&shy;service hinaus. Pack&shy;service,
            Möbel&shy;montage, Lampen&shy;service, Einlagerung und noch viel
            mehr. Wir beherr&shy;schen die gesamte Band&shy;breite an
            Leis&shy;tungen rund um Ihren Umzug. Sie ent&shy;schei&shy;den, was
            wir für Sie über&shy;nehmen dürfen. Unsere Umzugs&shy;experten
            beraten Sie ausführlich und erstellen Ihnen eine Angebot nach Maß,
            sorg&shy;fältig angepasst an Ihre Ansprüche und Bedürfnisse.
          </p>
        </div>

        <div className={text.image_right_02}>
          <div className={text.image_right__img}>
            <Image
              src="/umzugsgut_in_einer_wohnung_in_altona.jpg"
              alt="Umzugsgut in einer Wohnung in Altona"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/umzugsgut_in_einer_wohnung_in_altona_querformat.jpg"
              alt="Umzugsgut in einer Wohnung in Altona - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_left_02}>
          <h2 className={text.header}>Umzugsunternehmen Altona: Sorgfalt</h2>
          <h3 className={text.subheader}>
            Bei uns ist Ihr Hab & Gut in sicheren Händen
          </h3>
          <p className={text.text}>
            Absolute Achtsamkeit und präzise Sorg&shy;falt sind unsere wohl
            aus&shy;schlag&shy;gebendsten Erfolgs&shy;fak&shy;toren bei jedem
            Umzug. Eine fach&shy;liche Ausfüh&shy;rung und sorg&shy;fältige
            Arbeits&shy;weise sind ein Garant, dass Ihr Hab und Gut am
            Umzugs&shy;tag auch wirk&shy;lich sicher ankommt. Aus
            jahr&shy;zehnte&shy;langer Erfahrung wissen wir genau, auf was wir
            achten müssen, damit Sie keine bösen Über&shy;raschungen erleben.
          </p>
        </div>

        <div className={text.image_left_03}>
          <div className={text.image_left__img}>
            <Image
              src="/kommode_und_eingepackte_lampe_bei_dem_umzug_in_altona.jpg"
              alt="Kommode und eingepackte Lampe bei dem Umzug in Altona"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_03}>
          <h2 className={text.header}>Umzugsunternehmen Altona: Beratung</h2>
          <h3 className={text.subheader}>
            Für uns steht Beratung immer an erster Stelle
          </h3>
          <p className={text.text}>
            Um Ihnen Ihnen den besten Umzugs&shy;service zu garan&shy;tieren,
            möchten wir genau Ihre Wünsche und Anforde&shy;rungen verstehen und
            einen Ein&shy;druck vom Umfang des Umzugs bekommen. Deswegen starten
            unsere Umzüge im Altona immer mit einer genauen Besichtigung, online
            oder bei Ihnen vor Ort. Ihr persön&shy;licher Umzugs&shy;berater
            informiert Sie über unsere Leis&shy;tungen und stellt Ihnen
            pass&shy;genaues Angebot zusammen. Sie wissen schon genau was Sie
            brauchen? Dann können Sie auch mit unserem
            Umzugs&shy;kalku&shy;lator online mit nur wenigen Klicks Ihr ganz
            persön&shy;liches Festpreis-Angebot erstellen.
          </p>
        </div>
      </div>
    </>
  );
}

export default UmzAltoText;
