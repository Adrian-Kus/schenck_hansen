import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function BundesText() {
  return (
    <>
      <div className={text.main_grid_without_double_img}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>Service für Soldaten</h2>
          <h3 className={text.subheader}>
            Volle Leistung für Diplomaten und Soldaten
          </h3>
          <p className={text.text}>
            Wir bieten Ihnen umfangreiche Leistungen für Ihren Umzug. Lehnen Sie
            sich zurück und profitieren Sie von unserem sorgfältigen
            Packservice, dem gekonnten Ab- und Aufbau Ihres gesamten Mobiliars
            oder einer Einlagerung. Mit Qualitätsbewusstsein, Exzellenz,
            langjähriger Erfahrung und umfassenden Sachverstand erhalten Sie
            einen Soldatenumzug, der keine Wünsche offen lässt.
          </p>
        </div>
        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/umzugsunternehmen_fuer_bundeswehrumzuege.jpg"
              alt="Umzugsunternehmen für Bundeswehrumzüge.jpg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/umzugsunternehmen_fuer_bundeswehrumzuege_querformat.jpg"
              alt="Umzugsunternehmen für Bundeswehrumzüge - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>
        <div className={text.text_right_02}>
          <h2 className={text.header}>Soldatenumzüge - Die Beratung</h2>
          <h3 className={text.subheader}>
            Kompetent und bequem - unsere Beratung für Soldaten und Diplomaten
          </h3>
          <p className={text.text}>
            Sie haben Fragen? Wir die Antworten. Wir nehmen uns reichlich Zeit
            für eine ausführliche Beratung und Videobesichtigung noch eh der
            Umzug losgeht. Unsere Experten helfen Ihnen, die Leistungen zu
            wählen, die aus Ihren Wünschen den perfekte Umzug schaffen.
            Interesse? Dann setzen Sie sich noch heute mit uns in Verbindung.
          </p>
        </div>

        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/soldat_mit_familie_bereitet_sich_auf_umzug_vor.jpg"
              alt="Soldat mit Familie bereitet sich auf Umzug vor.jpg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/soldat_mit_familie_bereitet_sich_auf_umzug_vor_querformat.jpg"
              alt="Soldat mit Familie bereitet sich auf Umzug vor - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>
      </div>
    </>
  );
}

export default BundesText;
