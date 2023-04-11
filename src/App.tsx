import { useForm } from "react-hook-form";
import { IUser } from "./interfaces";
import { Login } from "./pages/Login";

type LoginValues = {
  email: string;
  password: string;
};

function App() {
  return (
    <main>
      <Login />
    </main>
  );
}

export default App;
