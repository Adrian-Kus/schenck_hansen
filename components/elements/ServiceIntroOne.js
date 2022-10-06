import serint from "components/elements/ServiceIntro.module.css";

function ServiceIntroOne({ header }) {
  return (
    <>
      <div className={serint.frame}>
        <h2 className={serint.frame__header}>{header}</h2>
        <h3 className={serint.frame__subheader}>
          Umfangreiche Umzugs&shy;leis&shy;tungen für Ihre Bedürfnisse.
        </h3>
        <p className={serint.frame__text}>
          Erzählen Sie uns von Ihrem Umzug und wir sagen Ihnen welche
          Umzugs&shy;leis&shy;tungen Ihr Leben erleichtern können. Gerne beraten
          wir Sie umfang&shy;reich und helfen Ihnen die passenden Leistungen
          aus&shy;zuwählen. Hier finden Sie vorab schon einmal eine kleine
          Übersicht.
        </p>
      </div>
    </>
  );
}

export default ServiceIntroOne;
