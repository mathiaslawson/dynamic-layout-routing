function Navbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 15px 0px 15px",
          border: '1px solid #5a5a5a',
          marginTop: "20px",
          borderRadius: "100px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="https://getroute.com/wp-content/uploads/2023/06/route-logo-full@2x-2.png"
            alt="logo"
            style={{ width: "60px"}}
          />
        </div>

        <div>
          {" "}
          <h4>Navbar</h4>{" "}
        </div>
      </div>
    </>
  );
}

export default Navbar;
