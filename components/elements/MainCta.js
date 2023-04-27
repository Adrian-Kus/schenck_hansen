import cta from "styles/Cta.module.css";
import DoubleButtons from "components/elements/DoubleButtons";

const utmtrack01 = "https://www.drache-stier.de";
const utmtrack02 = "https://clevernisto.de";

function MainCta(props) {
  return (
    <>
      <div className={cta.frame}>
        <h2 className={cta.header}>{props.header}</h2>
        <h3 className={cta.subheader}>Sind Sie bereit für Ihren Umzug?</h3>
        <p className={cta.text}>
          Sie wissen schon was Sie brauchen? Nutzen Sie jetzt ganz bequem,
          kostenlos & unverbindlich unseren Umzugskostenrechner. Sie erhalten
          bis zu 100€ Online-Rabatt und in nur wenigen Minuten Ihren ganz
          persönlichen Festpreis. Sie wünschen eine ausführliche Umzugsberatung?
          Dann reservieren Sie jetzt Ihren persönlichen Termin für eine
          Videobesichtigung mit unseren Experten vom Umzugsunternehmen Hamburg.
        </p>
        <DoubleButtons a_001={utmtrack01} a_002={utmtrack02} />
      </div>
    </>
  );
}

export default MainCta;
