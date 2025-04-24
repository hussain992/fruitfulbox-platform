import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNextDeliveryDates(count = 3) {
	const today = new Date();
	const deliveryDays: string[] = [];
	const targetDays = [3, 6, 0]; // Wednesday (3), Saturday (6), Sunday (0)

	while (deliveryDays.length < count) {
		const testDate = new Date(today);
		testDate.setDate(today.getDate());
		const day = testDate.getDay();

		if (targetDays.includes(day)) {
			const weekday = testDate.toLocaleDateString("en-IN", {
				weekday: "long"
			});
			const dayMonth = testDate.toLocaleDateString("en-IN", {
				day: "numeric",
				month: "short"
			});
			const formatted = `${weekday} (${dayMonth})`;

			if (!deliveryDays.includes(formatted)) {
				deliveryDays.push(formatted);
			}
		}

		today.setDate(today.getDate() + 1);
	}

	return deliveryDays;
}

