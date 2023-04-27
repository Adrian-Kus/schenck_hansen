import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import FestprHeroImg from "public/zufriedenes_paar_nach_umzug_hamburg_festpreis.jpg";
import FestprHeroImgLarge from "public/zufriedenes_paar_nach_umzug_hamburg_festpreis_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import FestprIntro from "components/templates/festpreis/FestprIntro";
import FestprText from "components/templates/festpreis/FestprText";
import FestprCta from "components/templates/festpreis/FestprCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import FestprDoubleOne from "public/umzugsgut_fuer_einen_umzug_zum_festpreis.jpg";
import FestprDoubleTwo from "public/schenck_und_hansen_umzugkartons_fuer_umzug_hamburg.jpg";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import FestprFaq from "components/templates/festpreis/FestprFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzugFestpreis() {
  return (
    <>
      <Head>
        <title>Umzug Hamburg Festpreis | Schenck & Hansen</title>
        <meta
          name="description"
          content="Umzüge in Hamburg zum Fest­preis. Erfahren Sie jetzt alles über unsere Leistungen. ✓Möbelmontage ✓Verpackungsmaterial ✓Anschlussservice und noch viel mehr"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Umzug Hamburg Festpreis"
        hero_second_header="Ziehen Sie ganz bequem zum Festpreis um"
        hero_text="Erstellen Sie jetzt online mit nur wenigen Klicks Ihr ganz persön­liches Umzugsangebot."
        hero_image={FestprHeroImg}
        hero_alt="Zufriedenes Paar nach einem Umzug in Hamburg zum Festpreis"
        hero_image_large={FestprHeroImgLarge}
        hero_alt_large="Zufriedenes Paar nach einem Umzug in Hamburg zum Festpreis - Querformat"
      />
      <Reviews />
      <FestprIntro />
      <FestprText />
      <FestprCta />
      <DoubleImgBox
        image_01={FestprDoubleOne}
        alt_01="Umzugsgut für einen Umzug zum Festpreis"
        image_02={FestprDoubleTwo}
        alt_02="Schenck und Hansen Umzugkartons für Umzug Hamburg"
      />
      <ServiceIntroOne header="Unsere Leistungen für Ihren Umzug zum Festpreis" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <FestprFaq />
          </motion.div>
          <motion.div layout>
            <FestprCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default UmzugFestpreis;
