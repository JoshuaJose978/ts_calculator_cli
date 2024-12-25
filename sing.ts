export function sing(phrase: string, times: number): string {
  const song: string = Array(times).fill(phrase).join(" ");
  console.log(song);
  return song;
}

sing("la", 3);
