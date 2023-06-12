import './App.css';
import SayHello from './SayHello';
import ChangeEvent from './component/chap01_event/ChangeEvent';
import ClickEvent from './component/chap01_event/ClickEvent';
import SubmitEvent from './component/chap01_event/SubmitEvent';
import FoodList from './component/chap02_props/FoodList';

//리액트에서는 하나의 컴포넌트가 여러개의 엘리먼트르 반환할 수 있다.
//JSX를 작성할 때 return 문 안에 반드시 하나의 최상위 태그가 있어야 한다.
//Fragment를 사용하면 의미없는 태그를 중려 가독성을 좋게 한다.`
function App() {

  const looping = () => {
    const helloList = [];

    for(let i=0; i<5; i++) {
      helloList.push(<SayHello />);      
    }
    return helloList;
  }

  //jsx 문법에서는 스크립트를 코드로 직접사용이 불가능.
  //{} 안에서 함수의 호출문이나 변수참조는 가능.
  return (
    <>
      <FoodList />
    </>
  );
}

export default App;
