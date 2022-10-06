import Image from "next/image";
import rew from "components/elements/Reviews.module.css";

function Reviews() {
  return (
    <>
      <div className={rew.frame}>
        <div className={rew.box}>
          <div className={rew.box__logo_left}>
            <a
              target="_blank"
              rel="noreferrer"
              className={rew.box__link_left}
              href="https://www.my-hammer.de/auftragnehmer/schenck-hansen-kg/bewertungen"
            >
              <Image
                src="/my_hammer_logo.png"
                alt="My Hammer Logo"
                width="800"
                height="128"
              ></Image>
            </a>
          </div>
          <div className={rew.box__stars_left}>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
          </div>
          <p className={rew.box__text}>243 Bewertungen</p>
        </div>

        <div className={rew.box}>
          <div className={rew.box__logo_middle}>
            <a
              target="_blank"
              rel="noreferrer"
              className={rew.box__link_middle}
              href="https://www.umzugsfirmen-check.de/detail/hamburg/hamburg/schenck-und-hansen-kg"
            >
              <Image
                src="/immoscout_logo.png"
                alt="Immoscout Logo"
                width="800"
                height="482"
              ></Image>
            </a>
          </div>
          <div className={rew.box__stars_middle}>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
          </div>
          <p className={rew.box__text}>85 Bewertungen</p>
        </div>

        <div className={rew.box}>
          <div className={rew.box__logo_right}>
            <a
              target="_blank"
              rel="noreferrer"
              className={rew.box__link_right}
              href="https://www.google.com/maps/place/Schenck+%26+Hansen+KG/@53.6216869,10.1553716,15z/data=!4m5!3m4!1s0x0:0x906901e6d781be9b!8m2!3d53.6216869!4d10.1553716"
            >
              <Image
                src="/google_logo.png"
                alt="Google Logo"
                width="800"
                height="268"
              ></Image>
            </a>
          </div>
          <div className={rew.box__stars_right}>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/full_star.svg"
                alt="Fünf Sterne Bewertung"
                width="500"
                height="500"
              ></Image>
            </div>
            <div className={rew.box__stars_img}>
              <Image
                src="/half_star.svg"
                alt="Fünf Sterne Bewertung"
                width="512"
                height="512"
              ></Image>
            </div>
          </div>
          <p className={rew.box__text}>26 Bewertungen</p>
        </div>
      </div>
    </>
  );
}

export default Reviews;
