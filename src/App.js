import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";

export default function App() {
  const [initialCapital, setInitialCapital] = useState(0);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
  const [initialPeriod, setPeriod] = useState(0);
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const getTerm = () => {
      const newterms = [];

      if (initialCapital !== 0) {
        let interest = (monthlyInterestRate / 100) * initialPeriod;

        for (let index = 0; index < initialPeriod; index++) {
          newterms.push({
            id: index + 1,
            total:
              parseInt(initialCapital * interest) +
              parseInt(initialCapital) * initialPeriod,
            income: initialCapital * interest,
            percent: monthlyInterestRate + index,
          });
        }
        setTerm(newterms);
      }
    };

    getTerm();
  }, [initialPeriod, monthlyInterestRate, initialCapital]);

  const handlePeriodChange = (period) => {
    setPeriod(period);
  };

  const handleCapitalChange = (capital) => {
    setInitialCapital(capital);
  };

  const handleTaxChange = (tax) => {
    setMonthlyInterestRate(tax);
  };

  return (
    <div className="container" style={styles.containerNew}>
      <h2 style={styles.centered}>React - Juros compostos</h2>

      <Form
        onChangePeriod={handlePeriodChange}
        onChangeCapital={handleCapitalChange}
        onChangeTax={handleTaxChange}
      />

      <Installments term={term} />
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
