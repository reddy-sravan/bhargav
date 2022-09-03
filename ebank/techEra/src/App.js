import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/index'
import CourseDetailed from './components/courseDetailed'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseDetailed} />
      <Route exact path="/bad-path" component={NotFound} />
      <Route to="/bad-path" />
    </Switch>
  </BrowserRouter>
)

export default App
