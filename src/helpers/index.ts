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

function convertToCamelCase(str: string): string {
  return str
    .toLowerCase() // Chuyển tất cả các ký tự thành chữ thường
    .replace(
      /(?:^\w|[A-Z]|\b\w|\s+)/g, // Tìm và thay thế các ký tự đầu từ
      (match, index) =>
        index === 0 // Nếu là ký tự đầu tiên, giữ nguyên
          ? match.toLowerCase() // Ngược lại, chuyển ký tự đầu của từ thành chữ hoa
          : match.toUpperCase() // Và tất cả các ký tự khác thành chữ hoa
    )
    .replace(/\s+/g, ""); // Loại bỏ các khoảng trắng
}

export { convertToCamelCase, debounce };
