import React from "react";
import AppPresenter from "./AppPresenter";

const Categories = [
  {
    name: "Preparation",
    description: "Prepare your nice trip",
    background: "category.jpg"
  }
];

class AppContainer extends React.Component {
  render() {
    return <AppPresenter categories={Categories} />;
  }
}

export default AppContainer;
