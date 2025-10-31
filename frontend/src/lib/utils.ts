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
  const today = new Date();
  const deliveryDays: string[] = [];
  const targetDays = [3, 6, 0]; // Wednesday (3), Saturday (6), Sunday (0)

  while (deliveryDays.length < count) {
    const testDate = new Date(today);
    testDate.setDate(today.getDate());
    const day = testDate.getDay();

    if (targetDays.includes(day)) {
      const weekday = testDate.toLocaleDateString("en-IN", {
        weekday: "long",
      });
      const dayMonth = testDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      });
      const formatted = `${weekday} (${dayMonth})`;
      const now = new Date();
      const currentDay = now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      });
      const isMorning = now.getHours() < 12;
      const isSameDay = dayMonth === currentDay;

      if (isSameDay) {
        if (isMorning) {
          // If it's morning, add today as the first delivery day
          deliveryDays.unshift(formatted);
        }
      } else {
        if (!deliveryDays.includes(formatted)) {
          deliveryDays.push(formatted);
        }
      }
    }

    today.setDate(today.getDate() + 1);
  }

  return deliveryDays;
}
