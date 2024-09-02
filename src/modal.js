import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalLogin({ show, handleClose }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:3002/signin', {
      email: email,
      password: password,
    })
    if(response.data.return === "nonexistentEmail") alert("존재하지 않는 이메일입니다.");
    else if (response.data.return === "diffPassword") alert("비밀번호가 일치하지 않습니다.");
    else { alert("환영합니다"); handleClose(); }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" onChange={handleEmail} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Your Password" onChange={handlePassword} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin} 
            style={{backgroundColor:'black', border:'none'}}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ModalSignup({ show, handleClose }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState(0);
  const [univ, setUniv] = useState('');
  const [dept, setDept] = useState('');
  
  const handleUserName = (e) => { setUserName(e.target.value); }
  const handleEmail = (e) => { setEmail(e.target.value); }
  const handlePassword = (e) => { setPassword(e.target.value); }
  const handleGender = (e) => {setGender(e.target.value); }
  const handleUniv = (e) => { setUniv(e.target.value); }
  const handleDept = (e) => { setDept(e.target.value); }

  const handleSignup = async () => {
    const response = await axios.post('http://localhost:3002/signup', {
      email: email,
      password: password,
      userName: userName,
      gender: gender,
      univ: univ,
      dept: dept
    })
    if(response.data.return === "emailDuplicate") alert("이미 존재하는 이메일입니다.");
    else {alert("회원가입이 완료되었습니다."); handleClose(); }
    console.log(response.data.return);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" onChange={handleUserName} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" onChange={handleEmail} />
            </Form.Group>

            <Form.Group className="mb-3" contr1olId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Your Password" onChange={handlePassword} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="남"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    value = "0"
                    onChange={handleGender}
                  />
                  <Form.Check
                    inline
                    label="여"
                    name="group1"
                    type={type}
                    value = "1"
                    id={`inline-${type}-2`}
                    onChange={handleGender}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Univ</Form.Label>
              <Form.Control type="text" placeholder="Your University" onChange={handleUniv} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Dept</Form.Label>
              <Form.Control type="text" placeholder="Your Dept" onChange={handleDept} />
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSignup}
            style={{backgroundColor:'black', border:'none'}}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal >
    </>
  );
}

export { ModalLogin, ModalSignup };