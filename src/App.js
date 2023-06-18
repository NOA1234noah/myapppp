import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import About from "./comps/about";
import Form from "./comps/form";
import Home from "./comps/home";
import AppEmp from "./comps_employee/appEmp";
import Header from "./comps_static/static";
// import Counter from "./redux_comps/counter";
// import counterSlice from "./features/counterSlice";
import todoSlice from "./features/todoSlice";
import Counter from "./redux_comps/counter";
import './App.css';
import counterSlice from "./features/counterSlice";
// import AppTodo from "./todoRedux_comps/appTodo";

// הגדרת הסטור הגלובלי שיספוק פרובידר והסלייסים
// של הרידיוסר שהוא מכיל בתוכו
const myStore = configureStore({
  reducer: {
    counterSlice,
    todoSlice
  }
})

function App() {
  return (
    <BrowserRouter>
      <Provider store={myStore}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<AppEmp />} />
          <Route path="/employee/:company" element={<AppEmp />} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
          {/* <Route path="/todos" element={<AppTodo />} /> */}
          {/* כוכבית נשאיר לעמוד 404 אם לא מוצא אף
        ראוט יפעיל את מה שעם פאט' של כוכבית */}
          <Route path="*" element={<h2>Page 404, not found!</h2>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;