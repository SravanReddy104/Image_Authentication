import React from 'react-dom';
import {Provider } from 'react-redux';
import store from './Store';
import Apps from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './Register';
import Login from './Login';




function App() {
  return (
    <Provider store={store}>
        {/* <Apps/> */}
     <BrowserRouter>
      <Routes>
         
        <Route path='/' element={<Apps/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

       
      </Routes>
     </BrowserRouter>
    </Provider>
   
  )
}
React.render(<App/>,document.getElementById("root"))
   
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

