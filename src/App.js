
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Input from './Input.js';
import Data from './Data.js';



function App() {
 return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Input/>} />
        <Route path='/data' element={<Data/>} />
        <Route path='/input' element={<Input/>} />
      </Routes>
    </BrowserRouter>





  );
}

export default App;
