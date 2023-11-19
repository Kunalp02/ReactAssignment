import { useState } from 'react'
import './styles.css'
import axios from 'axios';
const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const changeHandler = (e) => {
        console.log(e.target.name + ": " + e.target.value )
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }


    const submitLogin = async (e) => {
        e.preventDefault();
        console.log("submitting logn", e);

        try {
          const response = await axios.post('https://stg.dhunjam.in/account/admin/login', {
              username: 'DJ@4',
              password: 'Dhunjam@2023'
          });
          console.log(response);
      } catch (error) {
          console.error(error);
      }
    }


  return (
    <div>
        <div className='form-container'>
        <form className="form" onSubmit={submitLogin}>
                <h1 className='heading'>Venue Admin Login</h1>
                <div>
                <input name="username" value={data.username} placeholder="Username" onChange={changeHandler}/>
                <input name="password" value={data.password} placeholder="Password" onChange={changeHandler}/>
                </div>
                <button className="login">Sign In</button>
                <p className='p'>New Registration ?</p>
        </form>
        </div>
    </div>
  )
}

export default Login
