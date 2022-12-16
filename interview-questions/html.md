1. What kind of things you consider about multiple langues on site ?
   * `lang` attribute in HTML
   * `Texts` in images
   * `The length of sentence`: It is long or short depends on specific language
   * `Locale, Date and currency format`

2. What is different cookie, sessionStorage and localStorage ?

    TD | cookie | localStorage | sessionStorage
    ---|--------|--------------|---------------
    Initiator | Client/Sever | Client | Client
    Expiry | Manually set | Forever |  On Tab
    Accessability | Any window | Any window | Same tab
    Can inject to requests | Yes(through header) | No | No

3. Why CSS normally placed inside head tag and scripts placed before closing body tag?
    Because it is a best practice 
    CSS should be parsed within html when a page loads
    Scripts should be loaded in the end due to script tag blocks HTML parsing, leads to performance issues.

4. What is different when we add async or defer to script tag?

    `async`: When add async the script will be fetched in parallel to HTML parsing and executed when the script is available.
    `defer`: When add defer the script will be fetched in parallel to HTML parsing and executed when the page finished parsing.

5. What are template engines and why we need those?

    Template engines such as ejs, pug, handlebars allow us to inject custom events/filters for manipulating data before display.

6. What is different when we add srcset to the image tag?

    It allows us to serve different images to users depending on their device display width to help increase performance.