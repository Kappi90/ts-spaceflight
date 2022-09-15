import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNav";
import Home from "./components/Home";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <div className='App'>
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<ArticleDetails />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
