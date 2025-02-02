import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";  
import AppLayout from "./components/ui/AppLayout";  
import Home from "./components/ui/Home";  
import MainPage from "./components/ui/MainPage";  
import Defi from "./components/ui/Defi";  
import PathNoFound from "./components/PathNoFound";  
import Assets from "./components/ui/Assets";  

function App() {  
    return (  
        <BrowserRouter>  
            <Routes>  
                <Route element={<AppLayout />}>  
                    <Route index element={<Navigate replace to="home" />} />  
                    <Route path="home" element={<Home />} />  
                    <Route path="defi-app" element={<Defi />} />  
                    <Route path="assets" element={<Assets />} />  
                    <Route path="features" element={<Home />} />  
                    <Route path="pricing" element={<Home />} />  
                    <Route path="faq" element={<Home />} />  
                    <Route path="mainpage" element={<MainPage />} />  
                </Route>  
                {/* When none of the routes match, render PathNoFound */}  
                <Route path="*" element={<PathNoFound />} />  
            </Routes>  
        </BrowserRouter>  
    );  
}  

export default App;