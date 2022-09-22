import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const AddNews = ({ user }) => {
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const navigation = useNavigate();

  const saveData = () => {
    let data = { id, image };
    navigation("/");
    fetch("http://localhost:3000/data", {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
      });
    });
  };
  return (
    <div className="addnews-box">
      <h2>Adding Data in Json Server</h2>
      <form className="form2-style">
        <Box className="box4-style">
          <input
            className="input2-text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="Id"
            type="text"
          ></input>
          <br />
          <br />
          <input
            className="input2-text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            placeholder="Image Url"
            type="text"
          ></input>
          <br />
          <br />
          <Button className="btn2" type="button" onClick={saveData}>
            Add Data
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddNews;
