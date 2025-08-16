// Initialize 3D scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(document.getElementById('pizza-container').clientWidth, 
                document.getElementById('pizza-container').clientHeight);
document.getElementById('pizza-container').appendChild(renderer.domElement);

// Pizza base
const geometry = new THREE.CylinderGeometry(5, 5, 1, 32);
const material = new THREE.MeshBasicMaterial({ 
    color: 0xF5DEB3,
    map: new THREE.TextureLoader().load('images/pizza-base.jpg')
});
const pizza = new THREE.Mesh(geometry, material);
scene.add(pizza);

// Lighting
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

camera.position.z = 8;

// Add toppings
let currentToppings = [];

document.querySelectorAll('.topping-option').forEach(btn => {
    btn.addEventListener('click', function() {
        const toppingType = this.getAttribute('data-topping');
        addTopping(toppingType);
    });
});

function addTopping(type) {
    const toppingGeometry = new THREE.SphereGeometry(0.5);
    const toppingMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(`images/toppings/${type}.jpg`)
    });
    
    const topping = new THREE.Mesh(toppingGeometry, toppingMaterial);
    
    // Random position on pizza
    topping.position.x = (Math.random() - 0.5) * 4;
    topping.position.y = 0.6;
    topping.position.z = (Math.random() - 0.5) * 4;
    
    scene.add(topping);
    currentToppings.push(topping);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    pizza.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();


// Add touch support for mobile devices
const pizzaContainer = document.getElementById('pizza-container');
pizzaContainer.addEventListener('touchmove', handleTouch, { passive: false });

function handleTouch(e) {
  e.preventDefault();
  // Add touch rotation logic
}