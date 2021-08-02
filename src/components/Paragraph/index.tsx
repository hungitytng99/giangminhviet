import React, { useEffect, useRef, useState } from 'react'
import { NextPage } from "next";
import ListStringUtils from 'src/utils/string';

interface Props {
    text: string | undefined,
    className?: String,
}

const Paragraph: NextPage<Props> = ({ text, className }) => {
    const [isMore, setIsMore] = useState(false);
    const [controlMore, setControlMore] = useState(true);
    const [classHidden, setClassHidden] = useState("text_over_flow_3 ");
    const textBox = useRef<HTMLSpanElement>(null);
    const handleControlText = (e: any) => {
        setControlMore(!controlMore);
        if (controlMore) {
            setClassHidden("");
        } else {
            setClassHidden("text_over_flow_3 ");
        }
    }
    text = ListStringUtils.detectLinkInText(text);

    const checkHasReadMore = () => {
        let fakeHeight = textBox.current?.scrollHeight;
        let realHeight = textBox.current?.clientHeight;
        if (fakeHeight && realHeight) {
            setIsMore((fakeHeight - realHeight) > 0 ? true : false);
        }
    }
    global.onresize = () => {
        checkHasReadMore();
    }
    useEffect(() => {
        checkHasReadMore();
    })
    return (
        <>
            {
                text ? <>
                    <span dangerouslySetInnerHTML={{ __html: text }} ref={textBox} className={classHidden + className}></span>
                    {isMore ? <span className="text-read-more__control" onClick={handleControlText}>{controlMore ? "Đọc thêm" : ""}</span> : ""}</> : <></>
            }
        </>
    )
}
export default Paragraph;