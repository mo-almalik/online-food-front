import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/user/Home.jsx";
import Form from "./auth/Form.jsx";

let Routers =createBrowserRouter([
  {path:'/',element:<Layout />,children:[
    {index:true,element:<Home />},
    {path:'/auth',element:<Form />}
  ]}
])
function App() {
  return <>
    <RouterProvider router={Routers}></RouterProvider>
  </>
}

export default App;
