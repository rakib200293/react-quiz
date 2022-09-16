import { useEffect, useState } from "react";
import { get, getDatabase, ref, orderByKey, query, startAt, limitToFirst } from "firebase/database";

export default function useVideoList(page) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState("");
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        async function fetchVideos() {
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(videosRef, orderByKey(), startAt("" + page), limitToFirst(15));

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(videoQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setVideos((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())];
                    });
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        setTimeout(() => {
            fetchVideos();
        }, 500);
    }, [page]);

    return {
        loading,
        error,
        videos,
        hasMore,
    };
}
