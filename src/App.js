import React from "react";


import './App.css';
import  {DoProvider} from "./Component/Context"
import Page from "./Component/GowRagnarok/Page"
import ClassicMusic from "./Component/ClassicMusic/ClassicMusic";
import LordofTheRings from "./Component/LordofTheRings/LordofTheRings";
import { BrowserRouter,Routes,Route } from "react-router-dom";





function App() {
  
  return (
      <DoProvider>

        <BrowserRouter>
          <Routes>
              <Route path="Gow" element={<Page/>}></Route>
              <Route path="ClassicMusic" element={<ClassicMusic/>}></Route>
              <Route path="LordofTheRings" element={<LordofTheRings/>}></Route>
          </Routes>
        </BrowserRouter>

        
      </DoProvider>
  );
}


export default App;
