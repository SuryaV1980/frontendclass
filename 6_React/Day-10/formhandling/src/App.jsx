
const App = () => {
  return (
    <>
    
    <form>

    <input type="text"  placeholder="Enter your Name"/>

    <input type="email"  placeholder="Enter your Email" />
    <input type="number" maxLength={2} minLength={0}  placeholder="Enter your Age" />
    <input type="text"   placeholder="Enter your Course" />
    <input type="text"  placeholder="Enter your City" />

    <button type="submit">Register</button>

    </form>
    
    
    
    </>
  )
}

export default App