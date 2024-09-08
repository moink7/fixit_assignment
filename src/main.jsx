import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Salesgpt from './pages/Salesgpt.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider 
      domain="dev-cuqsrlzh6cx2bbp3.us.auth0.com"
      clientId="zRKI0MrGVRBHlje1E1ehCBqPAvLf0cMy"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App  />} />
        <Route path='/ask-question' element={<Salesgpt />} />
      </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
