const calcularIMC = require("../src/calcularIMC");

describe("calcularIMC", () => {
	test("deve_calcular_o_imc_corretamente_para_valores_padrao", () => {
		const resultado = calcularIMC(70, 1.75);
		expect(resultado).toBe(22.86);
	});

	test("deve_arredondar_o_resultado_para_duas_casas_decimais", () => {
		const resultado = calcularIMC(80, 1.8);
		expect(resultado).toBe(24.69);
	});

	test("deve_lancar_erro_quando_o_peso_for_zero", () => {
		expect(() => calcularIMC(0, 1.75)).toThrow(
			"Peso e altura devem ser números positivos e maiores que zero."
		);
	});

	test("deve_lancar_erro_quando_a_altura_for_negativa", () => {
		expect(() => calcularIMC(70, -1.75)).toThrow(
			"Peso e altura devem ser números positivos e maiores que zero."
		);
	});

	test("deve_lancar_erro_quando_o_peso_nao_for_um_numero", () => {
		expect(() => calcularIMC("setenta", 1.75)).toThrow(
			"Peso e altura devem ser números positivos e maiores que zero."
		);
	});

	test("deve_lancar_erro_quando_a_altura_for_invalida", () => {
		expect(() => calcularIMC(70, NaN)).toThrow(
			"Peso e altura devem ser números positivos e maiores que zero."
		);
	});
});
