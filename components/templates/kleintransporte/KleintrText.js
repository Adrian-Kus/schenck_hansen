import text from "styles/TextModuleOne.module.css";
import Image from "next/image";

function KleintrText() {
  return (
    <>
      <div className={text.main_grid_under_cta_img_left}>
        <div className={text.image_left_01}>
          <div className={text.image_left__img}>
            <Image
              src="/schenck_und_hansen_kleintransporter.jpg"
              alt="Schenck & Hansen Kleintransporter"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_left__img_large}>
            <Image
              src="/schenck_und_hansen_kleintransporter_querformat.jpg"
              alt="Schenck & Hansen Kleintransporter - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_left__bg}></div>
        </div>

        <div className={text.text_right_01}>
          <h2 className={text.header}>Full-Service für den Kleintransport</h2>
          <h3 className={text.subheader}>
            Wir bieten Ihnen weit mehr als nur einen Klein&shy;trans&shy;port
          </h3>
          <p className={text.text}>
            Unsere Kernbereiche um&shy;fassen eine Viel&shy;zahl an
            Leis&shy;tungen, die alle eins gemein&shy;sam haben:
            Zuver&shy;lässig&shy;keit und Termin&shy;treue, hoch&shy;wertige
            Arbeits&shy;qualität und keine ver&shy;steckten Kosten. Als
            Full-Service-Dienst&shy;leister bieten wir Ihnen noch mehr
            Leis&shy;tungen, die Ihren Klein&shy;trans&shy;port in Hamburg
            einfacher machen. Sie benötigen Ver&shy;pa&shy;ckungs&shy;material
            oder brauchen jemanden, der Ihre Möbel aufbaut? Erzählen Sie uns von
            Ihrem Vorhaben und wir sagen Ihnen, wie wir Sie dabei
            unter&shy;stützen können.
          </p>
        </div>

        <div className={text.image_right_02}>
          <div className={text.image_right__img}>
            <Image
              src="/kleintransporte_hamburg_schenck_und_hansen_sprinter.jpg"
              alt="Kleintransporte Hamburg Schenck & Hansen Sprinter"
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={text.image_right__img_large}>
            <Image
              src="/kleintransporte_hamburg_schenck_und_hansen_sprinter_querformat.jpg"
              alt="Kleintransporte Hamburg Schenck & Hansen Sprinter - Querformat"
              width="1100"
              height="687"
            ></Image>
          </div>
          <div className={text.image_right__bg}></div>
        </div>

        <div className={text.text_left_02}>
          <h2 className={text.header}>Kleintransport Hamburg</h2>
          <h3 className={text.subheader}>
            Ihr Kleintransport in sicheren Händen
          </h3>
          <p className={text.text}>
            Als Ihr Partner mit lang&shy;jähriger Erfahrung in dem Bereich
            Klein&shy;trans&shy;porte können wir auf ein viel&shy;seitiges und
            viel&shy;schich&shy;tiges Fach&shy;wissen zurück&shy;greifen. Wir
            arbeiten präzise, effizient und mit einem aus&shy;geprägtem Sinn für
            Sicher&shy;heit. So können Se sch ganz darauf ver&shy;lassen, dass
            Ihr Trans&shy;port sicher das Ziel erreicht.
          </p>
        </div>
      </div>
    </>
  );
}

export default KleintrText;
