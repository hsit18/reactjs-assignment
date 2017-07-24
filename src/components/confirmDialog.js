import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import {Modal, Button} from 'react-bootstrap';

class ConfirmDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false };
    this.open = this.open.bind(this);
    this.cancel = this.cancel.bind(this);
    this.ok = this.ok.bind(this);
    this.data = null;
  }

  getInitialState(){
    return { showModal: false };
  }

 cancel(){
   this.setState({ showModal: false });
 }

 ok(){
   this.setState({ showModal: false });
   this.props.onHideCallback(this.data);
 }

 open(data){
   this.data = data;
   this.setState({ showModal: true });
 }

	render() {
		return (

      <Modal show={this.state.showModal} onHide={this.cancel}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.cancel}>Cancel</Button>
            <Button onClick={this.ok}>Ok</Button>
          </Modal.Footer>
        </Modal>

		);
	}
}

export default ConfirmDialog;
