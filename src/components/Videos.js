import React, { useState } from "react";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Videos = () => {
    const [page, setPage] = useState(1);
    const { loading, error, videos, hasMore } = useVideoList(page);
    const notify = () => {
        toast.error("Sorry there is no question on this module !", {
            position: toast.POSITION.right,
        });
    };

    return (
        <div className="videos">
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    hasMore={hasMore}
                    next={() => setPage(page + 15)}
                    loader="Loading..."
                >
                    {videos.map((video) =>
                        video.noq > 0 ? (
                            <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                            </Link>
                        ) : (
                            <div onClick={notify} key={video.youtubeID}>
                                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                                <ToastContainer />
                            </div>
                        )
                    )}
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <div>No data found</div>}
            {error && <div>There was an error</div>}
            {loading && <div>Loading....</div>}
        </div>
    );
};

export default Videos;
