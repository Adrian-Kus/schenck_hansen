import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import HeroAlternativeOne from "components/elements/HeroAlternativeOne";
import KleintrHeroImg from "public/schenck_und_hansen_transporter_fuer_kleintransporte_in_hamburg.jpg";
import KleintrHeroImgLarge from "public/schenck_und_hansen_transporter_fuer_kleintransporte_in_hamburg_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import KleintrIntro from "components/templates/kleintransporte/KleintrIntro";
import KleintrCta from "components/templates/kleintransporte/KleintrCta";
import KleintrText from "components/templates/kleintransporte/KleintrText";
import KleintrFaq from "components/templates/kleintransporte/KleintrFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function Kleintransporte() {
  return (
    <>
      <Head>
        <title>Kleintransport Hamburg mit Schenck & Hansen</title>
        <meta
          name="description"
          content="Kleintransporte für jeden Anlass ✓flexibel ✓kurzfristig ✓zuverlässig & günstig ✓Privat- & Firmenkunden - Erfahren Sie jetzt alles über unsere Leistungen."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <HeroAlternativeOne
        hero_first_header="Kleintransporte Hamburg"
        hero_second_header="Kleintransporte für jeden Anlass"
        hero_text="Rufen Sie uns jetzt an oder schreiben Sie uns und ver&shy;ein&shy;baren Sie schnell und einfach einen Termin für Ihren Klein&shy;transport."
        btn_href="/kontakt"
        hero_image={KleintrHeroImg}
        hero_alt="Schenck & Hansen Transporter für Kleintransporte in Hamburg"
        hero_image_large={KleintrHeroImgLarge}
        hero_alt_large="Schenck & Hansen Transporter für Kleintransporte in Hamburg - Querformat"
      />
      <Reviews />
      <KleintrIntro />
      <KleintrCta />
      <KleintrText />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <KleintrFaq />
          </motion.div>
          <motion.div layout>
            <KleintrCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default Kleintransporte;
