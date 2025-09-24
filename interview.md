## Problem Statement

### Clarify questions regarding the input:
- will the inputs only have integers, or could there be other types?
- will the input be sorted or unsorted?
- is the input guaranteed to have elements or could it be empty?
- what should i do if an invalid input is given?

### Ask about the Expected Input Size (Check Constraints)
- Input size ≤ 20 → brute force/backtracking is safe.
- Input size ≤ 10⁴ → O(n log n) solutions usually pass.
- Input size ≤ 10⁶ → O(n) required, avoid nested loops.
- Huge numbers → think modulo, math tricks.

### Questions you should always expect and be ready for include:
- What is the time and space complexity of the algorithm?
> You should speak in terms of the worst-case scenario. However, if the worst case is rare and the average case has a significantly faster runtime, you should also mention this.

- Why did you choose to do ...?
> This could be your choice of data structure, choice of algorithm, choice of for loop configurations, etc. Be prepared to explain your thought process.

- Do you think that the algorithm could be improved in terms of time or space complexity?
> If the problem needs to look at every element in the input (let's say the input isn't sorted and you needed to find the max element), then you probably can't do better than O(n). Otherwise, you probably can't do better than O(log n)

> If the interviewer asks this, the answer is usually yes. Be careful about asserting that your algorithm is optimal - it's ok to be wrong, but it's not ok to be confidently wrong.