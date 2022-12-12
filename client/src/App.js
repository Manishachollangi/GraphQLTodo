import React from "react";
import { Routes, Route } from "react-router-dom";

import Todos from "./pages/todos";
import Add from "./pages/add";
import Edit from "./pages/edit";
import View from "./pages/view"

const App = () => {
  return (
    <Routes>
      <Route path="/todos" element={<Todos />} />
      <Route path="/todos/add" element={<Add />} />
      <Route path="/todos/:id" element={<Edit />} />
      <Route path="/todos/view/:id" element={<View />} />
    </Routes>
  );
};

export default App;
