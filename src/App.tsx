import { Fragment } from "react";
import { PageRouter } from "./Routes";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <main className="">
        <PageRouter/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
