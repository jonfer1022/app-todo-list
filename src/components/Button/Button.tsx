import "./Button.scss";

const Button = (props: any) => {
  let className = props.className === 'confirm' ? "btn-confirm" : "";
  return (
    <button {...props} className={className} >{props.value}</button>
  )
}

export default Button;