# Opinions

I've made this boilerplate to suit my preferences. Most of the additions and changes are fine with most people, but there are a few that have generated a number of discussions in the past.

The decisions below (along with some others that I don't think require explanation) are done with a view for developer convenience, long-term maintainability, and readability.

### Indentation: tabs

This is an accessibility choice. Using tabs for indentation allows the developer to control how much indentation is shown in their editor. As I get older and my eyesight slowly gets worse, I prefer to use a four space indent. I realize that you may prefer a two space indent. Using tabs allows both of us to have our way.

The `.editorconfig` file does not specify the number of spaces a tab character will appear as, so your IDE default should take effect.

*NOTE:* JSON files will still use two space characters for indentation. This is so that the Angular CLI and other schematics that modify the `package.json` or `angular.json` files do so in a visually pleasing way.

### Line length: 80

Related to accessibility again. Reading long lines of code is generally much more difficult than reading shorter ones, and lines can almost always be split into multiple lines or even multiple statements for better readability.

This is a soft limit - Prettier will allow lines longer than 80 characters under some circumstances, and a maximum length is not enforced by ESLint.

### Semicolons: always

Primarily for readability and making it really obvious that a statement has been completed.

The secondary purpose is philosophical - there are times that a semicolon must be used, and instead of having to remember those exceptions, I choose to have the same rule apply everywhere.

### Trailing comma: always

This avoids repository diffs that change nothing but adding that comma so a new element can be added to an object or array. Highlighting that line forces me to double-check that nothing else has changed, which is a waste of time.

### Quotes: single

Why hit an extra key every time you need a quotation mark? I've somewhat hypocritically kept the double-quotes in HTML and CSS for compatibility reasons that are probably out of date at this point, so I'll need to revisit this for the next version.

### Lambda parentheses: always

During maintenance and refactoring, having to add the parentheses when an arrow method signature changes is annoying and easy to miss when initially typing in the change, causing those damning red squiggly lines to appear everywhere. This chews up mental parsing resources and CPU resources and is very easy to avoid.
