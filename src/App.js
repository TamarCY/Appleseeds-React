import Algolia from "./Components/Algolia-useEffect.19.3/Algolia";
import Countries from "./Components/Countries-19.2/Countries";
import Marking from "./Components/Marking-checkBox-18.4/Marking";
import Simple from "./Components/Simple-todo-18.2/Simple-todo";
import Starwars from "./Components/Starwars - 19.1/Starwars";
import Text from "./Components/Text-18.1/Text";
import Time from "./Components/Time-18.3/Time";
import ChuckNorris from "./Components/ChuckNorris-12.1/ChuckNorris";
import Cancel from "./Components/CancelRequest-ClaenUp-20.1/Cancel";
import Edit from "./Components/Editing-Ref-21.1/Editing";
import ImageToggle from "./Components/ImageToggle-UseRef-21.3/ImageToggle";


const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const max = 30;

function App() {
  return (
    <div className="App">
      {/* <Text text={text} max={max} /> */}
      {/* <Time/> */}
      {/* <Marking/> */}
      {/* <Simple/> */}
      {/* <Starwars/> */}
    {/* <Countries/> */}
    {/* <Algolia/> */}
    {/* <ChuckNorris/> */}
    {/* <Cancel/> */}
    {/* <Edit/> */}
    <ImageToggle/>
    </div>
  )
}

export default App;
