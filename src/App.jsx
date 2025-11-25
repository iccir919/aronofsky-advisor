import Landing from "./components/Landing.jsx"

export default function App() {

  async function handleQuestionaire(formData) {
    console.log("Form Data Submitted:", formData);
    try {
      const response = await fetch("/api/get-aronofsky-movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("Recommendations received:", data);

    } catch (error) {
      console.error("Error submitting questionnaire:", error);
    }
  }

  return (
    <div className="app">
      <Landing 
        handleQuestionaire={handleQuestionaire}
      />
    </div>
  )
}