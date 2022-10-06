import text from "styles/TextModuleOne.module.css";
import Image from "next/image";

function MoeTransText() {
  return (
    <>
      <div className={text.main_grid_under_cta_img_left}>
        <div className={text.image_left_01}>
          <div className={text.image_left__img}>
            <Image
              src="/schenck_und_hansen_moebeltransporter_in_hamburg.jpg"
              alt="Schenck und Hansen Möbeltransporter in Hamburg.jpg"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/schenck_und_hansen_moebeltransporter_in_hamburg_querformat.jpg"
              alt="Schenck und Hansen Möbeltransporter in Hamburg - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_01}>
          <h2 className={text.header}>Full-Service Möbeltransporte</h2>
          <h3 className={text.subheader}>
            Alles was Sie brauchen rund um Ihren Möbel&shy;trans&shy;port in
            Hamburg
          </h3>
          <p className={text.text}>
            Unsere Arbeit muss nicht mit Ihrem Möbel&shy;trans&shy;port enden.
            Vielleicht interes&shy;siert Sie auch für unseren Pack&shy;service,
            be&shy;nötigen Ver&shy;pa&shy;ckungs&shy;material oder denken über
            eine Zwi&shy;schen&shy;lagerung nach? Wir be&shy;gleiten Sie von A
            bis Z bei Ihrem Vor&shy;haben. Sie erhalten von uns
            indivi&shy;duelle Leis&shy;tungen zu fairen Preisen –
            termin&shy;gerecht, trans&shy;parent und zuver&shy;lässig.
          </p>
        </div>

        <div className={text.image_right_02}>
          <div className={text.image_right__img}>
            <Image
              src="/lieferwagen_fuer_einen_moebeltransport.jpg"
              alt="Lieferwagen für einen Möbeltransport"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/lieferwagen_fuer_einen_moebeltransport_querformat.jpg"
              alt="Lieferwagen für einen Möbeltransport - Querformat"
              width="1100"
              height="688"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_left_02}>
          <h2 className={text.header}>Der Möbeltransport Hamburg</h2>
          <h3 className={text.subheader}>
            Hochwertige Umzüge, acht&shy;sam und sorg&shy;fältig umgesetzt
          </h3>
          <p className={text.text}>
            Wir verstehen uns als Dienst&shy;leister mit höchster
            Profes&shy;sio&shy;nalität, der stets exzellente Ergebnisse liefert.
            Auf die Sicher&shy;heit Ihres Trans&shy;portguts legen wir deswegen
            immer ein ganz besonderes Augen&shy;merk. So können auch Sie sich
            sicher sein, dass Ihr Hab und Gut ein&shy;wand&shy;frei am Zielort
            ankommt.
          </p>
        </div>
      </div>
    </>
  );
}

export default MoeTransText;
