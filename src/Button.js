import { useState } from "react";

function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }
  // alert('You click me !');
  return(
    <div>
        <h1> updated together</h1>
        <MyButton count={count} onClick ={handleClick}/>
        <MyButton count={count} onClick ={handleClick}/>


    </div>
  )
}

function MyButton({count, onClick}) {
//   return <button onClick={handleClick}> CLicked {count} times !</button>;
    return(
        <button onClick={onClick}> Clicked {count} times</button>
    )
}
export default MyApp;
