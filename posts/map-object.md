---
title: "And yet I cannot map an object"
summary: "JavaScript's biggest missing feature."
preview: "./map-object.png"
published: "Oct 29, 2023"
categories:
  - writing
  - ts
  - js
---

If you have used JavaScript for reasonable amount of time, you will likely have wanted a function similar to to `Array.map`, but that works on object. Here's an example to show the kind of thing I am imagining:

```TypeScript
const prices = {
  "ball": 1.5,
  "sticker": 0.3,
  "apple": 0.56,
};

function applyTax(amount) {
  return amount * 0.2;
}

// I often wish I could do this!
const pricesWithTax = prices.map(applyTax);
```

Objects are part of the small set of [basic data-types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) in JavaScript. They are used everywhere throughout JavaScript code, and are the basis of JSON which is becoming the de-facto standard for any networked API.

Given that objects are such a fundamental part of the language that JavaScript developers are handling day-in and day-out, the list of functions you'll find readily available on `Object.prototype` is incredibly sparse. The complete list (excluding deprecations) is:

- `hasOwnProperty`
- `isPrototypeOf`
- `propertyIsEnumerable`
- `toLocaleString`
- `toString`
- `valueOf`

That list stands in stark contrast to language features like arrays, where I can count 38 different functions on `Array.prototype` at time of writing.

When you dive into the detail, you also find the functions on arrays more useful for the kind of code you'd be writing every day. You can filter and map and sort arrays, but if feels like the only practical thing you can easily do with objects is convert them to strings.

## Object.entries

Before we start speculating about what the world might look like if `Object.map` were I think, I do have to give a mention to a couple of existing parts of the language.

In the 2016 and 2018 editions of ECMAScript, new functions were added to the JavaScript language that go some way to making objects more ergonomic to work with. These include:

- `Object.entries` from ECMAScript 2017
- `Object.keys` from ECMAScript 2017
- `Object.values` from ECMAScript 2017
- `Object.fromEntries` from ECMAScript 2019

Looking at the [documentation for these functions on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#object_transformations), we can see a recommendation for how to use these to manipulate objects:

> With Object.fromEntries, its reverse method Object.entries(), and array manipulation methods, you are able to transform objects like this:

```TypeScript
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

But I do not want to use _array manipulation_ methods on my objects. I want to use _object manipulation_ methods on my objects!

To really drive this point home, I can put an array manipulation side-by-side with an object manipulation and see just how nice working with arrays is by comparison:

```TypeScript
// Lovely
myArray.map(val => val * 2);

// Oh nooooo......
Object.fromEntries(
  Object.entries(myObject).map(([key, val]) => [key, val * 2]),
);
```

// TODO: https://github.com/tc39/proposal-object-iteration#resolution-from-the-meeting-1

I don't know enough about JavaScript engine internals to know whether this can be cleverly optimised away, but looking at those examples I also feel like the `Object.fromEntries` version must be consuming much more memory in comparison.

- Calling `Object.entries` creates an array.
- Each entry within that Array is itself an array, containing the key and value.
- The mapping function returns an array, for each initial array that it receives.

The last point there could be avoided by manipulating the array you receive instead of returning a new one, but either way creating an array for every single entry feels wasteful here.

There's another crucial reason these functions aren't quite perfect yet as well: They live on the `Object` object, rather than each object instance. This has 2 small implications:

- You cannot easily write chains of object manipulations, in the same way that you can chain calls to array functions. With an array you can start at the top, and call `.filter` and `.map` as many times as you wish while still writing code in a straight line down the code-file. With the Object methods you need to jump back up to the top and wrap the expression as a whole.
- You are not presented with these functions by IDEs or editors when pressing `.` after referencing an object. They are less discoverable for new developers and slower to access for experienced ones.

On the surface this might not sound like the biggest problem, but it a is slight friction that that you have to pay every time you want to use them, and it makes the language feel _sticky_ and _slow_.

More language features are making their way through the proposal track into the ECMAScript specification, including [Object.groupBy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy), [Object.pick and Object.omit](https://github.com/tc39/proposal-object-pick-or-omit). Pick in particular is quite similar conceptually to `Array.filter`, and broadly this seems like a move in the right direction, but for the same reasons that I mention above these solutions feel imperfect.

## The failed attempt

https://github.com/theScottyJam/proposal-map-object-entries

## Are iterators any good

https://es.discourse.group/t/map-equivalent-for-objects-object-mapentries/643/11
https://github.com/theScottyJam/proposal-map-object-entries
https://github.com/tc39/proposal-object-iteration#resolution-from-the-meeting-1
https://github.com/tc39/proposal-iterator-helpers

See objects more than Map() objects
object to/from entries feel clumsy, func name on left
previous efforts - proposal
Prototype pollution would solve this - allow us to solve problems using the same tools the language has
Extension methods would solve this - is there a proposal for that?
Similar problem to rx - can't extend the language the way it is defined
Any "utils" lib has other examples of lacking features

- See also: underscore, IEnumerable overloads from C#, dicts in python
- Maybe pipeline would solve some?
  iterable is another big place where this is annoying
  Ashley proposal mapobject https://github.com/tc39/proposal-await-dictionary

https://blog.gitnux.com/code/python-map-dictionary/

https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/map-values.html

https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.todictionary?view=netframework-4.8
