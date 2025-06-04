import React from 'react'
import './App.css'


// const [list,setList] = useState([1,2,3,4,5])
// console.log(list)




const menu = [
  {
    id:1,
    name:"무농약 간편 샐러드",
    category:"샐러드",
    price:"3,100원",
    text:'샛별배송 상품입니다',
    img:"/img/item1.jpg"
  },{
    id:2,
    name:"믹스샐러드 2종",
    category:"샐러드",
    price:"4,500원",
    text:'샛별배송 상품입니다',
    img:"/img/item2.jpg"
  },{
    id:3,
    name:"샐러드 채소믹스",
    category:"샐러드",
    price:"3,000원",
    text:'샛별배송 상품입니다',
    img:"/img/item3.jpg"
  },{
    id:4,
    name:"유러피안 샐러드믹스2종",
    category:"샐러드",
    price:"4,000원",
    text:'샛별배송 상품입니다',
    img:"/img/item4.jpg"
  },{
    id:5,
    name:"채소스틱 2종",
    category:"샐러드",
    price:"5,800원",
    text:'샛별배송 상품입니다',
    img:"/img/item5.jpg"
  },{
    id:6,
    name:"에그듬뿍 샐러드",
    category:"샐러드",
    price:"3,900원",
    text:'샛별배송 상품입니다',
    img:"/img/item6.jpg"
  },{
    id:7,
    name:"샐러드바 홈샐러드",
    category:"샐러드",
    price:"6,300원",
    text:'샛별배송 상품입니다',
    img:"/img/item7.jpg"
  }
  
]


function App() {
  return (
    <div>

      {/*

      *key : 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 사용

      -유동적인 데이터를 다룰 때는 원소를 새로 생성, 제거, 수정 할 수 있음
      -key가 없을 때는 vitrual dom을 비교하는 과정ㅇ에서 순차적으로 비교하면서 변화를 감지


      */} 


      <h1>샐러드 메뉴</h1>

      <div className='all_list'>
      {
        menu.map((menus)=>(
          <div className='list' key={menus.id}>
            <img src={menus.img} />
            <h3>{menus.name}</h3>
            <h4>{menus.price}</h4>
            <p>{menus.text}</p>
          </div>
        ))
      }
      </div>

      
    </div>
  )
}

export default App
