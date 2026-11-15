# fourmation.se

The website of Fourmation, a technical architecture firm in Gothenburg. It is a
static site — plain HTML, CSS and vanilla JavaScript — hosted on GitHub Pages at
[fourmation.se](https://fourmation.se).

There is no build step and no package manager. What is committed to `master` is
exactly what is served.

## Languages

The site exists in Swedish and English as two separate pages, so each version
has its own crawlable URL:

- `index.html` — Swedish (canonical), served at `/`
- `en/index.html` — English, served at `/en/`

The two pages share the same structure and differ only in their text.

## Project structure

| Path | Contents |
|---|---|
| `index.html`, `en/index.html` | The Swedish and English pages |
| `404.html` | Error page, self-contained with its own inline styles |
| `css/tokens.css` | Design tokens copied from `fmtn/design-system` |
| `css/main.css` | The site's stylesheet |
| `js/main.js` | Header scroll state, mobile menu, scroll reveal, scrollspy and hero video |
| `images/`, `fonts/` | Images and self-hosted web fonts |
| `robots.txt`, `sitemap.xml` | Crawler configuration, listing both language URLs |
| `CNAME` | The custom domain for GitHub Pages |

All fonts and images are hosted locally. The only third-party content is the
hero video, embedded from Vimeo with tracking disabled.

## Running locally

Start a local web server from the repository root:

```bash
python3 -m http.server 8123
```

Then open <http://localhost:8123>. The two language pages also work when opened
directly from disk, but `404.html` uses root-absolute paths and needs the server.

## Deployment

GitHub Pages serves the `master` branch. Work is done on a separate branch and
merged to `master` when it is ready to go live — merging is publishing.

## Design tokens

Colours, typography and spacing come from Fourmation's design system, which
lives in the private repository `fmtn/design-system`. `css/tokens.css`
is an unmodified copy of `dist/tokens.css` from a tagged release, and its header
records which tag, commit and date it came from.

To update to a newer release:

1. Read what changed between the two tags. The design system's own README
   describes how; note that design decisions live in `src/design-tokens.json`
   and are not visible in the CSS.
2. Copy `dist/tokens.css` from the new tag over `css/tokens.css` and update the
   tag, commit and date in its header.
3. Update the version reference near the top of `css/main.css`.
4. Update the token values duplicated in `404.html` (listed in a comment at the
   top of that file).

Never edit token values in `css/tokens.css` by hand. To check that the copy
still matches its release:

```bash
diff <(tail -n +13 css/tokens.css) <path-to-design-system>/dist/tokens.css
```

## Making changes

- **Change both language pages.** Keep the same elements in the same order in
  `index.html` and `en/index.html`. A quick check that their structure matches:

  ```bash
  diff <(grep -oE '<[a-z][a-z0-9]*' index.html) <(grep -oE '<[a-z][a-z0-9]*' en/index.html)
  ```

- **Adding a page** means adding it in both languages, adding it to
  `sitemap.xml`, and adding `hreflang` links in the `<head>` of both versions.
- **Keep `404.html` self-contained.** GitHub Pages serves it for every unknown
  path, so it cannot rely on external stylesheets or relative URLs.

## About this README

This file lives in `.github/` rather than the repository root so that it is not
published on the website. GitHub Pages runs Jekyll, which skips dot-directories,
while GitHub still shows the file on the repository page. For the same reason,
do not add a `.nojekyll` file.
