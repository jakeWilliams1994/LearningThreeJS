function drawAxis(xLength, yLength, zLength, scene) {
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

function drawAxis(axisLength, scene) {
	var lineMaterial = new THREE.LineBasicMaterial();
	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3(axisLength,0,0),
		new THREE.Vector3(0,0,0),
		new THREE.Vector3(0,axisLength,0),
		new THREE.Vector3(0,0,0),
		new THREE.Vector3(0,0,axisLength)
	);
	var line = new THREE.Line(geometry,lineMaterial);
	scene.add(line); 
}
