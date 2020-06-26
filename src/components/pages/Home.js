import React from "react";
import "../style/Home.css";
import Image from "./TE.jpg";

const styles = {
  Image: {
    maxWidth: "100%",
    maxHeight: 700
  }
}

function Home() {
  return (
    <div className="container">
      <h1>I am Theresa E.</h1>
       <img style={styles.Image} src={Image} alt="profile" />
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

export default Home;
