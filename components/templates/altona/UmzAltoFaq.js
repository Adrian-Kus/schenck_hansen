import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzAltoFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzugsunternehmen Altona - Faq
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
                title="Was kostet ein Umzug in Hamburg-Altona?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ein Umzug innerhalb von Hamburg-Altona beginnt
                    preis&shy;tech&shy;nisch ab 399 Euro.
                  </p>
                  <p className={faq.answer__first}>
                    Als Umzugs&shy;unter&shy;nehmen für Hamburg-Altona bieten
                    wir seit über 120 Jahren Umzüge an, die sich ganz nach den
                    Wünschen der Kunden richten.
                  </p>
                  <p className={faq.answer__first}>
                    Am Ende ergibt sich aus der Summe Ihrer Umzugs&shy;wünsche
                    der Ange&shy;bots&shy;preis. Neben dem klas&shy;sischen
                    Umzug bieten wir natürlich auch Extra&shy;leis&shy;tungen
                    wie Montage&shy;service, Ein- und Auspack&shy;service oder
                    Umzugs&shy;kartons und Ver&shy;packungs&shy;material an.
                  </p>
                  <p className={faq.answer__first}>
                    Erstellen Sie sich Ihr Wunsch&shy;angebot mit Fest&shy;preis
                    ganz einfach mit unserem Online-Umzugs&shy;kalkulator.
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
                    Über 120 Jahre Umzugs&shy;erfahrung ermöglicht es Schenck
                    &amp; Hansen unseren Kunden Fest&shy;preis&shy;angebote zu
                    erstellen.
                  </p>
                  <p className={faq.answer__first}>
                    Dabei achten wir bei der Angebots&shy;erstellung stets auf
                    die für Ihren Umzug wirk&shy;lich notwendig Aspekte sowie
                    Ihren zusätz&shy;lichen, persön&shy;lichen
                    Umzugs&shy;wünschen. Unsere Fest&shy;preis&shy;angebote
                    sorgen dafür, dass Sie Ihre Kosten im Blick behalten und nur
                    die Leis&shy;tungen bezahlen, die Sie sich auch wünschen.
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
                    Damit der Abtrageweg planbar in Ihr Angebot auf&shy;genommen
                    werden kann, benötigen wir ausreichend
                    Park&shy;möglich&shy;keiten. Für Ihren Umzug in
                    Hamburg-Altona benötigen wir eine gut 15 Meter lange
                    Park&shy;fläche. Neben der Länge ist eine Höhe von 3,80m
                    sowie eine Breite von gut 3 Metern notwendig, damit wir
                    einen regulären LKW parken können.
                  </p>
                  <p className={faq.answer__first}>
                    Sollte bei Ihnen vor Ort in Hamburg-Altona nicht
                    entspre&shy;chender Platz vorhanden sein, den Sie uns
                    zuver&shy;lässig zur Verfügung stellen können, dann
                    empfehlen wir eine Halte&shy;verbots&shy;zone.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Wann wird eine Halte&shy;verbots&shy;zone in Altona benötigt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Schenck &amp; Hansen kann sich um die Organi&shy;sation
                    Ihrer Halte&shy;verbots&shy;zonen in Hamburg-Altona kümmern,
                    wenn vor Ort nicht aus&shy;reichend sichere Park&shy;flächen
                    vorhanden sind. Unser Service umfasst die Organi&shy;sation
                    der behörd&shy;lichen Genehmi&shy;gung, dem Auf&shy;stellen
                    sowie dem Ab&shy;bauen der
                    Halte&shy;verbots&shy;zonen&shy;schilder.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Was kostet eine Halte&shy;verbots&shy;zone in Altona?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wird für nur 1 Tag eine einseitige
                    Halte&shy;verbots&shy;zone benötigt, dann liegen die Kosten
                    für eine Halte&shy;verbots&shy;zone in Hamburg-Altona bei
                    120,00 Euro. In diesem Preis sind die Kosten für die
                    Genehmi&shy;gung durch die Behörde sowie der Auf- und Abbau
                    der Halte&shy;verbots&shy;zonen&shy;schilder inbegriffen.
                  </p>
                  <p className={faq.answer__first}>
                    Optional kann gegen Aufpreis und bei Vorliegen
                    entspre&shy;chender Genehmigungen die
                    Halte&shy;verbots&shy;zone länger als 1 Tag aufgestellt
                    werden. Je nach Art der Genehmi&shy;gung ist auch die
                    doppel&shy;seitige Auf&shy;stellung von der
                    Halte&shy;verbots&shy;zone möglich. Diese
                    Erweite&shy;rungs&shy;möglich&shy;keiten sind immer an
                    entspre&shy;chende Genehmi&shy;gungen gebunden.
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

export default UmzAltoFaq;
