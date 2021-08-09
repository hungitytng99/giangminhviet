import React from 'react';
import { NextPage } from "next";

import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from 'src/ui-source/Form/InputField';

const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
const contactSchema = Yup.object().shape({
    name: Yup.string()
        .required('This field is required'),
    phone: Yup.string()
        .matches(phoneReg, "Please enter a valid phone number")
        .required('This field is required'),
    email: Yup.string().email('Please enter a valid email').required('This field is required'),
});
interface Props {
    product?: string,
    closeContact?: any
}
const ContactForm: NextPage<Props> = (props) => {
    const { product, closeContact = () => { } } = props;
    return (
        <div className="contact-form">
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                }}
                validationSchema={contactSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        {
                            product &&
                            <InputField
                                errors={errors}
                                touched={touched}
                                label="Product"
                                name="product"
                                placeholder="Product name"
                                isRequired={true}
                                value={"Giường ngủ hiện đại"}
                                disabled={true}
                            />
                        }


                        <InputField
                            errors={errors}
                            touched={touched}
                            label="Name"
                            name="name"
                            placeholder="Name"
                            isRequired={true}
                        />
                        <InputField
                            errors={errors}
                            touched={touched}
                            label="Phone"
                            name="phone"
                            placeholder="Phone number"
                            isRequired={true}

                        />
                        <InputField
                            errors={errors}
                            touched={touched}
                            label="Email"
                            name="email"
                            placeholder="Email"
                            isRequired={true}

                        />
                        <InputField
                            errors={errors}
                            touched={touched}
                            label="Message"
                            name="message"
                            placeholder="Leave your message here"
                            type="textarea"
                            rows={3}
                        />
                        <div className="contact-form__btn-group">
                            <button onClick={closeContact} className="contact-form__btn cancel">Cancel</button>
                            <button className="contact-form__btn send" type="submit">Send</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;