import React, { Suspense, Fragment } from "react";
import Loader from "react-loader";
import Main from "./components/Route/index";

function App() {
  return (
    // <>
    // <AddProf/>
    // </>
    <Fragment>
      <div className="App">
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="semi-circle-spin" />
                </div>
              </div>
            </div>
          }
        >
          <Main />
        </Suspense>
      </div>
    </Fragment>
  );
}

export default App;
