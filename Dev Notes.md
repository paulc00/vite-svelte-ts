# Notes

Switching between horizontal flex and vertical flex based on screen size
<br />

**CSS:**
```css
.container {
  display:flex;
  flex-direction:column;
}

.row-container {
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}

.box {
  border:3px solid #000;
  width:300px;
  height:300px;
  margin-bottom:10px;
}

.box2 {
  width:200px;
  height:200px;
 }

@media only screen and (max-width: 600px) {
  .row-container {
    flex-direction:column;
  }
  
  .box2 {
    width:300px;
    height:300px;
  }
}
```

<br />

**HTML:**
```html
<div class="container">
  <div class="row-container">
    <div class="box1 box">1</div>
    <div class="box2 box">2</div>
  </div>
  <div class="box3 box">3</div>
</div>
```

What about using `.win.btn` and `.tab.btn` instead of `.win-btn` and `.tab-btn`? 

Can we get rounded corners for the window with hard corners for the tabs?

## Vite

### `index.html` and Project Root

One thing you may have noticed is that in a Vite project, `index.html` is front-and-central instead of being tucked away inside public. This is intentional: during development Vite is a server, and index.html is the entry point to your application.

Vite treats `index.html` as source code and part of the module graph. It resolves `<script type="module" src="...">` that references your JavaScript source code. Even inline `<script type="module">` and CSS referenced via `<link href>` also enjoy Vite-specific features. In addition, URLs inside index.html are automatically rebased so there's no need for special `%PUBLIC_URL%` placeholders.

Similar to static http servers, Vite has the concept of a "root directory" which your files are served from. You will see it referenced as `<root>` throughout the rest of the docs. Absolute URLs in your source code will be resolved using the project root as base, so you can write code as if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.

Vite also supports multi-page apps with multiple `.html` entry points.

#### Specifying Alternative Root

Running vite starts the dev server using the current working directory as root. You can specify an alternative root with `vite serve some/sub/dir`. Note that Vite will also resolve its config file (i.e. `vite.config.js`) inside the project root, so you'll need to move it if the root is changed.

### The public Directory

If you have assets that are:

- Never referenced in source code (e.g. `robots.txt`)
- Must retain the exact same file name (without hashing)
- ...or you simply don't want to have to import an asset first just to get its URL

Then you can place the asset in a special `public` directory under your project root. Assets in this directory will be served at root path `/` during dev, and copied to the root of the dist directory as-is.

The directory defaults to `<root>/public`, but can be configured via the publicDir option.

Note that:

- You should always reference public assets using root absolute path - for example, `public/icon.png` should be referenced in source code as `/icon.png`.
- Assets in public cannot be imported from JavaScript.