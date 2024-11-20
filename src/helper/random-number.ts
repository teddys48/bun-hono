const randomNumber = (): string => {
  return String(Number(new Date()) * (Math.random() + 1));
};

export { randomNumber };
