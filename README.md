# Mina Snapp: Mina Secret Exchange

```
Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) submission for the Mina Snapp Bootcamp 2021.
```

### Explanation

The secret exchange allows users to buy imaginary tokens (tokens aren't implemented, only simulated) after successfully providing the solution to a series of math problems while keeping the solution itself secure and private, not exposing it to the network. An exchange to which only math-nerds have access!

The three parameters `a`, `b`,`c` for the equation `ax² + bx - c` will be pseudo randomly generated upon contract deployment.
Note that for simplicity I decided to make `c` be either negative or `0` so we can easily and human-solveable (is that even a word?) get the solution for the equation `ax² + bx - c = 0` without making things too complex! (see what i did there? ;)

Only after successfully solving an equation, let's say `2x² + 1x - 1 = 0`, we will get access to the exhange and be able to trade something.

The root(s) of `2x² + 1x - 1 = 0` would be `x_1 = -1`and `x_2 = 1/2`.

I will also provide a plot of the graph in the user interface to make it a little easier (if you eyes are good enough to read the roots off the plot ;>).

# Usage

TODO: do usage; add installation guide
