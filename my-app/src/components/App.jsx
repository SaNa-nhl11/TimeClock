import React from 'react';

function App(){

    setInterval(update,1000); //calls the function every 1000 miliseconds//

    let now = new Date().toLocaleTimeString();

    const [Time,currentTime] = React.useState(now);  //useState Hook//

    function update(){
        let NewTime = new Date().toLocaleTimeString();
        currentTime(NewTime);
    }

    return (
       <div>
        <h1>{Time}</h1>
        <button onClick={update}>Get Time</button> 
      </div> 
      );

}

export default App;