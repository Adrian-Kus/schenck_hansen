import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function EntruempelungFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Entrümpelung Hamburg - Faq
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
                title="Werden alle Gegen&shy;stände fach&shy;gerecht entsorgt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Schenck &amp; Hansen sorgt dafür, dass die zu
                    ent&shy;rüm&shy;pelnden Gegen&shy;stän&shy;de bei einer
                    Ent&shy;rüm&shy;pelung in Hamburg fach&shy;ge&shy;recht
                    ent&shy;weder mit Hilfe eines
                    Re&shy;cy&shy;cling&shy;con&shy;tainers oder direkt am
                    Re&shy;cy&shy;cling&shy;hof ent&shy;sorgt werden. Dabei
                    achten wir darauf, dass alle Gegen&shy;stände vorab
                    sorten&shy;rein sor&shy;tiert und somit op&shy;ti&shy;mal
                    recycelt werden können.
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
                    Eine Entrümpelung in Hamburg kann je nach Um&shy;fang sehr
                    zeit&shy;nah ge&shy;bucht werden. Wenn es nur wenige Teile
                    sind, dann können wir teil&shy;weise tag&shy;gleich Ihnen
                    Mit&shy;ar&shy;beiter schi&shy;cken. Bei grö&shy;ßeren
                    Vor&shy;haben, ins&shy;be&shy;son&shy;dere wenn keine
                    Park&shy;mög&shy;lich&shy;keiten vor&shy;handen sind und
                    damit Halte&shy;ver&shy;bots&shy;zonen not&shy;wendig
                    werden, sollten min&shy;des&shy;tens 14 Tage vorab
                    ge&shy;bucht werden.
                  </p>
                  <p className={faq.answer__first}>
                    Wir geben stets unser Bestes Ihre Wunschtermine für Sie zu
                    verbuchen.
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
                    Eine Halteverbotszone wird immer not&shy;wen&shy;dig, wenn
                    für die Ent&shy;rüm&shy;pe&shy;lung in Hamburg ent&shy;weder
                    kein Platz für den Re&shy;cy&shy;cling&shy;con&shy;tainer
                    oder kein Platz für das Trans&shy;port&shy;fahr&shy;zeug
                    vor&shy;han&shy;den ist. Beim Ab&shy;trans&shy;port durch
                    ein Fahr&shy;zeug be&shy;nötigen wir gute 15 Meter Länge, um
                    sicher zu parken und Ihren Auf&shy;trag aus&shy;führen zu
                    können.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Gibt es einen Rabatt für eine Entrümpelung mit einem Umzug?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wenn Sie Ihren Umzug mit einer Ent&shy;rüm&shy;pe&shy;lung
                    in Hamburg kom&shy;bi&shy;nieren, können Sie im
                    Ver&shy;gleich zu 2 separaten Auf&shy;trägen An- und
                    Ab&shy;fahrts&shy;kosten sparen. Je nach Dis&shy;tanz kann
                    dies über 200 Euro Er&shy;spar&shy;nis für Sie bedeuten.
                  </p>
                  <p className={faq.answer__first}>
                    Gerne beraten wir sie rund um diese
                    Kom&shy;bi&shy;nie&shy;rungs&shy;möglichkeiten.
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

export default EntruempelungFaq;
