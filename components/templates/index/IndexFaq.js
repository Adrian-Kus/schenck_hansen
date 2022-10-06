import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function IndexFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzugsunternehmen Hamburg - Faq
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
                title="Was kostet eine Um&shy;zugs&shy;unter&shy;nehmen in Hamburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Schenck &amp; Hansen bietet Ihnen als
                    Um&shy;zugs&shy;unter&shy;nehmen in Hamburg Um&shy;züge ab
                    399 Euro an. Die Höhe der Um&shy;zugs&shy;kosten hängen
                    immer in&shy;di&shy;vi&shy;duell von Ihren
                    Vor&shy;stel&shy;lungen ab. Nutzen Sie unseren
                    Online&shy;kal&shy;ku&shy;lator und er&shy;stel&shy;len Sie
                    sich Ihr Traum&shy;an&shy;gebot ganz nach Ihren Wünschen.
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
                    Ja, ihr Umzug ist bei Schenck &amp; Hansen ohne
                    Mehr&shy;kosten immer ver&shy;sichert.
                  </p>
                  <p className={faq.answer__first}>
                    Diese Grund&shy;haftung beträgt 620 Euro je Kubik&shy;meter
                    Lade&shy;vo&shy;lu&shy;men und ver&shy;sichert den
                    Zeit&shy;wert der Gegen&shy;stände. Ein Um&shy;zug mit 20
                    Kubik&shy;meter Lade&shy;volumen wäre somit in Höhe von
                    12.400 Euro zum Zeit&shy;wert ver&shy;sichert.
                  </p>
                  <p className={faq.answer__first}>
                    Optional können Sie bei uns gegen Auf&shy;preis die
                    Trans&shy;port&shy;ver&shy;siche&shy;rung buchen. Die
                    Trans&shy;port&shy;ver&shy;siche&shy;rung bietet zwei
                    wesent&shy;liche Vor&shy;teile. Zum einen können Sie
                    un&shy;ab&shy;hängig von der Trans&shy;port&shy;menge die
                    Höhe der Ver&shy;siche&shy;rungs&shy;summe be&shy;stimmen.
                    Diese sollte den tat&shy;säch&shy;lichen
                    Be&shy;geben&shy;heiten ent&shy;sprechend. Zum anderen
                    können Sie bei der Trans&shy;port&shy;ver&shy;siche&shy;rung
                    nicht nur den Zeit&shy;wert, sondern auch den Neu&shy;wert
                    der Gegen&shy;stände ver&shy;sichern.
                  </p>
                  <p className={faq.answer__first}>
                    Gerne beraten wir Sie rund um das Thema Um&shy;zug mit
                    Ver&shy;sicherung sowie
                    Trans&shy;port&shy;ver&shy;sicherung.
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
                    Eine Halte&shy;verbots&shy;zone wird immer dann
                    be&shy;nötigt, wenn vor Ort nicht mindes&shy;tens 15 Meter
                    Park&shy;fläche am Stück sicher be&shy;reit&shy;gestellt
                    werden kann.
                  </p>
                  <p className={faq.answer__first}>
                    Gerne über&shy;nehmen wir als
                    Um&shy;zugs&shy;unter&shy;nehmen in Hamburg alle
                    not&shy;wen&shy;digen Schritte zur
                    gesetzes&shy;kon&shy;formen Ein&shy;rich&shy;tung der
                    Halte&shy;ver&shy;bots&shy;zone. Bitte
                    kon&shy;tak&shy;tieren Sie uns min&shy;des&shy;tens 14 Tage
                    vor Um&shy;zugs&shy;beginn, sodass wir
                    frist&shy;ge&shy;recht die Ge&shy;nehmi&shy;gung beantragen
                    können.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Wie lange im Voraus muss ein Umzug gebucht werden?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wir empfehlen mindestens 4 Wochen vor ge&shy;plan&shy;tem
                    Um&shy;zugs&shy;beginn bei Schenck &amp; Hansen ein
                    Um&shy;zugs&shy;an&shy;gebot einholen.
                  </p>
                  <p className={faq.answer__first}>
                    Als familiengeführtes Um&shy;zugs&shy;unter&shy;nehmen in
                    Hamburg sind bei uns ca. 4 Wochen im Voraus die meisten
                    ver&shy;füg&shy;baren Um&shy;zugs&shy;termine
                    aus&shy;ge&shy;bucht. Je größer Ihr ge&shy;planter
                    Um&shy;zug ist und je länger die Distanz zwischen der
                    ak&shy;tu&shy;ellen und der neuen An&shy;schrift
                    aus&shy;fällt, desto eher sollten Sie Ihr
                    Um&shy;zugs&shy;an&shy;gebot an&shy;fordern.
                  </p>
                  <p className={faq.answer__first}>
                    Selbst&shy;ver&shy;ständlich prüfen wir für Sie auch gerne
                    kurz&shy;fristigere An&shy;fragen. Kontak&shy;tieren Sie uns
                    direkt und wir planen ge&shy;mein&shy;sam Ihren Um&shy;zug
                    ganz nach Ihren Wünschen.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Ist der Angebots&shy;preis im Umzugs&shy;angebot verbindlich?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, unsere Umzugs&shy;angebote ent&shy;hal&shy;ten
                    ver&shy;bind&shy;liche Fest&shy;preise für die
                    ge&shy;wünsch&shy;ten Leis&shy;tungen.
                  </p>
                  <p className={faq.answer__first}>
                    Als Umzugs&shy;unter&shy;nehmen in Hamburg mit über 120
                    Jahren Um&shy;zugs&shy;er&shy;fahrung sind wir in der Lage
                    Ihnen seriöse Um&shy;zugs&shy;an&shy;gebote mit
                    Fest&shy;preisen für die von Ihnen ge&shy;wünsch&shy;ten und
                    für Ihren Um&shy;zug not&shy;wen&shy;digen Leis&shy;tungen
                    zu erstellen.
                  </p>
                  <p className={faq.answer__first}>
                    Nutzen Sie unseren Online-Umzugs&shy;kal&shy;ku&shy;lator
                    und erstellen sich Ihren Traum&shy;umzug ganz nach Ihren
                    Vorstellungen!
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

export default IndexFaq;
