import { useState, useEffect } from "react";

const Words=()=>{
const [words,setWords]=useState([]);
// const [loading,setLoading]=useState(true);
const getWords = () => {
    fetch("/api/words")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
            throw new Error("Something went wrong");
        //   console.log("error");
        }
      })
      .then((data) => {
        setWords(data);
        // setLoading(false);
        return words;
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };
  useEffect(() => {
    getWords();
  }, []);

};

export default Words;