import React, { useEffect, useRef } from "react";
import { ShaderFragment } from "./ShaderFragment";

const ShaderComponent = () => {
  let GlslCanvas = require("glslCanvas").default;

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef;

    var sandbox = new GlslCanvas(canvas.current);

    sandbox.load(ShaderFragment);
    sandbox.setUniform("u_seed", Math.pow(1, 0.5));

    canvas.current.style.width = "100%";
  }, []);

  return <canvas className="shader-canvas" ref={canvasRef} />;
};

export default ShaderComponent;
