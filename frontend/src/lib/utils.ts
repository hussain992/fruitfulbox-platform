import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export async function getProductsByCategory(category: string) {
  try {
    const data = await import(`./${category}.json`);
    return data.default;
  } catch (e) {
    console.error(`Error loading category ${category}:`, e);
    return [];
  }
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNextDeliveryDates(count = 3) {
  const now = new Date();
  const currentDate = new Date(now);
  currentDate.setHours(0, 0, 0, 0);

  const deliveryDays: Array<{ label: string; date: Date; daysAhead: number }> = [];
  const targetDays = [3, 6, 0]; // Wednesday (3), Saturday (6), Sunday (0)
  const candidate = new Date(currentDate);

  while (deliveryDays.length < count) {
    const day = candidate.getDay();
    const isToday = candidate.getTime() === currentDate.getTime();
    const isMorning = now.getHours() < 12;

    if (targetDays.includes(day) && (!isToday || isMorning)) {
      const weekday = candidate.toLocaleDateString("en-IN", {
        weekday: "long",
      });
      const dayMonth = candidate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      });
      const formatted = `${weekday} (${dayMonth})`;
      const daysAhead = Math.round((candidate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

      deliveryDays.push({
        label: formatted,
        date: new Date(candidate),
        daysAhead,
      });
    }

    candidate.setDate(candidate.getDate() + 1);
  }

  return deliveryDays;
}
