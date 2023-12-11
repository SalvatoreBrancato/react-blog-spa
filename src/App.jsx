
import { useState } from 'react'
import HeaderComp from './components/HeaderComp'
import MainComp from './components/MainComp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './pages/DefaultLayout';
import HomePages from './pages/HomePage';
import PostPages from './pages/PostPages';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<DefaultLayout/>}>
              <Route path='/' element={<HomePages/>}></Route>
              <Route path='/post' element={<PostPages/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App