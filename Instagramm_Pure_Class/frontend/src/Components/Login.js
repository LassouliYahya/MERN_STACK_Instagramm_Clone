// import React, { Component } from "react";
// import {
//   Button,
//   FormGroup,
//   Label,
//   Input,
//   FormFeedback,
//   Alert,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { loggedIn } from "../store_redux/actions/authAction";

// class Login extends Component {
  
//   componentDidUpdate() {
//     console.log("I am componentDidUpdate");
//     const { /*error,*/ isAuth } = this.props;
//     // if (error && this.bag) {
//     //   this.bag.setSubmitting(false);  // si <button disabled={!isValid || !dirty ||isSubmitting}></button>
//     // }
//     if (isAuth) {
//       this.props.history.push("/");
//     }
//   }

//   _handleFormSubmit(values /*, bag*/) {
//     // const { error, isAuth } = this.props;
//     this.props.loggedIn(values);
//     // this.bag = bag; // si <button disabled={!isValid || !dirty ||isSubmitting}></button>
//     }
  

//   _renderErrorIfAny() {
//     const { error } = this.props;
//     if (error) {
//       return <Alert color="danger">{error}</Alert>;
//     }
//   }
//   form = ({
//     handleChange,
//     handleSubmit,
//     isValid,
//     isSubmitting,
//     handleBlur,
//     errors,
//     touched,
//     dirty,
//   }) => (
//     <div>
//       <FormGroup>
//         <Input
//           invalid={errors.email && touched.email}
//           name="email"
//           type="email"
//           placeholder="Your Email"
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />

//         {errors.email && touched.email ? (
//           <FormFeedback>{errors.email}</FormFeedback>
//         ) : null}
//       </FormGroup>
//       <FormGroup>
//         <Input
//           invalid={errors.password && touched.password}
//           name="password"
//           type="password"
//           placeholder="Your Password"
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.password && touched.password ? (
//           <FormFeedback>{errors.password}</FormFeedback>
//         ) : null}
//       </FormGroup>
//       <Button
//         color="primary"
//         block
//         onClick={handleSubmit}
//         disabled={!isValid || !dirty}
//       >
//         Login
//         <i className="material-icons right">send</i>
//       </Button>
//     </div>
//   );
//   render() {
//     return (
//       <div  className="myCard " >
//         <div className="card auth-card input-field">
//         <h2>login</h2>
//         <hr />
//         {this._renderErrorIfAny()}
//         <Formik
//           initialValues={{ email: "", password: "" }}
//           onSubmit={this._handleFormSubmit.bind(this)}
//           validationSchema={Yup.object().shape({
//             email: Yup.string().email().required(),
//             password: Yup.string().min(3).required(),
//           })}
//         >
//           {this.form}
//         </Formik>
//         <Link to="/signup">Do not have an account? Sign Up Now</Link>
//       </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     error: state.authReducer.error,
//     isAuth: state.authReducer.isAuth,
//   };
// };

// export default connect(mapStateToProps, { loggedIn })(Login);

//###############################_ReactJS_Class_Pure

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css'
import {logIn } from "../store_redux/actions/authAction"

class Login extends Component {
//state management
 state={
   email:"",
   password:"",
 }
//Handle change input
handleInputEmail=(event)=>{
  this.setState({email:event.target.value})
}
handleInputPassword=(event)=>{
  this.setState({password:event.target.value})
}
//handle send form values to backend
handleForm=async()=>{
const dataLogin={
  email:this.state.email,
  password:this.state.password,
}
  console.log("dataLogin:",dataLogin)
await this.props.logIn(dataLogin)
 
if (this.props.err) {
  M.toast({html:  this.props.err,classes:"#c62828 red darken-3"})
}
else if(this.props.prof) {
  M.toast({html:`Welcome ${this.props.prof.name}`,classes:"#43a047 green darken-1"})
  this.props.history.push('/');
}
}

  render() {
    return (
     <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input
            type="text"
            placeholder="email"
            onChange={this.handleInputEmail}
            />
            <input
            type="password"
            placeholder="password"
            onChange={this.handleInputPassword}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={this.handleForm}
            >
                Login
                <i className="material-icons right">send</i>
            </button>
            <h5>
                <Link to="/signup">Do not have an account? Sign Up Now</Link>
            </h5>
            <p>
            <Link to="/reset-password" style={{
    color: "#489be8",
    textDecoration: "none",
    transition: "color .3s",
    display: "block",
    fontSize: "13px",
   textAlign: "right",}}>Forgot your password?</Link>
            </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    err: state.authReducer.error,
    prof: state.authReducer.profile,

  };
};
export default  connect(mapStateToProps,{logIn})(Login) 