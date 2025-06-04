import React from 'react'

function Header() {
  return (
    <div>
      <header>
        <h1>NAVER VIBE</h1>

        <button type='button' className='member'>멤버쉽 구독</button>

        <nav>
          <ul className='menu'>
            <li><a href='#'>투데이</a></li>
            <li><a href='#'>차트</a></li>
            <li><a href='#'>최신앨범</a></li>
            <li><a href='#'>DJ 스테이션</a></li>
            <li><a href='#'>VIBE MAG</a></li>
            <li><a href='#'>이달의 노래</a></li>
          </ul>
        </nav>
        <span></span>
        <nav>
          <ul className='menu2'>
            <li><a href='#'>서비스 소개</a></li>
            <li><a href='#'>내돈내듣</a></li>
            <li><a href='#'>VIBE 오디오</a></li>
            <li><a href='#'>REWIND 2024</a></li>
            <li><a href='#'>이용권 선물</a></li>
          </ul>
        </nav>
        <button type='button' className='desktop'>데스크톱앱 설치</button>

      </header>

    </div>
  )
}

export default Header
