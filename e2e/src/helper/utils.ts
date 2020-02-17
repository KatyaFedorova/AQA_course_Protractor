export function getRandom(): number {
  return Math.floor(Math.random() * 1000);
}

export function formatUserName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName[0]}.`;
}

export function concatEducationDetailsString(education):string {
  const educationDuration = +education.endYear - +education.startYear;
  return `${education.university}, ${education.country} ` +
    `${education.startYear} - ${education.endYear} ` +
    `(${educationDuration} years)`;
}
