import { useEffect, useState } from "react";
import { get, getDatabase, ref, orderByKey, query } from "firebase/database";

export default function useAnswers(vedioID) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            const db = getDatabase();
            const answerRef = ref(db, "answers/" + vedioID + "/questions");
            const answerQuery = query(answerRef, orderByKey());

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(answerQuery);

                setLoading(false);

                if (snapshot.exists()) {
                    setAnswers(Object.values(snapshot.val()));
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchAnswers();
    }, [vedioID]);

    return {
        loading,
        error,
        answers,
    };
}
