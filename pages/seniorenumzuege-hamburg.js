import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import SeniorenHeroImg from "public/seniorenumzuege_in_hamburg_mit_schenck_und_hansen.jpg";
import SeniorenHeroImgLarge from "public/seniorenumzuege_in_hamburg_mit_schenck_und_hansen_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import SeniorenIntro from "components/templates/seniorenumzug/SeniorenIntro";
import SeniorenText from "components/templates/seniorenumzug/SeniorenText";
import SeniorenCta from "components/templates/seniorenumzug/SeniorenCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import SeniorenDoubleOne from "public/einpackservice_fuer_seniorenumzuege_in_hamburg.jpg";
import SeniorenDoubleTwo from "public/umzugskartons_in_einem_raum_vor_dem_umzug.jpg";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import SeniorenFaq from "components/templates/seniorenumzug/SeniorenFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function SeniorenumzugHamburg() {
  return (
    <>
      <Head>
        <title>Seniorenumzug Hamburg | Schenck & Hansen</title>
        <meta
          name="description"
          content="Ganz­heit­licher Service von A bis Z, höchste Professionalität - Unsere Seniorenumzüge bieten alles was Sie brauchen. Erfahren Sie jetzt mehr."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Seniorenumzüge Hamburg"
        hero_second_header="Senioren&shy;um&shy;züge, die keine Wünsche offen lassen"
        hero_image={SeniorenHeroImg}
        hero_alt="Seniorenumzüge in Hamburg mit Schenck und Hansen"
        hero_image_large={SeniorenHeroImgLarge}
        hero_alt_large="Seniorenumzüge in Hamburg mit Schenck und Hansen - Querformat"
      />
      <Reviews />
      <SeniorenIntro />
      <SeniorenText />
      <SeniorenCta />
      <DoubleImgBox
        image_01={SeniorenDoubleOne}
        alt_01="Einpackservice für Seniorenumzüge in Hamburg"
        image_02={SeniorenDoubleTwo}
        alt_02="Umzugskartons in einem Raum vor dem Umzug"
      />
      <ServiceIntroOne header="Unsere Leistungen für Ihren Seniorenumzug in Hamburg" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <SeniorenFaq />
          </motion.div>
          <motion.div layout>
            <SeniorenCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default SeniorenumzugHamburg;
