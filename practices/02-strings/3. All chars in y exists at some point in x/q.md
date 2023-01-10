 * Return a boolean that checks wether all of the characters in the string y exist at some point in the string x. Furthermore, the characters from y need to occur in the same order in x. There may be additional characters in string x, so long as each character from y appears and the order is maintained.
 If all of the characters from y appear in x in the correct order return the boolean `true`, otherwise return `false`
 * Examples
```
x = "ABCD"
y = "AC"
result = true

x = "ABCD"
y = "CA"
result = false

x = "ABCAD"
y = "BA"
result = true
```