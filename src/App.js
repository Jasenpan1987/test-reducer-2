import React from "react";
import { ReducerProvider } from "./components/useReducer/context";
import { TestApp } from "./components/useReducer";
import { TestApp2 } from "./components/useState";
import { StateProvider } from "./components/useState/context";
// function App() {
//   console.log("APP");
//   return (
//     <div className="App">
//       <ReducerProvider>
//         <TestApp />
//       </ReducerProvider>
//     </div>
//   );
// }

function App() {
  console.log("APP");
  return (
    <div className="App">
      <StateProvider>
        <TestApp2 />
      </StateProvider>
    </div>
  );
}
export default App;
