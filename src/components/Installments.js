import React from "react";
import Installment from "./Installment";

export default function Installments() {
  const installments = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
  ];

  return (
    <div style={styles.installments}>
      {installments.map((installment, index) => {
        return (
          <div style={styles.installment}>
            <Installment key={index} />
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
    maxWidth: "950px",
  },
  installment: {
    margin: "10px",
  },
};
