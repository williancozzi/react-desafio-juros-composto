import React from "react";

export default function Form() {
  return (
    <div style={styles.flexRow}>
      <form style={styles.formStyle}>
        <div style={styles.inputStyle} className="input-field">
          <input style={styles.inputSize} type="number" />
          <label
            style={styles.labelFont}
            className="active"
            htmlFor="inputValue"
          >
            Montante inicial:
          </label>
        </div>

        <div style={styles.inputStyle} className="input-field">
          <input style={styles.inputSize} type="number" />
          <label
            style={styles.labelFont}
            className="active"
            htmlFor="inputValue"
          >
            Taxa de juros mensal:
          </label>
        </div>

        <div style={styles.inputStyle} className="input-field">
          <input style={styles.inputSize} type="number" />
          <label
            style={styles.labelFont}
            className="active"
            htmlFor="inputValue"
          >
            Período (em meses):
          </label>
        </div>
      </form>
    </div>
  );
}

const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  formStyle: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "50px",
  },
  inputStyle: {
    margin: "20px",
  },
  inputSize: {
    width: "250px",
  },
  labelFont: {
    fontSize: "x-large",
  },
};
