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

## Stage 6 — Database

The problem: rows vanished on refresh because they only lived in the browser's memory.

MongoDB Atlas = a database on the internet instead of my laptop, so my phone and
my live site can reach it too.

The connection string holds the address AND the password, so it goes in `.env.local`,
never in the code. `.gitignore` blocks `.env*` so it can't reach GitHub.

**Still fuzzy:** 

---

## Stage 7 — Delete and Edit (CRUD finished)

### Deleting

A `deleteEmployee(id)` server action in `actions.js`, and a Delete button in each row that
calls it then drops the row from the screen with `.filter()`.

### Editing

Click **Edit** on a row → the three boxes fill with that person's details → the button changes
to **Save Changes** → edit and save → the row updates.

**`editingId` is a sticky note saying which employee I'm working on.**

```js
const [editingId, setEditingId] = useState(null);
```

`null` = not editing anyone.

**Why I need it:** the boxes only hold text. When I hit Save, the app has to know *which*
employee to change — and two people could share a name. The only thing that identifies one
employee is their `_id`, and the boxes don't hold it. So I store it separately.

**It does two jobs:**

1. **Carries the id**, so Save knows who to update
2. **Acts as a switch** — "are we editing?" is answered by checking it, both for which path
   runs and which label the button shows

**`setEditingId(null)` at the end is not cosmetic.** The label flipping back is just the
visible part. The real effect is that the *next* click creates instead of updates. Without it,
the next person I typed would overwrite the one I'd just edited, forever.

### One button, two jobs

```js
if (editingId) {
  // update: save, swap the row, setEditingId(null)
} else {
  // add: create, append to the list
}
```

`createEmployee` only in the `else`. `updateEmployee` only in the `if`. **Never both** — running
both is what was creating duplicates.

### Two new ideas

**The ternary** — a compact if/else that *produces a value*:

```jsx
{editingId ? "Save Changes" : "Add Employee"}
```

JSX needs something that hands back a value. A normal `if` doesn't hand anything back.

**`.map()` to change one item:** go through the list, swap the one being edited, leave everyone
else exactly as they were.

### The full set

All three hand `setEmployees` a **brand new list** — React only notices a change when it's
given a *different* list, not a modified one.

| Add | `[...employees, saved]` | list plus one |
| Delete | `.filter()` | list minus one |
| Update | `.map()` | list with one swapped |

### Bugs I hit

- **Pasted the pieces in a line instead of branching them.** Both paths ran, so editing created
  a duplicate *and* updated the original.
- **Deleted the wrong `createEmployee`** — there were two identical lines.
- **Forgot the import.** `updateEmployee is not defined` — the function existed, it just wasn't
  in the import line. **"X is not defined" → check the top of the file first.**
- **Thought the fix hadn't worked.** The table still showed ten junk rows the bug had written.
  **Fixing the code doesn't clean up the data it already wrote.**
- **Said "it's not working" instead of pasting the error.** The error named the file, the line
  and the problem — solved in seconds once I shared it.

**Still fuzzy:** 

---

## Still to come

Stage 8 — don't let it break (validation, loading, error messages) · Stage 9 — search and filter
Stage 10 — accounts and login · Stage 11 — polish, photos, a custom domain