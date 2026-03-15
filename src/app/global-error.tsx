"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafcfe",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "0.5rem",
            }}
          >
            Hussa AlSaif
          </h1>
          <p
            style={{
              color: "#89BBdf",
              fontSize: "0.875rem",
              marginBottom: "2rem",
            }}
          >
            Something went wrong. Please refresh.
          </p>
          <button
            onClick={() => {
              // Clear all caches and reload
              if ("caches" in window) {
                caches.keys().then((names) => {
                  names.forEach((name) => caches.delete(name));
                });
              }
              reset();
              window.location.reload();
            }}
            style={{
              background: "#1a1a1a",
              color: "#fff",
              border: "none",
              padding: "12px 32px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Refresh Page
          </button>
        </div>
      </body>
    </html>
  );
}
