import style from './Title.module.css'
export default function Title({
    tag,
    children
}) {
     if(tag ==='h1') {
        return <h1 className={style.titleStyle}>{children}</h1>
     } else if(tag ==='h2') {
        return <h2 className={style.titleStyle}>{children}</h2>
     } else if(tag ==='h3') {
        return <h3 className={style.titleStyle}>{children}</h3>
     } else if(tag ==='h4') {
        return <h4 className={style.titleStyle}>{children}</h4>
     } else if(tag ==='h5') {
        return <h5 className={style.titleStyle}>{children}</h5>
     } else if(tag ==='h6') {
        return <h6 className={style.titleStyle}> {children}</h6>
     }
  
}