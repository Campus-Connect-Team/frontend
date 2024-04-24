import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import AssignBoardPage from './pages/AssignBoardPage';
import BoardDetailPage from './pages/BoardDetailPage';
import BoardPage from './pages/BoardPage';
import EditMyPage from './pages/EditMyPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MyPage from './pages/MyPage';
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/assignboard" element={<AssignBoardPage />} />
        <Route path="boarddetail" element={<BoardDetailPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/editmypage" element={<EditMyPage />} />
        <Route path="findpassword" element={<FindPasswordPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
