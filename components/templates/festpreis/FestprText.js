import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function FestprText() {
  return (
    <>
      <div className={text.main_grid}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>Service zum Festpreis</h2>
          <h3 className={text.subheader}>
            Optimale Umzugs&shy;lösungen zum Fest&shy;preis
          </h3>
          <p className={text.text}>
            Wir bieten Ihnen das gesamte Leis&shy;tungs&shy;spek&shy;trum für
            Ihren Um&shy;zug. Profi&shy;tieren Sie von unserem sorg&shy;fältigen
            Pack&shy;ser&shy;vice, dem ge&shy;konnten Ab- und Auf&shy;bau Ihres
            gesamten Mo&shy;bi&shy;liars oder einer Ein&shy;la&shy;ge&shy;rung.
            Von uns erhalten Sie alles aus einer Hand. Mit Sorg&shy;falt und
            Genauig&shy;keit, lang&shy;jähriger Er&shy;fah&shy;rung und
            um&shy;fas&shy;senden Sach&shy;ver&shy;stand er&shy;halten Sie einen
            Um&shy;zug zum Fest&shy;preis, den Sie lieben werden.
          </p>
        </div>

        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/vorbereitungen_fuer_einen_umzug_in_hamburg_zum_festpreis.jpg"
              alt="Vorbereitungen für einen Umzug in Hamburg zum Festpreis"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/vorbereitungen_fuer_einen_umzug_in_hamburg_zum_festpreis_querformat.jpg"
              alt="Vorbereitungen für einen Umzug in Hamburg zum Festpreis - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_right_02}>
          <h2 className={text.header}>Ein Festpreis - Alles drin</h2>
          <h3 className={text.subheader}>
            Volle Transparenz - keine ver&shy;steck&shy;ten Kosten
          </h3>
          <p className={text.text}>
            Qualität bei Schenck & Hansen ist für Sie plan&shy;bar und
            effek&shy;tiv. Denn unsere Leis&shy;tung er&shy;hal&shy;ten Sie zum
            Fest&shy;preis. Damit setzen Sie auf ein
            Um&shy;zugs&shy;unter&shy;nehmen, das von An&shy;fang an fair und
            trans&shy;parent ar&shy;bei&shy;tet. Un&shy;a&shy;bhängig davon, ob
            wir im Stau stehen oder der Um&shy;zug etwas länger als ge&shy;plant
            dauert, Sie haben immer die volle Kosten&shy;kon&shy;trolle.
          </p>
        </div>

        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/frau_bucht_umzugsunternehmen_zum_festpreis.jpg"
              alt="Frau bucht Umzugsunternehmen zum Festpreis"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/frau_bucht_umzugsunternehmen_zum_festpreis_querformat.jpg"
              alt="Frau bucht Umzugsunternehmen zum Festpreis - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_left_03}>
          <h2 className={text.header}>Umzug Festpreis - Beratung</h2>
          <h3 className={text.subheader}>
            Kompetente Beratung ganz bequem von zu Hause per
            Video&shy;besichtigung
          </h3>
          <p className={text.text}>
            Gerne nehmen wir uns reich&shy;lich Zeit für eine
            aus&shy;führ&shy;liche Beratung und Video&shy;be&shy;sichti&shy;gung
            noch eh der Um&shy;zug los&shy;geht. Sie er&shy;zählen uns von Ihren
            Wünschen. Wir be&shy;gut&shy;achten Ihr Hab und Gut und wählen die
            Leis&shy;tungen aus, die perfekt an Ihren Bedürf&shy;nisse
            aus&shy;ge&shy;richtet sind. Das Ergeb&shy;nis: Der perfekte
            Um&shy;zug. Interesse? Dann setzen Sie sich noch heute mit uns in
            Ver&shy;bindung.
          </p>
        </div>

        <div className={text.image_right_03}>
          <div className={text.image_right__img}>
            <Image
              src="/zufriedene_kunden_des_umzugunternehmens_schenck_und_hansen.jpg"
              alt="Zufriedene Kunden des Umzugunternehmens Schenck & Hansen"
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

export default FestprText;
