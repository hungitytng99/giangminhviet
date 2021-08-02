import React from 'react'
import { NextPage } from "next";
import CommentCard from '../CommentCard';
import ListStringUtils from 'src/utils/string';

interface Props {
    commentList?: Array<CommentInterface>,
    hasShowMoreComments?: boolean,
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
const CommentLists: NextPage<Props> = (props) => {
    const { commentList, hasShowMoreComments } = props;
    return (
        <>
            <div className="comment-list__box">
                <ul className="comment-list">
                    {
                        commentList?.map((comment) => {
                            return <CommentCard key={ListStringUtils.getUniqueId(comment?.comment_id) } comment={comment} />
                        })
                    }
                </ul>
                {
                    hasShowMoreComments ? <div className="comment-list__more">
                        Xem thêm bình luận
                    </div> : <></>
                }
            </div>
        </>
    )
}
export default CommentLists;