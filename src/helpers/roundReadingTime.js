
export function roundReadingTime(readTime){
  if (readTime === 0) {
    return;
  }
  if (readTime < 0.5) {
    return 'less than a min. read';
  }
  if (readTime >= 0.5 && readTime < 1) {
    return '1 min. read';
  }
  return `${Math.ceil(readTime)} min. read`;
}

