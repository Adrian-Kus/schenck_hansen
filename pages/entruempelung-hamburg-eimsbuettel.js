import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import HeroAlternativeOne from "components/elements/HeroAlternativeOne";
import EntrEimsHeroImg from "public/alte_schrottkommode_waehrend_der_entruempelung_in_hamburg_eimsbuettel.jpg";
import EntrEimsHeroImgLarge from "public/alte_schrottkommode_waehrend_der_entruempelung_in_hamburg_eimsbuettel_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import EntrEimsIntro from "components/templates/entruempelungEims/EntrEimsIntro";
import EntrEimsText from "components/templates/entruempelungEims/EntrEimsText";
import EntrEimsCta from "components/templates/entruempelungEims/EntrEimsCta";
import RemovalServicesIntro from "components/elements/RemovalServicesIntro";
import RemovalServices from "components/elements/RemovalServices";
import EntrEimsFaq from "components/templates/entruempelungEims/EntrEimsFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function EntruempelungHamburgEimsbuettel() {
  return (
    <>
      <Head>
        <title>Entrümpelung Hamburg Eims­büttel | Schenck & Hansen</title>
        <meta
          name="description"
          content="Wir entrümpeln in Eimsbüttel zuverlässig, schnell & sauber ✓Privat- & Firmenkunden ✓günstige Festpreise ✓Entfernen von Tapeten & Fußböden ✓Abbau von Möbeln"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <HeroAlternativeOne
        hero_first_header="Entrümpelung Hamburg Eimsbüttel"
        hero_second_header="So entrümpelt man in Eimsbüttel"
        hero_text="Fordern Sie jetzt Ihr persön&shy;liches Angebot ein. Reservieren Sie online mit nur wenigen Klicks, Ihren Wunsch&shy;termin für eine kostenlose & un&shy;verbind&shy;liche Video&shy;besichtigung."
        btn_href="https://angebot.schenck-hansen.de/online-besichtigung/"
        hero_image={EntrEimsHeroImg}
        hero_alt="Alte Schrottkommode während der Entrümpelung in Hamburg Eimsbüttel"
        hero_image_large={EntrEimsHeroImgLarge}
        hero_alt_large="Alte Schrottkommode während der Entrümpelung in Hamburg Eimsbüttel - Querformat"
      />
      <Reviews />
      <EntrEimsIntro />
      <EntrEimsText />
      <EntrEimsCta />
      <RemovalServicesIntro
        header="Entrümplung in Hamburg Eimsbüttel - Leistungen"
        subheader="Unsere Leistungen für Ihre Ent&shy;rüm&shy;pe&shy;lung in Eims&shy;büttel"
      />
      <RemovalServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <EntrEimsFaq />
          </motion.div>
          <motion.div layout>
            <EntrEimsCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default EntruempelungHamburgEimsbuettel;
