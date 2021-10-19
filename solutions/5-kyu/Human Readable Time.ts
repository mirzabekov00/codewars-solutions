export function humanReadable(s: number): string {
  const HOUR_IN_SEC = 3600;

  const hours = Math.floor(s / HOUR_IN_SEC);
  const hourRest = s - hours * HOUR_IN_SEC;

  const minutes = Math.floor(hourRest / 60);
  const minRest = hourRest - minutes * 60;

  const seconds = minRest;

  const nextHours = hours > 9 ? hours : `0${hours}`;
  const nextMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const nextSeconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${nextHours}:${nextMinutes}:${nextSeconds}`;
}
