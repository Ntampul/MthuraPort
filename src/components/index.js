import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'; // Update the path as needed

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/home"> {/* Set up routes for other sections */}
        {/* Your Home component */}
      </Route>
      <Route path="/about">
        {/* Your About component */}
      </Route>
      <Route path="/skills">
        {/* Your Skills component */}
      </Route>
      <Route path="/projects">
        {/* Your Projects component */}
      </Route>
      <Route path="/contact">
        {/* Your Contacts component */}
      </Route>
    </Router>
  );
};

export default App;
