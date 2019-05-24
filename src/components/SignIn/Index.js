import React, {Component} from 'react';
import FormField from '../Ui/FormFields';
import { validate } from '../Ui/Misc';
import {firebase} from "../../firebase";


class SighIn extends Component {

    state = {
        formError:false,
        formSuccess:'',
        formData:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            }
        },
        password:{
            element:'input',
            value:'',
            config:{
                name:'password_input',
                type: 'password',
                placeholder: 'Enter your password'
            },
            validation:{
                required: true
            },
            valid: false,
            validationMessage:''
        }
    };

    submitForm(event){
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid){
         firebase.auth()
             .signInWithEmailAndPassword(
                 dataToSubmit.email,
                 dataToSubmit.password
             ).then(() => {
                this.props.history.push('/dashboard')
             }).catch((error) => {
             this.setState({
                 formError: true
             })
         })
        } else {
            this.setState({
                formError: true
            })
        }
    }

    updateForm(element){
        const newFormdata = {...this.state.formData}
        const newElement = { ...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formData: newFormdata
        })
    }


    render() {
        return (
            <div className={'container'}>
                <div className="signin_wrapper" style={{margin: '100px'}}>
                    <form onSubmit={(event) => {this.submitForm(event)}}>
                        <h2>Please Login</h2>
                        <FormField
                            id={'email'}
                            formdata={this.state.formData.email}
                            change={(element)=> this.updateForm(element)}
                        />
                        <FormField
                            id={'password'}
                            formdata={this.state.formData.password}
                            change={(element)=> this.updateForm(element)}
                        />
                        { this.state.formError ?
                            <div className="error_label">Something is wrong, try again.</div>
                            :null
                        }
                        <button onClick={(event)=> this.submitForm(event)}>Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SighIn;