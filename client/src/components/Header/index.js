const homepageHeader = () => (
  <header className="bg-info text-dark mb-4 py-3 display-flex align-center gearBackground styleText">
    <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
      {/* Use Link component to create a link that returns to the homepage on click */}
      <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
        <span className="hiWhite">Inventory Management System</span>
      </p>
    </div>
  </header>
);
export default homepageHeader;
