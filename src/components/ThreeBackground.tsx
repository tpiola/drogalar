"use client";

import { useEffect, useState } from "react";

export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    let cleanup = false;

    const loadThree = async () => {
      try {
        const THREE = await import("three");
        if (cleanup) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });

        const container = document.getElementById("three-container");
        if (!container) return;

        const w = container.clientWidth;
        const h = container.clientHeight;
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Floating particles
        const particlesGeo = new THREE.BufferGeometry();
        const count = 120;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
          positions[i] = (Math.random() - 0.5) * 12;
        }
        particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const particlesMat = new THREE.PointsMaterial({
          color: 0xc9a84c,
          size: 0.03,
          transparent: true,
          opacity: 0.4,
          blending: THREE.AdditiveBlending,
        });
        const particles = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particles);

        // Geometric shapes
        const shapes: THREE.Mesh[] = [];
        const colors = [0xc9a84c, 0xe2c96e, 0xa88a2e, 0xd4a574];
        for (let i = 0; i < 6; i++) {
          const geo = new THREE.IcosahedronGeometry(0.15 + Math.random() * 0.2, 0);
          const mat = new THREE.MeshBasicMaterial({
            color: colors[i % colors.length],
            transparent: true,
            opacity: 0.15 + Math.random() * 0.15,
            wireframe: Math.random() > 0.5,
          });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.set(
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4 - 2
          );
          mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
          scene.add(mesh);
          shapes.push(mesh);
        }

        camera.position.z = 4;

        // Mouse tracking
        let mouseX = 0, mouseY = 0;
        const onMove = (e: MouseEvent) => {
          mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
          mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", onMove);

        // Animation
        const animate = () => {
          if (cleanup) return;
          requestAnimationFrame(animate);

          particles.rotation.y += 0.001;
          particles.rotation.x += 0.0005;

          shapes.forEach((s, i) => {
            s.rotation.x += 0.005 + i * 0.001;
            s.rotation.y += 0.008 + i * 0.001;
          });

          camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
          camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
          camera.lookAt(0, 0, 0);

          renderer.render(scene, camera);
        };
        animate();

        // Resize
        const onResize = () => {
          const w2 = container.clientWidth;
          const h2 = container.clientHeight;
          camera.aspect = w2 / h2;
          camera.updateProjectionMatrix();
          renderer.setSize(w2, h2);
        };
        window.addEventListener("resize", onResize);

        cleanup = () => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("resize", onResize);
          renderer.dispose();
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        };
      } catch (e) {
        console.log("3D disabled:", e);
      }
    };

    loadThree();
    return () => { cleanup = true; };
  }, [mounted]);

  return (
    <div
      id="three-container"
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}