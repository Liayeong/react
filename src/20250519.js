import React from 'react'
import { useState } from 'react'; //state hook 호출



const App = () => {

  let conut = 0 ;


  const [num,setNum] = useState(0)
  console.log(num,setNum)

  const [list,setList] =useState([1,2,3,4,5])
  console.log(list)

  {/*
    num 초기값
    setNum  set함수
    */} 

  const plus =()=>{
    conut = conut+1
    setNum(num + 1)
    console.log(conut,num)

  }

  const category = ['음악','영화','책']

  return (
    <div>
      {/*
        state : 리액트 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해주는 Hook
        상태 : 컴포넌트 내부에서 값이 변할 수 있는 데이터를 의미하며,
        useState를 통해 상태값을 선언하고 변경가능
      */}


      {
        category.map((list,idx)=>(
          <div key={idx}>{list}</div>
        ))
      }


      <h2>{conut}</h2>
      <h2>{num}</h2>
      <button type='button' onClick={plus}>증가!</button>

      {
        list.map((lists,idx)=>(
          <div key={idx}>{lists}</div>
        ))
      }

    </div>
  )
}

export default App
