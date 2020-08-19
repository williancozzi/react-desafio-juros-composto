import React from "react";

export default function Installment({ id, total, income, percent }) {
  return (
    <div style={styles.installment}>
      <div style={styles.idTerm}>{id}</div>
      <div>
        <div>R$ {total}</div>
        <div>R$ {income}</div>
        <div>{percent}%</div>
      </div>
    </div>
  );
}

const styles = {
  installment: {
    display: "flex",
    justifyContent: "space-around",
    minWidth: "150px",
    maxWidth: "200px",
    padding: "10px",
    border: "1px solid lightsalmon",
    borderRadius: "8px",
    boxShadow: "3px 3px 1px 0px rgba(0,0,0,0.2)",
  },
  idTerm: {
    alignSelf: "center",
    fontWeight: "bold",
    marginRight: "15px",
  },
  openStyle: {
    maxWidth: "100%",
    transition: "max-width 1s",
  },
  closedStyle: {
    maxWidth: "0%",
    transition: "max-width 1s",
  },
};
