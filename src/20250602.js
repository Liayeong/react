import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Head from './components/Head'
import Footer from './components/Footer'
import './App.css'


const App = () => {
  return (
    <div>
      {/*
        react Router : 페이지 간 이동을 처리하기 위해 사용되는 라이브러리

        url기반 화면 전환 : 사용자가 입력한 url에 따라 다른 컴포넌트를 보여줌

        spa기반 화면 전환 : 페이지 새로고침없이 화면을 전환

        *라이브러리 설치
        npm install react-router-dom

        1.기본설정
        BrowserRouter 앱 감싸기
        리액트 라우터가 url을 관리할 수 있도록 도와주는 컴포넌트
        index.js 파일에서 렌더되는 컴포넌트를 감싸서 사용.

        -import {BrowserRouter} from 'react-router-dom'
        -  <BrowserRouter>
              <App/>
           </BrowserRouter>

        2.기본 라우팅 구현
        Routes, Route 컴포넌트를 사용하여 url경로에 따라 다른 컴포넌트를 렌더링

        Routes : 여러 Route를 감싸는 컨테이너
        Route : 특정 경로(path)에 매칭될 때 렌더링할 컴포넌트를 지정
        path : url 경로 지정
        element : 렌더링할 컴포넌트를 지정


        3.네비게이션 추가
        페이지간 이동은 Link 컴포넌트를 사용

        to : 이동할 경로를 지정



      */}



      <Head/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    

    </div>

  )
}

export default App
