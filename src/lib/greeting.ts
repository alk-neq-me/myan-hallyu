export function greeting() {
  const currentHour: number = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "안녕, 좋은 아침이에요!";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "안녕, 좋은 오후에요!";
  } else if (currentHour >= 17 && currentHour < 21) {
    return "안녕, 좋은 저녁이에요!";
  } else {
    return "안녕, 좋은 밤이에요!";
  }
}
