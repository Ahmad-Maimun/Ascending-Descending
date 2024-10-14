import { useState } from "react"
import Gallery from "../section/gallery/Gallery"
import Header from "../section/header/Header"
import { useEffect } from "react";
import axios from "axios";

function Loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
        </div> 
  )
}
 
function Layout() {

let [data, setData] = useState([]);
useEffect(() => {
  axios("https://course.divinecoder.com/food/random/12")
  .then(res => setData(res.data))
},[])

let ascendingHandler = () => {
  setData(item => {
    return item.toSorted((a, b) => a.name.localeCompare(b.name));
  })
}
let descendingHandler = () => {
  setData(item => {
    return item.toSorted((a, b) => b.name.localeCompare(a.name));
  })
}

  return (
    <div className="w-full pb-8 min-h-screen bg-slate-300 pt-6">
      <div className="max-w-6xl m-auto pt-6 bg-white p-5 rounded shadow ">
        <Header onAscending={ascendingHandler} onDescending={descendingHandler} />

        {data.length == 0 ? <Loading /> : <Gallery galleryItemData={data} />}
        
      </div>
    </div>
  )
}

export default Layout