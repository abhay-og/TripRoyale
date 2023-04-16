import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CloseButton from 'react-bootstrap/CloseButton';
import { useEffect, useState } from 'react';
import TaskAdd from './TaskAddition.js';

export const DayPlans = (props) => {


  const [status, setStatus] = useState("");
  function handleClick(Task) {
    fetch(`http://localhost:8000/1/trips/1/schedule/${Task.date}/events/${Task.id}`, { method: 'DELETE' })
      .then(() => setStatus('Delete successful'));
    console.log(status);
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };


  return (
    <Container className="pt-3">
      {props.Plan.map((ev) => {
        return (
          <div key={ev.id} className="d-flex mb-3">
            <Card
              style={{
                backgroundColor: "#FFE193",
                width: "35%",
                marginLeft: "32%",
                height: "90px"
              }}
            >
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {ev.time} | {ev.desc}
                  </p>
                  <footer className="blockquote-footer">{ev.loc}</footer>
                </blockquote>
              </Card.Body>
            </Card>
            <CloseButton aria-label="Hide"
              style={{ height: "90px" }}
              onClick={() => { props.DeleteTask(ev); handleClick(ev); }}
            >
            </CloseButton>

          </div>
        );
      })}
      {/* <TaskAdd/> */}
    </Container>

  );
}