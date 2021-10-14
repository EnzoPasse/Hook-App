import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'antd/dist/antd.css';

// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWhitCustomHook } from "./components/01-useState/CounterWhitCustomHook";
// import { SimpleForm } from "./components/01-useState/01-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./components/02-useEffect/FomWithCustomHook";
// import { MultipleCustomHook } from "./components/03-example/MultipleCustomHook";
// import { ExampleRef } from "./components/04-useRef/ExampleRef";
// import { MemoHook } from "./components/05-useMemo/MemoHook";
// import { CallbackHook } from "./components/05-useMemo/CallbackHook";
// import { TodoApp } from "./components/06-useReducer/TodoApp";
import { MainApp } from "./components/07-useContext/MainApp";


ReactDOM.render(
  <MainApp />,
  document.getElementById("root")
);
