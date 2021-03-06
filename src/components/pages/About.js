import React from "react";
import "../style/Home.css";
import{CardDeck, Card, Button} from "react-bootstrap";
import Image from "../assets/LinkedIn.card.png";
import Image2 from "../assets/Resume.png";
import Image3 from "../assets/github.png";
import Pdf from "../assets/resume.pdf";

const styles = {
  CardDeck: {
    textAlign: "center"
  }
}

function About() {
  return (
   <CardDeck >
     <h1 style={styles.CardDeck}>About Me</h1>
    <p>
       Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
       porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
  
  <Card>
    <Card.Img variant="top" src={Image2} alt="keyboard" />
       <Card.Footer>
      <Button size="md" variant="dark" href={Pdf} target="_blank">See My Skills</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Image} alt="keyboard" />
       <Card.Footer>
      <Button size="md" variant="dark" href="https://www.linkedin.com/in/theresa-eatherly/" target="_blank">Join My Network</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Image3} alt="keyboard" />
       <Card.Footer>
      <Button size="md" variant="dark" href="https://github.com/git-theresa" target="_blank">Explore My Work!</Button>
    </Card.Footer>
  </Card>
</CardDeck>
  
  );
}

export default About;