---
title: SVG Custom Flatties
date: 2013-08-18
summary: Playing with icons in SVG instead of icons fonts, for more stylistic control
tags:
  - tinkerings
---

<style>
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.group::after,.bucket::after,.g::after{clear:both;content:"";display:table}html{background:#fff;color:#535353;font-family:"canada-type-gibson", serif;font-size:16px;line-height:1.75}body{background:#ffffff;font-size:100%;font-weight:300}@media screen and (min-width: 1024px){body{font-size:125%}}ul,p{margin-bottom:32px;margin-top:0}ul,li{list-style:none;padding:0}li{margin-bottom:24px;margin-top:0}h1,.h1,h2,.h2,h3,.h3,h4,.h4{color:#535353;font-family:"canada-type-gibson", serif;font-weight:600;line-height:1.5;margin-bottom:8px;margin-top:0}h1,.h1{font-size:140%}@media screen and (min-width: 1024px){h1,.h1{font-size:200%}}h2,.h2{font-size:130%}@media screen and (min-width: 1024px){h2,.h2{font-size:150%}}h3,.h3{font-size:120%}@media screen and (min-width: 1024px){h3,.h3{font-size:125%}}h4,.h4{font-size:110%}a{color:#b51f24;position:relative;text-decoration:none;transition:color 0.3s linear}a::before,a::after{background:#a5a5a5;content:"";height:1px;left:0;opacity:0;position:absolute;width:100%;transition:opacity 0.3s, -webkit-transform 0.3s;transition:opacity 0.3s, transform 0.3s;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}a::after{bottom:0;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px)}a::before{top:0;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}a:hover,a:focus{color:#df4247}a:hover::after,a:focus::after{opacity:1;-webkit-transform:translateY(3px);-ms-transform:translateY(3px);transform:translateY(3px)}a:hover::before,a:focus::before{opacity:1;-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px)}strong{font-weight:900}img{height:auto;max-width:100%}.bucket--flag{display:table}.bucket--flag .bucket-content{vertical-align:middle}.bucket-content{display:table-cell;width:10000px}.bucket-media{float:left;margin-right:32px}.bucket-media>img{display:block;max-width:none}.card{background:#ffffff;border:1px solid #bfbfbf;padding:32px;position:relative}.cell,.cell--s{margin-left:auto;margin-right:auto;max-width:1024px;position:relative}.cell--s{max-width:700px}footer{border-top:1px solid #bfbfbf;font-size:75%;padding-top:32px;text-align:center}.g{display:block;margin-left:-20px;margin-right:-20px}.g-b{box-sizing:border-box;float:left;margin:0;padding-left:20px;padding-right:20px;width:100%}.g-b--center{display:block;float:none;margin:0 auto}.g-b--1of12{width:8.333%}.g-b--2of12{width:16.6667%}.g-b--3of12{width:25%}.g-b--4of12{width:33.3333%}.g-b--5of12{width:41.666%}.g-b--6of12{width:50%}.g-b--7of12{width:58.333%}.g-b--8of12{width:66.6667%}.g-b--9of12{width:75%}.g-b--10of12{width:83.3333%}.g-b--11of12{width:91.666%}@media screen and (min-width: 480px){.g-b--s--1of12{width:8.333%}.g-b--s--2of12{width:16.6667%}.g-b--s--3of12{width:25%}.g-b--s--4of12{width:33.3333%}.g-b--s--5of12{width:41.666%}.g-b--s--6of12{width:50%}.g-b--s--7of12{width:58.333%}.g-b--s--8of12{width:66.6667%}.g-b--s--9of12{width:75%}.g-b--s--10of12{width:83.3333%}.g-b--s--11of12{width:91.666%}}@media screen and (min-width: 760px){.g-b--m--1of12{width:8.333%}.g-b--m--2of12{width:16.6667%}.g-b--m--3of12{width:25%}.g-b--m--4of12{width:33.3333%}.g-b--m--5of12{width:41.666%}.g-b--m--6of12{width:50%}.g-b--m--7of12{width:58.333%}.g-b--m--8of12{width:66.6667%}.g-b--m--9of12{width:75%}.g-b--m--10of12{width:83.3333%}.g-b--m--11of12{width:91.666%}}@media screen and (min-width: 1024px){.g-b--l--1of12{width:8.333%}.g-b--l--2of12{width:16.6667%}.g-b--l--3of12{width:25%}.g-b--l--4of12{width:33.3333%}.g-b--l--5of12{width:41.666%}.g-b--l--6of12{width:50%}.g-b--l--7of12{width:58.333%}.g-b--l--8of12{width:66.6667%}.g-b--l--9of12{width:75%}.g-b--l--10of12{width:83.3333%}.g-b--l--11of12{width:91.666%}}header{background:#ffffff;border-bottom:1px solid #bfbfbf;font-size:75%;padding-top:32px;text-align:center}.row{overflow:hidden;padding:0 32px}.row--a{background:#f5f5f5}.well{margin-bottom:32px;margin-top:32px}.well--l{margin-bottom:48px;margin-top:48px}.bc-white{background:#ffffff}.db{display:block}.di{display:inline}.dib{display:inline-block}.dn{display:none}.lh1{line-height:1}.maxs{margin:16px}.mas{margin:24px}.mam{margin:32px}.mal{margin:48px}.maxl{margin:64px}.mbf{margin-bottom:0}.mbxs{margin-bottom:16px}.mbs{margin-bottom:24px}.mbm{margin-bottom:32px}.mbl{margin-bottom:48px}.mbxl{margin-bottom:64px}.mhc{margin-left:auto;margin-right:auto}.mlf{margin-left:0}.mlxs{margin-left:16px}.mls{margin-left:24px}.mlm{margin-left:32px}.mll{margin-left:48px}.mrf{margin-right:0}.mrxs{margin-right:16px}.mrs{margin-right:24px}.mrm{margin-right:32px}.mrl{margin-right:48px}.mtf{margin-top:0}.mtxs{margin-top:16px}.mts{margin-top:24px}.mtm{margin-top:32px}.mtl{margin-top:48px}.mtxl{margin-top:64px}.oh{overflow:hidden}.paxs{padding:16px}.pas{padding:24px}.pam{padding:32px}.pal{padding:48px}.paxl{padding:64px}@media screen and (min-width: 760px){.pal_m{padding:48px}}.pbf{padding-bottom:0}.pbxs{padding-bottom:16px}.pbs{padding-bottom:24px}.pbm{padding-bottom:32px}.pbl{padding-bottom:48px}.pbxl{padding-bottom:64px}@media screen and (min-width: 760px){.pbl_m{padding-bottom:48px}}.plf{padding-left:0}.plxs{padding-left:16px}.pls{padding-left:24px}.plm{padding-left:32px}.pll{padding-left:48px}@media screen and (min-width: 760px){.pll_m{padding-left:48px}}.prf{padding-right:0}.prxs{padding-right:16px}.prs{padding-right:24px}.prm{padding-right:32px}.prl{padding-right:48px}@media screen and (min-width: 760px){.prl_m{padding-right:48px}}.ptf{padding-top:0}.ptxs{padding-top:16px}.pts{padding-top:24px}.ptm{padding-top:32px}.ptl{padding-top:48px}.ptxl{padding-top:64px}@media screen and (min-width: 760px){.ptl_m{padding-top:48px}}.fl{float:left}.fr{float:right}.poa{position:absolute}.pof{position:fixed}.por{position:relative}.pos{position:static}.ra{border-radius:50%}.ram{border-radius:3px}.ran{border-radius:0}.tac{text-align:center}.tal{text-align:left}@media screen and (min-width: 760px){.tac_m{text-align:center}}.c-davyGrey{color:#535353}.tfb{font-family:"canada-type-gibson", serif}.tfh{font-family:"canada-type-gibson", serif}.tsxs{font-size:60%}.tss{font-size:75%}.tsm{font-size:90%}.tsl{font-size:115%}.tsxl{font-size:150%}.tsxxl{font-size:225%}.tsxxxl{font-size:800%}.tsi{font-style:italic}.ttu{text-transform:uppercase}.twb{font-weight:700}.twl{font-weight:300}.twn{font-weight:400}.z1{z-index:1}@media screen and (min-width: 760px){.split{display:-webkit-flex;display:-ms-flexbox;display:flex}}@media screen and (min-width: 760px){.split-item{-webkit-flex:0 1 50%;-ms-flex:0 1 50%;flex:0 1 50%}}@media screen and (min-width: 760px){.split--center{-webkit-align-items:center;-ms-flex-align:center;align-items:center}}@media screen and (min-width: 760px){.trio{display:-webkit-flex;display:-ms-flexbox;display:flex}}@media screen and (min-width: 760px){.trio-item{-webkit-flex:0 1 33.333%;-ms-flex:0 1 33.333%;flex:0 1 33.333%}}@media screen and (min-width: 760px){.trio--center{-webkit-align-items:center;-ms-flex-align:center;align-items:center}}.title-bg{bottom:0;left:0;position:absolute;right:0;top:0;z-index:0}.title-bg--fixed{position:fixed}.list-bulleted li{list-style:square;margin-left:1em}.explanation{margin:2em auto 0;max-width:700px;width:87.5%}svg{height:100px;margin:0 1em 1em 0;width:100px}svg:hover .flatties-bg,svg:hover .flatties-bg--email,svg:hover .flatties-bg--beer,svg:hover .flatties-bg--coffee{fill-opacity:0.6}.flatties-bg,.flatties-bg--email,.flatties-bg--beer,.flatties-bg--coffee{fill:#e8c04f;fill-opacity:0.8}.flatties-coffee-handle{fill:#ab8518}
</style>

<!--?xml version="1.0" encoding="utf-8"?-->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
<g id="BG_-_circle_99_">
<g>
<circle fill="#A4BE60" cx="24" cy="24" r="24"></circle>
</g>
</g>
<g id="Envelope_base">
<g>
<path fill="#FFFFFF" d="M37,14H11c-1.104,0-2,0.896-2,2v17c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V16
C39,14.896,38.104,14,37,14z"></path>
</g>
</g>
<g id="Shade">
<g>
<path fill="#E8E8E8" d="M24,28L9,16v17c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V16L24,28z"></path>
</g>
</g>
<g id="Crease_1_">
<g>
<polygon fill="#C1C0C0" points="24,26 9.11,16 23.982,28.519 38.819,16     "></polygon>
</g>
</g>
</svg>
<!--?xml version="1.0" encoding="utf-8"?-->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
<g id="BG_-_circle_79_">
<g>
<circle fill="#D3524D" cx="24" cy="24" r="24"></circle>
</g>
</g>
<g id="Glass_3_" opacity="0.6392">
<g>
<path fill="#FFFFFF" d="M28.723,35.714L31,15H16l2.277,20.714c0,0-0.852,0.63-1.121,1.179c-0.29,0.593,0,1.107,0,1.107h12.723
c0,0,0.287-0.54,0-1.107C29.588,36.316,28.723,35.714,28.723,35.714z"></path>
</g>
</g>
<g id="Peroni">
<g>
<polygon fill="#D68333" points="18,18 20,36 27,36 29,18     "></polygon>
</g>
</g>
<g id="Head">
<g>
<path fill="#FFFFFF" d="M23.663,15C20.859,15,18,15,18,15v3h11v-3C29,15,26.357,15,23.663,15z"></path>
</g>
</g>
<g id="Bubbles_1_" opacity="0.302">
<g>
<path fill="#FFFFFF" d="M23.5,32c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5S23.776,32,23.5,32z M22,28
c-0.553,0-1,0.447-1,1s0.447,1,1,1s1-0.447,1-1S22.553,28,22,28z M24,24c-0.553,0-1,0.447-1,1s0.447,1,1,1s1-0.447,1-1
S24.553,24,24,24z"></path>
</g>
</g>
</svg>
<!--?xml version="1.0" encoding="utf-8"?-->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
<g id="BG_-_circle_52_">
<g>
<circle fill="#D3524C" cx="24" cy="24" r="24"></circle>
</g>
</g>
<g id="Handle_9_">
<g>
<path fill="#C8C7C7" d="M30.82,23.592v2.364c0,0,4.762-1.22,4.762,1.183c0,7.095-11.905,7.058-11.905,7.058v2.365
c0,0,14.323,0,14.323-9.423C38,21.227,30.82,23.592,30.82,23.592z"></path>
</g>
</g>
<g id="Cup">
<g>
<path fill="#F5F6F6" d="M32,21H13c0,0,0,2.156,0,2.573C13,31.399,15.381,39,22.523,39c7.106,0,9.524-7.601,9.524-15.427
C32.048,23.083,32,21,32,21z"></path>
</g>
</g>
<g id="Steam" opacity="0.502">
<g>
<path fill="#F5F6F6" d="M24.887,11.873c1.551-3.309-2.487-4.885-2.487-4.885s1.992,2.226,0.354,4.229
c-0.715,0.874-2.232,1.976-2.352,3.108c-0.379,3.6,3.71,5.227,3.71,5.227s-1.823-1.265-1.256-4.414
C23.047,14.079,24.455,12.796,24.887,11.873z"></path>
</g>
</g>
</svg>
</div>
<!--?xml version="1.0" encoding="utf-8"?-->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
<g id="BG_-_circle_99_">
<g>
<circle class="flatties-bg--email" fill="#A4BE60" cx="24" cy="24" r="24"></circle>
</g>
</g>
<g id="Envelope_base">
<g>
<path fill="#FFFFFF" d="M37,14H11c-1.104,0-2,0.896-2,2v17c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V16
C39,14.896,38.104,14,37,14z"></path>
</g>
</g>
<g id="Shade">
<g>
<path fill="#E8E8E8" d="M24,28L9,16v17c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V16L24,28z"></path>
</g>
</g>
<g id="Crease_1_">
<g>
<polygon fill="#C1C0C0" points="24,26 9.11,16 23.982,28.519 38.819,16     "></polygon>
</g>
</g>
</svg>
<!--?xml version="1.0" encoding="utf-8"?-->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
<g id="BG_-_circle_79_">
<g>
<circle class="flatties-bg--beer" fill="#D3524D" cx="24" cy="24" r="24"></circle>
</g>
</g>
<g id="Glass_3_" opacity="0.6392">
<g>
<path fill="#FFFFFF" d="M28.723,35.714L31,15H16l2.277,20.714c0,0-0.852,0.63-1.121,1.179c-0.29,0.593,0,1.107,0,1.107h12.723
c0,0,0.287-0.54,0-1.107C29.588,36.316,28.723,35.714,28.723,35.714z"></path>
</g>
</g>
<g id="Peroni">
<g>
<polygon fill="#D68333" points="18,18 20,36 27,36 29,18     "></polygon>
</g>
</g>
<g id="Head">
<g>
<path fill="#FFFFFF" d="M23.663,15C20.859,15,18,15,18,15v3h11v-3C29,15,26.357,15,23.663,15z"></path>
</g>
</g>
<g id="Bubbles_1_" opacity="0.302">
<g>
<path fill="#FFFFFF" d="M23.5,32c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5S23.776,32,23.5,32z M22,28
c-0.553,0-1,0.447-1,1s0.447,1,1,1s1-0.447,1-1S22.553,28,22,28z M24,24c-0.553,0-1,0.447-1,1s0.447,1,1,1s1-0.447,1-1
S24.553,24,24,24z"></path>
</g>
</g>
</svg>
<!--?xml version="1.0" encoding="utf-8"?-->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
<g id="BG_-_circle_52_">
<g>
<circle class="flatties-bg--coffee" fill="#D3524C" cx="24" cy="24" r="24"></circle>
</g>
</g>
<g id="Handle_9_">
<g>
<path class="flatties-coffee-handle" fill="#C8C7C7" d="M30.82,23.592v2.364c0,0,4.762-1.22,4.762,1.183c0,7.095-11.905,7.058-11.905,7.058v2.365
c0,0,14.323,0,14.323-9.423C38,21.227,30.82,23.592,30.82,23.592z"></path>
</g>
</g>
<g id="Cup">
<g>
<path fill="#F5F6F6" d="M32,21H13c0,0,0,2.156,0,2.573C13,31.399,15.381,39,22.523,39c7.106,0,9.524-7.601,9.524-15.427
C32.048,23.083,32,21,32,21z"></path>
</g>
</g>
<g id="Steam" opacity="0.502">
<g>
<path fill="#F5F6F6" d="M24.887,11.873c1.551-3.309-2.487-4.885-2.487-4.885s1.992,2.226,0.354,4.229
c-0.715,0.874-2.232,1.976-2.352,3.108c-0.379,3.6,3.71,5.227,3.71,5.227s-1.823-1.265-1.256-4.414
C23.047,14.079,24.455,12.796,24.887,11.873z"></path>
</g>
</g>
</svg>

<div class="explanation">

Font icons are rad because you can easily style them with CSS. The drawback is that you are restricted to basic things that CSS can do and applying those styles to the whole element.

There are some tricky things like stacking that are cool, but I thought it'd be worthwhile to try directly working with the SVGs for a hybrid approach. I'm going to mess with the [Flatties Icon Set](https://creativemarket.com/uiparade/4823-Flatties-flat-style-icon-set) to see if you could customize all (well, all of a sub-set) of the backgrounds with a base class.

Popped these [up on CodePen](http://codepen.io/dandenney/pen/GpkHb) if you want to tinker, too.

</div>