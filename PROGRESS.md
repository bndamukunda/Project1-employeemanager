# Progress

My notes as I learn. What I built, what was hard, what's still fuzzy.

---

## Stage 1 — HTML

Built a plain `.html` page with a table of employees. No framework, no server — just a file
the browser opens.

- Tags come in pairs: `<h1>` opens, `</h1>` closes
- `head` = info about the page, `body` = what you see
- A table row is `<tr>`, a cell is `<td>`, a header cell is `<th>`

**Git:** a commit is a save point. `git add` picks what goes in, `git commit` saves it.
`git diff` shows nothing for a brand-new file, because git has never seen it before.

---

## Stage 2 — CSS

- HTML is the stuff, CSS is how it looks
- `<link rel="stylesheet" href="style.css" />` connects them
- Every rule is `selector { property: value; }`
- `padding` is space inside a box — the usual reason something looks cramped

---

## Stage 3 — JavaScript

Made the page *do* things. Three boxes, a button, and rows that appear when clicked.

- `querySelector("#id")` finds by id, `querySelector("tbody")` finds by tag — same rules as CSS
- `addEventListener("click", ...)` = wait for a click, then run this
- `.value` = what's in a box. Read it, or set it (`= ""` clears it)
- `innerHTML` = the stuff inside an element
- `=` puts a value in. `===` asks if two things are the same
- `if (...) { }` only runs when the answer is true

**Debugging lesson:** when JavaScript does *nothing at all* — no error, no reaction — check the
`<script>` tag first. An error means the code ran and broke. Silence usually means it never ran.

---

## Stage 4 — React (in progress)

Same table, but generated from a list instead of typed out seven times.

- An **array** `[ ]` is a list. An **object** `{ }` is one thing with labelled parts
- `.map()` = go through a list, and for each item give back something new
  - `[1,2,3].map(n => n * 2)` → `[2,4,6]`
  - Same list + different rule = different output
- In JSX, `{ }` means "pause the HTML, run JavaScript here"
- `key` is a name tag so React can tell rows apart. Needs to be unique — a name works, an id is better

### State — the four things that matter

1. **React watches; plain JavaScript doesn't.** In Stage 3 I updated the screen myself.
   In React I change the data and the screen follows.
2. **State is a variable React watches.** `useState` makes one.
3. **`setEmployees` is the only way to change it.** Changing the list directly won't redraw
   the page. This is the rule people break most often.
4. **`"use client"`** is needed on any page that reacts to clicks.

**Still fuzzy:** _(fill this in as I go)_

---

## Still to come

Stage 5 — a real form · Stage 6 — a database, so data survives a refresh (the MVP)
Then: edit/delete, validation, search, accounts.
