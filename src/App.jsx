import "./App.css";
import Sidebar from "./Component/Sidebar";
import Wrapperbox from "./Component/Wrapperbox";
import Home from "./Component/Home";
import 'react-calendar/dist/Calendar.css';




function App() {
  return (
    <>
      <Wrapperbox>
        <Home/>
       
      </Wrapperbox>
    </>
  );
}

export default App;
