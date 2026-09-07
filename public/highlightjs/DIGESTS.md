## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"
  integrity="sha384-KnPvYPx1poT554tHDV1nuYV9sOkh4cZPBvLZQlXgJmoRQZPdgQNwL50/xq9kynp9"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/languages/go.min.js"
  integrity="sha384-orYKHAs3chK3oDMQLy5ywrzoY8z9zvzfmNIjmVxKXioAUtwDhP+xf6THWYSI/43Y"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-mxaIAuwA1l6te9LMbWwt9PNtaoRiwRk1/345TMC2UQtNTi1kjbhizCrSxaHAegHF /es/languages/javascript.js
sha384-r8C5XKdITWu1xHcHMIfmqgbWZTa0w/MPyAykL+WctwUoeTsEHBo5+jSSoHQ+qFy6 /es/languages/javascript.min.js
sha384-N4p1ha5k4CtCzQcGVUCnJIExAIOcg1I459dN2Ji7oxtWzdPRPFKB/0w01ice9b9H /es/languages/typescript.js
sha384-h0Era/sa5FCAtyCMoAbbbX9lB98KRHNuiO6RNIuiyOP8uOQ7YU9vNT7iVm9SP47K /es/languages/typescript.min.js
sha384-5vRFHgNazcqNV/wYjVV73vv/mmcguTGfUhutWTMzUdixVclmxoe32uu3C1i5U+b3 /languages/javascript.js
sha384-luOC72UPK+5vw8AmdAZNVaFIY8IN7MayLzqcVcnUdCCVug/rAyhze5dpWklUZW8b /languages/javascript.min.js
sha384-ZIObMe4G2tCNSeZmbuu/eNLQi+uWHn81EkG/LaLGRvHUzPfMORf03i0D+oBc/G0u /languages/typescript.js
sha384-s6+yoF8EeHfbf62mROdPSkW8JZRsupwEwDOPS8z4eH7V9s3T8QTYRzDgQumYraZE /languages/typescript.min.js
sha384-tLolLOSUaBDBodgpWkSz5hVP+lYPi+ooMs5PuDOU18mNwxLSuJAMvZfNhNkPiOOA /highlight.js
sha384-J3IGVEaqfplOXlNYtN5pvYUMZh5xUSStZ4jkoMiCjAjPlot6pDlQkpey/7gI7aOU /highlight.min.js
```

