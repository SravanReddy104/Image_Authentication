import React,{useState} from 'react'
import "./image.css"
import { images } from './features/userSlice'
import {useDispatch} from "react-redux"
function ImageGallery({id,url,name}) {
const dispatch = useDispatch();
    const handle = ()=>{
         alert(id)
        dispatch(images(id))
    }
  return (
    <div className='container'>
        <img onClick={handle} src={url} alt={name} />
    </div>

    
  )
}

export default ImageGallery