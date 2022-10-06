import cta from "styles/Cta.module.css";
import DoubleButtons from "components/elements/DoubleButtons";

function IndexCta() {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>
          Buchen Sie Jetzt Ihr Umzugsunternehmen Hamburg
        </h2>
        <h3 className={cta.subheader}>Sind Sie bereit für Ihren Umzug?</h3>
        <p className={cta.text}>
          Sie wissen schon was Sie brauchen? Nutzen Sie jetzt ganz bequem,
          kostenlos & unverbindlich unseren Umzugskostenrechner. Sie erhalten
          10% Online-Rabatt und in nur wenigen Minuten Ihren ganz persönlichen
          Festpreis. Sie wünschen eine ausführliche Umzugsberatung? Dann
          reservieren Sie jetzt Ihren persönlichen Termin für eine
          Videobesichtigung mit unseren Umzugsexperten.
        </p>
        <DoubleButtons />
      </div>
    </>
  );
}

export default IndexCta;
