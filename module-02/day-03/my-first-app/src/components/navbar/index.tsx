export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "50px",
        padding: "20px",
      }}
    >
      <span>LOGO</span>
      <div style={{ display: "flex", gap: "20px" }}>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
