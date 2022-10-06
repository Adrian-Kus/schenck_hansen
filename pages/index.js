import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import IndexHero from "components/templates/index/IndexHero";
import Reviews from "components/elements/Reviews";
import IndexIntro from "components/templates/index/IndexIntro";
import IndexText from "components/templates/index/IndexText";
import IndexCta from "components/templates/index/IndexCta";
import DoubleImgBox from "components/elements/DoubleImgBox";
import ServiceIntroOne from "components/elements/ServiceIntroOne";
import MovingServices from "components/elements/MovingServices";
import IndexFaq from "components/templates/index/IndexFaq";
import IndexDoubleOne from "public/umzugskarton_des_umzugsunternehmens_schenck_und_hansen.jpg";
import IndexDoubleTwo from "public/umzugsunternehmen_hamburg.jpg";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

const serviceIntroheader = "Umzugsunternehmen Hamburg - Unsere Leistungen";

export default function Home() {
  return (
    <>
      <Head>
        <title>Schenck & Hansen | Ihr Umzugsunternehmen in Hamburg</title>
        <meta
          name="description"
          content="Erstellen Sie jetzt online in nur wenigen Minuten Ihr ganz persön­liches Umzugsangebot zum Festpreis. ✓Privatumzüge ✓Firmenumzüge ✓Seniorenumzüge"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Head>
      <Navbar />
      <IndexHero />
      <Reviews />
      <IndexIntro />
      <IndexText />
      <IndexCta />
      <DoubleImgBox
        image_01={IndexDoubleOne}
        alt_01="Umzugskarton des Umzugsunternehmens Schenck & Hansen"
        image_02={IndexDoubleTwo}
        alt_02="Umzugsunternehmen Hamburg"
      />
      <ServiceIntroOne header={serviceIntroheader} />
      <MovingServices />
      <LayoutGroup>
        <AnimatePresence>
          <motion.div layout>
            <IndexFaq />
          </motion.div>
          <motion.div layout>
            <IndexCta />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}
