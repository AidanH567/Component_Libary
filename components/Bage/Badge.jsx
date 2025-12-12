export default function Badge({children, color ="grey"}){
    return (
     <span className={`badge badge--${color}`}>{children}</span>

    )

}