import Title from "../Title/Title";
import style from "./Footer.module.css";
export default function Footer(props) {
  return (
    <footer>
      <div className={style.containerGrid}>
        <div className={style.footerStyle}>
          <Title tag="h5" className={style.titleStyle}>
            Tecnologia utilizada:
          </Title>
          <img src={props.src} className={style.logoStyle}></img>
        </div>
        <div className={style.direitos}>
            <span>Todos os direitos reservados á:</span>
            <span>Patrick Moreira dos Santos Morais</span>
        </div>
      </div>
    </footer>
  );
}
