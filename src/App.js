import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  
    return (
      <div className="App mt-4">
        <Router>
          <Routes>
            <Route path="/" element={<Menu />}></Route>
            {/* <Route path="/edit" element={<EditPage />}></Route> */}
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;
