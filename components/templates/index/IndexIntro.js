import int from "styles/Intro.module.css";

function IndexIntro() {
  return (
    <>
      <div className={int.frame}>
        <h2 className={int.frame__header}>Ihr Umzugsunternehmen in Hamburg</h2>
        <h3 className={int.frame__subheader}>
          Willkommen bei Schenck & Hansen
        </h3>
        <p className={int.frame__text}>
          Wir sind Ihr Full-Service-Umzugs&shy;unter&shy;nehmen aus der
          Hanse&shy;stadt Hamburg. Um&shy;züge, regional, na&shy;ti&shy;onal und
          auch inter&shy;na&shy;ti&shy;onal sind nicht nur unser daily Business,
          sondern auch unsere Leiden&shy;schaft. Quali&shy;tät, Termin&shy;treue
          und Zu&shy;ver&shy;lässig&shy;keit stehen bei uns an obers&shy;ter
          Stelle. Unsere Kom&shy;petenz und Er&shy;fah&shy;rung sind unser
          Kapital, unser Team unser Stolz. So machen wir für Sie jeden Tag
          großes möglich … und genau das zeichnet uns aus.
        </p>
      </div>
    </>
  );
}

export default IndexIntro;
