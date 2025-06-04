import React from 'react'

const Station =({feelings}) => {
  console.log(feelings)
  return (
    <div>
      {
        feelings.map((feeling)=>(
          <div key={feeling.id}>
            <img src={feeling.img} alt={feeling.name}/>
          </div>
        ))
      }
      
    </div>
  )
}

export default Station
