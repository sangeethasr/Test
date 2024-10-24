import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/counter" element={<Counter/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
