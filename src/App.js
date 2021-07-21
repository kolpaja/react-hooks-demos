import React, { useEffect, useState } from 'react'
import './App.css';




function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //on every re-render
  useEffect(() => {
    console.log("i am re-rendering")
  })

  //on first render/mount only! componentDidMount-alternative
  useEffect(() => {
    console.log("%cThe Component mounted", "color: green")
  }, [])

  // on first render  whenever dependecies change- alternative componentDidUpdate
  useEffect(() => {
    // console.log(`%cThe name changed to: ${name}`, "color: blue")

    // //cleanup function before  the rendering
    // return () => console.log("%cWe unMounted", "color: brown");
  }, [name])

  useEffect(() => {
    console.log("atach listener")
    window.addEventListener("resize", updateWindowWidth);

    // return () => {
    //   console.log("detach listener")
    //   //when the component unmount this code runs..
    //   window.removeEventListener("resize", updateWindowWidth);
    // } //we can remove this one and just atach the listener once when the component mounts, just by adding dependency array []
  }, [])

  const updateWindowWidth = () => setWindowWidth(window.innerWidth);

  return (
    <div className="App">
      <h1>The useEffect Hook</h1>
      <p>The window witdth ise <strong>{windowWidth}</strong></p>

      <input
        type="text"
        value={name}
        placeholder="Type a name"
        onChange={e => setName(e.target.value)}
      />
      <div>
        Typed name: <h3>{name}</h3>
      </div>

    </div>
  );
}

export default App;
