export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "rstamm";
  }

  if (query.toLowerCase().includes("name")) {
    return "rebecca";
  }

  if (query.includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);
      return (num1 + num2).toString();
    }
  }

  if (query.includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);
      return (num1 - num2).toString();
    }
  }

  if (query.includes("largest")) {
    const numbers = query.match(/[+-]?\d+(?:\.\d+)?/g);
    if (numbers && numbers.length > 0) {
      const vals = numbers.map((n) => parseFloat(n));
      const max = Math.max(...vals);
      if (Number.isInteger(max)) return max.toString();
      return parseFloat(max.toFixed(8)).toString();
    }
  }

  if (query.includes("smallest")) {
    const numbers = query.match(/[+-]?\d+(?:\.\d+)?/g);
    if (numbers && numbers.length > 0) {
      const vals = numbers.map((n) => parseFloat(n));
      const min = Math.min(...vals);
      if (Number.isInteger(min)) return min.toString();
      return parseFloat(min.toFixed(8)).toString();
    }
  }

  return "";
}