import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyPage from "./components/MyPage";
import Notice from "./components/myPageMenu/notice/Notice";
import NoticeContents from "./components/myPageMenu/notice/NoticeContents";
import Board from "./components/myPageMenu/board/Board";
import BoardContents from "./components/myPageMenu/board/BoardContents";
import ChangePassword from "./components/myPageMenu/changePassword/ChangePassword";
import Calculator from "./components/myPageMenu/calculator/Calculator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/noticeContents" element={<NoticeContents />} />
        <Route path="/board" element={<Board />} />
        <Route path="/boardContents" element={<BoardContents />} />
      </Routes>
    </>
  );
}

export default App;
