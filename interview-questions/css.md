1. What is CSS selector specificity and how does it work?

    The browser determines what styles to show on an element depending on the specificity of CSS rules.
    * Inline styles
    * Number of ID selectors
    * Number of classes
    * Number of tags and pseudo-elements

2. How would you approach fixing browser-specific styling issues?​
   * Using normalize.css
   * Using library such as Bootstrap, Tailwind CSS

3. What is different between inline and inline-block?

    D | block | inline-block | inline
    --|-------|--------------|-------
    Size | parent container | Content | content | Content
    Width/height | Yes | Yes | No
    Vertical-align | No | Yes | Yes


4. What options are of the position? when we use it?

    Relative, fixed, absolute, static, sticky
    * Relative/Absolute: Absolute is a specific position relative to its closest position ancestor or initial containing block(html/body).
    * Fixed: Relative to the viewport, always fixed, not move when scrolled
    * Sticky: Sticky is a hybrid of relative and fixed position.

5. Have you ever worked with retina graphics? If so, when and what techniques did you use?​

    Retina is just a marketing term to refer to high resolution screens with a pixel ratio bigger than 1
    Using the attr srcset of HTML5 to load the best image based on user device width