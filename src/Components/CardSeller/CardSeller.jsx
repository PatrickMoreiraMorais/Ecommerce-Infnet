import style from "./CardSeller.module.css";
export default function CardSeller(props) {
  return (
    <div className={style.cardStyle}>
      <div className={style.imgDiv}>
        <img src={props.src} className={style.imgStyle} />
      </div>
      <div className={style.infoStyle}>
      <h3 className={style.tituloStyle}>{props.titulo}</h3>
        <span>{props.email}</span>
        <span>{props.telefone}</span>
        <span>{props.nota}</span>
      </div>
    </div>
  );
}
