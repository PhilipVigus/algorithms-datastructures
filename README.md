# Algorithms and Datastructures

## Logarithms

10**2 = 100 so log(10) 100 = 2
10**3 = 1000 so log(10) 1000 = 3
2**3 = 8 so log(2) 8 = 3
2**4 = 16 so log(2) 16 = 4

With algorithmic complexity, log always means log(2)

## Binary Search

- Takes a sorted list of elements as input
- Outputs the searched for element if found, or null if not
- Each step of the search looks at the halfway point
  - If that point is the searched for item, return it
  - If it's too high, half lower
  - If it's too low, half higher
- So each step halves the possible inputs to search

Worst case example comparison

- Simple search of 240,000 items takes 240,000 steps
- Binary search takes 18 steps
- Simple search of 4 billion items takes 4 billion steps
- Binary search of 4 billion items takes 32 steps

Simple search - O(n) - linear time
Binary search - O(log n) - logirithmic time

## Big O notation

Tells you how fast an algorithm is relative to other algorithms. It doesn't give an absolute time, but a measure of how time grows as the size of the input increases.

This is hugely important. For example:

- Assume an algorithm 'step' takes 1ms

|                | Simple Search | Binary Search |
| :------------- | :------------ | :------------ |
| 100 elements   | 100ms         | 7ms           |
| 10000 elements | 10s           | 14ms          |
| 1bil elements  | 11 days       | 32ms          |

As input size growth increases, the difference between linear and logirithmic complexity becomes more and more apparent.

The important takeaway is that you need to know how running time increases relative to input size to have a meaningful measure of how fast an algorithm is.

Big O notation does this. It tells you have fast the algorithm grows in a worst case scenario for that algorithm.

Big O common categories

| Big O        | Name        | Example algorithm                                   |
| :----------- | :---------- | :-------------------------------------------------- |
| O(log n)     | log time    | Binary search                                       |
| O(n)         | linear time | Simple search                                       |
| O(n + log n) | -           | Fast sorting algorithms like quicksort              |
| O(n2)        | -           | Slow sorting algorithms like selection sort         |
| O(n!)        | -           | Really slow algorithms like the travelling salesman |
