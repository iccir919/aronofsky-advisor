import { useState } from "react";

export default function Questionaire({ onSubmit }) {

    const [questionnaire, setQuestionnaire] = useState({
        favoriteMovie: ""
    })

    const update = (key, value) => {
        setQuestionnaire(prev => ({ ...prev, [key]: value}));
    }

    return (
        <form className="questionnaire" action={onSubmit}>
            <div>
                <label htmlFor="favoriteMovie">What’s your favorite movie and why?</label>
                <textarea
                    id="favoriteMovie"
                    name="favoriteMovie"
                    rows={4}
                    value={questionnaire.favoriteMovie}
                    onChange={(e) => update("favoriteMovie", e.target.value)}
                >
                </textarea>
            </div>

            <button type="submit">Let's Go</button>
        </form>
    )
}