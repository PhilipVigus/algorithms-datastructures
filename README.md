# Algorithms and Datastructures

## Logarithms

- 10\*\*2 = 100 so log(10) 100 = 2
- 10\*\*3 = 1000 so log(10) 1000 = 3
- 2\*\*3 = 8 so log(2) 8 = 3
- 2\*\*4 = 16 so log(2) 16 = 4

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

| Big O        | Name          | Example algorithm                                   |
| :----------- | :------------ | :-------------------------------------------------- |
| O(1)         | constant time | Array access, linked list insertion                 |
| O(log n)     | log time      | Binary search                                       |
| O(n)         | linear time   | Simple search                                       |
| O(n + log n) | -             | Fast sorting algorithms like quicksort              |
| O(n2)        | -             | Slow sorting algorithms like selection sort         |
| O(n!)        | -             | Really slow algorithms like the travelling salesman |

## Arrays and linked lists

### Arrays

- All elements stored contiguously in memory
- This can cause problems if the array grows and needs more space than is currently available where it 'sits' in memory, as the whole array then needs to be moved. This is really slow
- Workarounds
  - reserve space in advance
    - can waste space if that space isn't actually needed
    - might need more than the reserved space, leading back to the original problem
- Great for random access
- Terrible for insertion
  - Worst case is having to insert at index 0, which requires each element to be shifted up one in position

### Linked lists

- Items can be anywhere in memory
- Each item stores the address of the next item
- Makes adding or inserting items easy, and you never have to move them in the same way you do with arrays
- Random access is impossible, you have to traverse the entire list to get to the element you want
  - However, access can generally be made quicker using pointers to the first and last elements in the list (usually called head and tail)

|           | Arrays | Lists |
| :-------- | :----- | :---- |
| Reading   | O(1)   | O(n)  |
| Insertion | O(n)   | O(1)  |

## Selection Sort

- Take a list
- Go through the list an element at a time and find the lowest
- Move the lowest to the front
- Go through the list and find the next lowest
- Move it next to the lowest
- Repeat until the list is ordered

### Big O explanation

- 1st iteration - check n items
- 2nd iteration - check n - 1
- 3rd iteration - check n - 2
- etc

On average, you check a list that has 0.5 x n elements, so the complexity is:
O(n x 0.5 x n). However, constants are ignored in big O notation, so for selection sort, complexity:

- O(n2)

## Recursion

- There are no specific performance benefits to using recursion over loops. Sometimes they are worse
- Generally recursion is used because it makes code clearer
- A recursive function has a base case and a recursive case. The base case tells the function when to stop, and the recursive case tells the function how to call itself

### The stack

- The call stack is used whenever a function is called, and stores the name of the function and any arguments used to call the function
- functions are popped off of the stack when they finish running
- The stack is heavily used by recursive functions, with each individual call to the function being saved onto the stack until the functions 'unwind'. This means it's possible for recursive functions to take up a lot of memory if there are a lot of levels of recursion or each function call stores a lot of info on the stack
- A way around this is using tail recursion

## Divide and conquer

- D&C algorithms are recursive. They require two steps
  - figure out thhe base case, which should be the simplest possible case
  - divide or decrease the problem until it becomes the base case

### Example - dividing a rectangle into the largest possible squares of equal sizes

- Base case
  - one side being a multiple of the other
- Recursive case
  - find the biggest square that will work for the rectangle you have
  - then call the function again with the remaining rectangle
  - keep going until the rectangle you are left with meets the conditions for the base case
  - the size of the boxes given in the base case gives you your answer

## Quicksort

- Uses divide and conquer
- base case
  - empty array or arrays with one element, don't need to be sorted
- recursive case
  - choose a pivot element
  - find elements smaller than the pivot and elements larger and put into subarrays
  - call quicksort on the subarrays
