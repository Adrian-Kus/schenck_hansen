import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzEimsFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzugsunternehmen Eimsbüttel - Faq
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
                title="Was kostet ein Umzug in Hamburg-Eimsbüttel?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Umzugskosten für einen Umzug mit dem
                    Umzugs&shy;unternehmen Schenck &amp; Hansen in
                    Hamburg-Eimsbüttel beginnt ab 399 Euro.
                  </p>
                  <p className={faq.answer__first}>
                    Die tatsächliche Höhe Ihres Wunsch-Umzugs ergibt sich aus
                    der Summe der von Ihnen gewünschten Dienst&shy;leistungen.
                    Die Kosten ergeben sich im Wesent&shy;lichen aus der zu
                    trans&shy;portierenden Menge, den gewünschten
                    Zusatz&shy;leistungen sowie dem Umzugs&shy;material.
                  </p>
                  <p className={faq.answer__first}>
                    Nutzen Sie unseren Online-Umzugs&shy;kalku&shy;lator. Sie
                    können mit wenigen Klicks in ca. 15 – 20 Minuten Ihren
                    voll&shy;ständigen Umzug mit Fest&shy;preis erstellen und
                    diesen direkt mit einem Klick bei uns anfragen.
                  </p>
                  <p className={faq.answer__first}>
                    Wir melden und schnell&shy;stmöglich bei Ihnen zurück und
                    bestätigen Ihren Umzug direkt bei entsprechend verfügbaren
                    Kapazitäten.
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
                    Ja, alle unsere Umzugs&shy;angebote mit festem
                    Leistungs&shy;umfang beinhalten verbind&shy;liche
                    Fest&shy;preise.
                  </p>
                  <p className={faq.answer__first}>
                    Als Umzugsunternehmen für Hamburg-Eimsbüttel achten wir
                    stets darauf, dass die wichtigsten Leis&shy;tungen für einen
                    erfolg&shy;reichen und stress&shy;freien Umzug enthalten
                    sind. Zusätzlich kann jeder Kunde ganz nach seinen
                    persön&shy;lichen Vor&shy;lieben die Leis&shy;tungen
                    hinzu&shy;buchen, die ihm das Leben noch einfacher machen.
                  </p>
                  <p className={faq.answer__first}>
                    Die Summe der Leistungs&shy;wünsche ergeben am Ende den
                    Gesamt&shy;preis, der im Angebot aufgeführt ist. Dieser
                    Angebots&shy;preis ist für die dazu&shy;gehörigen
                    Leis&shy;tungen ein verbind&shy;licher Festpreis.
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
                    Wenn Sie Ihren Umzug in Hamburg-Eimsbüttel planen, stellt
                    sich schnell die Frage der Park&shy;möglich&shy;keiten.
                  </p>
                  <p className={faq.answer__first}>
                    Sicherlich können Sie sich selbst um entspre&shy;chende
                    Park&shy;flächen kümmern. Dabei müssen Sie beachten, dass
                    wir mindestens eine Park&shy;fläche mit 3,00m Breite, 3,80m
                    Höhe und 15m Länge benötigen. Solche Flächen sind in
                    Bereichen wie der Oster&shy;straße,
                    Lappen&shy;bergs&shy;allee oder dem Heuß&shy;weg nahezu nie
                    frei verfügbar.
                  </p>
                  <p className={faq.answer__first}>
                    Aus diesem Grund empfehlen wir in Eimsbüttel dringend, dass
                    Halte&shy;verbots&shy;zonen in das Umzugs&shy;angebot
                    auf&shy;genommen werden.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Wann wird eine Halte&shy;ver&shy;bots&shy;zone in Eimsbüttel benötigt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Sollten Sie nicht sicher eine ausreichend große, sichere
                    Park&shy;fläche frei&shy;halten, dann benötigen Sie eine
                    Halte&shy;verbots&shy;zone.
                  </p>
                  <p className={faq.answer__first}>
                    Wenn Sie einen Umzug in Hamburg-Eimsbüttel planen, dann wird
                    an fast jeder Stelle in Eimsbüttel eine
                    Halte&shy;verbots&shy;zone notwendig. In seltenen Fällen
                    sind Sie glück&shy;licher Eigen&shy;tümer einer großen,
                    freien Ein&shy;fahrt, in der unser LKW parken kann. Dies ist
                    aber die absolute Ausnahme.
                  </p>
                  <p className={faq.answer__first}>
                    Bei fast jedem Umzug in Hamburg-Eimsbüttel benötigen wir
                    eine oder gar zwei Halte&shy;verbots&shy;zonen.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Was kostet eine Halte&shy;ver&shy;bots&shy;zone in Eimsbüttel?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Kosten für eine ein&shy;seitige
                    Halte&shy;verbots&shy;zone die 1 Tag Gültig&shy;keit hat
                    belaufen sich auf 120,00 Euro. In diesen Kosten sind nicht
                    nur das Aufbauen der
                    Halte&shy;verbots&shy;zonen&shy;schilder sowie Abbauen der
                    Halte&shy;verbots&shy;zonen&shy;schilder ent&shy;halten.
                    Zusätz&shy;lich ist auch die Ein&shy;holung der
                    Genehmi&shy;gung sowie die damit verbundenen Gebühren
                    inkludiert.
                  </p>
                  <p className={faq.answer__first}>
                    Gegen Aufpreis können wir an engen Straßen eine
                    doppel&shy;seitige Halte&shy;verbots&shy;zone
                    auf&shy;stellen. Bei Bedarf kann gegen Auf&shy;preis auch
                    eine längere Dauer für die Aufstellung der
                    Halte&shy;verbots&shy;zone beantragt werden. Diese
                    Erweite&shy;rungen der einfachen Halte&shy;verbots&shy;zone
                    sind immer an entsprechend vorliegende behörd&shy;liche
                    Genehmi&shy;gungen gebunden.
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

export default UmzEimsFaq;
