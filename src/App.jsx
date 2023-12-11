import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './pages/DefaultLayout';
import HomePages from './pages/HomePage';
import PostPages from './pages/PostPages';
import SinglePostPage from './pages/SinglePostPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<DefaultLayout/>}>
              <Route path='/' element={<HomePages/>}></Route>
              <Route path='/post' element={<PostPages/>}></Route>
              <Route path='/post/:slug'element={<SinglePostPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App