import Header from "./Header.jsx"
import Questionnaire from "./Questionnaire.jsx"

export default function Landing({ handleQuestionaire }) {
    return (
        <div className="landing">
            <Header />
            <Questionnaire 
                onSubmit={handleQuestionaire}
            />
        </div>
    )
}