import React from 'react';
import ReactDOM from 'react-dom/client';
import GroupCard from './group-cards-component/GroupCard';
import Footer from './footer-component/Footer';
import reportWebVitals from './reportWebVitals';

const groupCard = ReactDOM.createRoot(document.getElementById('main'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

groupCard.render(
  <React.StrictMode>
    <GroupCard></GroupCard>
  </React.StrictMode>
)
footer.render(
  <React.StrictMode>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
