import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Input from "../components/atoms/Input";

// style
const StyledFilterJokesPage = styled.main`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .bg-text {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50;
    left: 27%;
    color: #91919155;
    width: 90vh;
    height: 2rem;
    z-index: -1;
    opacity: 0.2;
    h2 {
      font-size: 20rem;
    }
  }
  .all-jokes-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 4;
    .single-joke {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60rem;
      margin: 1rem 0;
      h4,
      h5 {
        margin: 0;
      }
      h4 {
        color: orange;
      }
    }
  }
`;

const FilterJokesPage = () => {
  // hooks
  // state
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([allData]);

  // const [singleJoke, setSingleJoke] = useState([]);
  // const [option, setOption] = useState([]);
  // side effects
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jokes")
      .then((res) => {
        setAllData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.log("Error getting data " + err));
  }, []);

  // custom functions

  let i = 1;

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      // return data.joke.search(value) !== -1;
      return data.joke.toLowerCase().includes(value);
    });
    setFilteredData(result);
  };

  return (
    <StyledFilterJokesPage>
      <div className="bg-text">
        <h2>Filter jokes</h2>
      </div>

      <label>Search Jokes:</label>
      <Input
        placeholder="type keywords"
        type="text"
        action={(e) => handleSearch(e)}
      />
      <div className="all-jokes-container">
        {filteredData.map((value) => (
          <div key={i++} className="single-joke">
            <h4>{value.joke}</h4>
            <h5>{value.punchline}</h5>
          </div>
        ))}
      </div>
    </StyledFilterJokesPage>
  );
};

export default FilterJokesPage;
