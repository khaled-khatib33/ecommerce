import React, {  useState } from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/Ui/Input";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
  const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector(state=> state.auth);

  const dispatch = useDispatch();

 

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email , password,
    };
    dispatch(login(user));
  };
      if (auth.authenticate){
        return <Redirect to ={'/'} />
      }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                Label="Email"
                placeholder="Email"
                Value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                Label="Password"
                placeholder="Password"
                Value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
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
export default Signin;
