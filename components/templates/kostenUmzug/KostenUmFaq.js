import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function KostenUmFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Umzugskosten In Hamburg - Faq
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
                title="Wie viel kostet der Ein- und Aus&shy;pack&shy;service?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Der Ein&shy;pack&shy;service von Schenck &amp; Hansen ist
                    immer emp&shy;feh&shy;lens&shy;wert, da alles was unsere
                    Mit&shy;arbeiter für Sie ein&shy;packen ver&shy;sichert ist.
                    Gleich&shy;zeitig sparen Sie viel Zeit und haben keinen
                    Stress mit den sehr wichtigen
                    Ein&shy;pack&shy;ar&shy;beiten.
                  </p>
                  <p className={faq.answer__first}>
                    Wenn Sie selbst Umzugs&shy;kartons ein&shy;packen, besteht
                    im Regel&shy;fall kein Ver&shy;siche&shy;rungs&shy;schutz.
                    Der Gesetz&shy;geber hat den
                    Ver&shy;siche&shy;rungs&shy;schutz für durch Kunden
                    selbst&shy;ge&shy;packte Um&shy;zugs&shy;kartons im
                    Regel&shy;fall aus&shy;ge&shy;schlos&shy;sen.
                  </p>
                  <p className={faq.answer__first}>
                    Die Kosten für den Ein&shy;pack&shy;ser&shy;vice und den
                    Aus&shy;pack&shy;ser&shy;vice va&shy;ri&shy;ie&shy;ren, je
                    nach&shy;dem was ein&shy;gepackt werden soll. Je
                    klein&shy;teiliger, em&shy;pfind&shy;licher und
                    zer&shy;brech&shy;licher das
                    ein&shy;zu&shy;pa&shy;cken&shy;de Gut ist, desto mehr Zeit
                    nimmt das Ein- und Aus&shy;packen in An&shy;spruch. Somit
                    er&shy;höhen sich auch die jewei&shy;ligen Kosten pro
                    Um&shy;zugs&shy;karton. Fol&shy;gende Richt&shy;werte geben
                    wir Ihnen gerne an die Hand:
                  </p>
                  <p className={faq.answer__first}>
                    <strong>Einpackservice:</strong>
                    <br />
                    Nur zer&shy;brech&shy;liches / empfind&shy;liches
                    Um&shy;zugs&shy;gut: 8,00 Euro / Um&shy;zugs&shy;karton
                    Gesamter, durch&shy;schnitt&shy;licher
                    Privat&shy;haus&shy;halt: 5,00 Euro / Um&shy;zugs&shy;karton
                    Nur Bücher / Akten&shy;ordner: 4,00 Euro /
                    Um&shy;zugs&shy;karton
                  </p>
                  <p className={faq.answer__first}>
                    <strong>Auspackservice:</strong>
                    <br />
                    4,50 Euro / Umzugskarton
                  </p>
                  <p className={faq.answer__first}>
                    Wenn Sie sich nicht sicher sind ob Sie selbst
                    recht&shy;zeitig mit den Ein&shy;pack&shy;ar&shy;beiten
                    fertig werden, dann stellen wir Ihnen gerne er&shy;fahrene
                    Packer zum Stunden&shy;satz von 36,00 Euro zur
                    Ver&shy;fügung. Die Packer über&shy;nehmen in diesem Fall
                    das Ein&shy;packen für Sie.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Wie viel kostet eine Küchen&shy;montage?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Die Kosten der Küchen&shy;montage vari&shy;ieren und sind
                    von vielen Fak&shy;toren ab&shy;hängig. Zu diesen
                    Fak&shy;toren zählen ins&shy;be&shy;son&shy;de&shy;re die
                    Größe der Küche sowie die Kom&shy;plexi&shy;tät der Küche.
                    Da diese Um&shy;stände vorab nicht zu
                    pau&shy;scha&shy;lisie&shy;ren sind und
                    er&shy;fah&shy;rungs&shy;gemäß fast immer
                    in&shy;di&shy;vi&shy;du&shy;elle Wünsche
                    hin&shy;zu&shy;kommen, bieten wir die Durch&shy;führung der
                    Küchen&shy;montage nach tat&shy;säch&shy;lichem
                    Zeit&shy;auf&shy;wand an. Je Stunde, je Monteur
                    be&shy;rech&shy;nen wir 60,00 Euro brutto.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Kommen weitere Um&shy;zugs&shy;kosten auf mich zu?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Nein, es kommen keine weiteren Kosten hinzu.
                  </p>
                  <p className={faq.answer__first}>
                    Für vorab besprochene fixe Leis&shy;tungen
                    er&shy;hal&shy;ten Sie ein Fest&shy;preis&shy;an&shy;gebot.
                    Für die auf&shy;ge&shy;führten Leis&shy;tungen und
                    An&shy;gaben hat dieser Fest&shy;preis ab
                    Ver&shy;trags&shy;schluss be&shy;stand, sodass Sie
                    Pla&shy;nungs&shy;sicher&shy;heit haben.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Wie setzen sich die Um&shy;zugs&shy;kosten zu&shy;sammen?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Unsere Umzugs&shy;an&shy;gebote ent&shy;hal&shy;ten alle
                    Kosten, die für den Erfolg Ihres Auf&shy;trags
                    not&shy;wendig sind. Diese Kosten um&shy;fassen
                    Per&shy;sonal&shy;kosten, Trans&shy;port&shy;kosten,
                    All&shy;gemein&shy;kosten, Material&shy;kosten, Spesen,
                    Über&shy;nach&shy;tungs&shy;kosten sowie
                    not&shy;wen&shy;dige Gebühren (bspw. für
                    Geneh&shy;mi&shy;gungen).
                  </p>
                  <p className={faq.answer__first}>
                    Die Personal&shy;kosten machen fast immer den Groß&shy;teil
                    der Kosten aus. Ins&shy;beson&shy;dere im Nah&shy;bereich
                    ist es nicht un&shy;gewöhn&shy;lich, dass diese 75% - 90%
                    oder mehr der Gesamt&shy;kosten aus&shy;machen. Somit sind
                    Per&shy;sonal&shy;kosten der Haupt&shy;treiber der
                    An&shy;gebots&shy;preise.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="05."
                title="Werden die Mit&shy;ar&shy;beiter von Schenck &amp; Hansen fair be&shy;zahlt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Ja, all unsere Mit&shy;ar&shy;beiter er&shy;hal&shy;ten eine
                    über&shy;tarif&shy;liche Ver&shy;gütung.
                  </p>
                  <p className={faq.answer__first}>
                    Wir wissen, dass wir er&shy;fah&shy;renes und
                    quali&shy;fi&shy;zier&shy;tes Per&shy;sonal nur mit guten
                    Ar&shy;beits&shy;be&shy;din&shy;gungen und guten Löhnen
                    halten können. Auch die Neu&shy;ge&shy;win&shy;nung von
                    weiteren groß&shy;artigen Team&shy;mit&shy;gliedern
                    funk&shy;tio&shy;niert nur, wenn wir ein
                    ko&shy;ope&shy;ratives Um&shy;feld schaffen bei dem die
                    harte Arbeit auch ent&shy;sprech&shy;end ver&shy;gütet wird.
                  </p>
                  <p className={faq.answer__first}>
                    Aus diesem Grund zahlen wir be&shy;reits heute, selbst bei
                    Ein&shy;stiegs&shy;po&shy;si&shy;tionen ohne große
                    Er&shy;fah&shy;rung, be&shy;reits mehr als den ab dem
                    01.10.2022 gel&shy;tenden Min&shy;dest&shy;lohn von 12,00
                    Euro.
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

export default KostenUmFaq;
