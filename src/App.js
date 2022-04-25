import "./App.css";
import RandomUser from "./pages/randomUser/RandomUser";
import UserInfo from "./pages/userInfo/UserInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Routes>
          <Route path="/" element={<RandomUser />} />
          <Route path="/UserInfo/:userName" element={<UserInfo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
