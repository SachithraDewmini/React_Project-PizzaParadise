import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Background from '../images/background.jpg';
import '../styles/HomeStyles.css'


export default function Home() {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${Background})` }}>
        <div className='headerContainer'>
          <h1>PIZZA PARADISE</h1>
          <p>Best Pizza in SriLanka</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
