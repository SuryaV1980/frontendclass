import ArrayOfObjects from "./component/ArrayOfObjects"
import ObjectRendering from "./component/ObjectRendering"
import ArrayRendering from "./component/ArrayRendering"

const App = () => {
  return (
    <>

  
    
    <div>
      <ArrayRendering />
    </div>
    
    <div>
      <ObjectRendering />
    </div>
    
    <div>
      <ArrayOfObjects />
    </div>

    </>
  )
}

export default App