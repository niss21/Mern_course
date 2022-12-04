import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return <>
      <BrowserRouter>
      <nav>
        <ul>
          <li><a href='/users'>Users</a></li>
          <li><a href='/products'>Products</a></li>
          
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </nav>
       <Routes>
         <Route path="/users" element={<h1>Users</h1>} />
         <Route path="/products" element={<h1>Products</h1>} />
       </Routes>
      </BrowserRouter>
   </>
}

export default App;
