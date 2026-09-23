const App = () => {

  const arr = [1,2,3,4,5,6,7,8,9,0]

  return (
    <>
    
    <div style={{ padding: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {arr.map((e, i) => (
        <span key={i} style={{ padding: "10px 15px", background: "#2563eb", color: "#fff", borderRadius: "8px" }}>
          {e}
        </span>
      ))}
    </div>

    </>
  )
}

export default App