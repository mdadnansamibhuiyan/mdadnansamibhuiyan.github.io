document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('globe-container');
  if (!container) return;

  // Settings
  const width = container.clientWidth;
  const height = container.clientHeight;
  const radius = Math.min(width, height) / 2.5;

  // Create scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = radius * 2.5;

  // Create renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  // Create globe
  const geometry = new THREE.SphereGeometry(radius, 32, 32);
  const texture = new THREE.TextureLoader().load('/assets/images/earth-texture.jpg');
  const material = new THREE.MeshPhongMaterial({ 
    map: texture,
    bumpMap: texture,
    bumpScale: 0.05,
    specular: new THREE.Color('grey'),
    shininess: 5
  });
  const globe = new THREE.Mesh(geometry, material);
  scene.add(globe);

  // Add points representing cyber attacks
  const attackPoints = [];
  const attackCount = 100;
  
  for (let i = 0; i < attackCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / attackCount);
    const theta = Math.sqrt(attackCount * Math.PI) * phi;
    
    const pointGeometry = new THREE.SphereGeometry(1.5, 8, 8);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const point = new THREE.Mesh(pointGeometry, pointMaterial);
    
    point.position.set(
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    );
    
    scene.add(point);
    attackPoints.push(point);
  }

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate globe
    globe.rotation.y += 0.002;
    
    // Make attack points pulse
    attackPoints.forEach((point, i) => {
      point.scale.x = point.scale.y = point.scale.z = 1 + 0.3 * Math.sin(Date.now() * 0.001 + i);
    });
    
    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', function() {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
});
