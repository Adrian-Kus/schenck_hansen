import int from "styles/Intro.module.css";

function MoebelIntro() {
  return (
    <>
      <div className={int.frame}>
        <h2 className={int.frame__header}>Ihre Möbelmontage in Hamburg</h2>
        <h3 className={int.frame__subheader}>
          Schenck & Hansen - ein Name, der für qualitative Möbel&shy;montage
          steht
        </h3>
        <p className={int.frame__text}>
          Schenck & Hansen ist mehr als nur ein Umzugs&shy;unter&shy;nehmen mit
          einem Fokus auf Qualität. Wir sind ein Full-Service-Dienst&shy;leister
          mit profes&shy;sio&shy;nellen All&shy;roundern, Fach&shy;kräften mit
          jahre&shy;langer Erfahrung und Idealisten mit der Liebe zum Beruf. Die
          lang&shy;jährige Erfahrung unserer Mit&shy;ar&shy;beiter in der
          Montage und Demontage von Möbeln ermöglicht es unseren eigenen
          An&shy;sprüchen gerecht zum werden. Und wir stellen hohe
          An&shy;sprüche an unsere Leis&shy;tungen und an unseren Service. Aus
          einem Grund: damit Sie zufrieden sind.
        </p>
      </div>
    </>
  );
}

export default MoebelIntro;
