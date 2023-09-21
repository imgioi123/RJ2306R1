function generateArray(size) {
    const numbers = [];
    for (let i = 0; i < size; i++) {
      const number = Math.floor(Math.random() * 51) + 10;
      numbers.push(number);
    }
    return numbers;
  }
  
  function displayArray(numbers) {
    console.log("Mảng numbers:");
    console.log(numbers.join(" "));
  }
  
  function countEvenNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        count++;
      }
    }
    return count;
  }
  
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function countPrimeNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        count++;
      }
    }
    return count;
  }
  
  function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  // Sử dụng các hàm đã viết
  const size = 10;
  const numbers = generateArray(size);
  
  displayArray(numbers);
  
  const evenCount = countEvenNumbers(numbers);
  console.log("Số lượng số chẵn trong mảng: ", evenCount);
  
  const primeCount = countPrimeNumbers(numbers);
  console.log("Số lượng số nguyên tố trong mảng: ", primeCount);
  
  const arraySum = sumArray(numbers);
  console.log("Tổng các phần tử trong mảng: ", arraySum);