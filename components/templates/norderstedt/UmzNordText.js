import text from "styles/TextModuleOne.module.css";
import Image from "next/image";

function UmzNordText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.image_left_01}>
          <div className={text.image_left__img}>
            <Image
              src="/umzug_mit_dem_umzugsunternehmen_norderstedt.jpg"
              alt="Umzug mit dem Umzugsunternehmen Norderstedt"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/umzug_mit_dem_umzugsunternehmen_norderstedt_querformat.jpg"
              alt="Umzug mit dem Umzugsunternehmen Norderstedt - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_01}>
          <h2 className={text.header}>Umzug Norderstedt</h2>
          <h3 className={text.subheader}>Alles rund um Ihren Umzug</h3>
          <p className={text.text}>
            Unsere Kernbereiche umfassen eine Vielzahl an
            Umzugs&shy;dienst&shy;leistungen, die alle eins gemein&shy;sam
            haben: Wir ver&shy;einen immer unsere geballte Erfahrung mit viel
            Acht&shy;samkeit und Sorg&shy;falt. Ganz gleich ob wir nur Ihren
            Haus&shy;stand trans&shy;portieren, Sie unseren Einpack&shy;service
            wünschen, wir Ihre Möbel ab- und aufbauen oder Sie unseren
            Full-Service Umzug wünschen. Sie wählen die Leistungen, die Ihnen
            den Umzug einfach machen. Selbst, wenn Ihr Wunsch auf den ersten
            Blick nicht umsetzbar erscheint – fragen Sie uns einfach. Wir
            beraten Sie gerne.
          </p>
        </div>

        <div className={text.image_right_02}>
          <div className={text.image_right__img}>
            <Image
              src="/umzugkartons_der_umzugsfirma_schenck_und_hansen_in_einem_zimmer.jpg"
              alt="Umzugkartons der Umzugsfirma Schenck und Hansen in einem Zimmer"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/umzugkartons_der_umzugsfirma_schenck_und_hansen_in_einem_zimmer_querformat.jpg"
              alt="Umzugkartons der Umzugsfirma Schenck und Hansen in einem Zimmer - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_left_02}>
          <h2 className={text.header}>Unsere Umzugspartner</h2>
          <h3 className={text.subheader}>Gemeinsam sind wir stark</h3>
          <p className={text.text}>
            Teamwork wird nicht nur inner&shy;halb unseres Unternehmens ganz
            groß geschrieben. Wir zählen spezialisierte
            Hand&shy;werks&shy;betriebe und Spezial&shy;trans&shy;porteure zu
            unseren vertrauens&shy;würdigen Partnern und machen richtig gerne
            gemein&shy;same Sache. So wird auch Ihr Klavier oder Flügel sicher
            und fach&shy;gerecht umge&shy;zogen.
          </p>
        </div>

        <div className={text.image_left_03}>
          <div className={text.image_left__img}>
            <Image
              src="/eingepacktes_umzugsgut_bereit_fuer_den_umzug_in_norderstedt.jpg"
              alt="Eingepacktes Umzugsgut bereit fuer den Umzug in Norderstedt"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_03}>
          <h2 className={text.header}>Umzugsberatung</h2>
          <h3 className={text.subheader}>
            Individuelle Beratung für Ihr Umzugsvorhaben
          </h3>
          <p className={text.text}>
            Vorweg nehmen wir uns natür&shy;lich immer Zeit für eine Beratung,
            damit wir Ihre Wünsche und Vorstellungen mit unseren Leistungen
            perfekt in Einklang bringen können. Dank unserem
            Beratungs&shy;prozess erhalten Sie genau den erst&shy;klassischen
            Umzugs&shy;service den Sie benötigen. Nutzen Sie einfach unsere
            bequeme Video&shy;besichtigung mit einem unserer
            Umzugs&shy;experten. Sie wissen genau, was Sie wollen? Dann können
            Sie jetzt auch mit nur wenigen Klicks Ihr persön&shy;liches
            Fest&shy;preis&shy;angebot direkt mit unserem Umzugs&shy;kalkulator
            buchen.
          </p>
        </div>
      </div>
    </>
  );
}

export default UmzNordText;
