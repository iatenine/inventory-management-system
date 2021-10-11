import Auth from "../../utils/auth";

const homepageHeader = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          Inventory Management System
          {Auth.getToken() ? (
            <button
              onClick={() => Auth.logout()}
              className="btn btn-dark"
              style={{
                float: "right",
              }}
            >
              Logout
            </button>
          ) : (
            () => {}
          )}
        </p>
      </div>
    </header>
  );
};
export default homepageHeader;
