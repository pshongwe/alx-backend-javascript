export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: (subject1.credits + subject2.credits) as MajorCredits['credits'] };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: (subject1.credits + subject2.credits) as MinorCredits['credits'] };
}

// Example usage
const major1: MajorCredits = { credits: 3 as MajorCredits['credits'] };
const major2: MajorCredits = { credits: 4 as MajorCredits['credits'] };

const minor1: MinorCredits = { credits: 1 as MinorCredits['credits'] };
const minor2: MinorCredits = { credits: 2 as MinorCredits['credits'] };

console.log(sumMajorCredits(major1, major2)); // { credits: 7 }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3 }
