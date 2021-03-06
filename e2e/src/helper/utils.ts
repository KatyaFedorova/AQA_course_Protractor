export function getRandom(): number {
  return Math.floor(Math.random() * 1000);
}

export function formatUserName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName[0]}.`;
}
