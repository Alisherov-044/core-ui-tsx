import { format } from "date-fns";

export function formatDate(date: number): string {
  return format(date, "yyyy/mm/dd");
}