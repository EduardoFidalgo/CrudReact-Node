import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
import Card from "./components/cards/card";

function App() {

  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleChangeValues = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values)
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then((response) => {
        const url = window.location.href;
        window.location.replace(url);
    })
  };

  useEffect(() => {
      Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data);
      })
    }, []);

  return (
    <div className="App--container">
       <div class="flex-container">
        <div class="flex-item">
            <div className="register--container">
              <h1 className="register--title">Games</h1>
              <input type="text" name="name" placeholder="Nome" className="register--input" onChange={handleChangeValues}/>
              <input type="text" name="cost" placeholder="Preço" className="register--input" onChange={handleChangeValues}/>
              <input type="text" name="category" placeholder="Categoria" className="register--input" onChange={handleChangeValues}/>
              <button className="register--button" onClick={() => handleClickButton()}>Register</button>
            </div>
        </div>
        <div class="flex-item">
          <div className="data--container">
            {typeof listGames !== "undefined" && listGames.map((value) => {
              return <Card key={value.id} 
                          listCard={listGames} 
                          setListCard={setListGames} 
                          id={value.id} 
                          name={value.name} 
                          cost={value.cost} 
                          category={value.category}>
                    </Card>
            })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
