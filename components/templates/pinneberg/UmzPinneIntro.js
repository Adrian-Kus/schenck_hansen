import int from "styles/Intro.module.css";

function UmzPinneIntro() {
  return (
    <>
      <div className={int.frame}>
        <h2 className={int.frame__header}>
          Ihr Umzugsunternehmen für Pinneberg
        </h2>
        <h3 className={int.frame__subheader}>
          Willkommen bei Schenck & Hansen
        </h3>
        <p className={int.frame__text}>
          Als Umzugsunternehmen für Pinneberg, haben wir uns Umzügen auf
          höchstem Niveau verschrieben. Zuver&shy;lässig&shy;keit,
          Termin&shy;treue und Sorgfalt, gepaart mit über 120 Jahre
          Umzugs&shy;erfahrung sind Garant für eine höchst profes&shy;sionelle
          Umsetzung. Privat&shy;um&shy;züge, Senioren&shy;um&shy;züge,
          Büro&shy;um&shy;züge - Wir sind Dienst&shy;leister aus
          Lei&shy;den&shy;schaft. Immer mit dem Ziel, Kundinnen und Kunden zu
          begeistern, zu verblüffen und immer ein bisschen mehr zu bieten, als
          erwartet.
        </p>
      </div>
    </>
  );
}

export default UmzPinneIntro;
