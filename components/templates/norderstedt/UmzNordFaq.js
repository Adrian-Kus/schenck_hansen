import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzNordFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzugsunternehmen Norderstedt - Faq
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
                title="Was kostet ein Umzug in Norderstedt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Sie suchen nach einem Umzugs&shy;unternehmen in
                    Norder&shy;stedt, dass Ihren Umzug einwandfrei plant und
                    Ihnen ein Umzugs&shy;angebot mit Fest&shy;preis anbietet?
                    Dann sind wir der richtige Ansprech&shy;partner.
                  </p>
                  <p className={faq.answer__first}>
                    Die Umzugskosten für einen Umzug innerhalb von
                    Norder&shy;stedt beginnen ab 499 Euro.
                  </p>
                  <p className={faq.answer__first}>
                    Die Höhe der Umzugskosten ist von vielen Umständen abhängig.
                    Dazu zählen die Transport&shy;menge,
                    Zusatz&shy;leis&shy;tungen, die jeweiligen vor Ort
                    Begeben&shy;heiten sowie der Bedarf an Umzugs&shy;kartons
                    und Verpackungs&shy;material.
                  </p>
                  <p className={faq.answer__first}>
                    Um ein passgenaues Angebot für Ihren Umzug erstellen zu
                    können, nutzen Sie unseren Online-Kalkulator und erstellen
                    Sie sich ganz nach Ihren Wünschen ihr Umzugs&shy;angebot.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Ist der Angebots&shy;preis im Umzugs&shy;angebot ein Fest&shy;preis?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Der Angebotspreis in Ihrem Umzugs&shy;angebot ist für die
                    aufgeführten Leistungen ein verbindlicher Fest&shy;preis.
                  </p>
                  <p className={faq.answer__first}>
                    Somit sind Ihnen die Umzugs&shy;kosten vorab bekannt und Sie
                    können mit Ihren Budget Ihren Umzug sicher planen.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Kann ich mich eigenständig um Park&shy;möglichkeiten kümmern?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Selbstverständlich steht es Ihnen frei, dass Sie
                    eigen&shy;ständig für ausreichend Platz zum Parken sorgen.
                    Wir benötigen gute 15 Meter Park&shy;fläche für eine
                    regulären LKW. Bitte beachten Sie zusätzlich, dass die
                    Park&shy;fläche gute 3 Meter Breite sowie 3,80m Höhe haben
                    sollte.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Wann wird eine Halte&shy;verbots&shy;zone benötigt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wenn Sie selbst nicht die Möglichkeit haben, ausreichend
                    sichere Park&shy;flächen zur Verfügung zu stellen, wird eine
                    Halte&shy;verbots&shy;zone notwendig.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Was kostet eine Halte&shy;verbots&shy;zone in Norderstedt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Eine einseitige Halte&shy;verbots&shy;zone, die eine
                    Gültig&shy;keit von 1 Tag hat, kostet 200,00 Euro. Im Preis
                    inbegriffen sind die Gebühren für die Einholung der
                    Genehmigung.
                  </p>
                  <p className={faq.answer__first}>
                    Gegen Aufpreis kann die Dauer der Halte&shy;verbots&shy;zone
                    verlängert oder die Halte&shy;verbots&shy;zone
                    beid&shy;seitig aufgestellt werden. Voraussetzung dafür ist
                    immer eine entsprechende Genehmigung.
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

export default UmzNordFaq;
