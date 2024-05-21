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
      </Routes>
    </div>
  );
}

export default App;
