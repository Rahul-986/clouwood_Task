import Button from "./Button";
import Img from "./Img";
import { Provider } from "react-redux";
import store from "./store";


const App=()=>{
  return(
    <>

    <Provider store={store}>
      <div className="flex  flex-col items-center justify-center h-screen bg-gray-100">
    <Img/>
    <Button/>
    </div>
    </Provider>
    </>
  )
};
export default App;
