import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a2e24",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 18,
            height: 14,
            border: "2px solid #b8943d",
            borderTop: "none",
            borderRadius: "0 0 10px 10px",
          }}
        />
      </div>
    ),
    size,
  );
}
