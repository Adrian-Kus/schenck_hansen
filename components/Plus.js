import Image from "next/image";
import faqimg from "styles/FaqImg.module.css";
import { motion } from "framer-motion";

function Plus() {
  return (
    <>
      <motion.div layout className={faqimg.image}>
        <Image
          src="/plus.svg"
          width={150}
          height={150}
          alt="Zeichen öffnen"
        ></Image>
      </motion.div>
    </>
  );
}

export default Plus;
