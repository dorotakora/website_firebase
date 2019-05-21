import React from 'react';

const FormField = (props) => {

    const renderTemplate = ({formdata, id}) => {
      let formTemplate = null;
      switch(formdata.element) {
          case('input'):
                formTemplate = (
                    <div>
                        <input
                            {...formdata.config}
                            value={formdata.value}
    />
                    </div>
                )
              break;
          default:
              formTemplate = null;
      }
    };

  return (
      <div>
          {renderTemplate()}
      </div>
  )
};

export default FormField;