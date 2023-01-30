import React from "react";



import  {DoProvider} from "./Component/Context"
import Page from "./Component/GowRagnarok/Page"
import ClassicMusic from "./Component/ClassicMusic/ClassicMusic";
import LordofTheRings from "./Component/LordofTheRings/LordofTheRings";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import StarWars from "./Component/StarWars/StarWars"
import Berserk from "./Component/Berserk/Berserk"
import Evangelion from "./Component/Evangelion/Evangelion";
import Main from "./Component/Main/Main";

function App() {
  
  return (
      <DoProvider>
        <BrowserRouter>
          <Routes>
              <Route path="" element={<Main/>}></Route>
              <Route path="Gow" element={<Page/>}></Route>
              <Route path="ClassicMusic" element={<ClassicMusic/>}></Route>
              <Route path="LordofTheRings" element={<LordofTheRings/>}></Route>
              <Route path="StarWars" element={<StarWars/>}></Route>
              <Route path="Berserk" element={<Berserk/>}></Route>
              <Route path="Evangelion" element={<Evangelion/>}></Route>
          </Routes>
        </BrowserRouter>  
      </DoProvider>
  );
}


export default App;
