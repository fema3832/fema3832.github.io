let camera, scene, renderer, cube, line;
var lastCursorX = 0;
var lastCursorY = 0;
var mouseHold = false;

function returnSize() {
    if (window.innerWidth < 1000) {
        document.getElementById('logo').style.fontSize = 1.55 + "vw";
        return window.innerWidth / window.innerHeight * 2;
    } else {
        document.getElementById('logo').style.fontSize = 0.7 + "vw";
        return window.innerWidth / window.innerHeight * 1;
    }

}

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	renderer = new THREE.WebGLRenderer({ antialias: true, stencil: true, alpha: true });
	renderer.setClearColor( 0xffffff, 0 );
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.IcosahedronGeometry(returnSize(), 1, 1);
    const wireframe = new THREE.WireframeGeometry( geometry );
	const material = new THREE.MeshBasicMaterial({ color: 0xC500FF });

    line = new THREE.LineSegments( wireframe, material );
    line.material.depthTest = true;
    line.material.opacity = 1;
    line.material.transparent = true;
    scene.add( line );

	camera.position.z = 5;
}

function animate() {
	requestAnimationFrame(animate);

	line.rotation.y += 0.003;
	line.rotation.x += 0.003;

	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);


document.addEventListener('mousedown', () => {
	mouseHold = true;
})

document.addEventListener('mouseup', () => {
	mouseHold = false;
})


document.addEventListener('mousemove', (event) => {
	if (mouseHold) {
		cursorX = event.clientX;
		cursorY = event.clientY;

		if (cursorY < window.innerWidth / 2) {
			line.rotation.x += (cursorY * 0.00025) / 25;
		}
		if (cursorY > window.innerWidth / 2) {
			line.rotation.x += (cursorY * 0.00050) / 25;
		}

		if (cursorX < window.innerHeight / 2) {
			line.rotation.y += (cursorX * 0.00025) / 25;
		}
		if (cursorX > window.innerHeight / 2) {
			line.rotation.y += (cursorX * 0.00050) / 25;
		}
	}
})



returnSize();
init();
animate();
