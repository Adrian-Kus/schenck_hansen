import int from "styles/Intro.module.css";

function EntruempelungIntro() {
  return (
    <>
      <div className={int.frame}>
        <h2 className={int.frame__header}>Ihre Entrümpelung in Hamburg</h2>
        <h3 className={int.frame__subheader}>
          Wir kümmern uns um Ihre Entrümpelung in Hamburg
        </h3>
        <p className={int.frame__text}>
          Wir schaffen neue Frei&shy;räume, in die Sie sich ver&shy;lieben
          werden. Zu&shy;ver&shy;läs&shy;sig, schnell und besen&shy;rein. Wir
          ent&shy;rüm&shy;peln Häuser, Woh&shy;nungen, Dach&shy;böden und
          Keller, Schuppen, Garagen und Gärten. Und das alles ganz schön
          un&shy;kom&shy;pli&shy;ziert. Sie wählen Ihren Wunsch&shy;termin für
          eine un&shy;ver&shy;bind&shy;liche Video-Besich&shy;ti&shy;gung. Wir
          hören Ihnen zu, be&shy;gut&shy;achten was Sie los werden möchten und
          beraten Sie. Im An&shy;schluss er&shy;halten Sie unser Angebot.
        </p>
      </div>
    </>
  );
}

export default EntruempelungIntro;
