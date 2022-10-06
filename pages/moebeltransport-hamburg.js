import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import HeroAlternativeOne from "components/elements/HeroAlternativeOne";
import MoeTransHeroImg from "public/sprinter_fuer_den_moebeltransport_in_hamburg.jpg";
import MoeTransHeroImgLarge from "public/sprinter_fuer_den_moebeltransport_in_hamburg_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import MoeTransIntro from "components/templates/moebeltransport/MoeTransIntro";
import MoeTransCta from "components/templates/moebeltransport/MoeTransCta";
import MoeTransText from "components/templates/moebeltransport/MoeTransText";
import MoeTransFaq from "components/templates/moebeltransport/MoeTransFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function Moebeltransport() {
  return (
    <>
      <Head>
        <title>Möbeltransport Hamburg | Schenck & Hansen</title>
        <meta
          name="description"
          content="Wir trans­por­tie­ren Ihre Möbel in Hamburg ✓schnell ✓verlässlich ✓unkompliziert ✓kurzfristige Termine ✓Verpackungsmaterial - Erfahren Sie jetzt mehr."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <HeroAlternativeOne
        hero_first_header="Möbeltransport Hamburg"
        hero_second_header="Wir trans&shy;por&shy;tie&shy;ren Ihre Möbel in Hamburg"
        hero_text="Rufen Sie uns jetzt an oder schreiben Sie uns und ver&shy;ein&shy;baren Sie schnell und einfach einen Termin für Ihren Möbel&shy;transport."
        btn_href="/kontakt"
        hero_image={MoeTransHeroImg}
        hero_alt="Schenck & Hansen Transporter für Kleintransporte in Hamburg"
        hero_image_large={MoeTransHeroImgLarge}
        hero_alt_large="Schenck & Hansen Transporter für Kleintransporte in Hamburg - Querformat"
      />
      <Reviews />
      <MoeTransIntro />
      <MoeTransCta />
      <MoeTransText />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <MoeTransFaq />
          </motion.div>
          <motion.div layout>
            <MoeTransCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default Moebeltransport;
