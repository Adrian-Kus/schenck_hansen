import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import HeroAlternativeOne from "components/elements/HeroAlternativeOne";
import EntruempelungHeroImg from "public/entruempelung_hamburg_mit_schenck_und_hansen.jpg";
import EntruempelungHeroImgLarge from "public/entruempelung_hamburg_mit_schenck_und_hansen_querformat.jpg";
import Reviews from "components/elements/Reviews";
import EntruempelungIntro from "components/templates/entruempelung/EntruempelungIntro";
import EntruempelungText from "components/templates/entruempelung/EntruempelungText";
import EntruempelungCta from "components/templates/entruempelung/EntruempelungCta";
import RemovalServicesIntro from "components/elements/RemovalServicesIntro";
import RemovalServices from "components/elements/RemovalServices";
import EntruempelungFaq from "components/templates/entruempelung/EntruempelungFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function EntruempelungHamburg() {
  return (
    <>
      <Head>
        <title>Entrümpelung Hamburg | Schenck & Hansen</title>
        <meta
          name="description"
          content="Wir entrümpeln zuverlässig, schnell & günstig ✓Privat- & Gewerbe ✓Haushaltsauflösungen ✓Entsorgung ✓Entfernen von Bodenbelägen & Tapeten - Jetzt mehr erfahren."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <HeroAlternativeOne
        hero_first_header="Entrümpelung Hamburg"
        hero_second_header="Wir entrümpeln zuverlässig, schnell und besenrein"
        hero_text="Reservieren Sie online, ganz bequem mit nur wenigen Klicks, Ihren Wunschtermin für eine kostenlose & unverbindliche Videobesichtigung."
        btn_href="https://angebot.schenck-hansen.de/online-besichtigung/"
        hero_image={EntruempelungHeroImg}
        hero_alt="Entrümpelung in Hamburg mit Schenck & Hansen"
        hero_image_large={EntruempelungHeroImgLarge}
        hero_alt_large="Entrümpelung in Hamburg mit Schenck & Hansen - Querformat"
      />
      <Reviews />
      <EntruempelungIntro />
      <EntruempelungText />
      <EntruempelungCta />
      <RemovalServicesIntro
        header="Entrümplung in Hamburg - unsere Leistungen"
        subheader="Unsere Leistungen für Ihre Entrümpelung"
      />
      <RemovalServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <EntruempelungFaq />
          </motion.div>
          <motion.div layout>
            <EntruempelungCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default EntruempelungHamburg;
