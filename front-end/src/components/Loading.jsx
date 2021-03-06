import React from "react";
import "../styles/Loading.css";

function Loading() {
  return (
    <div className="loading">
      <svg
        svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        version="1.0"
        width="96px"
        height="96px"
        viewBox="0 0 128 128"
        space="preserve"
      >
        <g>
          <circle cx="16" cy="64" r="16" fill="#49a6e9" />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#86c4f0"
            transform="rotate(45,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#b3daf6"
            transform="rotate(90,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#dbedfb"
            transform="rotate(135,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#eaf5fc"
            transform="rotate(180,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#eaf5fc"
            transform="rotate(225,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#eaf5fc"
            transform="rotate(270,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#eaf5fc"
            transform="rotate(315,64,64)"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
            calcMode="discrete"
            dur="720ms"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}

export default Loading;
