import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import UmzAhrensHeroImg from "public/aelteres_ehepaar_bei_einem_umzug_in_ahrensburg.jpg";
import UmzAhrensHeroImgLarge from "public/aelteres_ehepaar_bei_einem_umzug_in_ahrensburg_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import UmzAhrensIntro from "components/templates/ahrensburg/UmzAhrensIntro";
import UmzAhrensText from "components/templates/ahrensburg/UmzAhrensText";
import UmzAhrensCta from "components/templates/ahrensburg/UmzAhrensCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import UmzAhrensDoubleOne from "public/einpackservice_der_umzugsfirma_ahrensburg.jpg";
import UmzAhrensDoubleTwo from "public/haushaltsgegenstaende_nach_einem_umzug_in_ahrensburg.jpg";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import UmzAhrensFaq from "components/templates/ahrensburg/UmzAhrensFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzugsunternehmenAhrensburg() {
  return (
    <>
      <Head>
        <title>Umzugsunternehmen in Ahrensburg | Schenck & Hansen</title>
        <meta
          name="description"
          content="Erstellen Sie jetzt online Ihr ganz persön­liches Umzugs­angebot. ✓Festpreis ✓Möbelmontage ✓Packservice ✓Lampenmontage ✓Verpackungsmaterial und vieles mehr."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Umzugsunternehmen Ahrensburg"
        hero_second_header="Starke Leistungen für Ihren Umzug in Ahrensburg"
        hero_image={UmzAhrensHeroImg}
        hero_alt="Älteres Ehepaar bei einem Umzug in Ahrensburg"
        hero_image_large={UmzAhrensHeroImgLarge}
        hero_alt_large="Älteres Ehepaar bei einem Umzug in Ahrensburg - Querformat"
      />
      <Reviews />
      <UmzAhrensIntro />
      <UmzAhrensText />
      <UmzAhrensCta />
      <DoubleImgBox
        image_01={UmzAhrensDoubleOne}
        alt_01="Einpackservice der Umzugsfirma Ahrensburg"
        image_02={UmzAhrensDoubleTwo}
        alt_02="Haushaltsgegenstände nach einem Umzug in Ahrensburg"
      />
      <ServiceIntroOne header="Umzugsunternehmen Ahrensburg - Unsere Leistungen" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <UmzAhrensFaq />
          </motion.div>
          <motion.div layout>
            <UmzAhrensCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default UmzugsunternehmenAhrensburg;
