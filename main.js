const montoInput = document.getElementById("monto");
const interesInput = document.getElementById("interes");
const cuotasInput = document.getElementById("cuotas");
const resultado = document.querySelector(".resultado");

const calcularValorCuotas = () => {
  const monto = parseFloat(montoInput.value);
  const cuotas = parseFloat(cuotasInput.value);
  const interes = parseFloat(interesInput.value);
  const valorInteres = (monto * interes) / 100;
  const valorCuota = (monto + valorInteres) / cuotas;
  return valorCuota.toFixed(2);
};

const formatearMonto = (monto) => {
  return monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  miles;
};

const calcularPago = () => {
  const cuotas = parseFloat(cuotasInput.value);
  const valorCuotas = calcularValorCuotas();
  resultado.textContent = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${cuotas} DE ${formatearMonto(
    valorCuotas
  )}`;
};
