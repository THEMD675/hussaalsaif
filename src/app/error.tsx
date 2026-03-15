"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
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
        <p
          style={{
            color: "#89BBdf",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          hussaalsaif.com
        </p>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "0.5rem",
          }}
        >
          Page loading error
        </h1>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "0.875rem",
            marginBottom: "2rem",
          }}
        >
          Please refresh to continue.
        </p>
        <button
          onClick={() => {
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
          Refresh
        </button>
      </div>
    </main>
  );
}
