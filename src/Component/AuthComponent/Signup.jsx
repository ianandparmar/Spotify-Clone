import React, { Component, Fragment } from 'react';
import "./auth.css";
import firebase from "../../firsebase";

import { toast } from "react-toastify";

import md5 from "md5";

class Signup extends Component {
    state = {
        email: "",
        confirmEmail: "",
        password: "",
        profile: "",
        dob: "",
        gender: "",
        
    };
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value });
    }
    handleSubmit = async e => {
        e.preventDefault();
        try {
        let { email, confirmEmail, password, profile, dob} = this.state;
            console.log({ email, confirmEmail, password, profile, dob });
            //auth

            let userData = await firebase.auth().createUserWithEmailAndPassword(email, password);
            userData.user.sendEmailVerification();
            let message = `verification email has been sent to ${email} please confirm it and signin..`;
            toast.success(message);
            console.log(userData);
            userData.user.updateProfile({
                displayName: profile,
                photoURL: `http://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
            });
            //store information into firebase realtime database
            await firebase.database().ref("/users" + userData.user.uid).set({
                email: userData.user.email,
                photoURL: userData.user.photoURL,
                profile: userData.user.displayName,
                date: new date().toLocalDateString(),
            })
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
        
    }
    render() {
        let { email, confirmEmail, password, profile, dob, gender, } = this.state;
        return (
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>Sign up with your email address</h4>
                        <form onSubmit={this.handleSubmit}>
                            {/* email start*/}
                            <div className="form-group">
                                <label>What's your email?</label>
                                 <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter your email"
                            />
                            </div>
                            {/* confirm email end */}
                            
                            {/* confirm email start*/}
                            <div className="form-group">
                                <label>Confirm your email</label>
                                 <input
                                    type="email"
                                     name="confirmEmail"
                                    value={confirmEmail}
                                    onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter your email again"
                            />
                            </div>
                            {/* confirm email ends */}

                            {/* start password */}
                            <div className="form-group">
                                <label>Create Password</label>
                                 <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                className="form-control"
                                placeholder="create your password"
                            />
                            </div>
                            {/* ends password */}

                            {/* start profile */}
                            <div className="form-group">
                                <label>What should we call you?</label>
                                 <input
                                    type="text"
                                    name="profile"
                                    value={profile}
                                    onChange={this.handleChange}
                                className="form-control"
                                placeholder="enter a profile name"
                            />
                            </div>
                            {/* end profile */}

                            {/* start date */}
                            <div className="form-group">
                                <label>What's your date of birth?</label>
                                 <input
                                    type="datetime-local"
                                    name="dob"
                                    value={dob}
                                    onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter your dob"
                            />
                            </div>
                            {/* end date */}

                            {/* start gender */}
                            <div className="form-group" name="gender" value={gender}>
                                 <label>What's your gender?</label>
                                <input type="radio" onChange={this.handleChange}/>
                            Male
                           <input type="radio" onChange={this.handleChange} />
                            Female
                            <input type="radio" onChange={this.handleChange}/>
                            Non-binary
                            </div>
                            {/* end gender */}
                            {/* start checkdata */}
                            <div className="form-group">
                                <input type="checkbox" name="checkdata"/>
                                Share my registration data with Spotify's content providers for marketing purposes.
                            </div>
                            {/* end checkdate */}

                            <p>
                                By clicking on Sign up, you agree to Spotify's
                            <a href="">Terms and Conditions of Use.</a>
                            </p>


                            <p>
                                To learn more about how Spotify collects, uses, shares and
                                protects your personal data please read Spotify's
                                <a href=""> Privacy Policy.</a>
                            </p>

                            <div className="form-group">
                                <button className="btn btn-success btn-block">Sign up</button>
                            </div>
                            
                            
                        </form>
                    </article>
                </section>
            </Fragment>
        );
    }
}
 
export default Signup;
