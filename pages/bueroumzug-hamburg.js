import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import HeroAlternativeOne from "components/elements/HeroAlternativeOne";
import BueroHeroImg from "public/buero_vor_einem_bueroumzug.jpg";
import BueroHeroImgLarge from "public/buero_vor_einem_bueroumzug_large.jpg";
import Reviews from "components/elements/Reviews.js";
import BueroIntro from "components/templates/bueroumzug/BueroIntro";
import BueroText from "components/templates/bueroumzug/BueroText";
import BueroCta from "components/templates/bueroumzug/BueroCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import BueroDoubleOne from "public/buero_bei_einem_umzug_in_hamburg.jpg";
import BueroDoubleTwo from "public/umzugskartons_und_bueroeinrichtung_bei_einem_umzug.jpg";
import ServiceIntroTwo from "components/elements/ServiceIntroTwo";
import BueroServices from "components/templates/bueroumzug/BueroServices";
import BueroFaq from "components/templates/bueroumzug/BueroFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function BueroumzugHamburg() {
  return (
    <>
      <Head>
        <title>Büroumzug Hamburg | Schenck & Hansen Umzüge</title>
        <meta
          name="description"
          content="Erfahren Sie hier alles über unsere Lösungen für an­spruchs­volle und kom­plexe Firmen­um­züge. Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <HeroAlternativeOne
        hero_first_header="Büroumzug Hamburg"
        hero_second_header="Ihr Partner für Firmenumzüge"
        hero_text="Wählen Sie jetzt Ihren Wunschtermin für eine kostenlose & unverbindliche Beratung bei Ihnen vor Ort."
        btn_href="https://angebot.schenck-hansen.de/besichtigungstermin/"
        hero_image={BueroHeroImg}
        hero_alt="Büro vor einem Büroumzug"
        hero_image_large={BueroHeroImgLarge}
        hero_alt_large="Büro vor einem Büroumzug"
      />
      <Reviews />
      <BueroIntro />
      <BueroText />
      <BueroCta />
      <DoubleImgBox
        image_01={BueroDoubleOne}
        alt_01="Büro bei einem Umzug in Hamburg"
        image_02={BueroDoubleTwo}
        alt_02="Umzugskartons und Büroeinrichtung bei einem Umzug"
      />
      <ServiceIntroTwo header="Unsere Leistungen für Ihren Büroumzug in Hamburg " />
      <BueroServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <BueroFaq />
          </motion.div>
          <motion.div layout>
            <BueroCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default BueroumzugHamburg;
