import "./App.css";
import { useState } from "react";

function App() {
  const [uploadImage, setUploadImage] = useState(null);

  const imageUploaded = (e) => {
    setUploadImage(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
    console.log(uploadImage);
  };
  return (
    <div className="app">
      <h1 className="app__header">Profile Pic Generator</h1>
      <div className="upload__div">
        <input
          type="file"
          onChange={(event) => imageUploaded(event)}
          accept="image/*"
        ></input>
      </div>
      <div className="image__div">
        {uploadImage != null ? <img src={uploadImage} alt="uploaded" /> : null}
        {uploadImage != null ? <img src={uploadImage} alt="new uploaded" /> : null}
      </div>
    </div>
  );
}

export default App;
