import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import FormPage from "./pages/FormPage.jsx";
import DataFormPage from "./pages/DataFormPage.jsx";


function App() {


  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<FormPage/>}/>
                <Route path='data' element={<DataFormPage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
