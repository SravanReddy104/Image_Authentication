import "./App.css";
import axios from "axios";
import { reset } from "./features/userSlice";
import { useEffect, useState, useRef } from "react";
import ImageGallery from "./ImageGallery";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const [mongoData, setmongoData] = useState([]);
  const [err, seterr] = useState("");
  const email = useRef("");
  const firstname = useRef("");
  const lastname = useRef("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get("http://localhost:9000/data/");
      setmongoData(response.data);
      console.log(response.data);
    };

    getdata();
  }, []);

  // const handle = async () => {
  //   const response = await axios.get("http://localhost:9000/animal/");
  //   console.log(response.data);
  //   setdata(response.data);
  // };
 
  const handleSubmit = async () => {
  
    const rep = await axios.post("http://localhost:9000/user/post", {
      name:firstname.current.value,
      id:user.id
    });
    console.log(rep)
    firstname.current.value = ""
    dispatch(reset(""))
    if(rep){
      navigate("/register")
    }

    else{
      seterr("some Error Occured")
    }
 
 
  
  };
  const hanleLogin = async ()=>{
    const rep = await axios.post("http://localhost:9000/login/", {
      name:firstname.current.value,
      id:user.id
    });
    firstname.current.value = ""
    dispatch(reset([]))
    
   console.log(rep.data)
    if(rep.data.length === 0){
      seterr("some Error Occured")
    }
    else{
      navigate("/login")
    }
  }


  // const handlePost = async () => {
  //   console.log("hello in post");

  //   const response = await axios.post("http://localhost:9000/electronics/", {
  //     data,
  //   });
  //   console.log(response);
  // };

  return (
    <div className="App">
      <div className="form">
        <input type="text" placeholder="Enter FirstName" ref={firstname} />
        <input type="text" placeholder="Enter LastName" ref={lastname} />
        <input type="email" placeholder="Enter Valid Email" ref={email} />
        <button onClick={handleSubmit}>Register</button>
        <button onClick={hanleLogin}>Login</button>
        {err}
      </div>

      <div className="imagegallery">
        <h5>Select images</h5>
        {user?.id}
        <div className="imageselect">
          {mongoData.map((data, i) => (
            <div className="gallery" key={i}>
              <ImageGallery id={data.id} url={data.url} name={data.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
