import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../common/Icon';
import IconArrow from '../common/IconArrow';

import './TodoIcon.css';

class TodoIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowIsHidden: true
    };
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({
      arrowIsHidden: false
    });
  }

  handleOnMouseLeave() {
    this.setState({
      arrowIsHidden: true
    });
  }

  render() {
    const { onIconClick } = this.props;
    const { arrowIsHidden } = this.state;

    return (
      <div
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <IconArrow hidden={arrowIsHidden} />
        <Icon
          onHoverText="To-do List"
          onIconClick={this.props.onIconClick}
          faClass="fa-th-list"
        />
      </div>
    );
  }
}

TodoIcon.propTypes = {
  onIconClick: PropTypes.func.isRequired
};

export default TodoIcon;
