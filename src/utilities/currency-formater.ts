export default function formatCurrency(
	amount: number,
	showCurrencySymbol: boolean = true,
): string {
	return new Intl.NumberFormat("en-US", {
		style: showCurrencySymbol ? "currency" : "decimal",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(amount);
}
