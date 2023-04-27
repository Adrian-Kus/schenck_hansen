import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import SpediHeroImg from "public/umzug_mit_der_moebelspedition_hamburg.jpg";
import SpediHeroImgLarge from "public/umzug_mit_der_moebelspedition_hamburg_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import SpediIntro from "components/templates/spedition/SpediIntro";
import SpediText from "components/templates/spedition/SpediText";
import SpediCta from "components/templates/spedition/SpediCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import SpediDoubleOne from "public/moebelspedition_hamburg_sofa_und_umzugsgut.jpg";
import SpediDoubleTwo from "public/regal_und_umzugskartons_in_wohnung_in_hamburg.jpg";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import SpediFaq from "components/templates/spedition/SpediFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function MoebelspeditionHamburg() {
  return (
    <>
      <Head>
        <title>Möbelspedition Hamburg | Schenck & Hansen</title>
        <meta
          name="description"
          content="Erfahren Sie jetzt alles über unsere Umzugsleistungen. ✓Verpackungsmaterial ✓Möbelmontage ✓Packservice ✓Anschlussservice ✓Entrümpelung und vieles mehr"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Möbelspedition Hamburg"
        hero_second_header="Die Möbel&shy;spe&shy;di&shy;tion  an Ihrer Seite"
        hero_text="Erstellen Sie jetzt online mit nur wenigen Klicks Ihr ganz persön­liches Umzugsangebot."
        hero_image={SpediHeroImg}
        hero_alt="Umzug mit der Möbelspedition Hamburg"
        hero_image_large={SpediHeroImgLarge}
        hero_alt_large="Umzug mit der Möbelspedition Hamburg - Querformat"
      />
      <Reviews />
      <SpediIntro />
      <SpediText />
      <SpediCta />
      <DoubleImgBox
        image_01={SpediDoubleOne}
        alt_01="Möbelspedition Hamburg Sofa und Umzugsgut"
        image_02={SpediDoubleTwo}
        alt_02="Regal und Umzugskartons in Wohnung in Hamburg"
      />
      <ServiceIntroOne header="Möbelspedition Hamburg - Unsere Leistungen" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <SpediFaq />
          </motion.div>
          <motion.div layout>
            <SpediCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default MoebelspeditionHamburg;
