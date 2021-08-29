import React, { useEffect, useState } from 'react';
import { NextPage } from "next";
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from 'src/ui-source/Form/InputField';
import { inquiryService } from 'src/data-services/inquiry'
import FullPageLoading from 'src/ui-source/Loading/FullPageLoading';

const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
const contactSchema = Yup.object().shape({
    name: Yup.string()
        .required('This field is required'),
    phone: Yup.string()
        .matches(phoneReg, "Please enter a valid phone number")
        .required('This field is required'),
    email: Yup.string().email('Please enter a valid email').required('This field is required'),
});

const ContactForm = (props) => {
    const { productSlug, productId, productName, closeContact = () => { } } = props;
    const [isShowLoading, setIsShowLoading] = useState(false);
    const [messageAfterValidate, setMessageAfterValidate] = useState('');
    const sendContact = async (values) => {
        try {
            setIsShowLoading(true);
            const inquiryBody = {
                customer_name: values.name,
                email: values.email,
                phone: values.phone,
                message: values.message,
                product_id: productId,
                quantity: 0,
                product_link: 'https://giangminhviet.com/product/' + productSlug,
                product_name: productName
            }
            const response = await inquiryService.sendCustomerInquiry(inquiryBody);
            setMessageAfterValidate(response.message);
            if(response.message == "Thank for your information. We will contact you as soon as possible!" ) {
                // setTimeout(() => {
                //     closeContact();
                // }, 1000)
            }
            setIsShowLoading(false);
        } catch (error) {
            setIsShowLoading(false);
            setMessageAfterValidate('An error occurs when you send your information. Please try again later!');
        }
    }

    useEffect(() => {
        return () => {
            // clean
        }
    },[])

    return (
        <div className="contact-form">
            {isShowLoading && <FullPageLoading opacity={0.5} />}
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    // message: '',
                }}
                validationSchema={contactSchema}
                onSubmit={sendContact}
            >
                {({ errors, touched }) => (
                    <Form>
                        {
                            productName &&
                            <InputField
                                errors={errors}
                                touched={touched}
                                label="Product"
                                name="product"
                                placeholder="Product name"
                                isRequired={true}
                                value={productName}
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
                            <div className="contact-form__message-submit">{messageAfterValidate}</div>
                            <button className="contact-form__btn send" type="submit">Send</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;