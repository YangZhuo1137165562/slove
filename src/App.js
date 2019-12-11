import React from 'react';
import './App.css';
import RootRouter from "./router/index.js"
function App() {
  return (
    <div className="App">
      {/* 连接路由与视图的桥梁 */}
      <RootRouter></RootRouter>
    </div>
  );
}

export default App;
