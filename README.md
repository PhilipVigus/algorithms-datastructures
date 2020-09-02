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

Simple search - O(n) = n
Binary search - O(n) = log n
