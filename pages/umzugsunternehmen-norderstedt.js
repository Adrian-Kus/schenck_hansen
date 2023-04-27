import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import Hero from "components/elements/Hero";
import UmzNordHeroImg from "public/umzug_nach_norderstedt_mit_der_ganzen_familie.jpg";
import UmzNordHeroImgLarge from "public/umzug_nach_norderstedt_mit_der_ganzen_familie_querformat.jpg";
import Reviews from "components/elements/Reviews.js";
import UmzNordIntro from "components/templates/norderstedt/UmzNordIntro";
import UmzNordText from "components/templates/norderstedt/UmzNordText";
import UmzNordCta from "components/templates/norderstedt/UmzNordCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import UmzNordDoubleOne from "public/moebel_und_sofa_fuer_den_umzug_in_norderstedt.jpg";
import UmzNordDoubleTwo from "public/umzugsgut_und_umzugskartons.jpg";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import UmzNordFaq from "components/templates/norderstedt/UmzNordFaq";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzugsunternehmenNorderstedt() {
  return (
    <>
      <Head>
        <title>Umzugsunternehmen Norderstedt | Schenck & Hansen</title>
        <meta
          name="description"
          content="Wir sind Ihr Umzugspartner. Erfahren Sie jetzt mehr über unsere Leistungen: ✓Möbelmontage ✓Umzugskartons ✓Anschlussservice ✓Packservice und vieles mehr."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <Hero
        hero_first_header="Umzugsunternehmen Norderstedt"
        hero_second_header="Professionelle Umzüge für Norderstedt"
        hero_text="Erstellen Sie jetzt online mit nur wenigen Klicks Ihr ganz persön­liches Umzugsangebot."
        hero_image={UmzNordHeroImg}
        hero_alt="Umzug nach Norderstedt mit der ganzen Familie"
        hero_image_large={UmzNordHeroImgLarge}
        hero_alt_large="Umzug nach Norderstedt mit der ganzen Familie - Querformat"
      />
      <Reviews />
      <UmzNordIntro />
      <UmzNordText />
      <UmzNordCta />
      <DoubleImgBox
        image_01={UmzNordDoubleOne}
        alt_01="Möbel und Sofa für den Umzug in Norderstedt"
        image_02={UmzNordDoubleTwo}
        alt_02="Umzugsgut und Umzugskartons"
      />
      <ServiceIntroOne header="Umzugsunternehmen Norderstedt - Unsere Leistungen" />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <UmzNordFaq />
          </motion.div>
          <motion.div layout>
            <UmzNordCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default UmzugsunternehmenNorderstedt;
