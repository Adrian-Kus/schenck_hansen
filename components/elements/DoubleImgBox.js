import Image from "next/image";
import double from "components/elements/DoubleImgBox.module.css";

function DoubleImgBox({ image_01, image_02, alt_01, alt_02 }) {
  return (
    <>
      <div className={double.frame}>
        <div className={double.frame__bg_gray}></div>
        <div className={double.frame__bg_blue}></div>
        <div className={double.img}>
          <div className={double.img__01}>
            <Image
              src={image_01}
              alt={alt_01}
              width="1000"
              height="1000"
            ></Image>
          </div>
          <div className={double.img__02}>
            <Image
              src={image_02}
              alt={alt_02}
              width="1000"
              height="1000"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoubleImgBox;
