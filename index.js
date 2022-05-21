function getNum()
{
    return Math.floor(Math.random()*10)+1;
}
class NumPicker extends React.Component{
render() {
    const num=getNum();
    let msg;
    if(num==7)
    {
        msg= <div>
                 <h2>Congratulations!</h2>
                 <img src ="lebron.webp"/>
             </div>
    }
    else
    {
        msg = <p>Sorry You lose!!</p>
    }
    return (
              <div>
                  <h1> Your num is {num}</h1>
                  {msg}
              </div>
            
           );
         }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));