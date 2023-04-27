import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import umko from "components/templates/kostenUmzug/UmKo.module.css";
import Hero from "components/elements/Hero";
import KostenUmHeroImg from "public/mann_informiert_sich_ueber_umzugsunternehmen_hamburg_kosten.jpg";
import KostenUmHeroImgLarge from "public/mann_informiert_sich_ueber_umzugsunternehmen_hamburg_kosten_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import KostenUmIntro from "components/templates/kostenUmzug/KostenUmIntro";
import KostenUmTableOne from "components/templates/kostenUmzug/KostenUmTableOne";
import KostenUmTableOneTablet from "components/templates/kostenUmzug/KostenUmTableOneTablet";
import KostenUmTableOnePhone from "components/templates/kostenUmzug/KostenUmTableOnePhone";
import KostenUmCta from "components/templates/kostenUmzug/KostenUmCta";
import KostenUmFaq from "components/templates/kostenUmzug/KostenUmFaq";
import KostenUmTableTwo from "components/templates/kostenUmzug/KostenUmTableTwo";
import KostenUmTableTwoTablet from "components/templates/kostenUmzug/KostenUmTableTwoTablet";
import KostenUmTableTwoPhone from "components/templates/kostenUmzug/KostenUmTableTwoPhone";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzugKosten() {
  return (
    <>
      <Head>
        <title>Umzugsunternehmen Hamburg Kosten | Schenck & Hansen</title>
        <meta
          name="description"
          content="Wie viel kostet ein Umzugs in Hamburg? Erstellen Sie jetzt online Ihr ganz persön­liches Umzugs­angebot. ✓kostenlos & unverbindlich ✓in nur wenigen Minuten"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Umzugsunternehmen Hamburg Kosten"
        hero_second_header="Wie viel kostet eine Umzugs&shy;firma in Hamburg?"
        hero_text="Erstellen Sie jetzt online mit nur wenigen Klicks Ihr ganz persön­liches Umzugsangebot."
        hero_image={KostenUmHeroImg}
        hero_alt="Mann informiert sich über Kosten Umzugsunternehmen Hamburg"
        hero_image_large={KostenUmHeroImgLarge}
        hero_alt_large="Mann informiert sich über Kosten Umzugsunternehmen Hamburg - Querformat"
      />
      <Reviews />
      <KostenUmIntro />
      <div className={umko.desktop}>
        <KostenUmTableOne />
      </div>
      <div className={umko.tablet}>
        <KostenUmTableOneTablet />
      </div>
      <div className={umko.phone}>
        <KostenUmTableOnePhone />
      </div>
      <KostenUmCta />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <KostenUmFaq />
          </motion.div>
          <motion.div layout className={umko.desktop}>
            <KostenUmTableTwo />
          </motion.div>
          <motion.div layout className={umko.tablet}>
            <KostenUmTableTwoTablet />
          </motion.div>
          <motion.div layout className={umko.phone}>
            <KostenUmTableTwoPhone />
          </motion.div>
          <motion.div layout>
            <KostenUmCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default UmzugKosten;
