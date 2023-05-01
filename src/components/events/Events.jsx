import React from "react";
import './events.css'
import { EventsHeader } from '../../containers'
import Services
 from "../services/Services";

const Events = () => {
  return (
    <>
    <EventsHeader/>
    <center><div>We host a variety of events and services such as catering, birthday parties, weddings, etc. Please fill out the form so we know what you're intrested in! We'll get back to you shortly </div></center>
    <center><Services/></center>
    </>
  )
}
/*




// And now we can use these
const SignupForm = () => {
  return (
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



*/
export default Events