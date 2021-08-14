import React from 'react';
import { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImagesPath } from 'src/constants/ImagesPath';
import Link from 'next/link'
import Image from 'next/image'

interface Props {

}
const ContactPop: NextPage<Props> = ({ }) => {
    return (
        <div className="contact-pop">
            <Link href="/">
                <a className="contact-pop__box">
                    <FontAwesomeIcon className="contact-pop__icon has-animation" icon={["fas", "phone-alt"]} />
                </a>
            </Link>
            <Link href="/">
                <a className="contact-pop__box">
                    <FontAwesomeIcon className="contact-pop__icon" icon={["fab", "facebook-messenger"]} />
                </a>
            </Link>
            <Link href="/">
                <a className="contact-pop__box">
                    <div className="contact-pop__img">
                        <Image layout="fill" src={ImagesPath.ZALO.src} alt="zalo" className="contact-pop__img" />
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default ContactPop;