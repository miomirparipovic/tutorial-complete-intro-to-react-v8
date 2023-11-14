import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Luna",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Bird",
//       name: "Pepper",
//       breed: "cockatiel",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Doink",
//       breed: "Mixed",
//     }),
//   ]);
// };

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    <Pet name="Doink" animal="Cat" breed="Mixed" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(<App />));
