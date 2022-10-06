import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function MoeTransFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Möbeltransport Hamburg - Faq
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
                title="Was kostet ein Möbel&shy;trans&shy;port in Hamburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Der Transport von ein paar Möbel&shy;stücken beginnt ab
                    200,00 Euro, solange die zu trans&shy;por&shy;tierenden
                    Gegen&shy;stände von 1 Mit&shy;arbeiter trans&shy;portiert
                    werden können. Sind 2 Mit&shy;arbeiter für große, schwere
                    oder sperrige Gegen&shy;stände not&shy;wendig, so beginnen
                    die Möbel&shy;trans&shy;port&shy;kosten ab 350,00 Euro.
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
                    Termine für Ihren Möbel&shy;trans&shy;port sind bei
                    ent&shy;spre&shy;chenden Kapa&shy;zitäten spon&shy;tan und
                    flexibel möglich. Mit etwas Glück kann Ihre Anfrage sogar
                    tag&shy;gleich aus&shy;ge&shy;führt werden. Wir empfehlen
                    trotz dessen einen Vor&shy;lauf von 7 oder mehr Tagen,
                    sodass alle Parteien dies ein&shy;planen können.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Was ist die maxi&shy;male Lade&shy;menge?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Als Umzugs&shy;unter&shy;nehmen verfügen wir über eine
                    breite Palette an Trans&shy;port&shy;möglich&shy;keiten und
                    Fahr&shy;zeugen. Unser kleinster LKW verfügt über 18
                    Kubik&shy;meter Lade&shy;volumen. Dies entspricht ca. bis zu
                    200 großen Umzugs&shy;kartons.
                  </p>
                  <p className={faq.answer__first}>
                    Somit beträgt die maxi&shy;mal mög&shy;liche
                    Trans&shy;port&shy;menge, selbst bei unserem kleinsten LKW,
                    um&shy;gerechnet 200 große Umzugs&shy;kartons.
                  </p>
                  <p className={faq.answer__first}>
                    Natürlich können wir größere Mengen gerne für Sie
                    trans&shy;portieren.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Bietet Schenck &amp; Hansen Ver&shy;pa&shy;ckung&shy;smaterial an?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wir bieten Ihnen alles an
                    Ver&shy;pa&shy;ckungs&shy;material, was Sie für einen
                    erfolg&shy;reichen Möbel&shy;trans&shy;port benötigen. Im
                    Regel&shy;fall beauf&shy;tragen uns die Kunden mit dem
                    Ver&shy;packen ihrer Möbel&shy;stücke. In diesem Fall
                    bringen wir das Ver&shy;pa&shy;ckungs&shy;material direkt
                    mit.
                  </p>
                  <p className={faq.answer__first}>
                    Wenn Sie diese Arbeit selbst über&shy;nehmen möchten, können
                    wir vorab Ihnen ent&shy;sprechendes
                    Ver&shy;pa&shy;ckungs&shy;material und
                    Um&shy;zugs&shy;kartons anliefern.
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

export default MoeTransFaq;
