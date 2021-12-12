# Mina Snapp: Mina Secret Exchange

# <https://mina.proxylabs.org/>

```
Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) submission for the Mina Snapp Bootcamp 2021.
```

A demo version will be accessible to everyone, without having to host it or use the code yourself

### Explanation

`Both the frontend and the snapp backend are only a rough proof of concept and have loads of room for improvements`

The secret exchange allows users to buy imaginary tokens (tokens aren't implemented, only simulated) after successfully providing the solution to a series of math problems while keeping the solution itself secure and private, not exposing it to the network. An exchange to which only math-nerds have access!

The three parameters `a`, `b`,`c` for the equation `ax² - bx + c` will be pseudo randomly generated upon contract deployment.
Note that i generated the params for the equation based on a handful of checks so we can easily and human-solveable (is that even a word?) get the solution for the equation `ax² - bx + c = 0` without making things too complex! (see what i did there? ;)

Only after successfully solving an equation, let's say `11x² - 44x + 44 = 0`, we will get access to the exhange and be able to trade something. See the solution to the equation as a secret key you need to continue and you dont want to share with anyone! Imagine solving the riemann hypothesis and proofing that you have the solution without having to reveal it! Awesome, right? No work stealing ;)

The root(s) of `11x² - 44x + 44 = 0 would be `x_1 = 2`and`x_2 = 2`.

I might also provide a plotted graph and maybe some hints on to solve it (if you eyes are good enough to read the roots off the plot ;>).

# Features

- user friendly frontend with a bunch of possibilities
- having to provide one of n solutions before you can access functionalities of the smart contract

# My Goal

I wanted to combine the features of a user facing zk-powered smart contract.

- a simple user interface where users can actually interqact with the smart contract the way they are used to from other platforms like Ethereum
- the power of zk proofs provided by Mina and SnarkyJS in the form of solving an equation before users can access the rest of the smart contract without revealing their solution
- something every smart contract users knows about: (d)Exchanges and some (even tho only theoretical and simulated) popular DEFI features like swapping token
- still many features planned

# Usage

`package.json` includes scripts for building both the SnarkyJS snapp and the vue frontend

Running

```
npx tsc
```

compiles the smart contract into `./dist`

Running

```
 node run esbuild
```

builds the vue frontend in `./public`

```
npm run serve
```

serves the frontend under localhost:3000

or all in one:

```
npn run build
```
