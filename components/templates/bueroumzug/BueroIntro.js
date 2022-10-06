import int from "styles/Intro.module.css";

function BueroIntro() {
  return (
    <>
      <div className={int.frame}>
        <h2 className={int.frame__header}>Ihr Büroumzug in Hamburg</h2>
        <h3 className={int.frame__subheader}>
          Verlässliche Umzugs&shy;lösungen für Firmen mit höchsten Ansprüchen
        </h3>
        <p className={int.frame__text}>
          Wir sind Ihr Umzugs&shy;unter&shy;nehmen mit Fokus auf
          hoch&shy;wertige Privat&shy;umzüge und an&shy;spruchs&shy;volle
          Büro&shy;umzüge. Über 120 Jahre Erfahrung machen uns zum idealen
          Weg&shy;begleiter für an&shy;spruchs&shy;volle und kom&shy;plexe
          Firmen&shy;um&shy;züge in Hamburg. Von der Beratung, über die
          Ab&shy;laufs&shy;planung bis zur Um&shy;zugs&shy;durch&shy;führung
          decken wir alle relevanten Leis&shy;tungen in hoher
          Arbeits&shy;qualität ab. So können wir Ihnen immer genau die
          Leis&shy;tungen bieten, die Ihren Büro&shy;umzug auch im laufenden
          Betrieb zu einem vollen Erfolg werden lässt.
        </p>
      </div>
    </>
  );
}

export default BueroIntro;
