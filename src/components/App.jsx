import { Component } from "react";
import { Feedback } from "./Feedback";

export class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
}
 
  handleClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

 
 
  render() {
    return (
      <div>
        <Feedback
          handleClick={this.handleClick}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        ></Feedback>
    </div>
  )
}
}




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
