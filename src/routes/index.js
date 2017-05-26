import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import AppLayout from 'Layouts/AppLayout'
import Home from './Home'
import News from './News'
import Article from './Article'
import Partner from './Partner'
import Commodities from './Commodities'
import Careers from './Careers'
import AboutUs from './AboutUs'
export const createRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Home}/>
      <Route path="news" component={News}/>
      <Route path="news/:id" component ={Article}/>
      <Route path="partner" component = {Partner}/>
      <Route path="commodities" component={Commodities}/>
      <Route path="careers" component={Careers}/>
      <Route path="about" component={AboutUs}/>
    </Route>
  </Router>
)

export default createRoutes
