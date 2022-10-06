import int from "styles/Intro.module.css";

function MoeTransIntro() {
  return (
    <>
      <div className={int.frame}>
        <h2 className={int.frame__header}>Ihr Möbeltransport in Hamburg</h2>
        <h3 className={int.frame__subheader}>
          Unsere Stärke: Indi&shy;vi&shy;duelle Möbel&shy;trans&shy;porte in
          Hamburg
        </h3>
        <p className={int.frame__text}>
          Ihre große Kommode muss an das andere Ende der Stadt ge&shy;bracht
          werden? Oder das soeben bei Ebay gekaufte Sofa muss morgen
          ab&shy;geholt werden? Sie planen kurz&shy;fristig einen
          Mini&shy;um&shy;zug? Unsere Profis kümmern sich um Ihren
          Möbel&shy;trans&shy;port in Hamburg - schnell, verläss&shy;lich und
          un&shy;kompli&shy;ziert. Selbst, wenn Ihr Wunsch auf den ersten Blick
          nicht um&shy;setzbar erscheint – fragen Sie uns einfach.
        </p>
      </div>
    </>
  );
}

export default MoeTransIntro;
