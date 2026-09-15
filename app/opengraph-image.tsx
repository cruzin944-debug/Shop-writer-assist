import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Shop Writer Assist — AI sidekick for service writers";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#081422",
          color: "#f5f2eb",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#0c1b2e",
              border: "1px solid rgba(228,179,74,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#e4b34a",
            }}
          >
            SW
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, letterSpacing: 6, textTransform: "uppercase" }}>
              Shop Writer
            </div>
            <div style={{ fontSize: 36, fontStyle: "italic", color: "#e4b34a" }}>Assist</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 650, maxWidth: 900 }}>
            The AI sidekick for the drive.
          </div>
          <div style={{ fontSize: 28, color: "rgba(245,242,235,0.72)", maxWidth: 820 }}>
            Draft ROs. Explain the work. Keep customers in the loop.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#c9922a" }}>shopwriterasst.com</div>
      </div>
    ),
    size,
  );
}
