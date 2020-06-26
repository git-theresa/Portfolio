import React from "react";
import {Card, CardColumns, Button} from "react-bootstrap";
import Image from "./clouds.png";
import Image2 from "./QJamz.png";
import Image3 from "./plannerClocks.jpeg";
import Image4 from "./chess.png";
import Image5 from "./employee.gif";
import Image6 from "./genScreenShot.png";


const styles = {
  
buttonContainer: {
  display: "flex", 
  justifyContent: "space-between"
},
button: {
  width: "30px !important" 
} 
}


function Portfolio() {
  return (
    <CardColumns>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} alt="clouds" />
  <Card.Body>
    <div style={styles.buttonContainer}>
  <Button size="sm" variant="dark" href="https://git-theresa.github.io/WeatherDashboard/" target="_blank">Weather Dashboard</Button>
  <Button size="sm" variant="dark" href="https://github.com/git-theresa/WeatherDashboard" target="_blank">See Code</Button>
    </div>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image2} alt="chess board" />
  <Card.Body>
    <div style={styles.buttonContainer}>
    <Button size="sm" variant="dark" href="https://git-theresa.github.io/Project/" target="_blank">Q. Jamz</Button>
  <Button size="sm" variant="dark" href="https://github.com/git-theresa/Project" target="_blank">See Code</Button>   
     </div>
  </Card.Body>
</Card>

 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image4} alt="chess" />
  <Card.Body>
    <div style={styles.buttonContainer}>
    <Button size="sm" variant="dark" href="https://sticklersparadise.herokuapp.com/" target="_blank">Stickler's Paradise</Button>
  <Button size="sm" variant="dark" href="https://github.com/git-theresa/rules" target="_blank">See Code</Button>

     </div>
  </Card.Body>
</Card>  

<Card>
    <Card.Img src="holder.js/100px160" />
  </Card>

<Card className="p-3">
  <Card.Img variant="top" src={Image5} alt="demo" />
  <Card.Body>
    <div style={styles.buttonContainer}>
    <Button size="md" variant="dark" href="https://github.com/git-theresa/EmployeeTracker" target="_blank">Employee Tracker</Button>
    
       </div>
  </Card.Body>
  </Card>

 

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image3} alt="clocks" />
  <Card.Body>
    <div style={styles.buttonContainer}>
  <Button size="sm" variant="dark" href="https://git-theresa.github.io/DailyPlanner" target="_blank">Daily Planner</Button>
  <Button size="sm" variant="dark" href="https://github.com/git-theresa/DailyPlanner" target="_blank">See Code</Button>
    </div>
  </Card.Body>
</Card>





<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image6} alt="clouds" />
  <Card.Body>
    <div style={styles.buttonContainer}>
  <Button size="sm" variant="dark" href="https://git-theresa.github.io/Project/" target="_blank">Generate ReadMe</Button>
  {/* <Button size="sm" variant="dark" href="https://github.com/git-theresa/Project" target="_blank">See Code</Button> */}
    </div>
  </Card.Body>
</Card>

</CardColumns>
 
  );
}

export default Portfolio;
