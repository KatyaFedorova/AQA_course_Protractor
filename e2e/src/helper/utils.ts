export function getRandom(): number {
  return Math.floor(Math.random() * 1000000);
}

export function getInitials(firstName: string, lastName: string): string {
  return `${firstName} ${lastName[0].toUpperCase()}.`;
}
