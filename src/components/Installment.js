import React from "react";

export default function Installment({ id, total, interest, percentage }) {
  return (
    <div className="card">
      <div style={styles.idTerm}>{id}</div>
      <div>
        <div>R$ {total}</div>
        <div>R$ {interest}</div>
        <div>{percentage}%</div>
      </div>
    </div>
  );
}

const styles = {
  idTerm: {
    alignSelf: "center",
    fontWeight: "bold",
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
