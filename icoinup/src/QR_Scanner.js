import React, { Component ,useEffect} from "react";
import QrReader from "modern-react-qr-reader";
import { Link } from "react-router-dom";
import {RC, floor} from './Main';
import './qr_user.css';
import {app,db} from "./firebase";
import { useLocation } from "react-router-dom"
import { doc, collection, getDocs, updateDoc } from "firebase/firestore";
import {StyledDiv, BackDiv} from './Style';
import { AiFillCamera } from "react-icons/ai";
function sleep(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
} 
class QR_Scanner extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      result: "No result",
      
    };

    this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
    
  }
  
  
  handleScan = async (data) => {
    
    if (data) {
      console.log(RC+floor)
      this.setState({
        result: data
      });
      
      if(parseInt(data)>0){
        const UpdateTime = async (e) => {
            
          let currentTimestamp = Date.now()
          try { 
              const washingmachine = doc(db, RC+floor, String(data));
              const docRef = await updateDoc(washingmachine, {
                 time: currentTimestamp,
                 using: true
                });
              console.log("Document written with ID: ", );
              
              
            } catch (e) {
              console.error("Error adding document: ", e);
            }
      }
        
      await UpdateTime();
      sleep(3);
      alert('계산이 완료되었습니다!');
      window.location = "../Input"; 
      }
      else{
        alert('유효하지 않는 QR');
      }
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
      <StyledDiv style={{background:"white"}}>
        <h3>QR코드를 스캔해주세요. (카메라 연동)</h3><br/>
        <QrReader
          delay={300}
          facingMode={"environment"}
          onError={this.handleError}
          onScan={this.handleScan}
          className="qr-scanner-video" 
          style={previewStyle}
        />
        <br/><br/><br/><br/><br/>
        <AiFillCamera style={{fontSize: "5em"}}/>
      </StyledDiv>
    );
  }
}
export default QR_Scanner;
