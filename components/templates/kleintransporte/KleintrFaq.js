import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function KleintrFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Kleintransport Hamburg - Faq
          </motion.h2>
          <motion.p className={faq.subheader} layout>
            Sie haben Fragen?
            <br />
            Wir haben Antworten.
          </motion.p>
          <div className={faq.frame}>
            <AnimatePresence>
              <FaqToggle
                number="01."
                title="Was kostet ein Klein&shy;transport in Hamburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Kleintransporte beginnen preis&shy;lich bei 200,00 Euro (1
                    Mann) bzw. 350,00 Euro (2 Mann).
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Wie kurzfristig bietet Schenck &amp; Hansen Termine an?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Bei verfügbaren Kapazitäten können Termine sehr
                    kurz&shy;fristig, manch&shy;mal sogar tag&shy;gleich,
                    gebucht werden. Wir empfehlen jedoch so früh wie
                    mög&shy;lich den Termin abzu&shy;sprechen.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Was ist die maxi&shy;male Lade&shy;menge für Klein&shy;trans&shy;porte?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Als Umzugsunternehmen verfügen wir über eine breite Palette
                    an Trans&shy;port&shy;möglich&shy;keiten und
                    Fahr&shy;zeugen. Unser kleinster LKW verfügt über 18
                    Kubik&shy;meter Lade&shy;volumen. Dies entspricht ca. bis zu
                    200 großen Umzugs&shy;kartons.
                  </p>
                  <p className={faq.answer__first}>
                    Somit beträgt die maximal mögliche Trans&shy;port&shy;menge,
                    selbst bei unserem kleinsten LKW, um&shy;gerechnet 200 große
                    Umzugs&shy;kartons.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Bietet Schenck &amp; Hansen Ver&shy;pa&shy;ckungs&shy;material an?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Auf Wunsch verpacken unsere Fach&shy;arbeiter Ihr
                    Umzugs&shy;gut fach&shy;gerecht, sodass es sicher und
                    behut&shy;sam an der Ziel&shy;anschrift ankommt.
                  </p>
                  <p className={faq.answer__first}>
                    Gerne übernehmen wir nicht nur den Trans&shy;port, sondern
                    kümmern uns auch um das fach&shy;gerechte
                    Schutz&shy;verpacken von Trans&shy;portgut oder das
                    Einpacken von kleinem Trans&shy;port&shy;gut in
                    Umzugs&shy;kartons. Das dazu not&shy;wendige
                    Verpackungs&shy;material bieten wir
                    selbst&shy;ver&shy;ständ&shy;lich auch an bzw. bringen es
                    auf Wunsch direkt mit zur Abholung.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </>
  );
}

export default KleintrFaq;
