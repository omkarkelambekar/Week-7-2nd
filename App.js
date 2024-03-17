// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Header from './Header';
// import HeroSection from './HeroSection';
// import DestinationsSection from './DestinationsSection';
// import ContactForm from './ContactForm';
// import Footer from './Footer';
// import './styles.css';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <DestinationsSection />
//       <ContactForm />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import DestinationsSection from './DestinationsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;