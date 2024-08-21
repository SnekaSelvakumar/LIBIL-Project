import Home from "./Components/Home";
import About from "./Components/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ErrorPage from "./Components/ErrorPage"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
