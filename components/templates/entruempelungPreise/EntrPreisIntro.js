import int from "styles/Intro.module.css";

function EntrPreisIntro() {
  return (
    <>
      <div className={int.frame}>
        <h2 className={int.frame__header}>
          Ihre Entrümpelung in Hamburg - Unsere Preise
        </h2>
        <h3 className={int.frame__subheader}>
          Unsere Preise für Ent&shy;rüm&shy;pe&shy;lungen - so
          trans&shy;pa&shy;rent wie möglich
        </h3>
        <p className={int.frame__text}>
          Schnell. Gründlich. Fach&shy;gerecht. Unsere Kunden wollen nicht nur
          irgend&shy;eine Ent&shy;rüm&shy;pe&shy;lung, sie wollen es richtig
          ordent&shy;lich. Diesem Ver&shy;trauen gerecht zu werden, ist unser
          täg&shy;licher An&shy;trieb. Aber was kostet das ganze
          eigent&shy;lich? „Es kommt drauf an!“ Kein Kunde, kein
          Ein&shy;satz&shy;ort und keine Ent&shy;rüm&shy;pe&shy;lung ist
          iden&shy;tisch und auch Ihre Wünsche und Er&shy;war&shy;tungen an
          unsere Dienst&shy;leistung sind in&shy;di&shy;vi&shy;duell. Deshalb
          können die Preise stark vari&shy;ieren. Dennoch haben wir hier eine
          kleine Ori&shy;en&shy;tierungs&shy;hilfe für Sie.
        </p>
      </div>
    </>
  );
}

export default EntrPreisIntro;
