import "./App.css"
import Item from "./components/item";

function App() {


  const user = { name:"김지영", age:30 }
  let box = "안녕"

  const Click =()=>{
    alert("click");
  }

  return (
    <div>
      {/*
      jsx 문법에서의 주석처리방법
      
      -최상단이 하나면 단일경로 제작
      
      -단독태그사용시 태그 끝에 / 추가!
      -class가 아닌 className 사용

      */}

      {/*

      컴포넌트란?

      장점
      -코드 재사용성(동일한 컴포넌트를 여러 곳에서 사용할 수 있음)
      -유지보수 : 각 컴포넌트는 독립적으로 관리되므로 수정이 쉽다.
      -효율성: UI를 논리적인 단위로 나누어 개발 가능

      함수용 컴포넌트란?
      :JS 함수로 정의한다.
      간단하고 가독성이 좋음.
      Hooks를 사용해 상태관리와 생명주기 기능을 구현할 수 있다.

      참고*)
      const a = function(){} 익명함수
      function a () {} 선언적함수

      컴포넌트 설계 원칙이란?
      1)단일 책임 원칙: 각 컴포넌트는 하나의 기능을 담당해야 함.
      2)재사용성 : 자주 사용되는 UI요소는 컴포넌트로 만들어 재사용
      3)계층구조 : 복잡한 UI를 작은 컴포넌트로 나누고 이를 조합하여 구성
      4)함수명 첫 글자는 반드시!!!!! 대문자 작성 사용!!!
      5)컴포넌트 사용 공간에 <함수명/>을 호출해서 사용

      ※새로운 페이지 컴포넌트 제작 시 필수!!
      -전송(컴포넌트를 내보낼 장소에서 export)    export default 함수이름
      -호출(컴포넌트를 가져올 장소에서 import)    import 함수이름 from "경로";

      */}

      {/*

      Props
      :부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터함수의 매개변수

      -Props는 읽기전용, 자식 컴포넌트에서 직접 수정 불가
      -Props는 단방향 데이트 흐름을 유지해야함. 데이터는 항상 부모에서 자식으로 흘러가야한다.
      -Props는 타입을 검사하고 기본값을 설정하는 것이 좋다.
      -너무 많은 컴포넌트를 거쳐 Props를 전달하는 것은 좋지않음.
      -함수를 Props로 전달할 때는 불필요한 렌더링을 피하기위해 useCallback훅 등을 사용해야 함. 
      
      */}

      <div ClassName="allbox">
        <Box name="김지영" age={20} onClick={Click}/>
        <Box name="장은지" age={21}/>
        <Box name="장은지" age={23}/>
        <Box name="장은지" age={24}/>
        <Item user={user} box={box}/>
        <Test/><Box name="징징이"/><Test/>


        {/*반복해서 사용-> for문*/}
      </div>
    </div>
  );
}

const Box = ({name,age,onClick})=>{
  console.log(onClick)

  return(
    <div ClassName="box" onClick={onClick}>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <p>orem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard</p>
    </div>
  )
}

const Test = ({children})=>{
  console.log(children)
  return
  <div>
    <h3>Test컴포넌트</h3>
    {children}
  </div>
}




export default App;
