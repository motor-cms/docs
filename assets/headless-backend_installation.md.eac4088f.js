import{_ as s,c as n,o as a,d as e}from"./app.29353c7d.js";const A=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Development version","slug":"development-version","link":"#development-version","children":[]},{"level":2,"title":"Demo / production","slug":"demo-production","link":"#demo-production","children":[]}],"relativePath":"headless-backend/installation.md","lastUpdated":1668507436000}'),l={name:"headless-backend/installation.md"},o=e(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h2><p>To install the headless Motor backend from the template repository, you need the following software installed on your machine:</p><ul><li>Git</li><li>Docker</li><li>Some terminal software</li></ul><h2 id="development-version" tabindex="-1">Development version <a class="header-anchor" href="#development-version" aria-hidden="true">#</a></h2><div class="language-zsh"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Clone the repository</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone git@github.com:motor-cms/motor-template.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Change into the newly cloned repository</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> motor-template</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Copy example environment file</span></span>
<span class="line"><span style="color:#A6ACCD;">cp .env.example .env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Clone the development versions of the respective packages</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir packages</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> packages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git clone -b 2.0 git@github.com:motor-cms/motor-core.git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone -b 2.0 git@github.com:motor-cms/motor-admin.git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone -b 2.0 git@github.com:motor-cms/motor-media.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Change into the docker subdirectory</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ../docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start docker containers</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose -f docker-compose-dev.yml -p motor-nx-dev up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># The following commands are to be run in the container shell</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it motor-nx-dev-app-1 /bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan migrate</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan db:seed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Update composer dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">COMPOSER=composer-dev.json composer update</span></span>
<span class="line"></span></code></pre></div><h2 id="demo-production" tabindex="-1">Demo / production <a class="header-anchor" href="#demo-production" aria-hidden="true">#</a></h2><div class="language-zsh"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Clone the repository</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone git@github.com:motor-cms/motor-template.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Change into the newly cloned repository</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> motor-template</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Copy example environment file</span></span>
<span class="line"><span style="color:#A6ACCD;">cp .env.example .env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Change into the docker subdirectory</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Start docker containers</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose -p motor-nx up -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Run the app container and, from within the container shell, seed the database</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it motor-nx-app-1 /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># This happens in the container shell</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan db:seed</span></span>
<span class="line"></span></code></pre></div>`,8),p=[o];function t(c,i,r,d,h,m){return a(),n("div",null,p)}const C=s(l,[["render",t]]);export{A as __pageData,C as default};
