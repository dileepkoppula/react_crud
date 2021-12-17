import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import Contact from "./Components/Contact";
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path="/"   component={Home} />
      <Route exact path="/adduser"   component={AddUser} />
      <Route exact path="/edit/:id"   component={EditUser} />
      <Route exact path="/contact"  component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
