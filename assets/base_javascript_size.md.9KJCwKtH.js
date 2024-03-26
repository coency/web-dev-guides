import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.CxEjwGBq.js";const g=JSON.parse('{"title":"尺寸","description":"","frontmatter":{},"headers":[],"relativePath":"base/javascript/size.md","filePath":"base/javascript/size.md","lastUpdated":1703567724000}'),n={name:"base/javascript/size.md"},l=e(`<h1 id="尺寸" tabindex="-1">尺寸 <a class="header-anchor" href="#尺寸" aria-label="Permalink to &quot;尺寸&quot;">​</a></h1><h2 id="元素偏移量offset系列" tabindex="-1">元素偏移量offset系列 <a class="header-anchor" href="#元素偏移量offset系列" aria-label="Permalink to &quot;元素偏移量offset系列&quot;">​</a></h2><p>元素整体区域宽高，包括元素边框border、内边距padding，不包括溢出部分</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.offsetHeight;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.offsetWidth;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//元素位置：元素左边界到定位父元素左边界距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.offsetLeft;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//元素位置：元素顶部边界到定位父元素顶部边界距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.offsetTop;</span></span></code></pre></div><h2 id="元素可视区client系列" tabindex="-1">元素可视区client系列 <a class="header-anchor" href="#元素可视区client系列" aria-label="Permalink to &quot;元素可视区client系列&quot;">​</a></h2><p>元素内部区域宽高，包含内边距padding，不包括边框border、溢出部分</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.clientHeight;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.clientWidth;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//元素左边框border-left大小</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.clientLeft;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//元素上边框border-top大小</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.clientTop;</span></span></code></pre></div><h2 id="元素滚动scroll系列" tabindex="-1">元素滚动scroll系列 <a class="header-anchor" href="#元素滚动scroll系列" aria-label="Permalink to &quot;元素滚动scroll系列&quot;">​</a></h2><p>元素内容实际宽高，包括溢出部分、伪元素、内边距padding，但不包括边框border</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.scrollHeight</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.scrollWidth</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//元素内容左边（卷起来的）到元素视口可见内容（的左边）的距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.scrollLeft</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//元素内容顶部（卷起来的）到元素视口可见内容（的顶部）的距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.scrollTop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//当scrollHeight - scrollTop == clientHeight时，说明垂直滚动条已经滚动到底；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//当scrollWidth - scrollLeft == clientWidth时，说明水平滚动条已经滚动到底；</span></span></code></pre></div><h2 id="文档可视区client系列" tabindex="-1">文档可视区client系列 <a class="header-anchor" href="#文档可视区client系列" aria-label="Permalink to &quot;文档可视区client系列&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//不包含滚动条</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.documentElement.clientWidth;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.documentElement.clientHeight;</span></span></code></pre></div><h2 id="文档可视区scroll系列" tabindex="-1">文档可视区scroll系列 <a class="header-anchor" href="#文档可视区scroll系列" aria-label="Permalink to &quot;文档可视区scroll系列&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.documentElement.scrollLeft;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.documentElement.scrollTop;</span></span></code></pre></div><h2 id="窗口宽高inner系列" tabindex="-1">窗口宽高inner系列 <a class="header-anchor" href="#窗口宽高inner系列" aria-label="Permalink to &quot;窗口宽高inner系列&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 包括滚动条（如果有的话），但不包括工具栏和滚动条以外的部分。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.innerWidth;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.innerHeight;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 包括所有的界面元素，如窗口边框、工具栏、滚动条和状态栏。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.outerWidth;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.outerHeight;</span></span></code></pre></div><h2 id="窗口滚动scroll系列" tabindex="-1">窗口滚动scroll系列 <a class="header-anchor" href="#窗口滚动scroll系列" aria-label="Permalink to &quot;窗口滚动scroll系列&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//返回文档水平方向滚动的距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.scrollX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.pageXOffset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//返回文档在垂直方向滚动的距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.scrollY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.pageYOffset</span></span></code></pre></div><h2 id="窗口相对于整个屏幕左上角的距离" tabindex="-1">窗口相对于整个屏幕左上角的距离 <a class="header-anchor" href="#窗口相对于整个屏幕左上角的距离" aria-label="Permalink to &quot;窗口相对于整个屏幕左上角的距离&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.screenX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.screenLeft</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.screenY</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.screenTop</span></span></code></pre></div><h2 id="元素相对于视口左上角的距离" tabindex="-1">元素相对于视口左上角的距离 <a class="header-anchor" href="#元素相对于视口左上角的距离" aria-label="Permalink to &quot;元素相对于视口左上角的距离&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBoundingClientRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>标准盒模型：</p><ul><li>元素宽高等于width/height + padding + border-width；</li><li>x坐标/ top等于元素顶部边界到视口顶部边界的距离，不包括padding、border的值；</li><li>y坐标/ left等于元素左边界到视口左边界的距离，不包括padding、border的值；</li><li>right等于元素右边界到视口左边界的距离，包括padding、border的值；</li><li>bottom等于元素底部边界到视口顶部边界的距离，包括padding、border；</li></ul><p>怪异盒模型：</p><ul><li>元素宽高等于 width/height；</li><li>x坐标/ top等于元素顶部边界到视口顶部边界的距离，不包括padding、border的值；</li><li>y坐标/ left等于元素左边界到视口左边界的距离，不包括padding、border的值；</li><li>right等于元素右边界到视口左边界的距离，不包括padding、border的值；</li><li>bottom等于元素底部边界到视口顶部边界的距离，不包括padding、border；</li></ul></div><h2 id="鼠标相对于视口左上角的距离" tabindex="-1">鼠标相对于视口左上角的距离 <a class="header-anchor" href="#鼠标相对于视口左上角的距离" aria-label="Permalink to &quot;鼠标相对于视口左上角的距离&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.clientX</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.clientY</span></span></code></pre></div><h2 id="鼠标相对于整个屏幕左上角的距离" tabindex="-1">鼠标相对于整个屏幕左上角的距离 <a class="header-anchor" href="#鼠标相对于整个屏幕左上角的距离" aria-label="Permalink to &quot;鼠标相对于整个屏幕左上角的距离&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.screenX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.screenY</span></span></code></pre></div><h2 id="鼠标相对于整个文档的距离" tabindex="-1">鼠标相对于整个文档的距离 <a class="header-anchor" href="#鼠标相对于整个文档的距离" aria-label="Permalink to &quot;鼠标相对于整个文档的距离&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.pageX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.pageY</span></span></code></pre></div><h2 id="鼠标相对于触发事件的元素的边界的距离" tabindex="-1">鼠标相对于触发事件的元素的边界的距离 <a class="header-anchor" href="#鼠标相对于触发事件的元素的边界的距离" aria-label="Permalink to &quot;鼠标相对于触发事件的元素的边界的距离&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.offsetX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.offsetY</span></span></code></pre></div><h2 id="鼠标相对于上次事件时鼠标的距离" tabindex="-1">鼠标相对于上次事件时鼠标的距离 <a class="header-anchor" href="#鼠标相对于上次事件时鼠标的距离" aria-label="Permalink to &quot;鼠标相对于上次事件时鼠标的距离&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.movementX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.movementY</span></span></code></pre></div>`,33),t=[l];function p(h,c,d,o,r,k){return i(),a("div",null,t)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};
