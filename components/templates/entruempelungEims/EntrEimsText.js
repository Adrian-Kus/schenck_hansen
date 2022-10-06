import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function EntrEimsText() {
  return (
    <>
      <div className={text.main_grid_without_double_img}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>Entrümpeln für Firmen</h2>
          <h3 className={text.subheader}>
            Solide Lösung für Ihre Firmen&shy;ent&shy;rümpe&shy;lung in Hamburg
            Eimsbüttel
          </h3>
          <p className={text.text}>
            Große Projekte brauchen pass&shy;genaue Lö&shy;sungen. Vom kleinen
            Laden&shy;lokal, über Büros, bis hin zur großen Lager&shy;halle.
            Unser Team unter&shy;stützt Sie auch bei anspruchs&shy;vollen
            Entrümpe&shy;lungen in Hamburg Eims&shy;büttel. Wir wissen worauf es
            ankommt und stehen mit Rat und Tat zur Seite. Ler­nen Sie uns
            kennen! setzen Sie sich noch heute mit uns in Verbin&shy;dung.
            Gemeinsam ermitteln wir Ihren Bedarf und erstellen Ihnen ein
            Angebot, individuell und unver&shy;bindlich, basierend auf Ihren
            Anfor&shy;de&shy;rungen.
          </p>
        </div>

        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/container_mit_sperrmuell_bei_einer_entruempelung_in_eimsbuettel.jpg"
              alt="Container mit Sperrmüll bei einer Entrümpelung in Eimsbuettel"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/container_mit_sperrmuell_bei_einer_entruempelung_in_eimsbuettel_querformat.jpg"
              alt="Container mit Sperrmüll bei einer Entrümpelung in Eimsbuettel - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_right_02}>
          <h2 className={text.header}>Entrümpelung Eimsbüttel</h2>
          <h3 className={text.subheader}>Entrümpelungen und noch viel mehr</h3>
          <p className={text.text}>
            Wir bieten nicht nur klassische Ent&shy;rümpe&shy;lung von
            Sperr&shy;müll, sondern gehen noch einige Schritte weiter. Unsere
            Fach&shy;arbeiter können auf Ihren Wunsch gerne Boden&shy;beläge wie
            PVC oder Teppich&shy;boden entfernen, Wand&shy;vertä&shy;felungen
            abhängen und den Klein&shy;kram für Sie sorten&shy;rein
            verpa&shy;cken. Dies spart Ihnen Zeit und sorgt gleich&shy;zeitig
            dafür, dass nach&shy;haltig und umwelt&shy;schonend das
            Entsorgungs&shy;gut am Re&shy;cycling&shy;hof entsorgt werden kann.
            So schonen wir Res&shy;sour&shy;cen und Ihre Entsorgung trägt zum
            Recycling&shy;kreis&shy;lauf bei.
          </p>
        </div>

        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/schenck_und_hansen_entruempler_entfernt_alte_tapeten.jpg"
              alt="Schenck und Hansen Entrümpler entfernt alte Tapeten"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/schenck_und_hansen_entruempler_entfernt_alte_tapeten_querformat.jpg"
              alt="Schenck und Hansen Entrümpler entfernt alte Tapeten - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>
      </div>
    </>
  );
}

export default EntrEimsText;
