//###############################_ReactJS_Class_Formik

// import React, { Component } from 'react';
// import { Button, FormGroup, Input, FormFeedback,Alert } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { Formik } from "formik";
// import * as Yup from 'yup';
// import { connect } from 'react-redux';
// import {signUp,uploadPhoto} from "../store_redux/actions/authAction"

// const lowercaseRegex = /(?=.*[a-z])/;
// const uppercaseRegex = /(?=.*[A-Z])/;
// const numericRegex = /(?=.*[0-9])/;

// class Signup extends Component {
//   // state = {
//   //   photo: "",
//   // };
//   // handleChangeImage = (event) => {
//   //   let reader = new FileReader();
//   //   let photo = event.target.files[0];
//   //   reader.onloadend = () => {
//   //     this.setState({
//   //       photo: reader.result,
//   //     });
//   //   };
//   //   reader.readAsDataURL(photo);
//   // };
//   componentDidUpdate() {
//     const { error } = this.props.errorSignup;
//     if (error && this.bag) {
//       this.bag.setSubmitting(false);
//     }
//     else if (!error && !this.bag) {
//     this.props.history.push('/login');
//     }
//   }
//   // componentDidUpdate(prevProps,prevState) {
//   //   if(prevState.photo===this.state.photo){
//   //       const { dejaEmail,error } = this.props.errorSignup;
//   //       if (dejaEmail && error && this.bag) {
//   //         this.bag.setSubmitting(false);
//   //       }
//   //       else if (!error && !this.bag){//value undefined
//   //         this.props.history.push("/login");
//   //       }
//   //     }
//   // }
//   handleFormSubmit=async(values,bag) =>{
//     // const formData = new FormData();
//     // formData.append("file", this.state.photo); 
//     // formData.append("upload_preset", "MERN_Instagram");
//     // formData.append("cloud_name", "lassouli");
//     // await this.props.uploadPhoto(formData);
//     // values.photo = this.props.url;
//     console.log("values:",values)
//     this.props.signUp(values);
//     this.bag = bag;
//   }
//   initialValues = () => {
//     return {
//       name: "",
//       email: "",
//       password: "",
//       passwordConfirm: "",
//     };
//   };
  
//   validationSchema = () => {
//     // const FILE_SIZE = 160 * 1024;
//     // const SUPPORTED_FORMATS = [
//     //   "image/jpg",
//     //   "image/jpeg",
//     //   "image/gif",
//     //   "image/png",
//     // ];
//     return Yup.object().shape({
//       name: Yup.string().min(2, "Too Short!").required("Required"),
//       email: Yup.string()
//         .lowercase("lowercase plzzz")
//         .email("Must be a valid email!") //${this.props.errorSignup.dejaEmail} deja existe already taken!
//         .notOneOf([this.props.errorSignup.dejaEmail], `${this.props.errorSignup.error}`) //khask t9arno m3a backend
//         .required("Required!"),
//       password: Yup.string()
//         .matches(lowercaseRegex, "one lowercase required!")
//         .matches(uppercaseRegex, "one uppercase required!")
//         .matches(numericRegex, "one number required!")
//         .min(8, "Minimum 8 characters required!")
//         .required("Required!"),
//       passwordConfirm: Yup.string()
//         .oneOf([Yup.ref("password")], "Password must be the same!")
//         .required("Required!"),
//       // photo: Yup.mixed()
//       //   .required("Required")
//       //   .test(
//       //     "fileSize",
//       //     "File too large",
//       //     (value) => value && value.size <= FILE_SIZE
//       //   )
//       //   .test(
//       //     "fileFormat",
//       //     "svp Format is jpg or jpeg or png or gif",
//       //     (value) => value && SUPPORTED_FORMATS.includes(value.type)
//       //   ),
//     });
//   };
//   form = ({
//     handleChange,
//     handleSubmit,
//     isValid,
//     isSubmitting,
//     handleBlur,
//     errors,
//     touched,
//     dirty,setFieldValue
//   }) => (
//     <div>
     
