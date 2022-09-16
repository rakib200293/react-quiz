import { useEffect, useState } from "react";
import { get, getDatabase, ref, orderByKey, query } from "firebase/database";

export default function useQuestions(vedioID) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + vedioID + "/questions");
            const quizQuery = query(quizRef, orderByKey());

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(quizQuery);

                setLoading(false);

                if (snapshot.exists()) {
                    setQuestions(Object.values(snapshot.val()));
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchQuestions();
    }, [vedioID]);

    return {
        loading,
        error,
        questions,
    };
}
