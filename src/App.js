import Login from './pages/Login';
import Admin from './pages/Admin';
import User from './pages/User';
import { Route,Routes} from 'react-router-dom'

import './App.css';
import Records from './pages/Adminpages/Records';
import Dashboard from './pages/Userpages/Dashboard';
import UpcomingEvent from './pages/Userpages/UpcomingEvent';
import Database from './pages/Adminpages/Database';
import Event from './pages/Adminpages/Event';
import Details from './pages/Userpages/Details';
import Viewconcert from './pages/Userpages/Viewconcert';
import Home from './pages/Loginpages/Home'
import Gallery from './pages/Loginpages/Gallary';
import About from './pages/Loginpages/About';
import MainHome from './pages/Loginpages/MainHome';
import Price from './pages/Loginpages/Price';


function App() {
  return (
   <>
   

   <Routes>
    
    <Route path='/' Component={Home}>
    <Route path='mainhome' Component={MainHome}/>
    <Route path='about' Component={About}/>
    <Route path='gallary' Component={Gallery}/>
    <Route path='price' Component={Price}/>
    <Route path='login' Component={Login}/>
</Route>
   
    <Route path='/admin' Component={Admin}>
    <Route path='databases'Component={Database}/>
    
    <Route path='events'Component={Event}/>
    <Route path='records'Component={Records}/>
    </Route>
    <Route path='/user' Component={User}>
    <Route path='dashboards'Component={Dashboard}/>
    <Route path='details'Component={Details}/>
    <Route path='views'Component={Viewconcert}/>
    <Route path='upcomingevent'Component={UpcomingEvent}/>
    
    </Route>
   </Routes>
   </>
  );
}

export default App;
