import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <>
//       <UserClass name={"Umair Aftab (Class)"} />
//       <User name={"Umair Aftab (Function)"} />;
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return <UserClass name={"Umair Aftab (Class)"} />;
  }
}

export default About;
