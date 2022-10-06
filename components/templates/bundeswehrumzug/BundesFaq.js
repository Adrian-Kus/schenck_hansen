import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function BundesFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Bundeswehrumzug - Faq
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
                title="Werden alle Kosten von der Bundeswehr übernommen?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Bei Umzügen von Soldaten und Angehörigen der Bundeswehr
                    werden alle Kosten eines regulären Full-Service Umzugs
                    übernommen. Die Full-Service Umzugsleistungen umfassen:
                  </p>
                  <ul className={faq.answer__list}>
                    <li className={faq.answer__list_li}>
                      Verpackungsmaterial und Umzugskartons
                    </li>
                    <li className={faq.answer__list_li}>
                      Beladung, Transport und Entladung
                    </li>
                    <li className={faq.answer__list_li}>
                      Ein- und Auspackservice
                    </li>
                    <li className={faq.answer__list_li}>
                      Schutzverpacken Ihres Eigentums
                    </li>
                    <li className={faq.answer__list_li}>
                      De- und Remontage der bereits aufgebauten Möbel, Lampen,
                      Gardinenstangen, etc.
                    </li>
                    <li className={faq.answer__list_li}>
                      (falls notwendig) Halteverbotszonen
                    </li>
                  </ul>
                  <p className={faq.answer__first}>
                    Auf Basis unserer jahrelangen Erfahrung werden die mit Ihrem
                    Umzug verbundenen Kosten bei Bundeswehrumzügen durch Ihren
                    Arbeitgeber übernommen. Davon ausgenommen sind wenige,
                    extravagante Sonderwünsche (bspw. Ab- und Aufbau einer
                    Sauna, Installation einer SAT-Anlage oder Malerarbeiten).
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle number="02." title="Muss ich im Voraus bezahlen?">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Bei Umzügen für Soldaten und angehörige der Bundeswehr
                    müssen Sie nicht im Voraus bezahlen. Sie müssen uns
                    lediglich vorab die Kostenübernahmebestätigung übersenden.
                    Im Regelfall erhalten wir dann anschließend direkt von Ihrem
                    Arbeitgeber die Zahlung auf unser Firmenkonto, sodass Sie
                    selbst bezüglich der Zahlung nicht aktiv werden müssen.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Liefert Schenck &amp; Hansen Umzugsmaterialien im Voraus?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Selbstverständlich erhalten Sie auf Wunsch vorab
                    Umzugskartons und Verpackungsmaterial, wenn Sie eigenständig
                    Ihr Umzugsgut einpacken möchten.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Welche Leistungen werden übernommen?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Bei Rahmenvertragsumzügen werden alle für Ihren Umzug
                    notwendigen Leistungen, die einem regulären Full-Service
                    Umzug entsprechen, übernommen. Dazu zählen folgende
                    Leistungen:
                  </p>
                  <ul className={faq.answer__list}>
                    <li className={faq.answer__list_li}>
                      (bei Bedarf) vorherige Lieferung von Umzugskartons und
                      Verpackungsmaterial
                    </li>
                    <li className={faq.answer__list_li}>
                      Einpackservice kleiner Gegenstände in Umzugskartons
                    </li>
                    <li className={faq.answer__list_li}>
                      Demontage von großem Mobiliar, Lampen, Gardinenstangen,
                      etc.
                    </li>
                    <li className={faq.answer__list_li}>
                      Schutzverpacken von Ihrem Eigentum
                    </li>
                    <li className={faq.answer__list_li}>
                      Beladung Ihres Umzugsgutes
                    </li>
                    <li className={faq.answer__list_li}>
                      Transport Ihres Umzugsgutes
                    </li>
                    <li className={faq.answer__list_li}>
                      Entladung Ihres Umzugsgutes
                    </li>
                    <li className={faq.answer__list_li}>
                      Remontage Ihrer Möbelstücke inkl. Deckenlampen,
                      Gardinenstangen etc.
                    </li>
                    <li className={faq.answer__list_li}>Auspackservice</li>
                    <li className={faq.answer__list_li}>
                      Entsorgung von altem Verpackungsmaterial, dass von Schenck
                      &amp; Hansen stammt
                    </li>
                  </ul>
                  <p className={faq.answer__first}>
                    Somit müssen Sie sich um nichts kümmern, außer uns Zugang zu
                    Ihren Räumlichkeiten zu verschaffen.
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

export default BundesFaq;
