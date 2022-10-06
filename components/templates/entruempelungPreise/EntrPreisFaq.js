import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function EntrPreisFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Preise & Kosten einer Entrümpelung - Faq
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
                title="Was kostet eine Ent&shy;rüm&shy;pe&shy;lung in Hamburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wenn nur ein paar Gegen&shy;stände ent&shy;rüm&shy;pelt
                    werden sollen beginnen die
                    Ent&shy;rüm&shy;pe&shy;lungs&shy;kosten ab 200 Euro.
                    Voraus&shy;setzung ist, dass 1 Mit&shy;ar&shy;beiter diese
                    sicher alleine trans&shy;por&shy;tieren und ent&shy;sorgen
                    kann.
                  </p>
                  <p className={faq.answer__first}>
                    Die Entrümpelung von größeren oder schwe&shy;re&shy;ren
                    Gegen&shy;ständen wird von min&shy;destens 2
                    Mit&shy;ar&shy;beitern durch&shy;ge&shy;führt. Die Kosten
                    beginnen in diesem Fall ab 350 Euro. Die Höhe der
                    Ent&shy;rüm&shy;pe&shy;lungs&shy;kosten richten sich
                    haupt&shy;säch&shy;lich nach der Ge&shy;samt&shy;menge der
                    zu ent&shy;rüm&shy;pelnden Gegen&shy;stände. Zusätz&shy;lich
                    kommen Fak&shy;toren wie die Fahr&shy;zeug&shy;größe,
                    Lauf&shy;wege, die An&shy;zahl der zu
                    über&shy;win&shy;denden Ge&shy;schosse, die
                    Not&shy;wendig&shy;keit einer
                    Halte&shy;ver&shy;bots&shy;zone zum Parken sowie weitere
                    Wunsch&shy;leis&shy;tungen des Kunden hinzu.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Wie kurzfristig kann eine Ent&shy;rüm&shy;pe&shy;lung statt&shy;finden?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Bei Ver&shy;füg&shy;bar&shy;keit von Terminen ist auch eine
                    kurz&shy;fristige Be&shy;auf&shy;tragung mög&shy;lich.
                    Ins&shy;beson&shy;dere bei Kleinst&shy;mengen können wir
                    meist sehr zeit&shy;nah inner&shy;halb von 7 Tagen ab
                    An&shy;frage Ent&shy;rüm&shy;pe&shy;lungen durch&shy;führen.
                  </p>
                  <p className={faq.answer__first}>
                    Sobald eine ganze Wohnung oder ein Haus ent&shy;rüm&shy;pelt
                    werden soll, emp&shy;feh&shy;len wir min&shy;destens 4 bis 6
                    Wochen Vor&shy;lauf. Dadurch kann ein
                    rei&shy;bungs&shy;loser Ab&shy;lauf und
                    ent&shy;spre&shy;chende Ka&shy;pa&shy;zi&shy;täten für Sie
                    gewähr&shy;leistet werden.
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
                    In Hamburg ist es in den meisten Fällen
                    er&shy;for&shy;der&shy;lich, dass eine
                    Halte&shy;ver&shy;bots&shy;zone ein&shy;ge&shy;richtet
                    werden muss. Je mehr zu ent&shy;rümpeln ist, desto mehr
                    Park&shy;fläche brauchen wir. Bei kleineren Mengen reichen
                    10 Meter Park&shy;fläche (dies ent&shy;spricht ca. 2 Kombis
                    mit etwas Platz da&shy;zwi&shy;schen) Größere
                    Ent&shy;rüm&shy;pe&shy;lungs&shy;mengen be&shy;nötigen
                    min&shy;destens 15 Meter Park&shy;fläche (dies
                    ent&shy;spricht ca. 3 Kombis mit etwas Platz
                    da&shy;zwi&shy;schen). Wenn Sie nicht die
                    Mög&shy;lich&shy;keit haben uns ent&shy;spre&shy;chen&shy;de
                    Park&shy;flächen sicher zu stellen, dann wird eine
                    Halte&shy;ver&shy;bots&shy;zone not&shy;wendig.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Entfernt Schenck &amp; Hansen auch alte Fuß&shy;boden&shy;beläge?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, wir ent&shy;fernen PVC-Böden und Laminat auf Wunsch des
                    Kunden. Auch die Teppich&shy;ent&shy;fernung, ver&shy;klebt
                    oder nicht ver&shy;klebt, ist mög&shy;lich und bei Schenck
                    &amp; Hansen buchbar.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Wie läuft eine Ent&shy;rüm&shy;pe&shy;lung ab?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Bei Klein&shy;mengen (bis zu 30 klei&shy;neren
                    Gegen&shy;stän&shy;den) genügt ein kurzes Tele&shy;fonat, um
                    Ihnen ein An&shy;gebot zu erstellen.
                  </p>
                  <p className={faq.answer__first}>
                    Bei größeren Mengen benötigen wir von Ihnen per Mail
                    ent&shy;weder eine Auf&shy;listung bzw. Fotos. Auf Basis
                    dessen er&shy;stellen wir Ihnen dann ein
                    de&shy;tail&shy;liertes Angebot.
                  </p>
                  <p className={faq.answer__first}>
                    Soll eine ganze Wohnung bzw. ein Haus ent&shy;rüm&shy;pelt
                    werden, bieten wir einen
                    Be&shy;sich&shy;ti&shy;gungs&shy;termin zur
                    An&shy;gebots&shy;er&shy;stellung an.
                  </p>
                  <p className={faq.answer__first}>
                    Nach Ver&shy;trags&shy;schluss kümmern wir uns um alles was
                    not&shy;wendig ist, damit Ihre Ent&shy;rüm&shy;pe&shy;lung
                    ein voller Erfolg wird.
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

export default EntrPreisFaq;
