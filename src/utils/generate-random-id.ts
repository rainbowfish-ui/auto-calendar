export const generateRandomId = ({ length = 4 }: { length?: number }) =>
  Math.floor(1 * (length - 1) + Math.random() * 9 * (length - 1)).toString();
