import Image from "next/image";
import mov from "components/elements/MovingServices.module.css";

function RemovalServices() {
  return (
    <>
      <div className={mov.frame}>
        <div className={mov.frame__grid}>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/entfernen_von_bodenbelaegen.svg"
                  alt="Icon Entfernen von Bodenbelägen"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>Entfernen von Boden&shy;belägen</h4>
            <p className={mov.box__text}>
              Egal ob Teppich, PVC, Laminat oder Parkett. Zu unseren
              Dienst&shy;leis&shy;tungen gehört auch das Ent&shy;fernen und
              Ent&shy;sorgen Ihrer alten Boden&shy;beläge.
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/entfernen_von_tapeten_und_wandverkleidungen.svg"
                  alt="Icon Entfernen von Tapeten und Wandverkleidungen"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>
              Entfernen von Tapeten und Verkleidungen
            </h4>
            <p className={mov.box__text}>
              Sorge Sie sich um nichts, wir küm&shy;mern uns um alles. So
              ent&shy;fernen und ent&shy;sorgen wir auch alte Tapeten, Wand- und
              Decken&shy;ver&shy;kleidungen.
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/umweltgerechte_entsorgung.svg"
                  alt="Icon Umweltgerechte Entsorgung"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>Umweltgerechte Entsorgung</h4>
            <p className={mov.box__text}>
              Wir entsorgen fachgerecht und umwelt&shy;bewusst. Um eine
              mög&shy;lichst hohe Recycling&shy;quote zu erreichen,
              sor&shy;tieren wir bevor wir entsorgen.
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/faire_und_transparente_festpreise.svg"
                  alt="Icon Faire und transparente Festpreise"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>
              Transparente, faire Fest&shy;preise
            </h4>
            <p className={mov.box__text}>
              Vor jeder Entrümpelung machen wir eine
              Video&shy;be&shy;sich&shy;tigung oder kommen direkt zu Ihnen vor
              Ort. So erhalten Sie immer auf einen verläss&shy;lichen und
              trans&shy;parenten Fest&shy;preis.
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/besenreine_uebergabe.svg"
                  alt="Icon Besenreine Übergabe"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>Besenreine Übergabe</h4>
            <p className={mov.box__text}>
              Wir nehmen alles mit. Alles was wir hinter&shy;lassen, sind
              besen&shy;reine Räume und ein guter Eindruck.
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/abbau_von_moebeln_kuechen_und_lampen.svg"
                  alt="Icon Abbau von Möbel, Küchen und Lampen"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>
              Abbau von Möbeln, Küchen und Lampen
            </h4>
            <p className={mov.box__text}>
              Ganz gleich ob Einbau&shy;küchen, Betten oder
              Kleider&shy;schränke. Wir zer&shy;legen Ihr altes
              Mo&shy;bi&shy;liar und entsorgen fach&shy;gerecht Ihren
              Sperr&shy;müll.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RemovalServices;
