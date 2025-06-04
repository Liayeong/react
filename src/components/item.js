const Item = (props)=>{
  console.log(props.name)
  return(
    <div ClassName="box">
      <h3>{props.name}</h3>
      <p>orem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard</p>
    </div>
  )
}

export default Item