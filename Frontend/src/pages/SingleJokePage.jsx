import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledSingleJokePage = styled.main`
  height: 90vh;
  display: flex;
  align-items: center;
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
    z-index: 0;
    opacity: 0.2;
    h2 {
      font-size: 20rem;
    }
  }
  .select-joke-container {
    z-index: 5;
    select {
      width: 20rem;
      height: 2rem;
      border-radius: 0.5rem;
      padding-left: 1rem;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const SingleJokePage = () => {
  // hooks

  // ref

  const selectRef = useRef(true);
  // state
  const [allData, setAllData] = useState([]);
  const [selectValue, setSelectValue] = useState();

  // side effects
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jokes")
      .then((res) => {
        setAllData(res.data);
      })
      .catch((err) => console.log("Error getting data " + err));
  }, []);

  // custom functions
  const handleChange = (e) => {
    // e.preventDefault();
    setSelectValue((p) => {
      return e.target.value;
    });
  };

  return (
    <StyledSingleJokePage>
      <div className="bg-text">
        <h2>Single Joke</h2>
      </div>
      <div className="select-joke-container">
        <select
          ref={selectRef}
          name="jokes"
          id="jokes"
          value={selectValue}
          onChange={(e) => handleChange(e)}
        >
          <option>Select joke ID </option>

          {allData.map((joke) => (
            <option key={joke._id}>{joke.id}</option>
          ))}
        </select>

        {selectRef.current.value &&
          allData
            .filter((value) => {
              console.log(value.id);
              console.log(selectRef.current.value);
              return value.id === selectRef.current.value;
            })
            .map((item) => {
              console.log(item.joke);
              return (
                <div className="single-joke" key={item._id}>
                  <h5>{item.joke}</h5>
                  <h6>{item.punchline}</h6>
                </div>
              );
            })}
      </div>
    </StyledSingleJokePage>
  );
};

export default SingleJokePage;
