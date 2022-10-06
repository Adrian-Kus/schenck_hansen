import top from "components/templates/contact/ContactTop.module.css";

function ContactTop() {
  return (
    <>
      <div className={top.container}>
        <h1 className={top.first_header}>Schenck & Hansen - Kontakt</h1>
        <h2 className={top.second_header}>
          Sie haben Fragen? <br />
          Wir die passenden Antworten.
        </h2>
        <p className={top.text}>
          Sie möchten einen Termin re&shy;ser&shy;vie&shy;ren? Sie wünschen eine
          Vor-Ort-Besich&shy;ti&shy;gung? Sie haben Fragen, An&shy;regungen oder
          Kritik? Schreiben Sie uns oder rufen Sie uns ein&shy;fach an. Wir
          freuen uns von Ihnen zu hören und werden uns umgehend bei Ihnen
          melden.
        </p>
      </div>
    </>
  );
}

export default ContactTop;
