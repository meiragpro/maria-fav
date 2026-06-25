# Maria's Fav

A simple affiliate blog built with [Astro](https://astro.build) and hosted free on Netlify.

---

## Run it locally

```powershell
cd C:\Users\Gui\maria-fav
npm install        # first time only
npm run dev        # preview at http://localhost:4321
```

## Add a new product post

1. Create a new file in `src/content/posts/`, e.g. `my-new-pick.md`.
2. Copy the top section ("frontmatter") from an existing post and fill it in:

   ```markdown
   ---
   title: "Product name"
   description: "One-line summary shown on the homepage."
   image: "/images/my-photo.jpg"
   amazonUrl: "https://www.amazon.com/dp/XXXX?tag=YOUR-AFFILIATE-TAG"
   price: "$49"
   rating: 5
   pubDate: 2026-06-24
   draft: false
   ---

   Write your thoughts about the product here.
   ```

3. Drop the product photo into `public/images/` and point `image:` at it
   (e.g. `/images/my-photo.jpg`). Or leave `/images/placeholder.svg` for now.
4. Save. The homepage updates automatically while `npm run dev` is running.

> Set `draft: true` to keep a post hidden until it's ready.

## Get your Amazon affiliate links

Once your Amazon Associates account is approved, log in to Amazon, find the
product, and use the **SiteStripe** bar at the top of the page → "Get link / Text"
→ paste that URL into `amazonUrl`. It already contains your affiliate tag.

## Deploy to Netlify

**Option A — drag & drop (fastest first test):**
1. Run `npm run build` (creates a `dist/` folder).
2. Go to https://app.netlify.com/drop and drag the `dist` folder in.
3. You get a live link instantly.

**Option B — Git auto-deploy (recommended long term):**
1. Push this folder to a GitHub repo.
2. In Netlify: "Add new site" → "Import from Git" → pick the repo.
3. Netlify reads `netlify.toml` automatically. Click Deploy.
4. From then on, every `git push` republishes the site in ~30 seconds.

## Affiliate disclosure

The required "As an Amazon Associate I earn from qualifying purchases" notice is
already in the site footer (`src/layouts/Layout.astro`). Keep it there.
