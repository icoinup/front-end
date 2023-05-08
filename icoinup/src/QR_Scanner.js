import React, { Component } from "react";
import QrReader from "modern-react-qr-reader";
import { Link } from "react-router-dom";
import Main from './Main';
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
      alert('계산이 완료되었습니다!');
      window.location = "../Main"; 
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
        {/* <div id="loginAlert" onClick={() => alert('계산이 완료되었습니다!')}>계산이 완료되었습니다</div> */}
        <p>{this.state.result}</p>
        {/* <Link to="../Main">Main</Link> */}
      </div>
    );
  }
}
export default QR_Scanner;
