// requires a valid scene to exist when called 
function drawAxis(xLength, yLength, zLength) {
	var lineMaterial = new THREE.LineBasicMaterial();
	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3(xLength,0,0),
		new THREE.Vector3(0,0,0),
		new THREE.Vector3(0,yLength,0),
		new THREE.Vector3(0,0,0),
		new THREE.Vector3(0,0,zLength)
	);
	var line = new THREE.Line(geometry,lineMaterial);
	scene.add(line); 
}

function createBasicSphere(radius, widthSeg, HeightSeg) {
	var geometry = new THREE.SphereGeometry(radius,widthSeg,HeightSeg);
	var material = new THREE.MeshBasicMaterial();
	return new THREE.Mesh(geometry,material);
}

function createParticle() {
	return {particle:createBasicSphere(1,2,2),
			xSpeed:randomInt(-2,4),
			ySpeed:randomInt(-2,4),
			zSpeed:randomInt(-2,4)};
}

function createParticlesArray(arraySize) {
	var particles = [];
	for (var i = 0; i < arraySize; i++)
		particles.push(createParticle());
	return particles;
}

function randomInt(min, max) {
	return Math.floor((Math.random() * max) + min)
}