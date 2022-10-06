import serint from "components/elements/ServiceIntro.module.css";

function RemovalServicesIntro(props) {
  return (
    <>
      <div className={serint.frame}>
        <h2 className={serint.frame__header}>{props.header}</h2>
        <h3 className={serint.frame__subheader}>{props.subheader}</h3>
        <p className={serint.frame__text}>
          Für alle Ihre Wünsche hat unser Team eine passende Lösung. Gerne
          beraten wir Sie umfangreich und helfen Ihnen die Leis&shy;tungen
          auszuwählen, die Sie wirklich brauchen. Hier finden Sie vorab schon
          einmal eine kleine Übersicht.
        </p>
      </div>
    </>
  );
}

export default RemovalServicesIntro;
