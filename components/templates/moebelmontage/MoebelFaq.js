import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function MoebelFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Möbelmontage Hamburg - Faq
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
                title="Was kostet eine Möbel&shy;montage in Hamburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die fach&shy;gerechte Möbel&shy;montage von
                    Ge&shy;braucht&shy;möbeln bieten wir zum Fest&shy;preis an.
                    Grund&shy;sätzlich richten sich die Kosten nach der Größe
                    (Breite) des Objekts. Folgende Preise für Standard&shy;möbel
                    geben wir Ihnen gerne an die Hand:
                  </p>
                  <p className={faq.answer__first}>
                    De- und Remontage (Ab- und Aufbau):
                  </p>
                  <ul className={faq.answer__list}>
                    <li className={faq.answer__list_li}>
                      Einzelbett: 30,00 Euro brutto
                    </li>
                    <li className={faq.answer__list_li}>
                      Hochbett / Doppelbett / Boxspringbett: 36,00 Euro brutto
                    </li>
                    <li className={faq.answer__list_li}>
                      Einzelbett (mit Unterbau): 36,00 Euro brutto
                    </li>
                    <li className={faq.answer__list_li}>
                      Doppelbett (mit Unterbau): 42,00 Euro brutto
                    </li>
                    <li className={faq.answer__list_li}>
                      Schrank – mit Scharniertüren (je lfd. Meter oder je
                      Element): 36,00 Euro
                    </li>
                    <li className={faq.answer__list_li}>
                      Schrank – mit Schiebetüren (je lfd. Meter oder je
                      Element): 42,00 Euro
                    </li>
                  </ul>
                  <p className={faq.answer__first}>
                    Die Montage&shy;kosten für komplizierte Designer&shy;möbel,
                    Unikate sowie gewisse System&shy;möbel können höher
                    aus&shy;fallen.
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
                    Bei Verfügbarkeit können wir Ihnen auch kurz&shy;fristig
                    Mit&shy;arbeiter für Montage&shy;arbeiten stellen. Wir
                    empfehlen jedoch idealer&shy;weise mind. 14 Tage Vorlauf, da
                    unsere Monteure regel&shy;mäßig aus&shy;gebucht sind.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Was kostet eine Neu&shy;möbel&shy;montage?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Montage von Neu&shy;möbeln erfolgt bei uns
                    aus&shy;schließlich nach tat&shy;säch&shy;lichem
                    Zeit&shy;aufwand. Der Stunden&shy;satz beträgt 37,50 Euro je
                    Möbel&shy;monteur / je Stunde.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Befestigt Schenck &amp; Hansen auch Gardinen&shy;stangen?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Gardinen&shy;stangen montieren wir für Sie sicher und fest
                    in Ihrem neuen Zuhause. Nehmen Sie dafür einfach unseren
                    Dübel&shy;service in Anspruch.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Befestigt Schenck &amp; Hansen Gegen&shy;stände an Wände und Decken?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Auf Wunsch führen unsere Mit&shy;arbeiter gerne für Sie
                    Dübel&shy;arbeiten durch. Unser Dübel&shy;service beinhaltet
                    das Befestigen von Gegen&shy;ständen an Wänden und Decken.
                  </p>
                  <p className={faq.answer__first}>
                    So können wir Regale und Schränke sicher für Kinder an den
                    Wänden fixieren, den Beamer im Wohn&shy;zimmer an die Decke
                    befestigen oder Ihre großen Bilder und Spiegel wieder so
                    nach Ihren Wünschen an die Wände befestigen, dass Sie sich
                    in Ihrem neuen Zuhause wohl und zufrieden fühlen.
                  </p>
                  <p className={faq.answer__first}>
                    Passende Qualitäts&shy;dübel in haus&shy;halts&shy;üblichen
                    Größen (6-10) sowie dazu&shy;gehörige Schrauben sind in
                    unserem Dübel&shy;service inklusive.
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

export default MoebelFaq;
