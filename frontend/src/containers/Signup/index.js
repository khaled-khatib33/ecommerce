import React from "react";
import Layout from "../../components/Layout";
import Input  from '../../components/Ui/Input'
import {Container, Form ,Button,Row,Col } from 'react-bootstrap'

const Signup = (props) => {
  return(
    
    <Layout>
    <Container>
    <Row style ={{marginTop:'50px'}} >
         <Col md={{span:6 , offset:3}}>
         <Form>
               <Row>
                    <Col md={6}>
                   <Input   
                       Label= "First Name"
                       placeholder ="First Name"
                       value = ""
                       type = "text" 
                       onchange = {()=>{}}
                   />
                    </Col>

                    <Col md={6}>
                    <Input   
                    Label= "Last Name"
                    placeholder ="Last Name"
                    value = ""
                    type = "text" 
                    onchange = {()=>{}}
                />

                    </Col>
               </Row>
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
            type = "Password" 
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
export default Signup;
