import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

const ChatLayout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const NonAuthLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <>
      <div>
        {" "}
        {children}
        <Footer />
      </div>
    </>
  );
};

function LayoutWrapper({ allroutes }) {
  return (
    <>
      <Routes>
        {allroutes?.map((route, index) => {
          return (
            <>
              {
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <>
                      {route.routeId === 3 ? (
                        <AuthLayout>{route.element}</AuthLayout>
                      ) : route.routeId === 2 ? (
                        <ChatLayout>{route.element}</ChatLayout>
                      ) : route.routeId === 1 ? (
                        <NonAuthLayout>{route.element}</NonAuthLayout>
                      ) : (
                        <>Not Found</>
                      )}
                    </>
                  }
                />
              }
            </>
          );
        })}
      </Routes>
    </>
  );
}

LayoutWrapper.propTypes = {
  allroutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      element: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};
ChatLayout.propTypes = {
  children: PropTypes.node,
};
NonAuthLayout.propTypes = {
  children: PropTypes.node,
};

export default LayoutWrapper;
