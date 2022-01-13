import "./App.css";

function App() {
  async function createUser() {
    await fetch("http://localhost:3001", {
      method: "POST",
    })
      .then((response) => console.log("We did it"))
      .catch((e) => console.log("Something went wrong"));
  }
  return (
    <div className="App">
      <button onClick={createUser}>Create User</button>
    </div>
  );
}

export default App;
