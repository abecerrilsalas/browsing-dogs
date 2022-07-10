import { useState } from "react";
import axios from "axios";

function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2165.jpg"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setImageUrl(response.data.message);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(<section>{error.response.data.message}</section>);
      });
  };

  const onButtonClick = () => {
    getRandomImage();
  };

  return (
    <div>
      <h1>Yearbook of Dogs</h1>
      {errorMessage}
      <div>
        <button onClick={onButtonClick}>Meet another Dog!</button>
        <img src={imageUrl} alt="A random Dog" />
      </div>
    </div>
  );
}

export default App;
