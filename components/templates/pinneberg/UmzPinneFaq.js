import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzPinneFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzugsunternehmen Pinneberg - Faq
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
                title="Was kostet ein Umzug in Pinneberg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Kosten für einen Umzug innerhalb von Pinneberg beginnen
                    ab 599 Euro.
                  </p>
                  <p className={faq.answer__first}>
                    Wir sind der richtige Umzugs&shy;partner, wenn Sie auf der
                    Suche nach einem Umzugs&shy;unter&shy;nehmen in Pinneberg
                    sind, dass Ihnen ein Umzugs&shy;angebot mit Fest&shy;preis
                    anbietet und Ihren Umzug reibungs&shy;los durchführt.
                  </p>
                  <p className={faq.answer__first}>
                    Sie können ganz einfach ein Umzugs&shy;angebot nach Ihren
                    individuellen Wünschen mit unserem Online-Kalkulator
                    erstellen.
                  </p>
                  <p className={faq.answer__first}>
                    Dabei können Sie den Einfluss Ihrer
                    Buchungs&shy;bestand&shy;teile in Echt&shy;zeit verfolgen
                    und so ganz nach Ihren Bedürf&shy;nissen sich Ihren Umzug
                    zusammen&shy;stellen.
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
                    Schenck &amp; Hansen bietet für die von Ihnen gewünschten
                    und im Umzugs&shy;angebot aufge&shy;führten Leistungen einen
                    verbind&shy;lichen Fest&shy;preis an.
                  </p>
                  <p className={faq.answer__first}>
                    Auf diesem Wege können Sie mit Ihrem verfügbaren Budget
                    genau den Umzug buchen, den Sie sich wünschen.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Kann ich mich eigen&shy;ständig um Park&shy;möglich&shy;keiten kümmern?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Um als Umzugs&shy;unternehmen Ihren Umzug in Pinneberg
                    auszu&shy;führen, benötigen wir gute 15 Meter
                    Park&shy;fläche für einen regulären LKW. Zusätzlich brauchen
                    wir eine Breite von mindestens 3 Metern Breite sowie 3,80m
                    Höhe. Sie können gerne eigen&shy;ständig sich um
                    entsprechende Park&shy;flächen kümmern.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Wann wird eine Halte&shy;verbots&shy;zone in Pinneberg benötigt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Sollten nicht ausreichend Park&shy;flächen vorhanden sein,
                    dann bieten wir Ihnen an uns um die Organisation der
                    notwendigen Halte&shy;verbots&shy;zonen zu kümmern. Dabei
                    besteht unsere Service&shy;leistung aus der Organisation der
                    Beantragung der Genehmigung sowie dem Auf&shy;stellen und
                    Abbauen der Halte&shy;verbots&shy;zonen&shy;schilder.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Was kostet eine Halte&shy;verbots&shy;zone in Pinneberg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Kosten für eine einseitige Halte&shy;verbots&shy;zone
                    (Dauer: 1 Tag) liegen in Pinneberg bei 190,00 Euro. Diese
                    Kosten beinhalten ein die Organisation der Einholung der
                    Genehmigung, das Aufstellen der Schilder sowie das Abbauen
                    der Schilder im Anschluss an die Arbeiten.
                  </p>
                  <p className={faq.answer__first}>
                    Bei Bedarf und bei entsprechend vorliegender behördlicher
                    Genehmigung ist es möglich, dass die
                    Halte&shy;verbots&shy;zone gegen Aufpreis länger als 1 Tag
                    gestellt werden kann. Zusätzlich kann bei Bedarf eine
                    doppel&shy;seitige Halte&shy;verbots&shy;zone eingerichtet
                    werden.
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

export default UmzPinneFaq;
