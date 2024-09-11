import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/home/home';
import Layout from './components/layout/layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);

