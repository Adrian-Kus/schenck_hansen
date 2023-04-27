import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import UmzAltoHeroImg from "public/sofa_und_umzugkartons_bereit_fuer_den_umzug_in_hamburg_altona.jpg";
import UmzAltoHeroImgLarge from "public/sofa_und_umzugkartons_bereit_fuer_den_umzug_in_hamburg_altona_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import UmzAltoIntro from "components/templates/altona/UmzAltoIntro";
import UmzAltoText from "components/templates/altona/UmzAltoText";
import UmzAltoCta from "components/templates/altona/UmzAltoCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import UmzAltoDoubleOne from "public/kartons_und_sofa_fuer_den_transport_mit_dem_umzugsunternehmen.jpg";
import UmzAltoDoubleTwo from "public/regal_topfpflanzen_und_umzugkartons_in_altona.jpg";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import UmzAltoFaq from "components/templates/altona/UmzAltoFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzugsunternehmenAltona() {
  return (
    <>
      <Head>
        <title>Umzugsunternehmen Altona | Schenck & Hansen Umzüge</title>
        <meta
          name="description"
          content="Erstellen Sie jetzt online Ihr ganz persön­liches Umzugs­angebot für Ihren Umzug in Altona. ✓kostenlos & unverbindlich ✓Festpreis ✓mit nur wenigen Klicks"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Umzugsunternehmen Altona"
        hero_second_header="Umzüge, die Sie lieben werden"
        hero_text="Erstellen Sie jetzt online mit nur wenigen Klicks Ihr ganz persön­liches Umzugsangebot."
        hero_image={UmzAltoHeroImg}
        hero_alt="Sofa und Umzugkartons bereit für den Umzug in Hamburg Altona"
        hero_image_large={UmzAltoHeroImgLarge}
        hero_alt_large="Sofa und Umzugkartons bereit für den Umzug in Hamburg Altona - Querformat"
      />
      <Reviews />
      <UmzAltoIntro />
      <UmzAltoText />
      <UmzAltoCta />
      <DoubleImgBox
        image_01={UmzAltoDoubleOne}
        alt_01="Kartons und Sofa für den Transport mit dem Umzugsunternehmen"
        image_02={UmzAltoDoubleTwo}
        alt_02="Regal, Topfpflanzen und Umzugkartons in Altona"
      />
      <ServiceIntroOne header="Umzugsunternehmen Altona - Unsere Leistungen" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <UmzAltoFaq />
          </motion.div>
          <motion.div layout>
            <UmzAltoCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default UmzugsunternehmenAltona;
