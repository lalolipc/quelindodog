import React,{ useState } from 'react'
import './App.css'
import 'animate.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import HomeScreen from './components/Home/HomeScreen'

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [idList, setIdList] = useState('1');
  const openSideBar = () => {
    setShowSideBar(!showSideBar);
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          onClick={() => openSideBar()} setIdList={setIdList}/>
        <Routes>
           <Route  path="/" element={<HomeScreen showSideBar={showSideBar} setShowSideBar={setShowSideBar} setIdList={setIdList} idList={idList}/>} ></Route>  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
