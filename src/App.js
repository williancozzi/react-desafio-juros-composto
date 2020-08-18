import React, { useState } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";

export default function App() {
  const [initialCapital, setInitialCapital] = useState(0);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
  const [term, setTerm] = useState(0);

  return (
    <div className="container" style={styles.containerNew}>
      <h2 style={styles.centered}>React - Juros compostos</h2>

      <Form />

      <Installments />
    </div>
  );
}

const styles = {
  centered: {
    textAlign: "center",
  },
  containerNew: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
