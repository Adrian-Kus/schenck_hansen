import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import imp from "styles/Imprint.module.css";

function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum - Schenck & Hansen</title>
        <meta
          name="description"
          content="Hier finden Sie das Impressum der Schenck & Hansen KG"
        />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Navbar />
      <div className={imp.main}>
        <div className={imp.head}>
          <h1 className={imp.head__main}>Impressum</h1>
          <h2 className={imp.head__sub}>Angaben gemäß § 5 TMG</h2>
        </div>
        <div className={imp.address}>
          <h4>Firmensitz</h4>
          <p>
            Schenck & Hansen KG
            <br />
            Bargkoppelweg 56
            <br />
            22145 Hamburg
          </p>
        </div>
        <div className={imp.contact}>
          <h4>Kontakt</h4>
          <p>
            E-Mail:&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-Mail"
              href="mailto:info@schenck-hansen.de"
            >
              info@schenck-hansen.de
            </a>
            <br />
            Telefon:&nbsp;
            <a aria-label="Telefon" href="tel:040-664712">
              (040) 66 47 12
            </a>
            <br />
            Web:&nbsp;
            <a aria-label="Internet-Adresse" href="https://schenck-hansen.de">
              www.schenck-hansen.de
            </a>
          </p>
        </div>
        <div className={imp.register}>
          <h4>Eintragung im Handelsregister</h4>
          <p>
            Amtsgericht Hamburg
            <br />
            Registernummer: HRA 103826
          </p>
        </div>
        <div className={imp.ceo}>
          <h4>Inhaber</h4>
          <p>Kristof Erdmann</p>
        </div>
        <div className={imp.tax}>
          <h4>Umsatzsteuer-ID</h4>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
            DE249601777
          </p>
        </div>
        <div className={imp.resolution}>
          <h4>Streitschlichtung</h4>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung bereit:{" "}
            <a
              aria-label="Internet-Adresse"
              href="https://ec.europa.eu/consumers/odr"
            >
              ec.europa.eu/consumers/odr
            </a>
            <br />
            Wir sind weder verpflichtet noch bereit an einem
            Streit&shy;beilegungs&shy;verfahren vor einer
            Verbraucher&shy;schlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </>
  );
}

export default Impressum;
