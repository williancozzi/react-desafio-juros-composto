import React from "react";

export default function Installment() {
  return (
    <div style={styles.installment}>
      <div style={styles.idTerm}>1</div>
      <div>
        <div>R$ 999.999,20</div>
        <div>+R$ 7,20</div>
        <div>0,80%</div>
      </div>
    </div>
  );
}

const styles = {
  installment: {
    display: "flex",
    justifyContent: "space-around",
    minWidth: "50px",
    maxWidth: "150px",
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
};
