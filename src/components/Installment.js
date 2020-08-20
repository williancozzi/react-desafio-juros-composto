import React from "react";

export default function Installment({ id, total, interest, percentage }) {
  const totalToCompare = total;

  console.log(total, totalToCompare);
  return (
    <div className="card">
      <div style={styles.idTerm}>{id}</div>

      <div>
        {total > totalToCompare ? (
          <div style={styles.negative}>R$ {total}</div>
        ) : (
          <div style={styles.positiveGreen}>R$ {total}</div>
        )}

        {interest >= 0 ? (
          <div style={styles.positiveGreen}>+R$ {interest}</div>
        ) : (
          <div style={styles.negative}>-R$ {interest * -1}</div>
        )}

        {percentage >= 0 ? (
          <div style={styles.positiveBlue}>{percentage}</div>
        ) : (
          <div style={styles.negative}>{percentage}%</div>
        )}
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
  positiveBlue: {
    color: "blue",
  },
  positiveGreen: {
    color: "green",
  },
  negative: {
    color: "red",
  },
};
