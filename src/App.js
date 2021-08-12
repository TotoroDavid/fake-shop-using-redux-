import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header'
import ProductDetails from './containers/ProductDetails'
import ProductListing from './containers/ProductListing'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetails} />
      </Router>
    </div>
  )
}

export default App
