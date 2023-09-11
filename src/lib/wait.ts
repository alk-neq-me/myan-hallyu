export function waitSync(ms: number) {
  const startTime = new Date().getTime();
  let currentTime: number;

  do {
    currentTime = new Date().getTime();
  } while (currentTime - startTime < ms);
}


export function waitAsync(ms: number) {
  return new Promise(r => setTimeout(r, ms))
}

