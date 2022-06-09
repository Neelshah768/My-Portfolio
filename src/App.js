import { Routes,Route } from "react-router-dom";
import Home from './Component/Home/Home';
const App = (props) => {
  return ( 
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
   );
}
 
export default App;