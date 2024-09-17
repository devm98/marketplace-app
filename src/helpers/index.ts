// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  // initialize the timer
  let timer: ReturnType<typeof setTimeout> | undefined;

  // The actual debounced function
  const debouncedFunc = (...args: Parameters<T>): void => {
    // Clear any existing timer
    if (timer) clearTimeout(timer);

    // Set a new timer to call the callback after the specified wait time
    timer = setTimeout(() => {
      callback(...args); // Execute the callback after the wait time
    }, wait);
  };

  return debouncedFunc;
};

export { debounce };
