import React, { useState } from 'react'
import List from './components/List'
import Nav from './components/Nav'
import './App.css'

// const [list,setList] = useState([1,2,3,4,5])
// console.log(list)




const menus = [
  {
    id:1,
    name:"무농약 간편 샐러드",
    category:"믹스샐러드",
    price:"3,100원",
    text:'샛별배송 상품입니다',
    img:"/img/item1.jpg"
  },{
    id:2,
    name:"믹스샐러드 2종",
    category:"믹스샐러드",
    price:"4,500원",
    text:'샛별배송 상품입니다',
    img:"/img/item2.jpg"
  },{
    id:3,
    name:"샐러드 채소믹스",
    category:"믹스샐러드",
    price:"3,000원",
    text:'샛별배송 상품입니다',
    img:"/img/item3.jpg"
  },{
    id:4,
    name:"유러피안 샐러드믹스2종",
    category:"믹스샐러드",
    price:"4,000원",
    text:'샛별배송 상품입니다',
    img:"/img/item4.jpg"
  },{
    id:5,
    name:"채소스틱 2종",
    category:"채소스틱",
    price:"5,800원",
    text:'샛별배송 상품입니다',
    img:"/img/item5.jpg"
  },{
    id:6,
    name:"에그듬뿍 샐러드",
    category:"홈샐러드",
    price:"3,900원",
    text:'샛별배송 상품입니다',
    img:"/img/item6.jpg"
  },{
    id:7,
    name:"샐러드바 홈샐러드",
    category:"홈샐러드",
    price:"6,300원",
    text:'샛별배송 상품입니다',
    img:"/img/item7.jpg"
  }
  
]



function App() {

  //상태관리
  const [state ,setState] = useState({category:'전체',W_id:null});

  //카테고리
  const filterMenu = state.category === "전체" ? menus : menus.filter((menu)=>menu.category === state.category)

  //카테고리 중복 제거
  const categories = ['전체', ...new Set(menus.map((menu)=>menu.category))]
  console.log(categories)

  //선택한 데이터 가져오기
  const selectW = menus.find((menu)=>menu.id === state.W_id)
  console.log(selectW)

  //상태변경 핸들러
  const setSelectedCategory = (category)=> setState((prev)=>({...prev,category}))




  return (
    <div>
      <h1>샐러드 메뉴</h1>
      <div className='nav'>
            <Nav categories={categories} SelectedCategory={state.category} 
            onSelectCategory={setSelectedCategory}/>
      </div>

      <div className='allList'>
            <List menus={filterMenu}/>
      </div>

      
    </div>
  )
}

export default App
