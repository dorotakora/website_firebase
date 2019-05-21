import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import FormField from "../../Ui/FormFields";

class Enroll extends Component {

    state={
      formError: false,
      formSuccess: true,
      formdata: {
          email: {
              element: 'input',
              value: '',
              config:{
                  name: 'email_input',
                  type: 'email',
                  place: 'Enter your email'
              },
              validation: {
                  required: true,
                  email: true
            },
              valid: false,
              validationMessage: ''
          }
      }
    };

    submitForm = (event) => {

    };

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                    id={'email'}
                                    formdata={this.state.formdata.email}
                            />
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default Enroll;