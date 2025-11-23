import { useState } from "react";
import ChipSelect from "./ChipSelect.jsx"

export default function Questionaire({ onSubmit }) {

    const [questionnaire, setQuestionnaire] = useState({
        favoriteMovie: "",
        timeframe: ""
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
                    onChange={(event) => update("favoriteMovie", event.target.value)}
                >
                </textarea>
            </div>

            <ChipSelect
                name="timeframe"
                label="Are you in the mood for something new or a classic?"
                options={["New", "Classic"]}
                value={questionnaire.timeframe}
                onChange={(value) => update("timeframe", value)}
            />

            <button type="submit">Let's Go</button>
        </form>
    )
}