import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import IndexHero from "components/templates/index/IndexHero";
import IndexIntro from "components/templates/index/IndexIntro";
import IndexText from "components/templates/index/IndexText";
import IndexCta from "components/templates/index/IndexCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import IndexFaq from "components/templates/index/IndexFaq";
import IndexBottomText from "components/templates/index/IndexBottomText";
import IndexDoubleOne from "public/umzugskarton_des_umzugsunternehmens_schenck_und_hansen.jpg";
import IndexDoubleTwo from "public/umzugsunternehmen_hamburg.jpg";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

const serviceIntroheader = "Umzugsunternehmen Hamburg - Unsere Leistungen";

export default function Home() {
  function addIndexJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "MovingCompany",
        name: "Schenck & Hansen KG",
        image:
          "https://schenck-hansen.de/_next/image?url=%2Fzwei_umzugshelfer_tragen_einen_tisch.jpg&w=2048&q=75",
        "@id": "",
        url: "https://schenck-hansen.de/",
        telephone: "+49 40 664712",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bargkoppelweg 56",
          addressLocality: "Hamburg",
          postalCode: "22145",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 53.6211551,
          longitude: 10.1561786,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "17:00",
        },
    }
  `,
    };
  }

  return (
    <>
      <Head>
        <title>Umzugsunternehmen Hamburg | Schenck & Hansen Umzüge</title>
        <meta
          name="description"
          content="Erstellen Sie jetzt online in nur wenigen Minuten Ihr ganz persön­liches Umzugsangebot zum Festpreis. ✓Privatumzüge ✓Firmenumzüge ✓Seniorenumzüge"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addIndexJsonLd()}
          key="index-jsonld"
        />
      </Head>
      <Navbar />
      <IndexHero />
      <IndexIntro />
      <IndexText />
      <IndexCta />
      <DoubleImgBox
        image_01={IndexDoubleOne}
        alt_01="Umzugskarton des Umzugsunternehmens Schenck & Hansen"
        image_02={IndexDoubleTwo}
        alt_02="Umzugsunternehmen Hamburg"
      />
      <ServiceIntroOne header={serviceIntroheader} />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <IndexFaq />
          </motion.div>
          <motion.div layout>
            <IndexBottomText />
            <IndexCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}
