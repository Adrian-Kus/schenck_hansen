import Link from "next/link";
import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function SpediFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Möbelspedition Hamburg - Faq
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
                title="Was kostet eine Möbel&shy;spedition in Hamburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Kosten einer Möbel&shy;spe&shy;di&shy;tion für Ihren
                    Um&shy;zug hängt von vielen Fak&shy;toren ab.
                    Kleinst&shy;umzüge beginnen bereits ab 450 Euro. Dies
                    betrifft ein 1-Zimmer&shy;umzug inner&shy;halb von Hamburg
                    ohne weitere Zusatz&shy;leis&shy;tungen.
                  </p>
                  <p className={faq.answer__first}>
                    Nutzen Sie unseren Online-Umzugs&shy;kalkulator um Ihren
                    Umzugs&shy;preis zu er&shy;fahren oder schauen Sie auf
                    dieser
                    <Link href="/umzugsunternehmen-hamburg-kosten">
                      <a> Seite </a>
                    </Link>
                    übliche Preise an.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Ist Ihr Umzug mit Schenck &amp; Hansen versichert?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ihr Umzug ist bei der Möbel&shy;spedition Schenck &amp;
                    Hansen immer versichert. Die
                    Basis&shy;ver&shy;siche&shy;rung ist immer in&shy;kludiert
                    und für Sie kostenlos. Ihr Eigen&shy;tum ist zum Zeitwert
                    mit 620 Euro je Kubik&shy;meter Lade&shy;volumen versichert.
                    Füllt Ihr Umzugs&shy;gut bspw. einen vollen großen LKW (7,5
                    Tonnen), so ist Ihr Eigen&shy;tum mit über 21.500 Euro
                    ver&shy;sichert. Die genaue Höhe dieser Ver&shy;sicherung
                    richtet sich nach den zu trans&shy;portierenden
                    Lade&shy;volumen.
                  </p>
                  <p className={faq.answer__first}>
                    Optional kann gegen Auf&shy;preis eine
                    Premium&shy;ver&shy;sicherung ab&shy;geschlossen werden, die
                    indivi&shy;duell nach Ihren Vor&shy;stellungen gestaltet
                    werden kann. Dort legen Sie sowohl die
                    Ver&shy;siche&shy;rungs&shy;summe fest als auch ob der
                    Zeit&shy;wert oder der Neuwert Ihres Eigen&shy;tums
                    versichert ist.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Wann wird eine Halte&shy;verbots&shy;zone benötigt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Eine Halte&shy;verbots&shy;zone wird immer benötigt, wenn
                    der Auftrag&shy;geber keine aus&shy;reichend große
                    Park&shy;fläche eigen&shy;ständig bereit&shy;stellen und
                    garan&shy;tieren kann.
                  </p>
                  <p className={faq.answer__first}>
                    Um Ihren Umzug sicher und fach&sh;gerecht aus&shy;zuführen,
                    benötigen wir Park&shy;fläche für die
                    Möbel&shy;fahr&shy;zeuge. Je nach Auf&shy;trag und
                    Fahr&shy;zeug&shy;wahl variiert der Platz&shy;bedarf.
                    Mindes&shy;tens sollten jedoch 15 Meter Länge, 3 m Breite
                    und 3,8m Höhe frei&shy,gehalten werden.
                  </p>
                  <p className={faq.answer__first}>
                    In Hamburg und vielen Groß&shy;städten ist solch eine Fläche
                    selten frei und zu&shy;ver&shy;lässig ver&shy;fügbar,
                    weshalb wir gegen Auf&shy;preis anbieten für Sie eine
                    Halte&shy;verbots&shy;zone ein&shy;zurichten. Die Kosten
                    dafür beginnen in Hamburg ab 120,00 Euro. In anderen Städten
                    können diese Kosten höher ausfallen.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Wie lange im Voraus muss eine Möbel&shy;spedition gebucht werden?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Je früher Sie planen, desto mehr Wahl&shy;frei&shy;heit
                    haben Sie bei den Terminen. Anders&shy;rum verhält es sich
                    genauso: Je weniger Zeit zwischen dem Wunsch&shy;termin und
                    der Anfrage liegt, desto eher ist der Termin schon vergeben.
                  </p>
                  <p className={faq.answer__first}>
                    Daher empfehlen wir 4 bis 6 Wochen oder idealer&shy;weise
                    früher Ihren Umzug bei uns zu buchen.
                  </p>
                  <p className={faq.answer__first}>
                    Dadurch haben Sie eine große Auswahl an verfüg&shy;baren
                    Terminen und Pla&shy;nungs&shy;sicher&shy;heit.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Ist der Kosten&shy;vor&shy;an&shy;schlag verbindlich?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Unsere im Umzugs&shy;angebot auf&shy;geführ&shy;ten Preise
                    sind für die auf&shy;geführ&shy;ten Leis&shy;tungen
                    verbind&shy;lich. Wir haben eine Preis&shy;bindung von 14
                    Tagen. Das bedeutet, dass wir die auf&shy;geführ&shy;ten
                    Preise bis zu 14 Tage nach Versand des Angebots garantieren.
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

export default SpediFaq;
