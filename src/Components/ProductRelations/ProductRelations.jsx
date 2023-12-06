import Button from "../Button/Button";
import style from "./ProductRelations.module.css";
import Title from "../Title/Title";
export default function ProductRelations({ src, preço, title }) {
  return (
    <div className={style.cardStyle}>
      <Title tag="h4">{title}</Title>
      <img src={src} className={style.imgStyle} />
      <p className={style.textStyle}>{preço}</p>
      <Button>Comprar</Button>
    </div>
  );
}
