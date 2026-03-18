'use client';

import React, { useRef, useEffect } from 'react';

interface HeroProps {
  badge?: string;
  headline: { line1: string; line2: string };
  subtitle: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  className?: string;
}

// ── WebGL shader (indigo / violet palette) ──────────────────────────────────
const SHADER_SRC = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 touch;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}

void main(void){
  vec2 uv=(FC-.5*R)/MN, st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    // Indigo / violet palette  — replaces original orange/red
    col+=.00125/d*(cos(sin(i)*vec3(2.2,1.5,4.0))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.08,bg*.05,bg*.25),d);
  }
  // Tint final output toward indigo
  col = mix(col, vec3(0.39,0.40,0.95)*length(col), 0.35);
  O=vec4(col,1);
}`;

const VERTEX_SRC = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

function useShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }

    function makeShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const vs = makeShader(gl.VERTEX_SHADER, VERTEX_SRC);
    const fs = makeShader(gl.FRAGMENT_SHADER, SHADER_SRC);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes  = gl.getUniformLocation(prog, 'resolution');
    const uTime = gl.getUniformLocation(prog, 'time');
    const uTouch = gl.getUniformLocation(prog, 'touch');

    resize();
    window.addEventListener('resize', resize);

    let raf: number;
    function loop(now: number) {
      gl!.clearColor(0,0,0,1);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.useProgram(prog);
      gl!.bindBuffer(gl!.ARRAY_BUFFER, buf);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, now * 1e-3);
      gl!.uniform2f(uTouch, 0, 0);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(prog);
    };
  }, []);

  return canvasRef;
}

// ── Hero component ───────────────────────────────────────────────────────────
export default function Hero({ badge, headline, subtitle, primaryButton, secondaryButton, className = '' }: HeroProps) {
  const canvasRef = useShaderBackground();

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-[#08080D] ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
        style={{ background: '#08080D' }}
      />

      {/* Dark vignette overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-6">
        {/* Badge */}
        {badge && (
          <div className="mb-8 animate-fade-in-down">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-md text-indigo-200 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              {badge}
            </span>
          </div>
        )}

        {/* Headline */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight animate-fade-in-up animation-delay-200 bg-gradient-to-r from-indigo-200 via-violet-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            {headline.line1}
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight animate-fade-in-up animation-delay-400 bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent leading-tight">
            {headline.line2}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-center text-lg md:text-xl text-indigo-100/80 font-light leading-relaxed animate-fade-in-up animation-delay-600">
          {subtitle}
        </p>

        {/* Buttons */}
        {(primaryButton || secondaryButton) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            {primaryButton && (
              <a
                href={primaryButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base bg-indigo-500 hover:bg-indigo-400 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 text-center"
              >
                {primaryButton.text}
              </a>
            )}
            {secondaryButton && (
              <a
                href={secondaryButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-base border border-indigo-400/40 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-100 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-center"
              >
                {secondaryButton.text}
              </a>
            )}
          </div>
        )}

        {/* Scroll hint */}
        <div className="absolute bottom-8 animate-bounce opacity-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
