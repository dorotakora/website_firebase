import React from 'react';

const FormField = ({formData,id,change}) => {

    const showError = () => {
        let errorMessage = <div className="error_label">
            {
                formData.validation && !formData.valid ?
                    formData.validationMessage
                    :null
            }
        </div>
        return errorMessage
    }


    const renderTemplate = () => {
        let formTemplate = null;

        if (formData.element === ('input')) {
            formTemplate = (
                <div>
                    {formData.showLabel ? <div className={'label_input'}>{formData.config.label}</div> :null}
                    <input
                        {...formData.config}
                        value={formData.value}
                        onChange={(event)=> change({event,id})}
                    />
                    { showError() }
                </div>
            )
        } else if(formData.element === ('select')) {
            formTemplate = (
                <div>
                    {formData.showLabel ? <div className={'label_input'}>{formData.config.label}</div> :null}
                    <select value={formData.value}
                            onChange={(event)=> change({event,id})}>
                        <option value={''}>Select one</option>
                        {
                            formData.config.options.map((item) => (
                                <option key={item.key} value={item.key}>
                                    {item.value}
                                </option>
                            ))
                        }
                    </select>
                    { showError() }
                </div>
            )

        } else {
            formTemplate = null;
        }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormField;