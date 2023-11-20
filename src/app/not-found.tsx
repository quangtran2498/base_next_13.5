// The not-found file is used to render UI when the notFound function
// is thrown within a route segment. Along with serving a custom UI,
// Next.js will also return a 404 HTTP status code.

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>404 not found</h1>
    </div>
  );
}
