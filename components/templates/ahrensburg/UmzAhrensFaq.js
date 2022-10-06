import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function UmzAhrensFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzugsunternehmen Ahrensburg - Faq
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
                title="Was kostet ein Umzug in Ahrensburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wenn Sie innerhalb von Ahrens&shy;burg umziehen möchten,
                    dann beginnen die Umzugs&shy;kosten bei 499 Euro.
                  </p>
                  <p className={faq.answer__first}>
                    Die Kosten Ihres Umzugs hängen immer von Ihrem
                    per&shy;sön&shy;lichem Umzugs&shy;bedarf sowie den
                    gewünschten Service&shy;leis&shy;tungen ab. Sie können sich
                    online eigen&shy;ständig in wenigen Minuten Ihr persönliches
                    Umzugs&shy;angebot mit Fest&shy;preis zusammen&shy;stellen.
                    Nutzen Sie dafür einfach unseren
                    Online-Umzugs&shy;kalkulator.
                  </p>
                  <p className={faq.answer__first}>
                    Wenn Sie darüber hinaus Beratungs&shy;bedarf haben, rufen
                    Sie uns am besten direkt an.
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
                    Als Umzugsunternehmen mit über 120 Jahren
                    Umzugs&shy;erfahrung können wir Ihnen für Ihren Umzug in
                    Ahrensburg selbst&shy;verständ&shy;lich ein
                    Umzugs&shy;angebot mit verbind&shy;lichem Fest&shy;preis
                    erstellen.
                  </p>
                  <p className={faq.answer__first}>
                    Dafür benötigen wir lediglich all Ihre Umzugs&shy;wünsche
                    und erstellen Ihnen auf Basis dessen Ihr Wunsch&shy;angebot.
                  </p>
                  <p className={faq.answer__first}>
                    Bei der Beratung achten wir darauf, dass alle zwingend
                    not&shy;wendigen Leis&shy;tungen, die Ihren Umzug zu einem
                    Erfolg machen inkludiert sind. Anschlie&shy;ßend besprechen
                    wir mit Ihnen welche Zusatz&shy;leis&shy;tungen Ihr Leben
                    einfacher machen sollen. So sparen Sie bspw. viel Zeit mit
                    unseren Pack&shy;service und der Möbel&shy;montage.
                  </p>
                  <p className={faq.answer__first}>
                    So erhalten Sie am Ende genau das Umzugs&shy;angebot, dass
                    Ihren persön&shy;lichen Bedürfnissen entspricht.
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
                    Eine ausreichend große Park&shy;fläche ist ein
                    Grund&shy;bestand&shy;teil eines erfolg&shy;reichen Umzugs
                    in Ahrensburg.
                  </p>
                  <p className={faq.answer__first}>
                    Für einen regulären LKW benötigen wir eine mindestens 15
                    Meter lange, 3,80m hohe sowie 3,00m Breite Park&shy;fläche.
                    Wenn Sie beispiels&shy;weise eine größere eigene
                    Ein&shy;fahrt besitzen, welche diese
                    Park&shy;flächen&shy;maße erfüllt, dann können wir diese
                    Fläche gerne zum Parken nutzen.
                  </p>
                  <p className={faq.answer__first}>
                    Wenn die vor Ort Begeben&shy;heiten diese Park&shy;fläche
                    jedoch nicht hergeben, dann können wir uns um
                    ent&shy;sprechende Park&shy;flächen in Form einer
                    Halte&shy;verbots&shy;zone kümmern.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Wann wird eine Halte&shy;ver&shy;bots&shy;zone in Ahrensburg benötigt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Sind für Ihren geplante Umzug in Ahrensburg nicht
                    aus&shy;reichend Park&shy;flächen bei der Belade&shy;stelle
                    oder Entlade&shy;stelle vorhanden, dann können wir uns um
                    die Organisation der Halte&shy;verbots&shy;zonen kümmern.
                  </p>
                  <p className={faq.answer__first}>
                    Unser Service umfasst nicht nur das Aufstellen und Abbauen
                    der Halte&shy;verbots&shy;zonen&shy;schildern, sondern auch
                    das Einholen der dafür not&shy;wendigen behörd&shy;lichen
                    Genehmigung.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Was kostet eine Halte&shy;ver&shy;bots&shy;zone in Ahrensburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Für Ihren Umzug in Ahrensburg können wir als
                    Umzugs&shy;unter&shy;nehmen Ihnen eine reguläre
                    Halte&shy;verbots&shy;zone, die ein&shy;seitig ist und 1 Tag
                    Gültig&shy;keit hat, für 160,00 Euro organisieren.
                  </p>
                  <p className={faq.answer__first}>
                    Je nach vor Ort Begeben&shy;heiten kann gegen Auf&shy;preis
                    die Halte&shy;verbots&shy;zone auch länger als 1 Tag
                    aufgestellt werden. Eine doppel&shy;seitige Beschilderung
                    ist entspre&shy;chend auch möglich. Voraus&shy;setzung ist
                    immer eine Genehmigung, welche die ent&shy;spre&shy;chende
                    Gestellung ermöglicht.
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

export default UmzAhrensFaq;
