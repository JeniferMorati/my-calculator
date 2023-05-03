import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClickButton = (value) => {
    setResult(result + value);
  };

  const handleClearInput = () => {
    setResult("");
  };

  const handleEqualsInput = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleLogInput = () => {
    setResult(Math.log(parseFloat(result)).toString());
  };

  const handleSqrtInput = () => {
    setResult(Math.sqrt(parseFloat(result)).toString());
  };

  const handlePowerInput = () => {
    setResult(Math.pow(parseFloat(result), 2).toString());
  };

  const handlePercentageInput = () => {
    setResult((parseFloat(result) / 100).toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.displayResult}>
          <Text style={styles.result}>{result}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => handleClickButton("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => handleClickButton("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => handleClickButton("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.funcButton}
          onPress={() => handleClearInput()}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClickButton("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.funcButton}
          onPress={() => handleEqualsInput()}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => handleClickButton("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => handleSqrtInput()}
        >
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => handlePowerInput()}
        >
          <Text style={styles.buttonText}>^2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => handleLogInput()}
        >
          <Text style={styles.buttonText}>log</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calcButton}
          onPress={() => handlePercentageInput()}
        >
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  result: {
		flex: 1,
		color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    flexWrap: "wrap",
		width: 320,
		padding: 10,
		textAlign: "center",
  },
  displayResult: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
		width: 320,
		minHeight: 80,
    flexWrap: "wrap",
		borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#09090b",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f5",
    height: 50,
    minWidth: 75,
    borderBottomWidth: 3,
    borderBottomColor: "#e4e4e7",
    margin: 4,
    borderRadius: 10,
    maxWidth: 100,
  },
  calcButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ef4444",
    height: 50,
    minWidth: 75,
    borderBottomWidth: 3,
    borderBottomColor: "#b91c1c",
    margin: 4,
    borderRadius: 10,
    maxWidth: 100,
  },
  funcButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fde047",
    height: 50,
    minWidth: 75,
    borderBottomWidth: 3,
    borderBottomColor: "#eab308",
    margin: 4,
    borderRadius: 10,
    maxWidth: 100,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Calculator;
