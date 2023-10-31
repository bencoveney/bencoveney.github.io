---
title: "TSFluff"
github: https://github.com/bencoveney/TSFluff
summary: "Joke TSLint rules that make TypeScript programming a painful experience."
preview: "./tsfluff.png"
categories:
  - project
  - ts
  - prog-lang
---

TSFluff is a collection of rules for the now-defunct [TSLint](https://palantir.github.io/tslint/) linter that make TypeScript programming a painful experience.

I don't think you'd ever want to use any of these in practice, but I think they're kind of funny. It was also a good low-stakes environment to get familiar with TypeScript's abstract syntax trees.

## Rules

### No vowels in identifiers: `no-vowels-in-identifiers`

These letters are relied upon by lazy developers who refuse to be more inventive with their programming terminology. It is time this practice was stamped out for good.

This rule comes with 3 different modes which can be toggled between depending on your programming ability:

- **Easy:** Disallows e
- **Medium (default):** Disallows a, e, i, o, u
- **Hard:** Disallows a, e, i, o, u, y

### No strict equality checks: `no-triple-equals`

Disallows === and !==. Strict equality checks are a crutch relied on by low tier developers who can't wrap their heads around JavaScript's graceful and intuitive type coercion system. Additionally the time wasted pressing the button a third time could have cured at least a fraction of a disease by now.

### Short string literals: `short-string-literals`

String literals are often expressed all at once with no thought given to refactoring. This rule enforces better coding practices by requiring string literals to be split into 1 character long chunks which makes restucturing the string at a later time super `"e" + "a" + "s" + "y" + "!"`.

### Require empty statements: `require-empty-statements`

Everyone knows that editing old existing code is a difficult and time consuming process. This rule helps mitigate that pain by ensuring that there are always some spare semicolons to use scattered throughout the file making it 100% more maintainable.

This rule accepts an option for the number of empty statements required (with a default of 5).

### Uppercase comments: `uppercase-comments`

A comment that isn't read is effectively useless. With this great new rule you can ensure that all of your precious code annotations are given the attention they deserve using a technique as old as computers themselves: SHOUTING.

## Sample Configuration

```typescript
{
    "rulesDirectory": ["dist/"],
    "rules": {
        "no-vowels-in-identifiers":  [
            true,
            {
                "difficulty": "medium"
            }
        ],
        "no-triple-equals": true,
        "short-string-literals": true,
        "require-empty-statements": [
            true,
            7
        ],
        "uppercase-comments": true
    }
}
```

## Sample Code

A sample fizzbuzz implementation which passes all rules.

```typescript
// THE LIMIT OF NUMBERS TO FIZZBUZZ.
const SPY_MYTH = 100;

for (let rhythm = 0; rhythm < SPY_MYTH; rhythm++) {
  let mySkyGypsy = "";

  // FIZZ IF DIVISIBLE BY 3.
  if (rhythm % 3 == 0) {
    mySkyGypsy += "f" + "i" + "z" + "z";
  }

  // BUZZ IF DIVISBLE BY 5.
  if (rhythm % 5 == 0) {
    mySkyGypsy += "b" + "u" + "z" + "z";
  }

  // USE THE NUMBER IF NEITHER FIZZY NOR BUZZY.
  mySkyGypsy =
    mySkyGypsy != ""
      ? mySkyGypsy
      : rhythm["t" + "o" + "S" + "t" + "r" + "i" + "n" + "g"]();

  // tslint:disable-next-line:no-vowels-in-identifiers
  console.log(mySkyGypsy);
}
```
