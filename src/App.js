// import { React } from "react"
// import BasicForm from "./components/BasicForm";
// const App = (props) => {

//   return (
//     <div className="app">
//       <BasicForm />
//     </div>
//   )
// };

// export default App;

import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Sidebar from "./ADcomponents/sidebar/Sidebar";
import Topbar from "./ADcomponents/topbar/Topbar";
import './app.css';
import Home from "./ADcomponents/pages/home/Home";
import User from "./ADcomponents/pages/user/User";
import UserList from "./ADcomponents/pages/user/userList/UserList";
import NewUser from "./ADcomponents/pages/user/userList/newuser/NewUser";
import Product from './ADcomponents/pages/product/Product';
import ProductList from "./ADcomponents/pages/product/productList/ProductList";
import NewProduct from "./ADcomponents/pages/product/productList/newProduct/NewProduct";

const App = () => {

  return (
    <Router>
       <Topbar />
       <div className="container">
        <Sidebar />

          <Routes>
            <Route index element={<Home />} />
            <Route index path="user" element={<UserList />} />
            <Route index path="users/:userId" element={<User />} />
            <Route index path="newuser" element={<NewUser />}   />
            <Route index path="productList" element={<ProductList />} />
            <Route index path="products/:productId" element={<Product />} />
            <Route index path="newproduct" element={<NewProduct />} />
          </Routes>

       </div>
      </Router>
)
};

export default App;