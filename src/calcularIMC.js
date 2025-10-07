function calcularIMC(peso, altura) {
	if (
		typeof peso !== "number" ||
		peso <= 0 ||
		typeof altura !== "number" ||
		altura <= 0
	) {
		throw new Error(
			"Peso e altura devem ser números positivos e maiores que zero."
		);
	}

	const imc = peso / altura ** 2;

	return parseFloat(imc.toFixed(2));
}
module.exports = calcularIMC;
