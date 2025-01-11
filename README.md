# Stale Closure in useEffect with setTimeout

This repository demonstrates a common error in React applications involving stale closures within `useEffect` hooks when using `setTimeout`. The problem arises when the state update inside the `setTimeout` callback uses the initial state value instead of the most recent one, leading to incorrect counter increments.

## Bug Description
The `useEffect` hook attempts to increment a counter every second. However, due to the closure capturing the initial state, the counter update does not reflect the latest state value. This results in the counter either not incrementing or incrementing inconsistently.

## Solution
The solution involves using the functional update form of `setState` to ensure that the update uses the most recent state value.