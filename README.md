# TrucoTab

Marcador de truco open source ;)

## Development

Requires Node.js and npm.

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # production build into dist/
npm run preview   # serve the dist/ build locally
```

`npm run sw` builds and previews in one step. The service worker
(`public/sw.js`) only runs in a built app, so use this to test offline
and PWA behavior.

## Deployment

TrucoTab is a static Vite app hosted on **Netlify**. Deploys are driven by
Netlify's GitHub integration; there is no deploy script, GitHub Action or
`netlify.toml` in this repo.

- **Production:** every push to `master` (including merged pull requests)
  triggers a Netlify build and publishes it.
- **Deploy previews:** every pull request gets its own preview at
  `https://deploy-preview-<PR number>--trucotab.netlify.app`. Netlify posts
  the link on the PR and adds a check to its commits.
- **Build settings** live in the Netlify dashboard, not in the repo:
  Netlify project `trucotab` → Project configuration → Build & deploy. They
  should be the Vite defaults: build command `npm run build`, publish
  directory `dist`.

Dashboard: https://app.netlify.com/projects/trucotab

### Releasing

1. Merge or push your changes to `master`.
2. Bump the version (`npm version minor` or `npm version patch`) and push
   the commit and tag: `git push origin master --follow-tags`.
3. Watch the deploy in the Netlify dashboard, then check the live site.

### Troubleshooting

- **Deploy didn't start:** confirm the push reached `master` on GitHub and
  that the Netlify GitHub app still has access to the repo.
- **Build fails on Netlify but works locally:** compare the Node version in
  the Netlify build log with your local `node --version`. You can pin it
  with a `NODE_VERSION` environment variable in the Netlify dashboard.
- **Users still see the old version after a deploy:** pages load from the
  network first, and the service worker only serves its cached copy when
  offline. Static files it has cached (manifest, icons, OG image) are served
  from cache and refreshed in the background, so they update on the next
  load. Bump `CACHE_NAME` in `public/sw.js` to force all cached files to
  refresh.
