import React from "react";
import Layout from "../../components/Layout";
import {Container, Form ,Button,Row,Col} from 'react-bootstrap';
import Input from '../../components/Ui/Input';
import  {login} from '../../actions';
import { useDispatch } from "react-redux";

const Signin = (props) => {
  const dispatch = useDispatch();

  const userLogin =(e)=>{
    e.preventDefault();
      const user= {
       email:'f1@gmail.com', 
       password:'123',
      }
      login(user);
   }

  return(


    <Layout>
       <Container>
       <Row style ={{marginTop:'50px'}} >
            <Col md={{span:6 , offset:3}}>
            <Form   onSubmit={userLogin}>
            <Input   
            Label= "Email"
            placeholder ="Email"
            value = ""
            type = "email" 
            onchange = {()=>{}}
        />
            
            <Input   
            Label= "Password"
            placeholder ="Password"
            value = ""
            type = "password" 
            onchange = {()=>{}}
        />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            </Col>
       </Row>
      
       </Container>
    </Layout>
    )
};
export default Signin;
