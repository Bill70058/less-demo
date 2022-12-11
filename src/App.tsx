/*
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-11 16:06:37
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-11 18:00:08
 * @FilePath: /less-demo/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "../src/assets/style/global.less";
import less from "less";

function App() {
  const [count, setCount] = useState(0);
  const changeColor = () => {
    less
      .modifyVars({
        // 调用 `less.modifyVars` 方法来改变变量值'
        "primary-color": "#000",
      })
      .then(() => {
        console.log("修改成功");
      });
  };

  return (
    <div className="App">
      <button onClick={changeColor}>开关</button>
      <div className="content">app</div>
    </div>
  );
}

export default App;
