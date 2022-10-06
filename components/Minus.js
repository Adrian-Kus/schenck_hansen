import Image from "next/image";
import faqimg from "styles/FaqImg.module.css";
import { motion } from "framer-motion";

function ArrowUp() {
  return (
    <>
      <motion.div layout className={faqimg.image}>
        <Image
          src="/minus.svg"
          width={150}
          height={150}
          alt="Zeichen schließen"
        ></Image>
      </motion.div>
    </>
  );
}

export default ArrowUp;
