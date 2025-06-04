import React, { useState } from 'react'
import Header from './components/Header'
import Station from './components/Station'
import './App.css'


const feelings = [
  {
    id:1,
    name:"지금 인기",
    img: "/img/b1.png"
  },{
    id:2,
    name:"힙터질때",
    img: "/img/b2.png"
  },{
    id:3,
    name:"신났을때",
    img: "/img/b3.png"
  },{
    id:4,
    name:"우울할때",
    img: "/img/b4.png"
  },{
    id:5,
    name:"사랑할때",
    img: "/img/b5.png"
  },{
    id:6,
    name:"사랑했을때",
    img: "/img/b6.png"
  },{
    id:7,
    name:"집중할때",
    img: "/img/b7.png"
  },{
    id:8,
    name:"멍때릴때",
    img: "/img/b8.png"
  },{
    id:9,
    name:"운동할때",
    img: "/img/b9.png"
  },{
    id:10,
    name:"휴식할때",
    img: "/img/b10.png"
  },{
    id:11,
    name:"파티할때",
    img: "/img/b11.png"
  },{
    id:12,
    name:"외로울때",
    img: "/img/b12.png"
  },{
    id:13,
    name:"덜깼을때",
    img: "/img/b13.png"
  },{
    id:14,
    name:"잠안올때",
    img: "/img/b14.png"
  }
]

function App() {

  //상태관리
  const [state ,setState] = useState({category:'전체',W_id:null});
  
  //선택한 데이터 가져오기
  const selectW = feelings.find((feeling)=>feeling.id === state.W_id)
  console.log(selectW)



  return (
    <div>
      <div className='header'>

      </div>
     
      <div className='allStation'>
        <h3>DJ스테이션</h3>
        <h4>느낌별스테이션</h4>
        <Station feelings={filterFeeling}/>
      </div>
      
    </div>
  
  )
}

export default App
