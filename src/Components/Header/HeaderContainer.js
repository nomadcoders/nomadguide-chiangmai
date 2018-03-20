import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  state = {};
  render() {
    const { title } = this.props;
    return <HeaderPresenter title={title} {...this.state} />;
  }
}

export default HeaderContainer;
