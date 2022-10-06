import text from "styles/TextModuleTwo.module.css";
import Image from "next/image";

function SeniorenText() {
  return (
    <>
      <div className={text.main_grid_without_double_img}>
        <div className={text.text_left_01}>
          <h2 className={text.header}>Seniorenumzug Erfolgsfaktoren</h2>
          <h3 className={text.subheader}>
            Kompetenz, Erfahrung und Netz&shy;werk für Ihren Umzug
          </h3>
          <p className={text.text}>
            Unser Ziel ist es Sie mit unseren Senioren&shy;um&shy;zügen zu
            be&shy;geis&shy;tern. Die Erfolgs&shy;fak&shy;toren: Eine
            ver&shy;traute At&shy;mo&shy;sphäre gepaart mit
            jahr&shy;zehn&shy;te&shy;lange Er&shy;fah&shy;rung, fach&shy;licher
            Kom&shy;pe&shy;tenz und einem großem Netz&shy;werk. Für jeden
            Um&shy;zug stellen wir das richtige Team zu&shy;sammen. So kommen
            Sie nicht nur in den Genuss unserer Um&shy;zugs&shy;ser&shy;vices,
            sondern profi&shy;tieren auch von den Mög&shy;lich&shy;keiten
            unseres Partner&shy;netz&shy;werks. Dies besteht unter anderem aus
            Malern, Elek&shy;tri&shy;kern und Küchen&shy;bauern. Auf Wunsch
            or&shy;ga&shy;ni&shy;sieren wir für Sie alles aus einer Hand.
          </p>
        </div>
        <div className={text.image_right_01}>
          <div className={text.image_right__img}>
            <Image
              src="/umzugsgut_fuer_einen_seniorenumzug.jpg"
              alt="Umzugsgut für einen Seniorenumzug.jpg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/umzugsgut_fuer_einen_seniorenumzug_querformat.jpg"
              alt="Umzugsgut für einen Seniorenumzug - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>
        <div className={text.text_right_02}>
          <h2 className={text.header}>Start Ihres Seniorenumzugs</h2>
          <h3 className={text.subheader}>
            Vor-Ort-Besichtigungen und Beratung
          </h3>
          <p className={text.text}>
            Wir sind davon über&shy;zeugt, dass gute
            Kom&shy;mu&shy;ni&shy;kation aus&shy;schlag&shy;gebend für den
            Erfolg Ihres Um&shy;zugs ist. Im ersten Schritt hören wir
            des&shy;wegen auf&shy;merk&shy;sam zu, fragen nach und
            ver&shy;stehen. Erst wenn wir Ihre Ziele und Wünsche genau
            ver&shy;standen haben, planen wir Ihren Um&shy;zug. Gerne kommen
            unsere Umzugs&shy;experten für eine Vor-Ort-Besich&shy;ti&shy;gung
            zu Ihnen und be&shy;sprechen Ihre Wünsche.
          </p>
        </div>
        <div className={text.image_left_02}>
          <div className={text.image_left__img}>
            <Image
              src="/zwei_senioren_buchen_einen_seniorenumzug.jpg"
              alt="Zwei Senioren buchen einen Seniorenumzug"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/zwei_senioren_buchen_einen_seniorenumzug_querformat.jpg"
              alt="Zwei Senioren buchen einen Seniorenumzug - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>
      </div>
    </>
  );
}

export default SeniorenText;
