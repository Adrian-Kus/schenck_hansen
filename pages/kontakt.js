import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import ContactTop from "components/templates/contact/ContactTop";
import ContactForm from "components/templates/contact/ContactForm";
import MainCta from "components/elements/MainCta";

function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt - Schenck & Hansen Umzüge</title>
        <meta
          name="description"
          content="Hier finden Sie das Schenck & Hansen Kontaktformular. Schreiben Sie uns oder rufen Sie einfach an. Wir freuen uns auf Sie. Tel.: 040/664712"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <ContactTop />
      <ContactForm />
      <MainCta header="Unser Angebot für Ihren Umzug" />
    </>
  );
}

export default Kontakt;
