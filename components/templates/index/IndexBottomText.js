import style from "styles/BottomText.module.css";

function IndexBottomText() {
  return (
    <>
      <div className={style.frame}>
        <h2 className={style.frame__subheader}>
          Ihr Umzugsunternehmen für Nah- und Fernumzüge
        </h2>
        <p className={style.frame__text}>
          Mit dem Umzugsunternehmen Hamburg haben Sie nicht nur einen starken
          Partner für Privat-, Senioren-, und Büroumzüge innerhalb Hamburgs an
          Ihrer Seite, auch Fernumzüge gehören zu unserem Angebot. Seit
          Jahrzehnten begeistern wir unsere Kunden regelmäßig mit reibungslosen
          Qualitätsumzügen in alle Regionen Deutschlands. Gerne beraten wir auch
          Sie zu unseren vielfältigen Umzugslösungen.
        </p>
        <h2 className={style.frame__subheader}>
          Ihr Umzugsunternehmen in Hamburg für die ganze Welt
        </h2>
        <p className={style.frame__text}>
          Ihr neues Zuhause befindet sich in der Schweiz, Frankreich oder sogar
          in Kanada? Als erfahrenes Umzugsunternehmen Hamburg besitzen wir das
          notwendige Know-How für internationale Umzüge. Wir bieten Ihnen das
          gesamte Leistungsspektrum angefangen beim Transport, über den
          Packservice bis hin zu der Übernahme aller Formalitäten wie
          beispielsweise der Zollabwicklung. In Zusammenarbeit mit unseren
          verlässlichen Partnern vor Ort können wir internationale Umzüge jeder
          Art und jeder Größe anbieten.
        </p>
        <h2 className={style.frame__subheader}>
          Das Umzugsunternehmen für Soldaten und Diplomaten
        </h2>
        <p className={style.frame__text}>
          Als Hamburger Umzugsunternehmen sind wir auch auf Umzüge von Soldaten
          und Diplomaten spezialisiert und können Sie bei allen Fragen rund um
          eine Versetzung an einen anderen Dienstort im In- oder Ausland
          kompetent beraten. Unsere Leis­tungs­bausteine reichen dazu vom
          klas­sischen Um­zug über den prak­tischen Pack­service bis hin zum
          Full-Service, der keine Wünsche offen lässt. Als Umzugsunternehmen
          übernehmen wir die Zollformalitäten, kümmern uns um Ausfuhr- und
          Einfuhrbestimmungen und bieten Ihnen immer die passende
          Versicherungsmöglichkeit.
        </p>
      </div>
    </>
  );
}

export default IndexBottomText;
