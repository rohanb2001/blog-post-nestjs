import classes from "./logo.module.css";

function Logo() {
  const text = `Rohan' Next Blog`;
  return (
    <>
      <div className={classes.logo}>{text}</div>
    </>
  );
}

export default Logo;
