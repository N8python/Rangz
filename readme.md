# Rangz

## How do I get started?
```
npm i rangz --save
```

```js
const range = require("rangz");
```

## How do I make a range?
```js
range(30); // Range to 30
```

## But how do I iterate over it?

```js
for(const i of range(30)) // How pythonic!
```

## What about start points, end points and steps?

```js
range({
    start: 5,
    end: 30,
    step: 2
}); // [ 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29 ]
```

## But I don't want the step to just add a number, I want it to multiply by 2.

```js
range({
    start: 1,
    end: 1000,
    step: i => i * 2
}); //[ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 ]
```

## But my range needs to be INFINITE.

```js
range(1, 2); // Infinite range inferred.
```

## Great, but how do I get a slice of my infinite range?

```js
range(1, 2).take(20); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
```

## Awesome, but my range is descending, not ascending.

```js
range(2, 1).take(5); // [ 2, 1, 0, -1, -2 ]
```

## Cool, but what if my range is exponential?

```js
range(2, 4, 8).take(10); // [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ]
```

## Impressive, but my range is descending AND exponential.

```js
range(8, 4, 2).take(10); // [ 8, 4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625 ]
```

## Great, but I want the millionth value of the range, and I don't need the whole array.

```js
range(1, 2).get(1000000); // 1000001
```

