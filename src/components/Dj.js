import React from 'react'

const Dj = () => {

  let item = [
    {
      id:1,
      name:'지금인기',
      img: '/img/b1.png'
    }, {
      id:2,
      name: '지금인기',
      img: '/img/b2.png'
    },
    {
      id:3,
      name: '지금인기',
      img: '/img/b3.png'
    },{
      id:4,
      name: '지금인기',
      img: '/img/b4.png'
    }, {
      id:5,
      name: '지금인기',
      img: '/img/b5.png'
    }, {
      id:6,
      name: '지금인기',
      img: '/img/b6.png'
    }, {
      id:7,
      name: '지금인기',
      img: '/img/b7.png'
    }, {
      id: 8,
      name: '지금인기',
      img: '/img/b8.png'
    }, {
      id: 9,
      name: '지금인기',
      img: '/img/b9.png'
    }, {
      id: 10,
      name: '지금인기',
      img: '/img/b10.png'
    }, {
      id: 11,
      name: '지금인기',
      img: '/img/b11.png'
    }, {
      id: 12,
      name: '지금인기',
      img: '/img/b12.png'
    },{
      id: 13,
      name: '지금인기',
      img: '/img/b13.png'
    },{
      id: 14,
      name: '지금인기',
      img: '/img/b14.png'
    }
  ]


  return (
    <div>
      <div className='title'>
        <h2>DJ 스테이션</h2>
        <button type='button'>테마</button>
      </div>
      <div className='station'>
        <h3>느낌별 스테이션</h3>
        <div className='s_Item'>
          {
            item.map((items)=>(
              <Item key={items.id} items={items}/>
            ))
          }

        </div>
      </div>
      
    </div>
  )
}

export default Dj

const Item =({items})=> {
  console.log(items)
  return(
    <div>
      <img src={items.img} alt={items.name}/>
    </div>
  )
}
