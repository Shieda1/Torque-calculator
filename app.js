const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const torqueRadio = document.getElementById('torqueRadio');
const distanceRadio = document.getElementById('distanceRadio');
const forceRadio = document.getElementById('forceRadio');

let torque;
let distance = v1
let force = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

torqueRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance (m)';
  variable2.textContent = 'Force (N)';
  distance = v1;
  force = v2;
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Torque (N.m)';
  variable2.textContent = 'Force (N)';
  torque = v1;
  force = v2;
});

forceRadio.addEventListener('click', function() {
  variable1.textContent = 'Torque (N.m)';
  variable2.textContent = 'Distance (m)';;
  torque = v1;
  distance = v2;
});

btn.addEventListener('click', function() {
  if(torqueRadio.checked)
    result.textContent = `Torque = ${computeTorque().toFixed(2)} N.m`;
  else if(distanceRadio.checked)
    result.textContent = `Distance = ${computeDistance().toFixed(2)} m`;
  else if(forceRadio.checked)
    result.textContent = `Force = ${computeForce().toFixed(2)} N`;
})

function computeTorque() {
  return force.value * distance.value;
}

function computeDistance() {
  return torque.value / force.value;
}

function computeForce() {
  return torque.value / distance.value;
}