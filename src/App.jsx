import Landing from "./components/Landing.jsx"

export default function App() {

  function handleQuestionaire(formData) {
    console.log("Form submitted!")
    console.log("data", formData);
  }

  return (
    <div className="app">
      <Landing 
        handleQuestionaire={handleQuestionaire}
      />
    </div>
  )
}