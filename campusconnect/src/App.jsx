import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import AssignBoardPage from './pages/AssignBoardPage';
import BoardDetailPage from './pages/BoardDetailPage';
import BoardPage from './pages/BoardPage';
import EditMyPage from './pages/EditMyPage';
import EditMyPageComplete from './pages/EditMyPageComplete';
import FindPasswordPage from './pages/FindPasswordPage';
import MyPage from './pages/MyPage';
import EditPassword from './pages/EditPassword';
import EditPasswordComplete from './pages/EditPasswordComplete';
import UserWithdrawal from './pages/UserWithdrawal';
import UserWithdrawalComplete from './pages/UserWithdrawalComplete';
import 'swiper/css';
import 'swiper/css/pagination';
import Test from './components/boardDetail/CommentList.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/assignboard" element={<AssignBoardPage />} />
        <Route path="/boarddetail/:id" element={<BoardDetailPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/editmypage" element={<EditMyPage />} />
        <Route path="/editmypagecomplete" element={<EditMyPageComplete />} />
        <Route path="/findpassword" element={<FindPasswordPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/editpassword" element={<EditPassword />} />
        <Route path="/editpasswordcomplete" element={<EditPasswordComplete />} />
        <Route path="/userwithdrawal" element={<UserWithdrawal />} />
        <Route path="/userwithdrawalcomplete" element={<UserWithdrawalComplete />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
