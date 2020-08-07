import React, { useState, useEffect } from "react";
import "./App.css";

// class Something extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount() {
//     // call an API
//   }

//   componentShouldUpdate(prevProps) {
//     // should the component update?
//   }

//   componentWillUnmount() {
//     // going away!
//   }

//   increment() {
//     this.setState({ count: count + 1 })
//   }

//   render() {
//     return <div>{this.state.count}</div>
//   }
// }

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = "The count is: " + count;

    return () => {
      // unmounting!
    };
  }, [count]); // dependency array

  // [] = On mount
  // [variable] = On mount, whenever
  //              variable is updated
  // no array = On mount, whenever state changes
}

function App(props) {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useDocumentTitle(count);

  return (
    <div className="App">
      <button onClick={increment}>Add</button>
      {count}
    </div>
  );
}

export default App;
