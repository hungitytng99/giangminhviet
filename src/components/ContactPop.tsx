import React from 'react';
import { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImagesPath } from 'src/constants/ImagesPath';

interface Props {

}
const ContactPop: NextPage<Props> = ({ }) => {
    return (
        <div className="contact-pop">
            <a href="/" className="contact-pop__box">
                <FontAwesomeIcon className="contact-pop__icon has-animation" icon={["fas", "phone-alt"]} />
            </a>
            <a href="/" className="contact-pop__box">
                <FontAwesomeIcon className="contact-pop__icon" icon={["fab", "facebook-messenger"]} />
            </a>
            <a href="/" className="contact-pop__box">
                <img src={ImagesPath.ZALO.src} alt="" className="contact-pop__img" />
            </a>
        </div>
    );
}

export default ContactPop;