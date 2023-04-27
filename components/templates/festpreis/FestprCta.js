import cta from "styles/Cta.module.css";
import DoubleButtons from "components/elements/DoubleButtons";

function FestprCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>
          Buchen Sie Jetzt Ihren Umzug in Hamburg zum Festpreis
        </h2>
        <h3 className={cta.subheader}>Sind Sie bereit für Ihren Umzug?</h3>
        <p className={cta.text}>
          Sie wissen schon was Sie brauchen? Nutzen Sie jetzt ganz bequem,
          kostenlos & unverbindlich unseren Umzugs&shy;kosten&shy;rechner. Sie
          erhalten bis zu 100€ Online-Rabatt und in nur wenigen Minuten Ihren
          ganz persönlichen Festpreis. Sie wünschen eine ausführliche
          Umzugs&shy;beratung? Dann reservieren Sie jetzt Ihren persönlichen
          Termin für eine Video&shy;besichtigung mit unseren Umzugsexperten.
        </p>
        <DoubleButtons />
      </div>
    </>
  );
}

export default FestprCta;
