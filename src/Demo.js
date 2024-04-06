import './App.css';
import Buttonapp from './component/Buttonapp';

import Counter from './component/Counter';

function Demo(){
  
  return(
    <>
        {/* Counter App Using React js */}
        <Counter/>

        {/* Best Example to Pass a Function as a Props */}
        {/* <Buttonapp onstamp={()=>alert("Button Clicked!!")}>ClickMe</Buttonapp> */}
    </>
  );
}
export default Demo;