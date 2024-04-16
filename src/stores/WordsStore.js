import { action, get, makeObservable, observable } from "mobx";

class WordsStore {
  words = [];
  isLoading = true;

  constructor() {
    makeObservable(this, {
      words: observable,
      addWord: action,
      updateWord: action,
      deleteWord: action,
      getWords: action,
      isLoading: observable,
    });
  }

  getWords = async () => {
    if (this.isLoading) {
      try {
        const responseData = await fetch("/api/words")
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Something went wrong");
              //   console.log("error");
            }
          })
          .then((data) => {
            this.words = data;
            this.isLoading = false;
          });
      } catch (err) {
        console.log(err);
        this.isLoading = false;
      }
    }
  };
  addWord = async (english, transcription, russian) => {
    const response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.words.length+1,
        english: english,
        transcription: transcription,
        russian: russian,
        tags:'',    
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  updateWord = async (id, english, transcription, russian) => {
        const response = await fetch(`/api/words/${id}/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            english: english,
            transcription: transcription,
            russian: russian,
            tags: "",
          }),
        });
        const json = await response.json();
        console.log(json);
      };
  deleteWord = async (id, english, transcription, russian) => {
        const response = await fetch(`/api/words/${id}/delete`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            english: english,
            transcription: transcription,
            russian: russian,
            tags: "",
          }),
        });
        const json = await response.json();
        console.log(json);
  };
}
export default WordsStore;

// class WordsStore  extends React.Component{
//     @observable words = []

//     @action addWord = (word) => {

//     }
//     @action updateWord = (word) => {

//     }

//     @action deleteWord = (word) => {

//     }
// }

// export default WordsStore
