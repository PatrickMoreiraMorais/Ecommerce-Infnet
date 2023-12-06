import style from "./CardProduct.module.css";
import Button from "../Button/Button";
export default function CardProduct({ src, titulo, info, nota, id }) {
  return (
    <div className={style.cardStyle} id={id}>
      <img src={src} className={style.imgStyle} />
      <h3 className={style.titleStyle}> {titulo}</h3>
      <p className={style.textStyle}>{info}</p>
      <Button>Comprar</Button>
      <span>{nota}</span>
    </div>
  );
}
