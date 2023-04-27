import text from "styles/TextModuleOne.module.css";
import Image from "next/image";

function BueroText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.image_left_01}>
          <div className={text.image_left__img}>
            <Image
              src="/leeres_buero_waehrend_eines_bueroumzuges.jpg"
              alt="Ein leeres Büro mit Umzugkartons während eines Büroumzugs"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/leeres_buero_waehrend_eines_bueroumzuges_querformat.jpg"
              alt="Ein leeres Büro mit Umzugkartons während eines Büroumzugs - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_01}>
          <h2 className={text.header}>Büroumzug Hamburg - Lösungen</h2>
          <h3 className={text.subheader}>
            Ganzheitliche Lösungen für erfolgreiche Büroumzüge
          </h3>
          <p className={text.text}>
            Wir schaffen ganz&shy;heitliche Lö&shy;sun&shy;gen, die Sie
            be&shy;geistern werden. Wir bieten Ihnen den kom&shy;pletten
            Rund&shy;um&shy;service für Ihren Büro&shy;um&shy;zug in Hamburg.
            Wir packen ein, packen aus, demon&shy;tieren und montieren Ihre
            Büro&shy;aus&shy;stattung, lagern ein und ent&shy;sorgen auf Wunsch
            Ihren Sperr&shy;müll. Bei der Um&shy;set&shy;zung können Sie sich
            auf unsere lang&shy;jährige Er&shy;fahrung sowie unser Um&shy;zugs-
            und Montage-Team ver&shy;lassen. Ihre logis&shy;tischen
            Heraus&shy;for&shy;de&shy;rungen und Schwie&shy;rig&shy;keiten, sind
            für uns Aus&shy;gangs&shy;punkt unserer Analyse. Wir finden
            ge&shy;mein&shy;sam die passende Lösung für Ihr Projekt. Bei uns ist
            Ihr Büro&shy;umzug in besten Händen. Lassen Sie sich in einem
            kosten&shy;freien Be&shy;ratungs&shy;ge&shy;spräch von unseren
            Um&shy;zugs&shy;services überzeugen.
          </p>
        </div>

        <div className={text.image_right_02}>
          <div className={text.image_right__img}>
            <Image
              src="/packservice_fuer_einen_bueroumzug_hamburg.jpg"
              alt="Packservice für einen Büroumzug in Hamburg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/packservice_fuer_einen_bueroumzug_hamburg_querformat.jpg"
              alt="Packservice für einen Büroumzug in Hamburg - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_left_02}>
          <h2 className={text.header}>Büroumzug Hamburg - Netzwerk</h2>
          <h3 className={text.subheader}>
            Ein starkes Netzwerk für Qualitätsumzüge
          </h3>
          <p className={text.text}>
            Anspruchsvolle Büroumzüge zu realisieren ist unsere
            Leiden&shy;schaft, Kunden&shy;zu&shy;frieden&shy;heit unser
            An&shy;trieb. Wir sind zu&shy;ver&shy;lässiger Partner und halten,
            was wir ver&shy;sprechen. Unser Team aus er&shy;fahrenen
            Fach&shy;kräften und zer&shy;ti&shy;fi&shy;zierten Hand&shy;werkern
            macht Ihren Um&shy;zug mög&shy;lich. Und falls Ihr Umzug mal aus dem
            Rahmen fällt, können wir nebst den eigenen Fähig&shy;keiten auch auf
            ein grosses Partner&shy;netz&shy;werk zählen. So er&shy;halten Sie
            die komplette Ge&shy;samt&shy;lösung und müssen dabei nicht auf
            Qualität verzichten.
          </p>
        </div>

        <div className={text.image_left_03}>
          <div className={text.image_left__img}>
            <Image
              src="/gewerbeumzug_mit_schenck_und_hansen.jpg"
              alt="Ein Gewerbeumzug mit Schenck & Hansen"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_03}>
          <h2 className={text.header}>Büroumzug Hamburg - Beratung</h2>
          <h3 className={text.subheader}>
            Lassen Sie uns über Ihren Büroumzug sprechen
          </h3>
          <p className={text.text}>
            Um Ihre Anforderungen und ihre Be&shy;dürf&shy;nisse zu
            er&shy;fahren, bedarf es einem per&shy;sön&shy;lichen Ge&shy;sprächs
            mit unseren Ex&shy;perten. Wir kommen zu Ihnen vor Ort und
            be&shy;sichtigen Ihr Um&shy;zugs&shy;gut und die ört&shy;lichen
            Ge&shy;geben&shy;heiten. Dabei können wir bereits erste
            Eck&shy;punkte fest&shy;halten und ihnen mög&shy;liche Lö&shy;sungen
            auf&shy;zeigen. Im An&shy;schluss setzen wir uns intern
            zu&shy;sammen und er&shy;ar&shy;beiten für sie ein
            mass&shy;ge&shy;schnei&shy;dertes Konzept mit dem
            dazu&shy;ge&shy;hörigen Umzugs&shy;angebot.
          </p>
        </div>
      </div>
    </>
  );
}

export default BueroText;