//      <FormGroup>
//         <Input
//           invalid={errors.name && touched.name}
//           valid={!errors.name && touched.name}
//           name="name"
//           type="text"
//           placeholder="Your name"
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.name ? (
//           <FormFeedback>{errors.name}</FormFeedback>
//         ) : (
//           <FormFeedback valid>is sweet</FormFeedback>
//         )}
//       </FormGroup>
      
//       <FormGroup>
//         <Input
//           invalid={errors.email && touched.email}
//           valid={!errors.email && touched.email}
//           name="email"
//           type="email"
//           placeholder="Your email"
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.email ? (
//           <FormFeedback>{errors.email}</FormFeedback>
//         ) : (
//           <FormFeedback valid>is sweet</FormFeedback>
//         )}
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
//         {errors.password && touched.password && (
//           <FormFeedback>{errors.password}</FormFeedback>
//         )}
//       </FormGroup>
//       <FormGroup>
//         <Input
//           invalid={errors.passwordConfirm && touched.passwordConfirm}
//           valid={!errors.passwordConfirm && touched.passwordConfirm}
//           name="passwordConfirm"
//           type="password"
//           placeholder="Your Password Confirm"
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.passwordConfirm ? (
//           <FormFeedback>{errors.passwordConfirm}</FormFeedback>
//         ) : (
//           <FormFeedback valid>password is match</FormFeedback>
//         )}
//       </FormGroup>
//       {/* <FormGroup>
//         <img src={this.state.photo} style={{maxWidth: "200px"}} />
//         <div className="file-field input-field">
//           <div className="btn #64b5f6 blue lighten-2">
//             <span>Upload Image</span>
//             <Input
//              invalid={errors.photo && touched.photo}
//              valid={!errors.photo && touched.photo}
//               name="photo"
//               type="file"
//               placeholder="Your photo"
//               onChange={(event) => {
//                 this.handleChangeImage(event);
//                 setFieldValue("photo", event.target.files[0]);
//               }}
//               onBlur={handleBlur}
//             />
//               {errors.photo ? (
//           <FormFeedback>{errors.photo}</FormFeedback>
//         ) : (
//           <FormFeedback valid>is sweet</FormFeedback>
//         )}
//           </div>
//           <div className="file-path-wrapper">
//             <input className="file-path validate" type="text" />
//           </div>
//         </div><br/>
//       </FormGroup> */}
//       <Button
//         color="primary"
//         block
//         onClick={handleSubmit}
//         disabled={!isValid || !dirty || isSubmitting} // ||isSubmitting :kats3ml mra whda f signup ctt
//       >
//         Create Account
//         <i className="material-icons right">send</i>
//       </Button>
//     </div>
//   );
//   render() {
//     return (
//       <div  className="myCard " >
//         <div className="card auth-card input-field">
//         <h2>Create new account</h2>
//         <hr />
//         <Formik
//           initialValues={this.initialValues}
//           onSubmit={this.handleFormSubmit}
//           validationSchema={this.validationSchema}
//         >
//           {this.form}
//         </Formik>
//         <Link to="/login">Have an account? Login</Link>
//       </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     errorSignup: state.authReducer.errorSignup,
//     url: state.authReducer.urlPhoto,
//   };
// };
// export default  connect(mapStateToProps,{signUp,uploadPhoto})(Signup) 

//###############################_ReactJS_Class_Pure

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css'
import {signUp,uploadPhoto} from "../store_redux/actions/authAction"

class Signup extends Component {
//state management
 state={
   name:"",
   email:"",
   password:"",
   photo:"" //ila matl3at tswira jrb undefined
 }
//Handle change input
handleInputName=(event)=>{
  this.setState({name:event.target.value})
  // console.log("name:",event.target.value)
}
handleInputEmail=(event)=>{
  this.setState({email:event.target.value})
}
handleInputPassword=(event)=>{
  this.setState({password:event.target.value})
}
//displayPhoto And handleInputPhoto
displayPhoto=(event)=>{
  let reader = new FileReader();
      let photo = event.target.files[0];
      reader.onloadend = () => {
        this.setState({
          photo: reader.result, //equivalent this.setState({photo:event.target.files[0]})// labghity tsift photo l server par package muter
        });
      };
      reader.readAsDataURL(photo);
}
//handle send form values
handleForm=async()=>{
  const formData = new FormData();
    formData.append("file", this.state.photo); 
    formData.append("upload_preset", "MERN_Instagram");
    formData.append("cloud_name", "lassouli");
    await this.props.uploadPhoto(formData);
const dataSignup={
  name:this.state.name,
  email:this.state.email,
  password:this.state.password,
  photo:this.props.urlPhotoSign,// url kayjini mn cloudinary
}
  console.log("dataSignup:",dataSignup)
await this.props.signUp(dataSignup)
if (this.props.sign.message) {
  M.toast({html:this.props.sign.message,classes:"#43a047 green darken-1"})
  this.props.history.push('/login');
} else if( this.props.sign.error) {
  M.toast({html: this.props.sign.error,classes:"#c62828 red darken-3"})
}
}

  render() {
    return (
     <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input
            type="text"
            placeholder="name"
            onChange={this.handleInputName}
            />
            <input
            type="email"
            placeholder="email"
            onChange={this.handleInputEmail}
            />
            <input
            type="password"
            placeholder="password"
            // value={password}
            onChange={this.handleInputPassword}
            />
            <img src={this.state.photo} style={{maxWidth: "200px"}} />
            <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload pic</span>
                <input type="file" name="photo"
            onChange={
              this.displayPhoto
            }
                 />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={this.handleForm}
            >
                SignUP
                <i className="material-icons right">send</i>
            </button>
            <h5>
                <Link to="/login">Already have an account ?</Link>
            </h5>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sign: state.authReducer.signUp,
    urlPhotoSign: state.authReducer.urlPhotoSignup,
  };
};
export default  connect(mapStateToProps,{signUp,uploadPhoto})(Signup) 