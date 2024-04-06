import './App.css';
import Buttonapp from './component/Buttonapp';

import Counter from './component/Counter';

function Demo(){
  
  return(
    <>
        {/* <TicTocToe/> */}
        <Counter/>
        <Buttonapp onstamp={()=>alert("Button Clicked!!")}>ClickMe</Buttonapp>
    </>
  );
}
export default Demo;