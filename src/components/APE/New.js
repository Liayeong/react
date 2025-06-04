import React from 'react'

const New = () => {

  let item = [
    {
      id:1,
      name:'Debossed Multi Logo Nylon Shark Full Zip Down Jacket',
      price: '￦1,079,000',
      img:'/img/image-1.jpg'
    }, {
      id:2,
      name:'Baby Milo 25th Anniv Plush Doll Tee',
      price: '￦164,000',
      img:'/img/image-2.jpg'
    },  {
      id:3,
      name:'Christmas Ape Head Tee',
      price: '￦164,000',
      img:'/img/image-3.jpg'
    }, {
      id:4,
      name:'Aurora Ape Head Tee',
      price: '￦164,000',
      img:'/img/image-4.jpg'
    }, {
      id:5,
      name:'Asia Camo Bomber Jacket',
      price: '￦1,056,000',
      img:'/img/image-5.jpg'
    }, {
      id:6,
      name:'Damage Relaxed Fit Sweater',
      price: '￦5639,000',
      img:'/img/image-6.jpg'
    }, {
      id:7,
      name:'Asia Camo Coach Jacket',
      price: '￦557,000',
      img:'/img/image-7.jpg'
    }, {
      id:8,
      name:'Gore-Tex Wind Stopper 1st Camo Relaxed Coach Jacket',
      price: '￦774,000',
      img:'/img/image-8.jpg'
    }
  ]
  return (
    <div>
      <div className='title'>
        <h3>신상품</h3>
      </div>
      <div a_item>
        {
          item.map((items)=>(
            <item key={items.id} items={items}/>

          ))
        }
      </div>
      
    </div>
  )
}

export default New
