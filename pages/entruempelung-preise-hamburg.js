import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import entko from "components/templates/entruempelungPreise/EntKo.module.css";
import HeroAlternativeOne from "components/elements/HeroAlternativeOne";
import EntrPreisHeroImg from "public/entruempelung_preise_hamburg_entruempeler_beladen_lkw.jpg";
import EntrPreisHeroImgLarge from "public/entruempelung_preise_hamburg_entruempeler_beladen_lkw_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import EntrPreisIntro from "components/templates/entruempelungPreise/EntrPreisIntro";
import EntrPreisCta from "components/templates/entruempelungPreise/EntrPreisCta";
import EntrPreisTab from "components/templates/entruempelungPreise/EntrPreisTab";
import EntrPreisTabPhone from "components/templates/entruempelungPreise/EntrPreisTabPhone";
import EntrPreisFaq from "components/templates/entruempelungPreise/EntrPreisFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function EntruempelungPreise() {
  return (
    <>
      <Head>
        <title>Entrümpelung Preise Hamburg | Schenck & Hansen</title>
        <meta
          name="description"
          content="Was kostet eine Entrümpelung in Hamburg? Erfahren Sie jetzt alles über unsere Preise und Kosten. Schenck & Hansen ✓schnell ✓gründlich ✓fachgerecht ✓günstig"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <HeroAlternativeOne
        hero_first_header="Entrümpelung Preise Hamburg"
        hero_second_header="Wie viel kostet eine Ent&shy;rüm&shy;pe&shy;lung in Hamburg?"
        hero_text="Rufen Sie uns jetzt an oder schreiben Sie uns und vereinbaren Sie schnell und einfach einen Termin für Ihre Entrümpelung."
        btn_href="/kontakt"
        hero_image={EntrPreisHeroImg}
        hero_alt="Entrümpelung Preise Hamburg - Entrümpeler beladen LKW"
        hero_image_large={EntrPreisHeroImgLarge}
        hero_alt_large="Entrümpelung Preise Hamburg - Entrümpeler beladen LKW - Querformat"
      />
      <Reviews />
      <EntrPreisIntro />
      <EntrPreisCta />
      <div className={entko.desktop}>
        <EntrPreisTab />
      </div>
      <div className={entko.phone}>
        <EntrPreisTabPhone />
      </div>
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <EntrPreisFaq />
          </motion.div>
          <motion.div layout>
            <EntrPreisCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default EntruempelungPreise;
