import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import HeroAlternativeOne from "components/elements/HeroAlternativeOne";
import MoebelHeroImg from "public/moebelmonteur_von_schenck_und_hansen_baut_ein_regal_auf.jpg";
import MoebelHeroImgLarge from "public/moebelmonteur_von_schenck_und_hansen_baut_ein_regal_auf_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import MoebelIntro from "components/templates/moebelmontage/MoebelIntro";
import MoebelCta from "components/templates/moebelmontage/MoebelCta";
import MoebelText from "components/templates/moebelmontage/MoebelText";
import MoebelFaq from "components/templates/moebelmontage/MoebelFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function MoebelmontageHamburg() {
  return (
    <>
      <Head>
        <title>Möbelmontage Hamburg | Schenck & Hansen</title>
        <meta
          name="description"
          content="Wir sind Ihr Spezialist für die Montage von Möbeln aller Art. ✓Neumöbel ✓Gebrauchtmöbel ✓Privat- und Gewerbekunden - Jetzt mehr erfahren."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <HeroAlternativeOne
        hero_first_header="Möbelmontage Hamburg"
        hero_second_header="Ihre professionelle Möbelmontage"
        hero_text="Rufen Sie uns jetzt an oder schreiben Sie uns und ver&shy;einbaren Sie schnell und einfach einen Termin für Ihre Möbel&shy;montage."
        btn_href="/kontakt"
        hero_image={MoebelHeroImg}
        hero_alt="Ein Möbelmonteur von Schenck & Hansen baut ein Regal auf"
        hero_image_large={MoebelHeroImgLarge}
        hero_alt_large="Ein Möbelmonteur von Schenck & Hansen baut ein Regal auf - Querformat"
      />
      <Reviews />
      <MoebelIntro />
      <MoebelCta />
      <MoebelText />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <MoebelFaq />
          </motion.div>
          <motion.div layout>
            <MoebelCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default MoebelmontageHamburg;
