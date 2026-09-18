const technology = document.getElementById("technology");
const material = document.getElementById("material");
const distance = document.getElementById("distance");
const thickness = document.getElementById("thickness");
const txPower = document.getElementById("txPower");

const distanceValue = document.getElementById("distanceValue");
const thicknessValue = document.getElementById("thicknessValue");
const txPowerValue = document.getElementById("txPowerValue");

const statusBox = document.getElementById("status");
const frequencyResult = document.getElementById("frequencyResult");
const wavelengthResult = document.getElementById("wavelengthResult");
const fsplResult = document.getElementById("fsplResult");
const materialLossResult = document.getElementById("materialLossResult");
const totalLossResult = document.getElementById("totalLossResult");
const finalPowerResult = document.getElementById("finalPowerResult");
const interpretation = document.getElementById("interpretation");

function calculate() {
  const frequencyMHz = Number(technology.value);
  const materialLossPerMeter = Number(material.value);
  const distanceMeters = Number(distance.value);
  const thicknessMeters = Number(thickness.value);
  const txPowerDbm = Number(txPower.value);

  const distanceKm = distanceMeters / 1000;
  const fspl = 32.44 + 20 * Math.log10(distanceKm) + 20 * Math.log10(frequencyMHz);
  const materialLoss = materialLossPerMeter * thicknessMeters;
  const totalLoss = fspl + materialLoss;
  const finalPower = txPowerDbm - totalLoss;

  const frequencyHz = frequencyMHz * 1000000;
  const wavelength = 300000000 / frequencyHz;

  distanceValue.textContent = distanceMeters;
  thicknessValue.textContent = thicknessMeters.toFixed(1);
  txPowerValue.textContent = txPowerDbm;

  frequencyResult.textContent = formatFrequency(frequencyMHz);
  wavelengthResult.textContent = `${wavelength.toFixed(3)} m`;
  fsplResult.textContent = `${fspl.toFixed(2)} dB`;
  materialLossResult.textContent = `${materialLoss.toFixed(2)} dB`;
  totalLossResult.textContent = `${totalLoss.toFixed(2)} dB`;
  finalPowerResult.textContent = `${finalPower.toFixed(2)} dBm`;

  statusBox.className = "status";

  if (finalPower > -80) {
    statusBox.textContent = "Señal funcional";
    statusBox.classList.add("good");
    interpretation.textContent = "La señal aún conserva suficiente potencia para mantenerse operativa.";
  } else if (finalPower > -95) {
    statusBox.textContent = "Señal débil";
    statusBox.classList.add("weak");
    interpretation.textContent = "La señal queda degradada y podría presentar fallos o inestabilidad.";
  } else {
    statusBox.textContent = "Señal bloqueada o inutilizable";
    statusBox.classList.add("blocked");
    interpretation.textContent = "La señal queda por debajo del umbral de referencia de -95 dBm.";
  }
}

function formatFrequency(frequencyMHz) {
  if (frequencyMHz >= 1000) {
    return `${(frequencyMHz / 1000).toFixed(1)} GHz`;
  }

  return `${frequencyMHz} MHz`;
}

[technology, material, distance, thickness, txPower].forEach((element) => {
  element.addEventListener("input", calculate);
});

calculate();
