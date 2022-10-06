import Image from "next/image";
import mov from "components/elements/MovingServices.module.css";

function MovingServices() {
  return (
    <>
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
          <h4 className={mov.box__header}>Verpackungs&shy;material</h4>
          <p className={mov.box__text}>
            Von den Umzugskartons über die Luft&shy;polster&shy;folie bis hin zu
            unseren praktischen Matrat&shy;zen&shy;schutz&shy;hüllen. Bei uns
            bekommen Sie alles was Sie für Ihren Umzug brauchen.
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
                src="/lampenmontage.svg"
                alt="Icon Lampenmontage"
                width="500"
                height="500"
              ></Image>
            </div>
          </div>
          <h4 className={mov.box__header}>Lampenmontage</h4>
          <p className={mov.box__text}>
            Auf Wunsch demontieren wir Ihre Lampen und montieren Sie wieder in
            Ihrem neuen Zuhause. Gerne montieren wir für Sie auch neu
            angeschaffte Lampen.
          </p>
        </div>
        <div className={mov.box}>
          <div className={mov.box__circle}>
            <div className={mov.box__img}>
              <Image
                src="/anschlussservice.svg"
                alt="Icon Anschlussservice"
                width="500"
                height="500"
              ></Image>
            </div>
          </div>
          <h4 className={mov.box__header}>Anschlussservice</h4>
          <p className={mov.box__text}>
            Damit Ihre Geschirr&shy;spül&shy;maschine und Ihre
            Wasch&shy;maschine nicht nur am richtigen Platz stehen, sondern auch
            funktionieren schließen wir Elektro&shy;geräte auf Wunsch auch
            direkt für Sie an.
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
            Unser Team packt für Sie mit größter Sorgfalt und Genauig&shy;keit
            all Ihr Hab und Gut ein und auch wieder aus
          </p>
        </div>
        <div className={mov.box}>
          <div className={mov.box__circle}>
            <div className={mov.box__img}>
              <Image
                src="/dübelservice.svg"
                alt="Icon Dübelservice"
                width="500"
                height="500"
              ></Image>
            </div>
          </div>
          <h4 className={mov.box__header}>Dübelservice</h4>
          <p className={mov.box__text}>
            Nutzen Sie unseren Dübel&shy;service. Wir befestigen Ihre
            Regalbretter im neuen Zuhause wieder an der Wand oder schrauben
            Ihren Beamer wieder sicher an die Decke.
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
            Sie brauchen ein sicheres, trockenes und warmes Zwischen&shy;lager?
            Für ein paar Tage oder auch ein paar Monate? Kein Problem. Wir haben
            eine Lösung für Sie.
          </p>
        </div>
        <div className={mov.box}>
          <div className={mov.box__circle}>
            <div className={mov.box__img}>
              <Image
                src="/küchenmontage.svg"
                alt="Icon Küchenmontage"
                width="500"
                height="500"
              ></Image>
            </div>
          </div>
          <h4 className={mov.box__header}>Küchenmontage</h4>
          <p className={mov.box__text}>
            Profitieren Sie von unserem Netz&shy;werk und erhalten Sie alles aus
            einer Hand. Gerne vermitteln wir Ihnen einen spezialisierten
            Küchen&shy;bauer.
          </p>
        </div>
      </div>
    </>
  );
}

export default MovingServices;
