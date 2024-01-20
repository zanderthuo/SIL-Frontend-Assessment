import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from "./redux/store"
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { setUser } from './redux/slices/userSlices';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Initialize the Redux state with the stored user information
// const dispatch = useDispatch()
const storedUser = localStorage.getItem('user');
if (storedUser) {
  const parsedUser = JSON.parse(storedUser);
  store.dispatch(setUser(parsedUser));
}
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='185138082520-ufitd8pdrcdd96vv9brja9tedlvfasht.apps.googleusercontent.com'>
    <Provider store={store}>
      <App />
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
