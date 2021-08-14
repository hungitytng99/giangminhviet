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
            <Link href={{ pathname: 'tel:84966854224' }} >
                <a target="_blank" className="contact-pop__box">
                    <FontAwesomeIcon className="contact-pop__icon has-animation" icon={["fas", "phone-alt"]} />
                </a>
            </Link>
            <Link href={{ pathname: 'mailto:haunkbn99@gmail.com' }} >
                <a target="_blank" className="contact-pop__box">
                    <FontAwesomeIcon className="contact-pop__icon" icon={["fas", "envelope"]} />
                </a>
            </Link>
            <Link href={{ pathname: 'https://zalo.me/0966854224' }} passHref>
                <a target="_blank" className="contact-pop__box">
                    <div className="contact-pop__img">
                        <Image layout="fill" src={ImagesPath.ZALO.src} alt="zalo" className="contact-pop__img" />
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default ContactPop;