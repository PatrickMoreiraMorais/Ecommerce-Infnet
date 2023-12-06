import style from './NavBar.module.css'
export default function NavBar({
  src,
  childrenList1,
  childrenList2,
  childrenList3,
  href1,
  href2,
  href3
}) {
  return (
    <nav className={style.navBar}>
      <div className={style.logoStyle}>
        <img src={src} className={style.imgStyle} />
        <span>The Real Pisante</span>
      </div>

      <ul className={style.itemLists}>
        <li><a className={style.anchorStyle} href={href1}> {childrenList1} </a></li>
        <li><a className={style.anchorStyle} href={href2}> {childrenList2} </a></li>
        <li><a className={style.anchorStyle} href={href3}> {childrenList3} </a></li>
      </ul>
    </nav>
  )
}