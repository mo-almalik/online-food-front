import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/user/Home.jsx";

let Routers =createBrowserRouter([
  {path:'/',element:<Layout />,children:[
    {index:true,element:<Home />},
  ]}
])
function App() {
  return <>
    <RouterProvider router={Routers}></RouterProvider>
  </>
}

export default App;
