import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    hasBackButton: PropTypes.bool.isRequired
  };
  state = {};
  render() {
    const { title, hasBackButton } = this.props;
    return (
      <HeaderPresenter
        title={title}
        hasBackButton={hasBackButton}
        {...this.state}
      />
    );
  }
}

export default HeaderContainer;
