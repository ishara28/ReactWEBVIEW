import { CCol, CFormInput, CRow, CButton, CAlert } from "@coreui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  const [num1, setnum1] = React.useState();
  const [num2, setnum2] = React.useState();
  const [sum, setsum] = React.useState();

  // window.removeEventListener("message", (message) => {
  //   alert(message.data);
  //   // setsum(message.data)
  // });

  React.useEffect(() => {
    document.addEventListener("message", (message) => {
      if (message.data) {
        // alert(message.data);
        setsum(message.data);
      }
      // console.log(message.data);
    });
  });

  const sendDataToReactNativeApp = async () => {
    const numbers = JSON.stringify({
      num1: num1,
      num2: num2,
    });
    window.ReactNativeWebView.postMessage(numbers);
  };

  return (
    <div style={{ padding: 20, backgroundColor: "#45527a", height: "100vh" }}>
      <h2 style={{ color: "white", textAlign: "center" }}>Web Page</h2>
      <CFormInput
        type="number"
        size="lg"
        placeholder="Number 1"
        aria-label="lg input example"
        value={num1}
        onChange={(e) => setnum1(parseInt(e.target.value))}
      />
      <br />
      <CFormInput
        type="number"
        size="lg"
        placeholder="Number 2"
        aria-label="lg input example"
        value={num2}
        onChange={(e) => setnum2(parseInt(e.target.value))}
      />
      <br />
      <CButton color="success" onClick={() => sendDataToReactNativeApp()}>
        Add
      </CButton>
      <br /> <br />
      <h3 style={{ color: "white" }}>Sum (From Mobile App) : {sum}</h3>
    </div>
  );
};

export default Home;
