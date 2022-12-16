import logo from "./logo.svg";
import "./App.css";
import Country from "./components/flags/flags";
import germany from "./assets/Germany.svg";
import india from "./assets/india.jpg";
import { BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";

function App() {
  const [api, setApi] = useState([]);
  const [mode, setMode] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all ")
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setApi(value);
      });
  }, []);

  return (
    <div className="App">
      <div className="navigation">
        <h1 className="title">Where in the world ?</h1>
        <button
          className="view"
          onClick={() => {
            setMode(!mode);
          }}
        >
          <BsMoon color="white" />
          <h1 className="mode">{mode == true ? "Dark Mode" : "Light Mode"}</h1>
        </button>
      </div>
      <div className="input">
        <input
          type="text"
          className="search"
          placeholder="Search for the country"
        />
        <button className="button">Filter by region</button>
      </div>
      <div className="cabins">
        {api.map((task) => {
          return (
            <Country
              image={task.flags.png}
              countryname={task.name.common}
              population={task.population}
              region={task.region}
              capital={task.capital}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
