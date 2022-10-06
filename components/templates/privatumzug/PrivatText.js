import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function PrivatText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>Ihr Privatumzug Hamburg</h2>
          <h3 className={text.subheader}>
            Erfolgreiche Umzüge sind die Summe aus passenden Lösungen
          </h3>
          <p className={text.text}>
            Wir bieten Ihnen Umzugs&shy;service von A bis Z, der weit über den
            klas&shy;sischen Um&shy;zug Ihres Mobiliars hinaus geht. Vom
            sorg&shy;fältigen Pack&shy;ser&shy;vice, über die
            Ein&shy;la&shy;ge&shy;rung Ihres In&shy;ven&shy;tars bis zum
            Ent&shy;fernen des Teppichs in Ihrer alten Wohnung. Sie erhalten
            alles aus einer Hand. Mit Acht&shy;sam&shy;keit und
            Genauig&shy;keit, lang&shy;jähriger Er&shy;fah&shy;rung und
            um&shy;fas&shy;senden Sach&shy;ver&shy;stand er&shy;halten Sie einen
            Privat&shy;umzug, den Sie schätzen werden. Sie wählen welche
            Leis&shy;tungen wir für Sie über&shy;nehmen dürfen.
          </p>
        </div>

        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/zwei_umzugshelfer_tragen_einen_tisch.jpg"
              alt="Zwei Umzugshelfer tragen einen Tisch"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/mitarbeiter_einer_umzugsfirma_tragen_einen_tisch.jpg"
              alt="Mitarbeiter einer Umzugsfirma tragen einen Tisch"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_right_02}>
          <h2 className={text.header}>Privatumzug Hamburg - Partner</h2>
          <h3 className={text.subheader}>
            Wir sind Umzugs&shy;dienst&shy;leister und Netzwerker
          </h3>
          <p className={text.text}>
            Sein Handwerk zu beherr&shy;schen, ist die Grund&shy;lage – das
            allein reicht jedoch nicht. Deshalb ver&shy;trauen wir nicht nur auf
            unsere eigenen Fähig&shy;keiten, sondern beziehen unsere Stärke auch
            aus unserem wert&shy;vollen Part&shy;ner&shy;netz&shy;werk. Damit
            Ihre alte Küche auch in der neuen Wohnung perfekt sitzt.
          </p>
        </div>

        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/kuechenmontage_durch_einen_kuechenbauer.jpg"
              alt="Küchenmontage durch einen Küchenbauer"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/einbau_von_kuechengeraeten_durch_einen_kuechenbauer.jpg"
              alt="Einbau von Küchengeräten durch einen Küchenbauer"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_left_03}>
          <h2 className={text.header}>Beratung für Ihren Privatumzug</h2>
          <h3 className={text.subheader}>
            Kompetente Beratung ganz bequem online per Video&shy;besichtigung
          </h3>
          <p className={text.text}>
            Für ein aus&shy;führ&shy;liche Beratung und
            Video&shy;be&shy;sich&shy;tigung nehmen wir uns gerne Zeit. Sie
            erzählen uns von Ihrem Umzugs&shy;vor&shy;haben. Wir
            be&shy;gu&shy;tachten Ihr Hab und Gut. Gemein&shy;sam wählen wir die
            Leis&shy;tungen aus, die perfekt auf Ihre Bedürf&shy;nisse
            zuge&shy;schnitten sind. und planen die kleinen Schritte. Sie
            erhalten an&shy;schlie&shy;ßend ein trans&shy;parentes
            Um&shy;zugs&shy;an&shy;gebot mit Fest&shy;preis. Somit wissen Sie
            genau, welche Leis&shy;tungen Sie für Ihr Geld kriegen. Feste
            Leis&shy;tungen, feste Preise. Dafür steht Schenck & Hansen. Lust
            auf Ihren Um&shy;zug? Dann setzen Sie sich noch heute mit uns in
            Ver&shy;bin&shy;dung.
          </p>
        </div>

        <div className={text.image_right_03}>
          <div className={text.image_right__img}>
            <Image
              src="/schreibtisch_und_umzugskartons_bereit_fuer_den_privatumzug.jpg"
              alt="Ein Schreibtisch und Umzugkartons bereit für den Privatumzug"
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

export default PrivatText;
