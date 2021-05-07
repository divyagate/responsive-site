import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container-fluid max-container-size">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="left-section">
                  <div className="description">
                    <p className="large-text">Top 10 Hottest Flavours</p>
                    <p className="large-text">Summer 2021</p>
                  </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
                <div className="right-section">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="imageTop-left">
                        <div className="section-button">
                          Get it
                        </div>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="imageTop-right">
                        <div className="section-button">
                          Get it
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <div className="image-bottom">
                        <div className="bottom-description">
                          <p className="large-text">Our Ice Cream Philosophy</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        </div>
                        </div>
                      </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
