import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import PrivatHeroImg from "public/privatumzug_hamburg.jpg";
import PrivatHeroImgLarge from "public/vorbereitung_eines_privatumzuges.jpg";
import Reviews from "components/elements/Reviews.js";
import PrivatIntro from "components/templates/privatumzug/PrivatIntro";
import PrivatText from "components/templates/privatumzug/PrivatText";
import PrivatCta from "components/templates/privatumzug/PrivatCta";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import DoubleImgBox from "components/elements/DoubleImgBox";
import PrivatDoubleOne from "public/glueckliches_paerchen_zwischen_leeren_umzugkartons_nach_einem_privatumzug.jpg";
import PrivatDoubleTwo from "public/mann_bei_der_videobesichtigung_fuer_seinen_privatumzug.jpg";
import PrivatFaq from "components/templates/privatumzug/PrivatFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function PrivatumzugHamburg() {
  return (
    <>
      <Head>
        <title>Privatumzug Hamburg mit Schenck & Hansen</title>
        <meta
          name="description"
          content="Erfahren Sie jetzt alles über unsere Leistungen für Ihren Privatumzug. ✓Möbelmontage ✓Umzugskartons ✓Packservice ✓Einlagerung ✓Anschlussservice ✓Festpreise"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="PRIVATUMZUG MIT SCHENCK & HANSEN"
        hero_second_header="Privat­um­zug Hamburg"
        hero_text="Wir kümmern uns um Ihren Privatumzug in Hamburg. Nutzen Sie jetzt unseren Rechner und erstellen Sie mit nur wenigen Klicks Ihr ganz persön­liches Online-Angebot."
        hero_image={PrivatHeroImg}
        hero_alt="Privatumzug Hamburg"
        hero_image_large={PrivatHeroImgLarge}
        hero_alt_large="Vorbereitung eines Privatumzuges"
      />
      <Reviews />
      <PrivatIntro />
      <PrivatText />
      <PrivatCta />
      <DoubleImgBox
        image_01={PrivatDoubleOne}
        alt_01="Glückliches Pärchen zwischen leeren Umzugkartons nach einem Privatumzug"
        image_02={PrivatDoubleTwo}
        alt_02="Mann bei der Videobesichtigung für seinen Privatumzug"
      />
      <ServiceIntroOne header="Unsere Leistungen für Ihren Privatumzug in Hamburg" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <PrivatFaq />
          </motion.div>
          <motion.div layout>
            <PrivatCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default PrivatumzugHamburg;
