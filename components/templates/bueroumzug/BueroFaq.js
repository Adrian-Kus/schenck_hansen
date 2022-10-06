import faq from "styles/Faq.module.css";
import FaqToggle from "components/FaqToggle";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

function BueroFaq() {
  return (
    <>
      <div className={faq.container}>
        <LayoutGroup>
          <motion.h2 className={faq.header} layout>
            Büroumzug Hamburg - Faq
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
                title="Finden Büro&shy;umzüge auch am Wochen&shy;ende statt?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Um Ihre Arbeitsabläufe so gering wie mög&shy;lich
                    ein&shy;zu&shy;schrän&shy;ken, bieten wir die
                    Mög&shy;lich&shy;keit an, dass Büro&shy;um&shy;züge am
                    Wochen&shy;ende statt&shy;finden.
                  </p>
                  <p className={faq.answer__first}>
                    Sprechen für einfach mit Ihrem Um&shy;zugs&shy;berater über
                    Ihren Wunsch&shy;termin für Ihren Umzug.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="02."
                title="Was kostet ein Büro&shy;umzug in Hamburg?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wenn Sie mit Ihrem Büro inner&shy;halb Hamburgs
                    um&shy;ziehen, dann sind die damit ver&shy;bundenen Kosten
                    von vielen Fak&shy;toren ab&shy;hängig.
                    Üb&shy;licher&shy;weise be&shy;ginnen kleine
                    Büro&shy;um&shy;züge ab 1.500 Euro zzgl. MwSt.
                  </p>
                  <p className={faq.answer__first}>
                    Um Ihnen ein zuverlässiges An&shy;gebot er&shy;stellen zu
                    können emp&shy;feh&shy;len wir einen
                    Be&shy;sich&shy;ti&shy;gungs&shy;termin. Wir
                    be&shy;spre&shy;chen alle Details mit Ihnen und Sie
                    er&shy;hal&shy;ten ein An&shy;gebot das genau auf Ihren
                    Büro&shy;um&shy;zug zu&shy;ge&shy;schnitten ist.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="03."
                title="Bietet Schenck &amp; Hansen einen Festpreis?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Wenn Sie wissen welche Leis&shy;tungen Sie für Ihren
                    Um&shy;zug der Büro&shy;räume wünschen, dann können wir
                    Ihnen dafür ein Um&shy;zugs&shy;an&shy;gebot mit
                    Fest&shy;preis er&shy;stel&shy;len. Um Ihren Bedarf zu
                    klären, bieten wir zu&shy;sätz&shy;lich als
                    Unter&shy;stüt&shy;zung kosten&shy;lose
                    Be&shy;sich&shy;ti&shy;gungs&shy;termine an.
                  </p>
                  <p className={faq.answer__first}>
                    Kurzfristige Anfragen können darüber hinaus auch nach
                    tat&shy;säch&shy;lichem Zeit&shy;auf&shy;wand
                    ab&shy;ge&shy;rechnet werden. In diesem Fall nennen wir
                    Ihnen vorab be&shy;kannte Stunden-Fest&shy;preise für Ihr
                    Umzugs&shy;team.
                  </p>
                </motion.div>
              </FaqToggle>
            </AnimatePresence>
            <AnimatePresence>
              <FaqToggle
                number="04."
                title="Bietet Schenck &amp; Hansen einen Pack&shy;service an?"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className={faq.answer}
                >
                  <p className={faq.answer__first}>
                    Um die zeitliche Belastung und die
                    Ar&shy;beits&shy;zeit&shy;aus&shy;fälle für Sie und Ihre
                    Mit&shy;ar&shy;beiter so gering wie mög&shy;lich zu
                    ge&shy;stalten, bieten wir Ihnen unseren
                    Ein&shy;pack&shy;service und Aus&shy;pack&shy;ser&shy;vice
                    an. Unsere Fach&shy;ar&shy;beiter packen für Sie alle
                    Büro&shy;uten&shy;si&shy;lien in Ak&shy;ten&shy;kartons ein
                    und auf Wunsch auch wieder aus.
                  </p>
                  <p className={faq.answer__first}>
                    Bei Bedarf bieten wir auch das 1:1 Ein- und Aus&shy;packen
                    an. So wird alles wieder im Wesent&shy;lichen
                    aus&shy;ge&shy;packt, wie es vorher ein&shy;gepackt wurde.
                  </p>
                  <p className={faq.answer__first}>
                    Nehmen Sie Kontakt auf und lassen Sie sich beraten.
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

export default BueroFaq;
