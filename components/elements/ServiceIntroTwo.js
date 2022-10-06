import serint from "components/elements/ServiceIntro.module.css";

function ServiceIntroTwo({ header }) {
  return (
    <>
      <div className={serint.frame}>
        <h2 className={serint.frame__header}>{header}</h2>
        <h3 className={serint.frame__subheader}>
          Unsere wahre Größe steckt in jedem Detail. Unsere Leistungen.
        </h3>
        <p className={serint.frame__text}>
          Erzählen Sie uns doch etwas von Ihrem Umzugs&shy;vorhaben. Gerne
          beraten wir Sie umfangreich und helfen Ihnen die passenden Leistungen
          auszuwählen. Hier finden Sie vorab schon einmal eine kleine Übersicht.
        </p>
      </div>
    </>
  );
}

export default ServiceIntroTwo;
