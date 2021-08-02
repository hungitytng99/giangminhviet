import React, { FunctionComponent } from 'react'
import { NextPage } from "next";
import Image from 'next/image'
import TextReadMore from '../Paragraph';
import { ImagesPath } from 'src/constants/ImagesPath';
import CommentLists from '../CommentLists';
import Paragraph from '../Paragraph';

interface Props {
    comment: CommentInterface
}
interface CommentInterface {
    comment_id?: string,
    comment_url?: string,
    commenter_url?: string,
    commenter_name?: string,
    comment_text?: string,
    comment_time?: string,
    replies?: [CommentInterface]
}
const CommentCard: NextPage<Props> = (props) => {
    const { comment } = props;
    const { comment_id, comment_url, commenter_url, commenter_name, comment_text, comment_time, replies } = comment;
    return (
        <>
            <li className="comment-card__item">
                <a href={comment.commenter_url} className="comment-card__avatar">
                    <Image className="post-card__owner-img" src={ImagesPath.CMT_AVATAR} alt="post owner avatar"></Image>
                </a>
                <div className="comment-card__detail">
                    <a href={comment.commenter_url} className="comment-card__detail-name">{comment.commenter_name}</a>
                    <div className="comment-card__detail-box">
                        <Paragraph text={comment.comment_text} className="comment-card__detail-comments" />
                        <div className="comment-card__detail-interactive">
                            <div className="comment-card__detail-interactive-img">
                                <Image src={ImagesPath.LIKE_ICON} alt="like icon img"></Image>
                            </div>
                            <span>15</span>
                        </div>
                    </div>
                </div>
            </li>

            {
                replies ? <div className="comment-card__replies">
                    <CommentLists commentList={replies}/>
                </div> : <></>
            }
        </>
    )
}
export default CommentCard;