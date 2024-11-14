import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Particle geometry
    const distance = Math.min(150, window.innerWidth / 4);
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    
    for (let i = 0; i < 1600; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);
      vertices.push(x, y, z);
    }
    
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xff44ff, size: 2 });
    const particles = new THREE.Points(geometry, particlesMaterial);
    
    const renderingParent = new THREE.Group();
    renderingParent.add(particles);
    const resizeContainer = new THREE.Group();
    resizeContainer.add(renderingParent);
    scene.add(resizeContainer);
    renderingParent.scale.set(0.2, 0.2, 0.2);
    camera.position.z = 400;

    // Animation setup
    const animProps = { scale: 1, xRot: 0, yRot: 0 };
    
    gsap.to(animProps, {
      duration: 10,
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      ease: "sine",
      onUpdate: () => {
        renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
      }
    });
    
    gsap.to(animProps, {
      duration: 120,
      xRot: Math.PI * 2,
      yRot: Math.PI * 4,
      repeat: -1,
      ease: "none",
      onUpdate: () => {
        renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
      }
    });

    // Mouse move animation
    let myTween;
    const onMouseMove = (event) => {
      if (myTween) myTween.kill();
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (event.clientY / window.innerHeight) * 2 + 1;
      myTween = gsap.to(particles.rotation, {
        duration: 0.1,
        x: mouseY * -1,
        y: mouseX,
      });
    };

    // document.addEventListener("mousemove", onMouseMove);

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />;
};

export default ThreeScene;
