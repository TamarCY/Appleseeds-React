import Text from "./Components/Text-18.1/Text"
import Time from "./Components/Time-18.3/Time";


const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const max = 30;

function App() {
  return (
    <div className="App">
      {/* <Text text={text} max={max} /> */}
      <Time/>
    </div>
  )
}

export default App;
