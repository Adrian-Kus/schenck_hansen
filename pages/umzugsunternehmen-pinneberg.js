import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import UmzPinneHeroImg from "public/wohnungseinrichtung_verpackt_fuer_den_umzug_in_pinneberg.jpg";
import UmzPinneHeroImgLarge from "public/wohnungseinrichtung_verpackt_fuer_den_umzug_in_pinneberg_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import UmzPinneIntro from "components/templates/pinneberg/UmzPinneIntro";
import UmzPinneText from "components/templates/pinneberg/UmzPinneText";
import UmzPinneCta from "components/templates/pinneberg/UmzPinneCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import UmzPinneDoubleOne from "public/kartons_des_schenck_und_hansen_umzugsunternehmens_in_pinneberg.jpg";
import UmzPinneDoubleTwo from "public/umzugkartons_in_einem_leeren_zimmer.jpg";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import UmzPinneFaq from "components/templates/pinneberg/UmzPinneFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzugsunternehmenPinneberg() {
  return (
    <>
      <Head>
        <title>Umzugsunternehmen Pinneberg | Schenck & Hansen</title>
        <meta
          name="description"
          content="Erstellen Sie jetzt mit unserem Umzugskalkulator Ihr ganz persön­liches Angebot. ✓Festpreis ✓in nur wenigen Minuten ✓10% Online-Rabatt ✓unverbindlich"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Umzugsunternehmen Pinneberg"
        hero_second_header="Wir kümmern uns um Ihren Umzug in Pinneberg"
        hero_image={UmzPinneHeroImg}
        hero_alt="Wohnungseinrichtung verpackt für den Umzug in Pinneberg"
        hero_image_large={UmzPinneHeroImgLarge}
        hero_alt_large="Wohnungseinrichtung verpackt für den Umzug in Pinneberg - Querformat"
      />
      <Reviews />
      <UmzPinneIntro />
      <UmzPinneText />
      <UmzPinneCta />
      <DoubleImgBox
        image_01={UmzPinneDoubleOne}
        alt_01="Kartons des Schenck & Hansen Umzugsunternehmens in Pinneberg"
        image_02={UmzPinneDoubleTwo}
        alt_02="Umzugkartons in einem leeren Zimmer"
      />
      <ServiceIntroOne header="Umzugsunternehmen Pinneberg - Unsere Leistungen" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <UmzPinneFaq />
          </motion.div>
          <motion.div layout>
            <UmzPinneCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default UmzugsunternehmenPinneberg;
