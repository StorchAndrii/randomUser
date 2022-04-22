import "./App.css";
import RandomUser from "./pages/randomUser/RandomUser";
import UserInfo from "./pages/userInfo/UserInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<RandomUser />} />
          <Route path="/UserInfo/:userName" element={<UserInfo />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
