import React from 'react';
import {NavBar } from '../components/index.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {MoviesList, MovieInsert,MovieUpdate} from '../pages'
function App(){
  return(
   <Router>
     <NavBar/>
       <Switch>
         
         <Route path ="/allMovie" exact component = {MoviesList}></Route>
         <Route path="/createMovie" exact component = {MovieInsert}></Route>
         <Route path="/deleteMovie" exact component={MovieInsert}></Route>
         <Route path="/updatemovie/:id" exact component={MovieUpdate}></Route>
        
       </Switch>
   </Router>
  )
}
export default App;
