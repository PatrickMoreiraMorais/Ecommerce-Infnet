import style from "./Questions.module.css";
export default function Questions(props) {
  return (
    <div id={props.id}>
      <ul className={style.questionsUserStyle}>
        <h4>{props.name1}</h4>
        <li className={style.listStyle}>{props.question1}</li>
        <span>{props.resposta1}</span>
        <span>{props.data1}</span>
        <h4>{props.name2}</h4>
        <li className={style.listStyle}>{props.question2}</li>
        <span>{props.resposta2}</span>
        <span>{props.data2}</span>
        <h4>{props.name3}</h4>
        <li className={style.listStyle}>{props.question3}</li>
        <span>{props.resposta3}</span>
        <span>{props.data3}</span>
      </ul>
    </div>
  );
}
