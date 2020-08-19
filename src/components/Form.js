import React from "react";

export default function Form({ onChangePeriod, onChangeTax, onChangeCapital }) {
  const handlePeriodChange = (event) => {
    const periodValue = event.target.value;

    onChangePeriod(periodValue);
  };

  const handleTaxChange = (event) => {
    const taxValue = event.target.value;

    onChangeTax(taxValue);
  };

  const handleCapitalChange = (event) => {
    const capitalValue = event.target.value;

    onChangeCapital(capitalValue);
  };

  return (
    <div style={styles.flexRow}>
      <form style={styles.formStyle}>
        <div style={styles.inputStyle} className="input-field">
          <input
            style={styles.inputSize}
            type="number"
            min={0}
            max={100000}
            step={100}
            onChange={handleCapitalChange}
          />
          <label
            style={styles.labelFont}
            className="active"
            htmlFor="inputValue"
          >
            Montante inicial:
          </label>
        </div>

        <div style={styles.inputStyle} className="input-field">
          <input
            style={styles.inputSize}
            type="number"
            min={-12}
            max={12}
            step={0.1}
            onChange={handleTaxChange}
          />
          <label
            style={styles.labelFont}
            className="active"
            htmlFor="inputValue"
          >
            Taxa de juros mensal:
          </label>
        </div>

        <div style={styles.inputStyle} className="input-field">
          <input
            style={styles.inputSize}
            type="number"
            min={1}
            max={36}
            step={1}
            onChange={handlePeriodChange}
          />
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
    margin: "10px",
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
