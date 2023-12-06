import style from "./CommentsUser.module.css";
export default function CommentsUser(props) {
  return (
    <div id={props.id}> 
      <ul className={style.commentsUserStyle}>
        <h4>{props.name1}</h4>
        <li className={style.listStyle}>{props.comment1}</li>
        <span>{props.nota1}</span>
        <span>{props.data1}</span>
        <h4>{props.name2}</h4>
        <li className={style.listStyle}>{props.comment2}</li>
        <span>{props.nota2}</span>
        <span>{props.data2}</span>
        <h4>{props.name3}</h4>
        <li className={style.listStyle}>{props.comment3}</li>
        <span>{props.nota3}</span>
        <span>{props.data3}</span>
      </ul>
    </div>
  );
}
