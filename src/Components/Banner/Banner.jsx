import style from "./Banner.module.css";
export default function Banner({src, mobileSrc}) {

    const isMobile = window.innerWidth <= 750;
  ;  return (
    <div className={style.bannerStyle}>
      <img src={isMobile ? mobileSrc : src} className={style.imgStyle}></img>
    </div>
  );
}
