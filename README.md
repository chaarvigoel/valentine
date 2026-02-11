# Be My Valentine 💘

A tiny website to ask someone to be your Valentine. No domain needed.

---

## Share it online (free, no domain)

### Option 1: Netlify Drop (easiest — ~2 minutes)

1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**  
2. Drag and drop your **entire `valentine` folder** (the one containing `index.html`, `style.css`, `script.js`) onto the page.  
3. Netlify will give you a link like:  
   `https://something-random-123.netlify.app`  
4. Send that link to your boyfriend. No account required for a quick deploy.

To keep the same URL and manage it later, sign up for a free Netlify account and claim the site.

---

### Option 2: GitHub Pages (free, stable URL)

1. Create a **new repository** on GitHub (e.g. `valentine`).  
2. Upload the contents of this folder (e.g. drag-and-drop or use Git).  
3. In the repo: **Settings → Pages**.  
4. Under **Source**, choose **Deploy from a branch**.  
5. Branch: **main**, folder: **/ (root)**. Save.  
6. Your site will be at:  
   `https://YOUR_USERNAME.github.io/valentine/`  
   (replace `YOUR_USERNAME` and `valentine` with your GitHub username and repo name.)

---

### Option 3: Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in (e.g. with GitHub).  
2. Click **Add New → Project** and import your repo, or drag the folder.  
3. Deploy. You’ll get a link like:  
   `https://valentine-xxx.vercel.app`

---

## Run it locally

Open `index.html` in your browser, or use a simple server:

```bash
cd /Users/chaarvigoel/Desktop/valentine
python3 -m http.server 8000
```

Then visit: **http://localhost:8000**

---

## Personalize it

- **index.html**: Change the title, subtitle, and the message after they say yes.  
- **style.css**: Adjust colors in the `:root` section if you want a different vibe.

No domain or payment needed for any of the options above.
