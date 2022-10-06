import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function FestprFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzug Hamburg Festpreis - Faq
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
                title="Können Umzugskartons auch gemietet werden?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, Schenck &amp; Hansen vermietet Um&shy;zugs&shy;kartons
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Liefert Schenck &amp; Hansen Umzugs&shy;materialien im Voraus?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, die Anlieferung von Um&shy;zugs&shy;material erfolgt im
                    Regel&shy;fall zwischen 1 - 4 Wochen vor
                    Um&shy;zugs&shy;beginn. Der Zeit&shy;punkt hängt vor allem
                    von dem Zeit&shy;punkt der Be&shy;auf&shy;tragung ab. Je
                    früher Sie uns be&shy;auf&shy;tragen, desto eher können wir
                    Sie mit dem Um&shy;zugs&shy;material beliefern.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Ist der Fest&shy;preis wirklich ein Fest&shy;preis?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, bei uns gilt das Prinzip: Feste Preise, feste
                    Leistungen.
                  </p>
                  <p className={faq.answer__first}>
                    Für die im Angebot auf&shy;geführten Leis&shy;tungen sind
                    die Preise verbind&shy;lich und somit Fest&shy;preise.
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

export default FestprFaq;
