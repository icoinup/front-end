/*
import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import './qr_user.css';

class QR_Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
    localStorage.setItem('qrData', data);
    console.log("data : %s", data);
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          className="qr-scanner-video" 
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default QR_Scanner;

*/

import React, { Component } from "react";
import QrReader from "modern-react-qr-reader";
import './qr_user.css';

class QR_Scanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "No result"
    };

    this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data
      });
      console.log(this.state.result);
      // this.setState({result: data});
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    const previewStyle = {
        height: 240,
        width: 320,
      }
    return (
      <div>
        <QrReader
          delay={300}
          facingMode={"environment"}
          onError={this.handleError}
          onScan={this.handleScan}
          className="qr-scanner-video" 
          style={previewStyle}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <p>{this.state.result}</p>
      </div>
    );
  }
}
export default QR_Scanner;
