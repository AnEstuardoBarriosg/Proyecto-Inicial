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

const signalLine = document.getElementById("signalLine");
const wallVisual = document.getElementById("wallVisual");
const wallLabel = document.getElementById("wallLabel");
const visualBadge = document.getElementById("visualBadge");
const visualExplanation = document.getElementById("visualExplanation");

const materialNames = {
  "8": { name: "Ladrillo", className: "ladrillo" },
  "18": { name: "Concreto reforzado", className: "concreto" },
  "35": { name: "Malla metálica", className: "malla" },
  "60": { name: "Jaula de Faraday", className: "faraday" }
};

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

  updateStatus(finalPower);
  updateVisual(materialLossPerMeter, thicknessMeters, finalPower);
}

function updateStatus(finalPower) {
  statusBox.className = "status";
  signalLine.className = "signal-line";
  visualBadge.className = "badge";

  if (finalPower > -80) {
    statusBox.textContent = "Señal funcional";
    statusBox.classList.add("good");
    signalLine.classList.add("good");
    visualBadge.classList.add("good");
    visualBadge.textContent = "Señal funcional";
    interpretation.textContent = "La señal aún conserva suficiente potencia para mantenerse operativa.";
  } else if (finalPower > -95) {
    statusBox.textContent = "Señal débil";
    statusBox.classList.add("weak");
    signalLine.classList.add("weak");
    visualBadge.classList.add("weak");
    visualBadge.textContent = "Señal débil";
    interpretation.textContent = "La señal queda degradada y podría presentar fallos o inestabilidad.";
  } else {
    statusBox.textContent = "Señal bloqueada o inutilizable";
    statusBox.classList.add("blocked");
    signalLine.classList.add("blocked");
    visualBadge.classList.add("blocked");
    visualBadge.textContent = "Señal bloqueada";
    interpretation.textContent = "La señal queda por debajo del umbral de referencia de -95 dBm.";
  }
}

function updateVisual(materialLossPerMeter, thicknessMeters, finalPower) {
  const selectedMaterial = materialNames[String(materialLossPerMeter)];
  const wallWidth = Math.max(28, Math.min(95, 28 + thicknessMeters * 13));

  wallVisual.className = `wall ${selectedMaterial.className}`;
  wallVisual.style.width = `${wallWidth}px`;
  wallLabel.textContent = `${selectedMaterial.name} (${thicknessMeters.toFixed(1)} m)`;

  if (finalPower > -80) {
    visualExplanation.textContent = "La señal logra atravesar el obstáculo y todavía conserva potencia suficiente dentro del área interna.";
  } else if (finalPower > -95) {
    visualExplanation.textContent = "La señal atraviesa el obstáculo, pero llega debilitada al área interna.";
  } else {
    visualExplanation.textContent = "La señal queda por debajo del umbral de comunicación después de atravesar el obstáculo.";
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
