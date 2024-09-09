import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

function CatImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error("Error fetching cat image", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Cat Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <img src={imageUrl} alt="Random Cat" className={styles.image} />
          <button onClick={fetchCatImage} className={styles.button}>
            Load New Image
          </button>
        </div>
      )}
    </div>
  );
}

export default CatImage;
