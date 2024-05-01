import React, { useState } from "react";
import "./App.css";


const dictionaryData = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];


const XDictionary = () => {


  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');



  const handleSearch = () => {

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const wordData = dictionaryData.find( (entry) => entry.word.toLowerCase() === lowerCaseSearchTerm );


    if (wordData) {
      setDefinition(wordData.meaning);
    }
    else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (

    <div className="App">


      <h1>Dictionary App</h1>


      <div className="search-bar">

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />

        <button onClick={handleSearch}>Search</button>

      </div>



      <div className="definition">

        <strong>Definition:</strong>
        
        {definition && <p>{definition}</p>}

      </div>

    </div>
  );
};

export default XDictionary;