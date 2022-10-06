import Image from "next/image";
import mov from "components/elements/MovingServices.module.css";

function BueroServices() {
  return (
    <>
      <div className={mov.frame}>
        <div className={mov.frame__grid}>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/verpackungsmaterial.svg"
                  alt="Icon Verpackungsmaterial"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>Verpackungsmaterial</h4>
            <p className={mov.box__text}>
              Von den Umzugskartons über die Luft&shy;polster&shy;folie bis hin
              zu unseren praktischen Matrat&shy;zen&shy;schutz&shy;hüllen. Bei
              uns bekommen Sie alles was Sie für Ihren Umzug brauchen.
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/möbelmontage.svg"
                  alt="Icon Möbelmontage"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>Möbelmontage</h4>
            <p className={mov.box__text}>
              Unsere Möbelmonteure bauen Ihre Möbel fach&shy;gerecht ab und am
              neuen Ort wieder für Sie auf. Gerne übernehmen wir für Sie auch
              Neu&shy;möbel&shy;montagen.
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/ein_und_auspackservice.svg"
                  alt="Icon Ein- und Auspackservice"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>Ein- und Auspackservice</h4>
            <p className={mov.box__text}>
              Unser Team packt für Sie mit größter Sorgfalt und Genauigkeit all
              Ihr Hab und Gut ein und auch wieder aus
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/entrümpelung.svg"
                  alt="Icon Entrümpelung"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>Entrümpelung</h4>
            <p className={mov.box__text}>
              Sie möchten nicht alle Möbel mitnehmen oder haben Sperr&shy;müll?
              Wir entrümpeln und hinter&shy;lassen alles besenrein. Gerne
              entfernen wir auch alte Bodenbeläge oder
              Wand&shy;vertäfe&shy;lungen.
            </p>
          </div>
          <div className={mov.box}>
            <div className={mov.box__circle}>
              <div className={mov.box__img}>
                <Image
                  src="/einlagerung.svg"
                  alt="Icon Einlagerung"
                  width="500"
                  height="500"
                ></Image>
              </div>
            </div>
            <h4 className={mov.box__header}>Einlagerung</h4>
            <p className={mov.box__text}>
              Sie brauchen ein sicheres, trockenes und warmes
              Zwischen&shy;lager? Für ein paar Tage oder auch ein paar Monate?
              Kein Problem. Wir haben eine Lösung für Sie.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BueroServices;
