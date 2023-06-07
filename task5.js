const sum = (a, b) => 
{
    return a + b;
};
  
const power = (base, exponent) => 
{
    if (base === undefined || exponent === undefined) 
    {
      return "Parameters not specified";
    }

    if (typeof base !== "number" || typeof exponent !== "number") 
    {
      return "Parameters must be numbers";
    }
  
    return Math.pow(base, exponent);
};
  
const main = () => 
{
    const resultSum = sum(5, 3);
    console.log("Result of summation: ", resultSum);
  
    const resultPower = power(2, 3);
    console.log("Result of exponentiation: ", resultPower);
};
  
main();