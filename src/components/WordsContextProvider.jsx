import React, { useState, useEffect, createContext } from "react";
const WordsContext = createContext();

function WordsProvider(props) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://itgirlschool.justmakeit.ru";

  const getWords = async () => {
    try {
      const responseData = await fetch(`${baseUrl}/api/words`)
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
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
// useEffect(() => {getWords()} , []);
  return (
    <WordsContext.Provider value={{ words, loading, getWords }}>
      {props.children}
    </WordsContext.Provider>
  );
}
export { WordsContext, WordsProvider };

// function WordsProvider(props) {
//   const [words, setWords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const getWords = () => {
//     fetch("/api/words")
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//             throw new Error("Something went wrong");
//         //   console.log("error");
//         }
//       })
//       .then((data) => {
//         setWords(data);
//         console.log(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   };
//   useEffect(() => {
//     getWords();
//   }, []);
//   return (
//     <WordsContext.Provider value={{ words, loading }}>
//       {props.children}
//     </WordsContext.Provider>
//   );
// }
// export { WordsContext, WordsProvider };
