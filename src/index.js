import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './containers/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)