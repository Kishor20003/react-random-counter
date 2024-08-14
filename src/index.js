import ReactDOM from "react-dom/client"
import "./style.css"
import Counter from "./components/Counter.js"
import Random from "./components/Random.js"


const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<>
<div>
  <Counter></Counter>
  <Random></Random>
</div>
</>)