# JS TDD sandbox to have fun with some common Algorithms & Data Structures.

## How it works

### TL;DR

- open project's root folder in a terminal and run npm i
- go to /src/01-singly-linked-list
- open singly-linked-list.test.js and see the first test case
- open singly-linked-list.js and write code which will make the test case happy
- npx mocha ./src/01-singly-linked-list
- rinse and repeat until you are happy and/or exhausted

\* A great visual help can be found at this amazing website – https://visualgo.net/en/list
You can also check out singly-linked-list.solved.js – but hey, don't copypaste, you know it.

### More words

/src folder contains subfolders named like

%number%-%algo-or-data-structure-name%

The number is used to sort folders from basic & simple concepts to more complex things (sometimes using code from a folder with a lower number).
i.e., it makes sense to go from 1 to n here ;)

#### Folder structure

Each folder contains three files:

%algo-or-data-structure-name%.js - that's where you write your code. Pre-filled with a high-level API of the concept you're gonna work on
%algo-or-data-structure-name%.solved.js - the thing solved. It passes the tests and you can (please don't) cheat on yourself
%algo-or-data-structure-name%.test.js - a heartless test that judges how good your sandbox code is

#### How to run the tests

npx mocha ./src/%number%-%algo-or-data-structure-name%

## Disclaimer

The code provided As-Is and is completely subjective. Data Structures may contain more props/methods – feel free to add and test them too.
Solutions aren't perfect and there are 42^n better ways to do it.
The main reason for this repo is simple - to have a minimal working sandbox to play with some common Algorithms & Data Structures using good old Vanilla JS.
