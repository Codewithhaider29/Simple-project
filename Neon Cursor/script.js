import {neonCursor} from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
    window.addEventListener('DOMContentLoaded', () => {
        neonCursor({
            el: document.getElementById('app'),
            shaderPoints: 10,
            curvePoints: 15,
            curveLerp:0.5,
            radius1:1,
            radius1:5,
            velocityTreshold:10,
            sleepRadiusX:100,
            sleepRadiusY:100,
            sleepTimeCoefx:0.0025,
            sleepTimeCoefY:0.0025
        });
    });
    
