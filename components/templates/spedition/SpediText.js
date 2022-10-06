import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function SpediText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>Die Möbelspedition Hamburg</h2>
          <h3 className={text.subheader}>
            Ihre Full-Service Möbel&shy;spedition in Hamburg
          </h3>
          <p className={text.text}>
            Verpackungs&shy;material, Möbel&shy;montage, Pack&shy;ser&shy;vice,
            Ein&shy;lagerung, oder An&shy;schluss&shy;service? Wir
            über&shy;lassen nichts dem Zu&shy;fall. Mit unserer Expertise wird
            Ihr Umzug zum vollen Erfolg. In der persön&shy;lichen Betreu&shy;ung
            durch unsere Um&shy;zugs&shy;berater wählen Sie die
            Dienst&shy;leistungen aus, die am besten zu Ihrem
            Umzugs&shy;vor&shy;haben passen.
          </p>
        </div>

        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/umzugskartons_der_moebelspedition_schenck_und_hansen.jpg"
              alt="Umzugskartons der Möbelspedition Schenck & Hansen"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/umzugskartons_der_moebelspedition_schenck_und_hansen_querformat.jpg"
              alt="Umzugskartons der Möbelspedition Schenck & Hansen - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_right_02}>
          <h2 className={text.header}>Möbelspedition Hamburg Qualität</h2>
          <h3 className={text.subheader}>
            Sorgfalt und Acht&shy;sam&shy;keit haben höchste Priorität
          </h3>
          <p className={text.text}>
            Wir stellen selbst die höchsten Ansprüche an die
            profes&shy;sio&shy;nelle Um&shy;setzung aller uns
            an&shy;ver&shy;trauten Um&shy;züge – ob diese nun einem
            ganz&shy;heit&shy;lichen Service bedürfen oder einfach nur einen
            schnellen Trans&shy;port erfordern. Sorg&shy;falt und
            Acht&shy;samkeit haben für uns immer oberste Priorität. Aus
            jahr&shy;zehnte&shy;langer Erfahrung wissen wir genau, auf was wir
            achten müssen, damit Ihr Hab und Gut am Umzugs&shy;tag sicher
            ankommt.
          </p>
        </div>

        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/eingepackte_matratze_und_kartons_fuer_einen_umzug_in_hamburg.jpg"
              alt="Eingepackte Matratze und Kartons für einen Umzug in Hamburg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/eingepackte_matratze_und_kartons_fuer_einen_umzug_in_hamburg_querformat.jpg"
              alt="Eingepackte Matratze und Kartons für einen Umzug in Hamburg - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_left_03}>
          <h2 className={text.header}>Möbelspedition Hamburg Beratung</h2>
          <h3 className={text.subheader}>
            Erfolgreiche Umzüge starten mit einer per&shy;sön&shy;lichen
            Beratung
          </h3>
          <p className={text.text}>
            Unser Service beginnt bereits vor dem Umzug in einem
            un&shy;verbind&shy;lichen und kosten&shy;freien
            Bera&shy;tungs&shy;gespräch. In vielen Fällen können wir direkt nach
            dem Ge&shy;spräch Ihr Umzugs&shy;angebot erstellen. Bei weiterem
            Bera&shy;tungs&shy;bedarf ist Ihr persön&shy;licher
            Um&shy;zugs&shy;berater für Sie per Video&shy;besichti&shy;gung oder
            bei Ihnen vor Ort für die Um&shy;zugs&shy;planung für Sie da.
          </p>
        </div>

        <div className={text.image_right_03}>
          <div className={text.image_right__img}>
            <Image
              src="/bilder_lampen_und_teppiche_fuer_die_moebelspedition_hamburg.jpg"
              alt="Bilder, Lampen und Teppiche für die Möbelspedition Hamburg"
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

export default SpediText;
