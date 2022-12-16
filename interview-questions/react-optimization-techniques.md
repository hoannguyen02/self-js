1. Server side rendering
2. Compression on web server like Gzip
3. Using CDN(content delivery networks) for static pages to reduce loads time: Quickly transfer assets(html pages, js/stylesheets, images, etc)
4. Using function/stateless components
5. Using lazy-loading to split chunks
6. Using caching: useCallback/useMemo
7. Keep component state local where necessary(shouldn't push all state to global state)
8. Remove unused/unnecessary dependency
9. Using using fragments(<></>) to remove additional elements
10. Spreading props on DOM elements, should set specific props instead
11. Avoid inline function definition in render function
12. Avoid using index as key for map
13. Avoid props in initial states, using it directly instead(shouldn't assign it to state)