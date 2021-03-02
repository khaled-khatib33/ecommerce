import React, {  useState }  from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Ui/Input";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {signup}  from '../../actions'

  const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const userSIgnup = (e) => {e.preventDefault() ;      
  const user = {
        firstName,lastName,email,password
    }

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }

   if (user.loading){
     return <p> loading...!</p>
   }

  return (
    <Layout>
      <Container>
          {user.message}
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSIgnup}>
              <Row>
                <Col md={6}>
                  <Input
                    Label="First Name"
                    placeholder="First Name"
                    Value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.Value)}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    Label="Last Name"
                    placeholder="Last Name"
                    Value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.Value)}
                  />
                </Col>
              </Row>
              <Input
                Label="Email"
                placeholder="Email"
                Value={email}
                type="email"
                onChange={(e) => setEmail(e.target.Value)}
                />

              <Input
                Label="Password"
                placeholder="Password"
                Value={password}
                type="Password"
                onChange={(e) => setPassword(e.target.Value)}
                />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Signup;
