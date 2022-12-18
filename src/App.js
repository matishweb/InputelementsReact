import logo from './logo.svg';
import './App.css';
import { useState,React } from 'react';


function App() {
  const [firstname,setfirstname] = useState('');
  const [lasttname,setlastname] = useState('');
 
  const onSubmit =(event) =>{
    event.preventDefault();
    // alert(firstname + lasttname);
    var element = document.createElement('h1');
    element.textContent = firstname;
    document.body.appendChild(element);

    let element2 = document.createElement('h2');
    element2.textContent = lasttname;
    document.body.appendChild(element2);  
  }

  const handleFchange =(event)=>{
      setfirstname(event.target.value);
  }
  const handleLchange =(event)=>{
    setlastname(event.target.value);

    // console.log(firstname);
}

  return (
    <div>
        <form>
        <h1> Click the below buttonn</h1>
        <label>Enter your first name:
        <input type="text" name="fname" onChange={handleFchange}/>
      </label>
      <br/>
      <label>Enter your last name:
        <input type="text" name="Lname" onChange={handleLchange}/>
      </label>
      <br/>
      <button onClick={onSubmit}>Submit</button>
        </form>

      
  </div>
   
  );
}

export default App;
