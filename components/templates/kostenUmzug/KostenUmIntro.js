import int from "components/templates/kostenUmzug/KostenUmIntro.module.css";

function KostenUmIntro() {
  return (
    <>
      <div className={int.frame}>
        <h2 className={int.frame__header}>
          Ihr Umzugsunternehmen Hamburg - Die Kosten
        </h2>
        <h3 className={int.frame__subheader}>
          Ihr Umzug in Hamburg: Preise & Kosten
        </h3>
        <div className={int.frame__box}>
          <div className={int.frame__box_left}>
            <p className={int.text}>
              Als Full-Service Umzugs&shy;unter&shy;nehmen stehen wir Ihnen zur
              Seite - mit einer Auswahl an viel&shy;fältigen und
              prak&shy;tischen Leis&shy;tungen, die Ihnen das Leben ein&shy;fach
              machen. Wir wollen nur das beste Ergebnis für unsere Kunden.
            </p>
            <p className={int.text}>
              Den klas&shy;sischen Umzug einer 1 Zimmer Wohnung inner&shy;halb
              Hamburgs er&shy;halten Sie schon ab 450 Euro. Und den Um&shy;zug
              einer 3 Zimmer Wohnung ab 900 Euro.
            </p>
            <p className={int.text}>
              Beim klas&shy;sischen Um&shy;zug über&shy;nehmen wir für Sie die
              Be&shy;la&shy;dung, den Trans&shy;port sowie die Ent&shy;ladung
              Ihres Eigen&shy;tums. Vor&shy;berei&shy;tungs&shy;ar&shy;beiten
              sind beim klas&shy;sischen Um&shy;zug durch Sie zu leisten.
            </p>
          </div>
          <div className={int.frame__box_right}>
            <p className={int.text}>
              Machen Sie sich das Leben leich&shy;ter und lassen Sie unsere
              er&shy;fah&shy;renen Mit&shy;ar&shy;bei&shy;ter Ihren Um&shy;zug
              vor&shy;be&shy;rei&shy;ten.
            </p>
            <p className={int.text}>
              Natür&shy;lich bieten wir Ihnen zu&shy;sätz&shy;liche
              Umzugs&shy;leis&shy;tungen an um Ihnen Zeit zu sparen und den
              Um&shy;zugs&shy;stress zu nehmen.
            </p>
            <p className={int.text}>
              Dazu zählen unter anderem die Or&shy;ga&shy;ni&shy;sa&shy;tion der
              Park&shy;möglich&shy;keiten (Halte&shy;verbots&shy;zone), Ab- und
              Auf&shy;bau von Möbel&shy;stücken, Pack&shy;ser&shy;vice, die
              Ge&shy;stel&shy;lung von Um&shy;zugs&shy;kartons und
              Ver&shy;pa&shy;ckungs&shy;ma&shy;terial sowie weiteren
              Dienst&shy;leis&shy;tungen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default KostenUmIntro;
