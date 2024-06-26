import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };

  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가된당!</button>
      <button onClick={decrease}>감소된당!</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
