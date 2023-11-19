import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [paymentStatus, setPaymentStatus] = useState("created");

  return (
    <div className="App">
      {paymentStatus !== "done" && (
        <button
          onClick={() => {
            const rp = new window.Razorpay({
              order_id: "order_MoT22lnOBFXh52",
            });
            setPaymentStatus("initiated");
            rp.open();
          }}
          disabled={paymentStatus === "initiated"}
        >
          {paymentStatus === "initiated" ? "Payment pending" : "Pay Now"}
        </button>
      )}

      {paymentStatus === "done" && (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Payment Successful</p>
        </div>
      )}
    </div>
  );
}

export default App;
