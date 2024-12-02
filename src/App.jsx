import { TrashIcon } from "@radix-ui/react-icons";
import { Button, Checkbox } from "@radix-ui/themes";
import { useState } from "react";
import { styleCss } from "./style/styleCss";

function App() {
  const [input, setInput] = useState("");
  const change = (e) => {
    const value = e.target.value;
    if (value.trim() !== "") {
      setInput(value);
    }
  };

  const [push, setPush] = useState([]);
  const click = () => {
    if (input.trim() !== "") {
      setPush((prev) => [...prev, { valuetext: input, checked: false }]);
      setInput("");
    }
  };

  const remove = (i) => {
    setPush((prev) => [...prev].filter((v, idx) => idx != i));
  };

  const toggleCheck = (i) => {
    setPush((prev) =>
      prev.map((item, idx) =>
        idx === i ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="App" style={styleCss.boxCss}>
      <h1 style={styleCss.titleCss}>TO-DO LIST</h1>
      <section style={styleCss.inputBox}>
        <input
          style={styleCss.inputCss}
          type="text"
          placeholder="Add a o new task..."
          onChange={change}
        />

        <Button style={styleCss.btnCss} onClick={click} variant="solid">
          ADD
        </Button>
      </section>

      <section style={styleCss.todoBox}>
        {push.map((v, i) => (
          <div key={i} style={styleCss.todoCss}>
            <button onClick={() => toggleCheck(i)}>
              {v.checked ? "완료" : "미완료"}
            </button>
            <span
              style={{ textDecoration: v.checked ? "line-through" : "none" }}
            >
              {v.valuetext}
            </span>
            <TrashIcon
              style={styleCss.iconCss}
              onClick={() => remove(i)}
            ></TrashIcon>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
