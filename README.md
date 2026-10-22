# boydroid.nl

Static website for Boydroid, built with [Astro](https://astro.build) and Tailwind CSS. Dutch at `/`, English at `/en/`.

## Run locally

```sh
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # outputs the static site to dist/
npm run preview    # serves dist/ like production
npm run check      # type-check .astro files and content
```

Or serve the build with nginx: `npm run build && docker compose up` → http://localhost:8003

## Editing content

| What | Where |
| --- | --- |
| Client logos in the carousel | `src/content/clients.yaml` (logo files in `src/assets/clients/`). `current: false` hides a client. |
| Apps / portfolio | One folder per app: `src/content/apps/<slug>/` with `nl.md`, `en.md` and its images (referenced as `./icon.png` etc.). `featured: true` shows it on the home page, `draft: true` hides it. |
| Page texts | `src/views/*.astro` (each has a `copy = { nl, en }` block at the top) |
| Menu, footer, buttons | `src/i18n/index.ts` |
| Contact details | `contact` in `src/i18n/index.ts` |
| Colours / theme | tokens at the top of `src/styles/global.css` (light + dark) |
| Old-URL redirects | `public/_redirects` (Cloudflare Pages format) |

## Deploying (VPS with nginx)

The build is fully static. `npm run deploy` (shorthand for `DEPLOY_TARGET=boydroid@37.97.173.191:/home/boydroid/docker/boydroid/html ./deploy/deploy.sh`) builds and rsyncs `dist/` into the `html` folder the nginx container serves. Mount `deploy/nginx.conf` as `/etc/nginx/conf.d/default.conf` (which also holds the old-URL redirects, since nginx ignores `public/_redirects`). SWAG proxies the domain to that container via `deploy/swag/boydroid.subfolder.conf` (the `location /` block in SWAG's default server).
