import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import StartPage from "./Components/StartPage";
import UserList from "./Components/UserList";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar/> 
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<StartPage />} /> 
            <Route path="/users" element={<UserList />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
