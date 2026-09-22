# fourmation.se

Fourmation's website. Static HTML, CSS and vanilla JavaScript, served by GitHub
Pages. There is no build step and no package manager: what is committed to the
deploying branch is exactly what is served.

Two language versions as two separate pages — `index.html` (Swedish, canonical)
and `en/index.html` (English) — rather than one page with a runtime language
switch. That keeps both versions crawlable and indexable on their own URL.

## Deploying

`master` is the branch GitHub Pages serves, and `CNAME` points the custom domain
at it. Work happens on a feature branch and is merged to `master` when it is
ready to be public, so `master` and the live site are the same thing. Check what
is actually deployed before assuming the repo and the site agree.

## Running it locally

```
python3 -m http.server 8123
```

`index.html` and `en/index.html` also work opened straight off disk over
`file://` — their asset and cross-language links are deliberately relative so
that works. **`404.html` does not.** Its paths are root-absolute on purpose
(see below), so it needs the server.

## What is here

| | |
|---|---|
| `index.html`, `en/index.html` | The two language versions |
| `404.html` | Error page, self-contained by design |
| `css/tokens.css` | Vendored design tokens — **do not hand-edit** |
| `css/main.css` | The hand-written stylesheet |
| `js/main.js` | Header scroll state, mobile menu, scroll reveal, scrollspy, hero video |
| `images/`, `fonts/` | Local assets; no external font or image CDN |
| — | The only third party is the hero video (Vimeo, loaded with `dnt=1`, skipped on localhost and for `prefers-reduced-motion`) |
| `robots.txt`, `sitemap.xml` | Both language URLs, with hreflang alternates |
| `CNAME` | The custom domain. GitHub Pages consumes it and does not serve it |

## The tokens come from another repository

`css/tokens.css` is a verbatim copy of `dist/tokens.css` from a tagged release of
`fmtn/design-system`. Its header records the tag, the commit and the date, and
carries a command that verifies the copy still matches that tag. To update it,
copy the file from a newer tag and update those header lines — never edit values
in place, or the site and the system drift silently.

```
diff <(tail -n +13 css/tokens.css) <path-to-design-system>/dist/tokens.css
```

`css/main.css` names its own version reference near the top; keep it in step.

Before copying, work out what actually changed. From v0.10.0 the system ships
`dist/manifest.json` — every token path, every rule path and every asset, with
its type — so diffing two tags' copies of that file says what moved. Note what
it does **not** say: it lists shapes, not values, so a colour that changes while
keeping its name does not appear there. That has happened (the status colours in
v0.9.2). The values still have to be diffed:

```
diff <(git show <old-tag>:dist/tokens.css) <(git show <new-tag>:dist/tokens.css)
```

Most releases turn out not to touch this site at all — the design system also
serves decks, CVs and a portal, and most of what it adds belongs to those.

## Three rules that span more than one file

**The two language pages stay structurally in sync.** Same elements in the same
order; only the text differs. A change to one is a change to both. The cheap
check is that their tag sequences are identical:

```
diff <(grep -oE '<[a-z][a-z0-9]*' index.html) <(grep -oE '<[a-z][a-z0-9]*' en/index.html)
```

**`404.html` carries its own copy of the tokens it uses.** GitHub Pages serves
that one file for every unmatched path, so it can depend on no external
stylesheet and no relative URL — a page whose whole job is to appear when a URL
is wrong should not itself need a URL to resolve. The cost is the repo's only
duplicated token values, listed in a comment at the top of the file. When a token
changes in `css/tokens.css`, change it there too.

**Adding a page means adding it twice.** Once per language, plus an entry in
`sitemap.xml` and an hreflang link in both pages' `<head>`.

## Why this file lives in `.github/`

GitHub Pages serves the repository root, so a `README.md` there would be public
at `fourmation.se/README.md`. Jekyll — which is on, because there is no
`.nojekyll` — excludes dot-directories from the build, so this path is not
served, while GitHub still shows the file on the repository landing page.

Verified against the live site: `/robots.txt` returns 200, `/.gitignore` returns
404, and both are tracked in the deployed branch. **Do not add `.nojekyll`** — the
Jekyll pass is what keeps this file out of the published output.
