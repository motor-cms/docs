import{_ as n,c as s,o as e,d as a}from"./app.29353c7d.js";const A=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Development version","slug":"development-version","link":"#development-version","children":[]},{"level":2,"title":"Demo / production","slug":"demo-production","link":"#demo-production","children":[]}],"relativePath":"admin-frontend/installation.md","lastUpdated":1668507436000}'),l={name:"admin-frontend/installation.md"},o=a(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h2><p>To install the VueJS admin frontend for the headlines Motor backend, you need the following software installed on your machine:</p><ul><li>Git</li><li>nodejs 18+</li><li>Some terminal software</li></ul><h2 id="development-version" tabindex="-1">Development version <a class="header-anchor" href="#development-version" aria-hidden="true">#</a></h2><div class="language-zsh"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Clone the repository</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone git@github.com:motor-cms/motor-nx-template.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Change into the newly cloned repository</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> motor-nx-template</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Clone the development versions of the respective packages</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir packages</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> packages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git clone git@github.com:motor-cms/motor-nx-core.git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone git@github.com:motor-cms/motor-nx-admin.git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone git@github.com:motor-cms/motor-nx-media.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Install nodejs dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start the development server</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"></span></code></pre></div><h2 id="demo-production" tabindex="-1">Demo / production <a class="header-anchor" href="#demo-production" aria-hidden="true">#</a></h2><p>Soon\u2122</p>`,8),t=[o];function i(p,r,c,d,m,h){return e(),s("div",null,t)}const g=n(l,[["render",i]]);export{A as __pageData,g as default};
