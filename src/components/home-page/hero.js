import Image from "next/legacy/image";

import classes from "./hero.module.css";

function Hero() {
  const text = `Hi!, I'm Rohan`;
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/rohan.png"
            alt="An image showing Rohan"
            width={300}
            height={300}
            priority
          />
        </div>
        <h1>{text}</h1>
        <p>
          I blog about web development - expecially frontend frameworks like
          Angular or React.
        </p>
      </section>
    </>
  );
}

export default Hero;
