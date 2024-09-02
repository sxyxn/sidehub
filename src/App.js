import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { ModalLogin, ModalSignup } from './modal';
import Main from './pages/main';
import Project from './pages/project';
import Mypage from './pages/mypage';
import Team from './pages/maketeam';
import Detail from './pages/detail';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleClose = () => { setShowLogin(false); setShowSignup(false); }
  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => setShowSignup(true);

  return (
    <div className="App">

      {/* nav start */}
      <Navbar data-bs-theme="light" id="top-navbar">
        
          <div className="Logo">
            <Link to = "/" style={{ textDecoration: 'none' }}>
              <p className="customText">SideHub</p>
            </Link>
          </div>
          
        <Container>
          <Container id="right-nav-wrapper">
            <Nav>
              <Nav.Link onClick={handleShowLogin}>로그인</Nav.Link>
              <Nav.Link onClick={handleShowSignup}>회원가입</Nav.Link>
              <Nav.Link as={Link} to="/maketeam" className='maketeam'>팀원모집</Nav.Link>
              <Nav.Link as={Link} to = "/mypage">마이페이지</Nav.Link>
              <Nav.Link as={Link} to = "/detail">디테일</Nav.Link>
            </Nav>
          </Container>
        </Container>
      </Navbar>
      {/* nav end */}

      <ModalLogin
        show={showLogin}
        handleClose={handleClose}
      />
      <ModalSignup
        show={showSignup}
        handleClose={handleClose}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Main />
            </div>
          }
        />
        <Route
          path="/project"
          element={
            <div>
              <Project />
            </div>
          }
        />
        <Route
          path="/mypage"
          element={
            <div>
              <Mypage />
            </div>
          }
        />
        <Route
          path="/maketeam"
          element={
            <div>
              <Team />
            </div>
          }
        />
        <Route
          path="/detail"
          element={
            <div>
              <Detail />
            </div>
          }
        />
      </Routes>

      <footer id="footer" className="footer" style={{ backgroundColor: 'lightgrey' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 text-left">
              <Link to="/company" className="footer-link">회사 소개</Link> |
              <Link to="/service" className="footer-link"> 서비스 소개</Link> |
              <Link to="/advertisement" className="footer-link"> 광고 및 제휴</Link>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-5 text-left">
              <Link to="/privacy-policy" className="footer-link">개인정보처리방침</Link> |
              <Link to="/terms-of-service" className="footer-link"> 이용약관</Link> |
              <Link to="/help" className="footer-link"> 도움말</Link> |
              <Link to="/notice" className="footer-link"> 공지사항</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
