import React from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  return <input type="file" accept="image/*" name="file" />;
};

export default ImageFileInput;
