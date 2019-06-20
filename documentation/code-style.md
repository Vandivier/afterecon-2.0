TODO: align this file with ./development-workflow-sop

TODO: clean up this file

do not use hex codes for style. use rgb or rgba. converters are available online. 1. record them in constants.scss 2. scss theme imports should only appear in constants.scss (for constants) or styles.scss (for style rules)

### absolute garbage advice

1.  name all files css-naming-style
2.  IDE spacing set to 4 spaces; no tabs
3.  write tons of comments. Like a ton. Add TODO comments as well.
4.  write descriptive commit messages for Git including the JIRA ticket reference. Name your branch so that JIRA can detect it.
5.  break up complex code blocks into smaller blocks using line breaks
6.  minimize dead code, commented code, and excess whitespace
7.  These things should all match as nearly as reasonable to assist developers: - URL identifier (eg "this" in this.url.gov or url.gov/this) - view name (Technically, what is returned by getViewName() ) - controller name: thisController - view folder, html, css, and js: /public/views/this/this.html
8.  no inline styles
9.  minimize the use of the id attribute and don't style by id. in fact, don't style by anything except class.
10. control spacing using css, not br tags, space characters, \n, \r, etc
11. indent tags inside of their parents
12. double quote HTML values and single quote javascript values. - var sHtml = '<div class="this is why"></div>';
13. when an html tag has many attributes: - arrange them alphabetically - break at each attribute and line up on the attribute. - for example:

              <a class="blue link"
                 href="google.com"
                 target="_blank">
                   Text inside goes here.
              </a>

Technical stuff, not really code style but things to be aware of:
1 - Keep code DRY. When the same code is duplicated, move it to a common location such as a service or lib module.
2 - No loose code. all code should be wrapped and at most one root function called per file. On the server, prefer main() as the function name for such root functions.
3 - Minimize dependencies. If we can code something easily instead of using a library, do so.
6 - lazy loading is cool, but don't lazy load stuff involved in the initial view.
7 - minimize the number of http calls. use svg and sprite sheets as applicable. Prefer SVG if possible.

b) Refrain from using !important within the CSS

### Hungarian Reference

1.  s: string
2.  o: object
3.  i: Number (long, int, double, etc)
4.  b: boolean
5.  p: Promise
6.  obs: Observable
7.  f: function
8.  v: variant
9.  m: module
10. TitleCase: module or service
11. ALLCAPS: constant, module, or service
12. \$: a DOM or DOM-like object, such as a jQuery or Angular object
13. arr: an array
14. el: a DOM object, specifically excluding it as not a DOM-like object.

    1.  eg `$div = $('div'); elDiv = $div[0];`

15. \_: locally scoped

    1.  Generally only needed if there is some similarly-named, non-local variable.
    1.  eg to distinguish sWord = function() { return \_sWord; }

16. Hungarian identifiers can be stacked, and precedence matters.

    1.  For example, fpsWord(); should be a function which returns a promise resolving to a string.
    1.  When and only when a hungarian identifier is variant, keep in mind the indicator may have two different meanings:
        1.  vso is a variant which may be a string or an object
        2.  vso is a variant which may be a string that represents an object (eg, it can be parsed with JSON.parse)

17. Stacked hungarian remains in downcase. An upcase indicates the end of the Hungarian identifier.

    1.  It's fpsWord(), not fPSWord()

18. Arbitrary hungarian types can be indicated by downcasing.

    1.  mycustomtype is fine, as long as it is a real custom type or class.

19. Long names are not always needed, but sometimes they are.

    1.  A long name is a hungarian identifier + arbitrary descriptive TitleCase naming
    1.  A middle-sized name is a a hungarian identifier + arbitrary undescriptive and/or downcase letters
    1.  Avoid middle-sized names. The hungarian indication is incorrect and the text isn't helpful.
    1.  Short names are preferred when a method is so generic that contextual information doesn't exist. Like a utility.
    1.  Short names suffice when there are no other variables of a given type in context.
    1.  Short names do not suffice when multiple variables of the same type are in the same context.
    1.  Examples: 1. Short: o, s, i, obs 2. Middle-sized: ob, obj, str, int, objold, objnw 3. Long: oPreviousValue, oNewValue, sLetter, sWord, fsHtmlContent

20. Respect third party conventions

    1.  Hungarian is for your codebase, not for theirs (unless they use it)
    2.  Use their syntax and conventional var names.
    3.  Just make a comment referencing where their convention came from.
    4.  For example, use `const fs = require('fs')`
