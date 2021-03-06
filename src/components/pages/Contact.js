import React from "react";
import Image from "../assets/contact.png";

const styles = {
  Image: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
};

function Contact(props) {
  return (
    <div className="container" style={styles.Image}>
      <h1>Contact Page</h1>
      <img style={styles.Image} src={Image} alt="profile" />
        <p>
          <i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
          Nashville, TN
        </p>
        <p>
          <i class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
          Phone: 615.310.0000
        </p>
        <p>
          <i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
          Email: T.eatherly@gmail.com
        </p>
      </div>
  );
}

export default Contact;
