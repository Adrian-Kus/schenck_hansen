import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import UmzEimsHeroImg from "public/mann_am_umzugstag_in_seiner_wohnung_in_eimsbuettel.jpg";
import UmzEimsHeroImgLarge from "public/mann_am_umzugstag_in_seiner_wohnung_in_eimsbuettel_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import UmzEimsIntro from "components/templates/eimsbuettel/UmzEimsIntro";
import UmzEimsText from "components/templates/eimsbuettel/UmzEimsText";
import UmzEimsCta from "components/templates/eimsbuettel/UmzEimsCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import UmzEimsDoubleOne from "public/umzugsvorbereitungen_im_homeoffice.jpg";
import UmzEimsDoubleTwo from "public/umzugskartons_in_neuem_homeoffice_nach_umzug.jpg";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import UmzEimsFaq from "components/templates/eimsbuettel/UmzEimsFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzugsunternehmenEimsbuettel() {
  return (
    <>
      <Head>
        <title>Umzugsunternehmen Eimsbüttel | Schenck & Hansen</title>
        <meta
          name="description"
          content="Umzüge in Eimsbüttel seit über 120 Jahren - ✓Privatumzüge ✓Firmenumzüge ✓Seniorenumzüge - Erfahren Sie jetzt mehr über unsere Leistungen für Ihren Umzug."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Umzugsunternehmen Eimsbüttel"
        hero_second_header="Ihre Umzugsfirma für Eimsbüttel"
        hero_text="Erstellen Sie jetzt online mit nur wenigen Klicks Ihr ganz persön­liches Umzugsangebot."
        hero_image={UmzEimsHeroImg}
        hero_alt="Mann am Umzugstag in seiner Wohnung in Eimsbüttel"
        hero_image_large={UmzEimsHeroImgLarge}
        hero_alt_large="Mann am Umzugstag in seiner Wohnung in Eimsbüttel - Querformat"
      />
      <Reviews />
      <UmzEimsIntro />
      <UmzEimsText />
      <UmzEimsCta />
      <DoubleImgBox
        image_01={UmzEimsDoubleOne}
        alt_01="Umzugsvorbereitungen im Homeoffice"
        image_02={UmzEimsDoubleTwo}
        alt_02="Umzugskartons in neuem Homeoffice nach Umzug"
      />
      <ServiceIntroOne header="Umzugsunternehmen Eimsbüttel - Unsere Leistungen" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <UmzEimsFaq />
          </motion.div>
          <motion.div layout>
            <UmzEimsCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default UmzugsunternehmenEimsbuettel;
