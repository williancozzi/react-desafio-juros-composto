import React from "react";
import Installment from "./Installment";

export default function Installments({ term }) {
  return (
    <div style={styles.installments}>
      {term.map((installment, index) => {
        return (
          <div key={installment.id} style={styles.installment}>
            <Installment
              id={installment.id}
              total={installment.total}
              interest={installment.interest}
              percentage={installment.percentage}
            />
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  installments: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1100px",
  },
  installment: {
    margin: "15px",
  },
};
