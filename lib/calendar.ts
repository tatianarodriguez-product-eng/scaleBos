export type DaySlots = {
  id: string;
  label: string;
  weekday: string;
  times: string[];
};

export async function fetchAvailableSlots(): Promise<DaySlots[]> {
  await new Promise((resolve) => setTimeout(resolve, 280));
  return [
    { id: "d1", weekday: "Thu", label: "6 Nov", times: ["09:00", "11:30", "16:00"] },
    { id: "d2", weekday: "Fri", label: "7 Nov", times: ["10:00", "13:00", "15:30"] },
    { id: "d3", weekday: "Mon", label: "10 Nov", times: ["09:30", "12:00", "17:00"] },
    { id: "d4", weekday: "Tue", label: "11 Nov", times: ["08:30", "11:00", "14:30"] },
    { id: "d5", weekday: "Wed", label: "12 Nov", times: ["10:30", "13:30", "16:30"] },
  ];
}
