import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import HeroAlternativeTwo from "components/elements/HeroAlternativeTwo";
import BundesHeroImg from "public/soldatin_bereit_fuer_umzug_mit_schenck_und_hansen.jpg";
import BundesHeroImgLarge from "public/soldatin_bereit_fuer_umzug_mit_schenck_und_hansen_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import BundesIntro from "components/templates/bundeswehrumzug/BundesIntro";
import BundesText from "components/templates/bundeswehrumzug/BundesText";
import BundesCta from "components/templates/bundeswehrumzug/BundesCta";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import BundesFaq from "components/templates/bundeswehrumzug/BundesFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function Bundeswehrumzug() {
  return (
    <>
      <Head>
        <title>Umzüge für Soldaten | Schenck & Hansen</title>
        <meta
          name="description"
          content="Wir sind Ihr spezialisierter Partner für Soldaten- und Diplomatenumzüge. Erfahren Sie hier alles über unsere Leistungen für Angehörige der Streitkräfte."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <HeroAlternativeTwo
        hero_first_header="Umzüge für Soldaten"
        hero_second_header="Der Umzugs&shy;partner für Soldaten und Diplomaten"
        hero_text="Reservieren Sie jetzt Ihren persönlichen Wunsch&shy;termin für eine Videobesichtigung oder buchen Sie eine unverbindliche Beratung direkt bei Ihnen vor Ort."
        btn_href_left="https://angebot.schenck-hansen.de/online-besichtigung/"
        btn_href_right="https://angebot.schenck-hansen.de/besichtigungstermin/"
        hero_image={BundesHeroImg}
        hero_alt="Soldatin bereit für Umzug mit Schenck & Hansen"
        hero_image_large={BundesHeroImgLarge}
        hero_alt_large="Soldatin bereit für Umzug mit Schenck & Hansen - Querformat"
      />
      <Reviews />
      <BundesIntro />
      <BundesText />
      <BundesCta />
      <ServiceIntroOne header="Alle Leistungen für Ihren Bundeswehrumzug" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <BundesFaq />
          </motion.div>
          <motion.div layout>
            <BundesCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default Bundeswehrumzug;
