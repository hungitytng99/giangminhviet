import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { NextPage } from "next";
import Image from 'next/image'
import CommentLists from '../CommentLists';
import { ImagesPath } from 'src/constants/ImagesPath';
import ListTimeUtils from 'src/utils/time';
import Paragraph from '../Paragraph';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ListStringUtils from 'src/utils/string';
import ListImageUtils from 'src/utils/image';
import EmojiPicker from 'emoji-picker-react';
import dynamic from 'next/dynamic'
import ReactPlayer from 'react-player'
const EmojiNoSSR = dynamic(
    () => import('emoji-picker-react'),
    { ssr: false }
)
interface Props {
    posts?: Posts,

}
export interface Posts {
    post_id?: string,
    text?: string,
    time?: BigInt,
    post_time?: number,
    post_url?: string,
    username?: string,
    user_url?: string,
    images?: Array<string>,
    video?: string,
    shares?: number,
    comments?: number,
    reaction_count?: number
}
const PostCard: NextPage<Props> = (props) => {
    const { posts } = props;
    let timeAgo = ListTimeUtils.getTimeStringFromCurrent(posts?.post_time);
    const [isShowComment, setIsShowComment] = useState(false);
    const [commentContent, setCommentContent] = useState("");
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [isChooseEmoji, setIsChooseEmoji] = useState(false);
    const onEmojiClick = (event: any, emojiObject: any) => {
        setChosenEmoji(emojiObject);
        setCommentContent(commentTextArea.current.value + emojiObject?.emoji)
        setIsChooseEmoji(false);
        checkHeightTextArea("fakeEvent", emojiObject.emoji);
    };

    const commentTextArea = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    function getScrollHeight(elm: any) {
        var savedValue = elm.value
        elm.value = ''
        elm._baseScrollHeight = elm.scrollHeight
        elm.value = savedValue
    }
    function checkHeightTextArea(event?: any, emoji?: any) {
        if (commentTextArea.current) {
            // handle auto resize textarea
            var minRows = commentTextArea.current.getAttribute('data-min-rows') | 0, rows;
            !commentTextArea.current._baseScrollHeight && getScrollHeight(commentTextArea.current)
            commentTextArea.current.rows = minRows
            rows = Math.floor((commentTextArea.current.scrollHeight - commentTextArea.current._baseScrollHeight) / 24)
            commentTextArea.current.rows = minRows + rows
            // handle content of textarea
            let comment = emoji ? commentTextArea.current.value + emoji : commentTextArea.current.value;
            setCommentContent((commentContent) => comment)
        }
    }
    useEffect(() => {
        checkHeightTextArea();
    })

    const handleErrorImage = (e: any) => {
        e.target.style.display = "none";
    }
    return (
        <>
            <div className="post-card__box">
                <div className="post-card__owner">
                    <a href={posts?.user_url}>
                        <Image className="post-card__owner-img" src={ImagesPath.VTV24} alt="post owner avatar"></Image>
                    </a>
                    <div className="post-card__owner-text">
                        <a href={posts?.user_url}>
                            <h4>{posts?.username}</h4>
                        </a>
                        <p>{timeAgo}</p>
                    </div>
                    <div className="post-card__owner-hot">
                        <i className="fas fa-bookmark"></i>
                        <span>Tin hot</span>
                    </div>
                </div>
                <div className="post-card__content">
                    <Paragraph text={posts?.text} className="post-card__content-text" />
                    <div className="post-card__content-img">
                        {posts?.images ?
                            posts?.images?.length > 1 ? (
                                <Carousel showThumbs={false} emulateTouch={true} autoPlay={false} infiniteLoop={true} useKeyboardArrows={true}>
                                    {posts?.images.map((image) => {
                                        return (
                                            <div style={{ maxHeight: "800px", display: "flex", justifyContent: "center", alignItems: "center", }} key={ListStringUtils.getUniqueId(image, 10)}>
                                                <img className="carousel-img__item" onError={handleErrorImage} src={image} alt="post img"></img>
                                            </div>

                                        )
                                    })}
                                </Carousel>
                            ) : posts?.images?.length == 1 ? (<img src={posts?.images[0]}></img>) : <></>
                            : <></>
                        }
                        {
                            posts?.video ?
                                <ReactPlayer url={posts?.video} width='100%' height='100%' />
                                // <video style={{ width: "100%" }} controls src={posts.video}></video>
                                : <></>
                        }
                    </div>
                    <div className="post-card__content-action">
                        <ul>
                            <li className="none-select">
                                <Image src={ImagesPath.LIKE_ICON} alt="like icon img"></Image>
                                <span>{posts?.reaction_count ? posts?.reaction_count : 0}</span>
                            </li>
                            <li className="none-select" onClick={() => {
                                setIsShowComment(!isShowComment)
                            }}>
                                <Image src={ImagesPath.COMMENT_ICON} alt="comment icon img"></Image>
                                <span>{posts?.comments ? posts?.comments : 0}</span>
                            </li>
                            <li className="none-select">
                                <Image src={ImagesPath.SHARE_ICON} alt="share icon img"></Image>
                                <span>{posts?.shares}</span>
                            </li>
                        </ul>
                    </div>
                    {/* Comment list */}
                    {
                        isShowComment ?
                            <>
                                <div className="post-card__comment-list">
                                    <CommentLists commentList={posts?.comments_full} hasShowMoreComments={true} />
                                </div>
                                <div className="post-card__comment-post">
                                    <div className="avatar-box">
                                        <img src={ImagesPath.USER.src} />
                                    </div>
                                    <div className="input-box">
                                        <textarea ref={commentTextArea} onChange={checkHeightTextArea} rows={1} data-min-rows='1' placeholder='Nhập bình luận của bạn tại đây' value={commentContent}></textarea>
                                        <div className="emoji-box">
                                            <Image onClick={() => setIsChooseEmoji(!isChooseEmoji)} src={ImagesPath.EMOJI_ICON} alt="emoji icon img"></Image>
                                            {isChooseEmoji ? <div className="emoji-dropdown">
                                                <EmojiNoSSR onEmojiClick={onEmojiClick} />
                                            </div> : <></>}
                                        </div>
                                    </div>
                                </div>
                            </>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
}
// export async function getStaticProps() {

//     return {
//       props: { }, // will be passed to the page component as props
//     }
// }
export default PostCard;