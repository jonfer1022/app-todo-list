import "./TextInfo.scss";

const TextInfo = (props: any) => {
  
  return (
    <div className="info-main">
      {props.label ? 
        <div {...props} className={`info info-label ${props.className}`}> {props.label}: </div>
        : null
      }
      <div {...props} className={`info info-value ${props.className}`}>
        {props.value}
      </div>
    </div>
  )
}

export default TextInfo;