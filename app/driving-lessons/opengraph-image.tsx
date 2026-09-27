import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#ffbc00",
          padding: "64px 72px",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 800, color: "#000" }}>
          drivecab
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#111",
            maxWidth: 960,
          }}
        >
          Driving lessons near you, booked online
        </div>
        <div style={{ fontSize: 28, color: "#111" }}>Book now with Drivecab</div>
      </div>
    ),
    size,
  );
}
