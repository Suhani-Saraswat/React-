import './App.css';
import { Title } from "./Title.jsx";
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';

function App() {
   return (
   <>
      <MsgBox userName="Suhani" textColor="pink"/>
      <MsgBox userName="apnaCollege" textColor="blue"/>
      <ProductTab />
   </>
   );
}

export default App;
