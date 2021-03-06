import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";
import { formatNumber, formatToBrl } from "./helpers/formatHelpers.js";

export default function App() {
  const [initialCapital, setInitialCapital] = useState(0);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
  const [initialPeriod, setPeriod] = useState(0);
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const getTerm = () => {
      const newTerms = [];
      const isValid = () => {
        return (
          initialCapital <= 100000 &&
          initialCapital > 0 &&
          monthlyInterestRate <= 12 &&
          monthlyInterestRate >= -12 &&
          initialPeriod <= 36 &&
          initialPeriod > 0
        );
      };

      if (isValid()) {
        for (let idx = 1; idx <= initialPeriod; idx++) {
          let total = (
            initialCapital *
            (monthlyInterestRate / 100 + 1) ** idx
          ).toFixed(2);

          let percentage = ((total / initialCapital - 1) * 100).toFixed(2);

          let interest = (total - initialCapital).toFixed(2);
          newTerms.push({
            id: idx,
            total: formatNumber(formatToBrl(total)),
            interest: formatToBrl(interest),
            percentage,
          });
        }
        setTerm(newTerms);
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
