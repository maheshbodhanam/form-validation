import React,{useState} from 'react'

const App = () => {
  const [data,setData] = useState({
    username :'',
    email :'',
    password :'',
    confirmpassword :'',
  })
  const {username,email,password,confirmpassword} =data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault();
    if(username.length <=5){
      alert("username must be at least 5 charecters" )
    }
    else if (password!==confirmpassword){
      alert("passwords are not matching");
    }
    else{
      console.log(data);
    }
   
  
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
        <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
        <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
        <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
        <input type="submit" name="submit" /><br/>
        </form>     
      </center>
    </div>
  )
}
export default App