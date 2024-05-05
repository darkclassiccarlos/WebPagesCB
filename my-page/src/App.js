// App.js
import React from 'react';
import './styles.css';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import Footer  from './components/Footer';


const App = () => {
  return (
      <div className="App">
          <Header />
          <FeatureSection />
          <Footer />
      </div>
  );
}

export default App;
