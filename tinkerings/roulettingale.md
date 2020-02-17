---
title: Roulettingale
date: 2015-02-05
summary: Applying the Martingale betting system to roulette, to visualize data
tags:
  - tinkerings
---

<style>
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.group::after,.bucket::after{clear:both;content:"";display:table}html{background:#fff;color:#535353;font-family:"canada-type-gibson", serif;font-size:16px;line-height:1.75}body{background:#ffffff;font-size:100%;font-weight:300}@media screen and (min-width: 1024px){body{font-size:125%}}ul,p{margin-bottom:32px;margin-top:0}ul,li{list-style:none;padding:0}li{margin-bottom:24px;margin-top:0}h1,.h1,h2,.h2,h3,.h3,h4,.h4{color:#535353;font-family:"canada-type-gibson", serif;font-weight:600;line-height:1.5;margin-bottom:8px;margin-top:0}h1,.h1{font-size:140%}@media screen and (min-width: 1024px){h1,.h1{font-size:200%}}h2,.h2{font-size:130%}@media screen and (min-width: 1024px){h2,.h2{font-size:150%}}h3,.h3{font-size:120%}@media screen and (min-width: 1024px){h3,.h3{font-size:125%}}h4,.h4{font-size:110%}a{color:#b51f24;position:relative;text-decoration:none;-webkit-transition:color 0.3s linear;transition:color 0.3s linear}a::before,a::after{background:#a5a5a5;content:"";height:1px;left:0;opacity:0;position:absolute;width:100%;-webkit-transition:opacity 0.3s, -webkit-transform 0.3s;transition:opacity 0.3s, -webkit-transform 0.3s;transition:opacity 0.3s, transform 0.3s;transition:opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}a::after{bottom:0;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px)}a::before{top:0;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}a:hover,a:focus{color:#df4247}a:hover::after,a:focus::after{opacity:1;-webkit-transform:translateY(3px);-ms-transform:translateY(3px);transform:translateY(3px)}a:hover::before,a:focus::before{opacity:1;-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px)}strong{font-weight:900}img{height:auto;max-width:100%}.bucket--flag{display:table}.bucket--flag .bucket-content{vertical-align:middle}.bucket-content{display:table-cell;width:10000px}.bucket-media{float:left;margin-right:32px}.bucket-media>img{display:block;max-width:none}.card{background:#ffffff;border:1px solid #bfbfbf;padding:32px;position:relative}.cell,.cell--s{margin-left:auto;margin-right:auto;max-width:1024px;position:relative}.cell--s{max-width:700px}.row{overflow:hidden;padding:0 32px}.row--a{background:#f5f5f5}.well{margin-bottom:32px;margin-top:32px}.well--l{margin-bottom:48px;margin-top:48px}header{background:#ffffff;border-bottom:1px solid #bfbfbf;font-size:75%;padding-top:32px;text-align:center}footer{border-top:1px solid #bfbfbf;font-size:75%;padding-top:32px;text-align:center}.bc-white{background:#ffffff}.db{display:block}.di{display:inline}.dib{display:inline-block}.dn{display:none}.lh1{line-height:1}.maxs{margin:16px}.mas{margin:24px}.mam{margin:32px}.mal{margin:48px}.maxl{margin:64px}.mbf{margin-bottom:0}.mbxs{margin-bottom:16px}.mbs{margin-bottom:24px}.mbm{margin-bottom:32px}.mbl{margin-bottom:48px}.mbxl{margin-bottom:64px}.mhc{margin-left:auto;margin-right:auto}.mlf{margin-left:0}.mlxs{margin-left:16px}.mls{margin-left:24px}.mlm{margin-left:32px}.mll{margin-left:48px}.mrf{margin-right:0}.mrxs{margin-right:16px}.mrs{margin-right:24px}.mrm{margin-right:32px}.mrl{margin-right:48px}.mtf{margin-top:0}.mtxs{margin-top:16px}.mts{margin-top:24px}.mtm{margin-top:32px}.mtl{margin-top:48px}.mtxl{margin-top:64px}.oh{overflow:hidden}.paxs{padding:16px}.pas{padding:24px}.pam{padding:32px}.pal{padding:48px}.paxl{padding:64px}@media screen and (min-width: 760px){.pal_m{padding:48px}}.pbf{padding-bottom:0}.pbxs{padding-bottom:16px}.pbs{padding-bottom:24px}.pbm{padding-bottom:32px}.pbl{padding-bottom:48px}.pbxl{padding-bottom:64px}@media screen and (min-width: 760px){.pbl_m{padding-bottom:48px}}.plf{padding-left:0}.plxs{padding-left:16px}.pls{padding-left:24px}.plm{padding-left:32px}.pll{padding-left:48px}@media screen and (min-width: 760px){.pll_m{padding-left:48px}}.prf{padding-right:0}.prxs{padding-right:16px}.prs{padding-right:24px}.prm{padding-right:32px}.prl{padding-right:48px}@media screen and (min-width: 760px){.prl_m{padding-right:48px}}.ptf{padding-top:0}.ptxs{padding-top:16px}.pts{padding-top:24px}.ptm{padding-top:32px}.ptl{padding-top:48px}.ptxl{padding-top:64px}@media screen and (min-width: 760px){.ptl_m{padding-top:48px}}.fl{float:left}.fr{float:right}.poa{position:absolute}.pof{position:fixed}.por{position:relative}.pos{position:static}.ra{border-radius:50%}.ram{border-radius:3px}.ran{border-radius:0}.tac,.session-meta{text-align:center}.tal{text-align:left}@media screen and (min-width: 760px){.tac_m{text-align:center}}.c-davyGrey{color:#535353}.tfb{font-family:"canada-type-gibson", serif}.tfh{font-family:"canada-type-gibson", serif}.tsxs{font-size:60%}.tss{font-size:75%}.tsm{font-size:90%}.tsl{font-size:115%}.tsxl{font-size:150%}.tsxxl,.key-value{font-size:225%}.tsxxxl{font-size:800%}.tsi{font-style:italic}.ttu,.h5,h5{text-transform:uppercase}.twb{font-weight:700}.twl{font-weight:300}.twn{font-weight:400}.z1{z-index:1}.troubleshoot{-webkit-box-shadow:0 0 0 1px pink;box-shadow:0 0 0 1px pink}body{font-size:16px;font-weight:400}body,h1,h2,h3,h4,h5{font-family:"proxima-nova-alt-ext-cond", "Helvetica Neue"}.h5,h5{color:#b5a998;font-size:16px;font-weight:normal;margin-top:-24px}th{text-align:left}td{white-space:nowrap}dl,dt,dd{margin:0;padding:0}dd+dt{margin-top:24px}ul{margin:0;padding:0}article{margin-top:48px}.ttc{text-transform:capitalize}.tsxxl,.key-value{font-size:350%}.positive,.session-meta-proof{color:#186929}.positive--a{background-color:rgba(24,105,41,0.5);color:#f1e1cb;text-align:center}.negative{color:#b52316}.negative--a{background-color:rgba(181,35,22,0.5);color:#f1e1cb;text-align:center}.dollars:before{content:"$";font-size:50%;vertical-align:top}.dollars--a{font-size:75%;opacity:0.6;position:relative;top:3px;vertical-align:top}.key-value{font-weight:700;line-height:1;margin:0;padding:0}.session{color:#6c655b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.session-meta{background:#f8f0e5;padding:32px;width:300px}.session-meta-list{-ms-flex-line-pack:justify;align-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.session-meta-list li{width:50%}.proof{-ms-flex-item-align:start;align-self:flex-start;margin:0 auto;text-align:left;width:70%}.proof td:last-child{padding-right:0;text-align:right}.session-meta-id{background:#f6ecdd;border-radius:50%;color:#b5a998;font-size:75%;height:30px;line-height:30px;text-align:center;width:30px}.session-stats{background:#f1e1cb;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:32px 0;position:relative}.session-stats-result{color:#186929}.session-spins-stats{background:#f1e1cb;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:32px;position:relative}.spins-percentages{-ms-flex-line-pack:justify;align-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:48px auto 0;text-align:center;width:150px}.spins-percentages li{width:50%}.post{font-family:"Helvetica Neue"}.spins{margin:0 auto}.spins thead{border-bottom:1px solid #d9cbb7}.spins th,.spins td{padding:16px 24px}.spins tr:nth-child(even){background:#f4e7d5}.spins tr:nth-child(odd){background:#f7ede0}.spins .positive--a,.spins .negative--a{border-radius:50%;height:24px;line-height:26px;margin:0 auto;width:24px}.tableizer-table td{padding:16px 32px}
</style>

# Roulettingale

A data project observing the performance of the Martingale betting system in Roulette. [Details](#details)

This one is retired, [v2](/tinkerings/roulettingale-v2) is in action.

Notes: Roulette 3d iOS, Single bet

</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">36</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">27</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">36</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">13</p>
<p class="mbf mtf js-prct-red">46.43%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">15</p>
<p class="mbf mtf js-prct-black">53.57%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">12</p>
<p class="mbf mtf js-prct-even">42.86%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">16</p>
<p class="mbf mtf js-prct-odd">57.14%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">17</p>
<p class="mbf mtf js-prct-118">60.71%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">11</p>
<p class="mbf mtf js-prct-1936">39.29%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id019 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
019
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">29</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">750</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">400</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">750</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="8">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d iOS, Bet rotation every bet
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">5</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">2</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">15</p>
<p class="mbf mtf js-prct-red">53.57%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">13</p>
<p class="mbf mtf js-prct-black">46.43%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">12</p>
<p class="mbf mtf js-prct-even">42.86%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">16</p>
<p class="mbf mtf js-prct-odd">57.14%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">12</p>
<p class="mbf mtf js-prct-118">42.86%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">16</p>
<p class="mbf mtf js-prct-1936">57.14%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id018 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
018
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">24</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">750</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">400</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">750</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="8">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d iOS, Bet rotation every win, Opposite after 3 losses
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">20</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">36</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">13</p>
<p class="mbf mtf js-prct-red">56.52%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">10</p>
<p class="mbf mtf js-prct-black">43.48%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">10</p>
<p class="mbf mtf js-prct-even">43.48%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">13</p>
<p class="mbf mtf js-prct-odd">56.52%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">13</p>
<p class="mbf mtf js-prct-118">56.52%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">10</p>
<p class="mbf mtf js-prct-1936">43.48%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id017 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
017
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">28</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">750</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">800</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">1550</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="16">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d iOS, Bet rotation every win
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">30</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">20</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">2</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">30</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">5</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">36</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">12</p>
<p class="mbf mtf js-prct-red">46.15%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">14</p>
<p class="mbf mtf js-prct-black">53.85%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">17</p>
<p class="mbf mtf js-prct-even">65.38%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">9</p>
<p class="mbf mtf js-prct-odd">34.62%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">13</p>
<p class="mbf mtf js-prct-118">50.00%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">13</p>
<p class="mbf mtf js-prct-1936">50.00%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id016 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
016
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">29</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">750</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">800</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">1550</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="16">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d iOS, Bet rotation every bet, Would’ve tied the fastest to 10 wins
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">5</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">20</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">16</p>
<p class="mbf mtf js-prct-red">59.26%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">11</p>
<p class="mbf mtf js-prct-black">40.74%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">12</p>
<p class="mbf mtf js-prct-even">44.44%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">15</p>
<p class="mbf mtf js-prct-odd">55.56%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">17</p>
<p class="mbf mtf js-prct-118">62.96%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">10</p>
<p class="mbf mtf js-prct-1936">37.04%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id015 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
015
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">18</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">400</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">750</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="8">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d iOS, Bet rotation every bet
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">27</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">10</p>
<p class="mbf mtf js-prct-red">55.56%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">8</p>
<p class="mbf mtf js-prct-black">44.44%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">9</p>
<p class="mbf mtf js-prct-even">50.00%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">9</p>
<p class="mbf mtf js-prct-odd">50.00%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">6</p>
<p class="mbf mtf js-prct-118">33.33%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">12</p>
<p class="mbf mtf js-prct-1936">66.67%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id014 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
014
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">18</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">800</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">1550</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="16">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d iOS, Bet rotation after win, opposite after 3 losses (if)
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">36</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">5</p>
<p class="mbf mtf js-prct-red">27.78%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">13</p>
<p class="mbf mtf js-prct-black">72.22%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">6</p>
<p class="mbf mtf js-prct-even">33.33%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">12</p>
<p class="mbf mtf js-prct-odd">66.67%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">9</p>
<p class="mbf mtf js-prct-118">50.00%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">9</p>
<p class="mbf mtf js-prct-1936">50.00%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id013 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
013
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">14</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">200</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">350</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="4">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d iOS, Bet rotation after win, opposite after 3 losses (if), Best session yet
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">20</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">6</p>
<p class="mbf mtf js-prct-red">42.86%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">8</p>
<p class="mbf mtf js-prct-black">57.14%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">8</p>
<p class="mbf mtf js-prct-even">57.14%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">6</p>
<p class="mbf mtf js-prct-odd">42.86%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">7</p>
<p class="mbf mtf js-prct-118">50.00%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">7</p>
<p class="mbf mtf js-prct-1936">50.00%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id012 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
012
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">25</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">800</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">1550</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="16">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d Mac, Bet rotation after win, opposite after 3 losses (if), Got caught in this lopsided odds twice
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">20</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">10</p>
<p class="mbf mtf js-prct-red">43.48%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">13</p>
<p class="mbf mtf js-prct-black">56.52%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">6</p>
<p class="mbf mtf js-prct-even">26.09%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">17</p>
<p class="mbf mtf js-prct-odd">73.91%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">10</p>
<p class="mbf mtf js-prct-118">43.48%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">13</p>
<p class="mbf mtf js-prct-1936">56.52%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id011 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
011
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">16</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">400</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">750</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="8">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette 3d iOS, Bet rotation, opposite after 3 losses (if)
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">2</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">30</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">31</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even </td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">8</p>
<p class="mbf mtf js-prct-red">50.00%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">8</p>
<p class="mbf mtf js-prct-black">50.00%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">9</p>
<p class="mbf mtf js-prct-even">56.25%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">7</p>
<p class="mbf mtf js-prct-odd">43.75%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">9</p>
<p class="mbf mtf js-prct-118">56.25%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">7</p>
<p class="mbf mtf js-prct-1936">43.75%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id010 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
010
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">15</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">200</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">350</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="4">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS, Bet rotation using opposite after 3 losses (if)
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">30</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">30</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black </td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">5</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">7</p>
<p class="mbf mtf js-prct-red">50.00%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">7</p>
<p class="mbf mtf js-prct-black">50.00%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">6</p>
<p class="mbf mtf js-prct-even">42.86%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">8</p>
<p class="mbf mtf js-prct-odd">57.14%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">8</p>
<p class="mbf mtf js-prct-118">57.14%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">6</p>
<p class="mbf mtf js-prct-1936">42.86%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id009 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
009
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">16</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">200</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">350</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="4">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS, Bet rotation, opposite after 3 losses (if)
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">2</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">20</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">24</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">24</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">8</p>
<p class="mbf mtf js-prct-red">50.00%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">8</p>
<p class="mbf mtf js-prct-black">50.00%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">8</p>
<p class="mbf mtf js-prct-even">50.00%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">8</p>
<p class="mbf mtf js-prct-odd">50.00%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">8</p>
<p class="mbf mtf js-prct-118">50.00%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">8</p>
<p class="mbf mtf js-prct-1936">50.00%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id008 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
008
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">21</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">1600</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">3150</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="32">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="32">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="32">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS, Single bet
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">20</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">5</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
1600
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
1600
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">33</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">30</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">10</p>
<p class="mbf mtf js-prct-red">50.00%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">10</p>
<p class="mbf mtf js-prct-black">50.00%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">16</p>
<p class="mbf mtf js-prct-even">80.00%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">4</p>
<p class="mbf mtf js-prct-odd">20.00%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">10</p>
<p class="mbf mtf js-prct-118">50.00%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">10</p>
<p class="mbf mtf js-prct-1936">50.00%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id007 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
007
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">19</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">200</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">350</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="4">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS, Unique bet rotation choosing by opposite of last bet
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">24</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">24</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">0</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">24</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">27</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">7</p>
<p class="mbf mtf js-prct-red">38.89%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">11</p>
<p class="mbf mtf js-prct-black">61.11%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">9</p>
<p class="mbf mtf js-prct-even">50.00%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">9</p>
<p class="mbf mtf js-prct-odd">50.00%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">4</p>
<p class="mbf mtf js-prct-118">22.22%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">14</p>
<p class="mbf mtf js-prct-1936">77.78%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id006 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
006
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">22</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">800</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">1550</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="16">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS, Unique bet rotation
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">27</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">38</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">30</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">27</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">14</p>
<p class="mbf mtf js-prct-red">66.67%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">7</p>
<p class="mbf mtf js-prct-black">33.33%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">9</p>
<p class="mbf mtf js-prct-even">42.86%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">12</p>
<p class="mbf mtf js-prct-odd">57.14%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">14</p>
<p class="mbf mtf js-prct-118">66.67%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">7</p>
<p class="mbf mtf js-prct-1936">33.33%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id005 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
005
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">21</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">800</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">1550</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="16">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="16">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS, Bet rotation after each win
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">27</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">20</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">36</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">24</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">24</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">19-36</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">1-18</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">2</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">13</p>
<p class="mbf mtf js-prct-red">61.90%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">8</p>
<p class="mbf mtf js-prct-black">38.10%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">13</p>
<p class="mbf mtf js-prct-even">61.90%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">8</p>
<p class="mbf mtf js-prct-odd">38.10%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">7</p>
<p class="mbf mtf js-prct-118">33.33%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">14</p>
<p class="mbf mtf js-prct-1936">66.67%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id004 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
004
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">31</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">6400</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">12750</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="128">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="128">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="128">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">1</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
1600
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
1600
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
3200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
3200
</span>
</td>
<td class="tac">5</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
6400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
6400
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">27</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">25</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">23</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">32</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">8</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">6</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
800
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
800
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
1600
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
1600
</span>
</td>
<td class="tac">36</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">2</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even </td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">14</p>
<p class="mbf mtf js-prct-red">45.16%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">17</p>
<p class="mbf mtf js-prct-black">54.84%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">16</p>
<p class="mbf mtf js-prct-even">51.61%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">15</p>
<p class="mbf mtf js-prct-odd">48.39%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">17</p>
<p class="mbf mtf js-prct-118">54.84%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">14</p>
<p class="mbf mtf js-prct-1936">45.16%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id003 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
003
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">17</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">200</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">350</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="4">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="4">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">18</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black </td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">24</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">5</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">3</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">35</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">7</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">14</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">17</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">19</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">10</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">12</p>
<p class="mbf mtf js-prct-red">70.59%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">5</p>
<p class="mbf mtf js-prct-black">29.41%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">6</p>
<p class="mbf mtf js-prct-even">35.29%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">11</p>
<p class="mbf mtf js-prct-odd">64.71%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">10</p>
<p class="mbf mtf js-prct-118">58.82%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">7</p>
<p class="mbf mtf js-prct-1936">41.18%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
<article class="js-id002 session">
<aside class="session-meta">
<div class="session-meta-id mhc mbs">
002
</div>
<ul class="session-meta-list">
<li>
<p class="key-value">21</p>
<h5>Spins</h5>
</li>
<li>
<p class="key-value dollars js-winnings">500</p>
<h5>Profit</h5>
</li>
<li>
<p class="key-value dollars js-minBet">50</p>
<h5>Min Bet</h5>
</li>
<li>
<p class="key-value dollars js-maxBet">400</p>
<h5>Max Bet</h5>
</li>
<li>
<p class="key-value dollars js-minBankroll">750</p>
<h5>Min Bankroll</h5>
</li>
</ul>
<table class="proof">
<tbody><tr>
<td class="h5">
Mirage - ($25 - $20,000)
</td>
<td class="session-meta-proof js-checkMirage" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
MGM - ($25 - $10,000)
</td>
<td class="session-meta-proof js-checkMGM" data-maxbet="8">
✓
</td>
</tr>
<tr>
<td class="h5">
Beau Rivage - ($10 - $15,000)
</td>
<td class="session-meta-proof js-checkBeau" data-maxbet="8">
✓
</td>
</tr>
</tbody></table>
<div class="mtl">
Notes: Roulette Casino Style iOS
</div>
</aside>
<section class="session-stats">
<h3 class="mtf tac">Spins</h3>
<table class="spins js-spins">
<thead>
<tr><th>Bet</th>
<th>Amount</th>
<th>Result</th>
<th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">11</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">2</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">36</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">22</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">13</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">15</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">29</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">2</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">red</td>
<td>
<span class="dollars--a">$</span>
400
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
400
</span>
</td>
<td class="tac">34</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">4</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">26</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">12</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">odd</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">9</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">even </td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
50
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
50
</span>
</td>
<td class="tac">21</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-odd">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
100
</td>
<td class="session-stats-result">
<span class="negative">
<span class="dollars--a">$</span>
100
</span>
</td>
<td class="tac">16</td>
<td class="tss js-n-red">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-black">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-1936">
<div class="negative--a">✘</div>
</td>
</tr>
<tr>
<td class="ttc">black</td>
<td>
<span class="dollars--a">$</span>
200
</td>
<td class="session-stats-result">
<span class="positive">
<span class="dollars--a">$</span>
200
</span>
</td>
<td class="tac">28</td>
<td class="tss js-n-red">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-black">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-even">
<div class="positive--a">✓</div>
</td>
<td class="tss js-n-odd">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-118">
<div class="negative--a">✘</div>
</td>
<td class="tss js-n-1936">
<div class="positive--a">✓</div>
</td>
</tr>
</tbody></table>
<ul class="spins-percentages">
<li>
<p class="mbf key-value js-count-red">9</p>
<p class="mbf mtf js-prct-red">42.86%</p>
<h5>
Red
</h5>
</li>
<li>
<p class="mbf key-value js-count-black">12</p>
<p class="mbf mtf js-prct-black">57.14%</p>
<h5>
Black
</h5>
</li>
<li>
<p class="mbf key-value js-count-even">15</p>
<p class="mbf mtf js-prct-even">71.43%</p>
<h5>
Even
</h5>
</li>
<li>
<p class="mbf key-value js-count-odd">6</p>
<p class="mbf mtf js-prct-odd">28.57%</p>
<h5>
Odd
</h5>
</li>
<li>
<p class="mbf key-value js-count-118">12</p>
<p class="mbf mtf js-prct-118">57.14%</p>
<h5>
1-18
</h5>
</li>
<li>
<p class="mbf key-value js-count-1936">9</p>
<p class="mbf mtf js-prct-1936">42.86%</p>
<h5>
19-36
</h5>
</li>
</ul>
</section>
</article>
</div>
</section>
<section class="row post" id="details">
<div class="cell cell--s well">
<img class="mbl mtl" width="100%" src="../img/tinkerings/roulettingale/roulette-board.svg">
<h1>
Roulettingale
</h1>
<p class="tss">
February 5, 2015
</p>
<h2>The Idea</h2>
Track and visualize series of attempts to use the martingale betting system in Roulette.
<p>
I recently learned of the Martingale betting system and how it's one of the popular betting systems used in roulette. I've always been a fan of number systems, especially ones that involve wagering: stocks and gambling.
</p>
<p>
There are some decent roulette apps for iOS and the Mac so I'm going to run a series of tests using the system, record data, and visualize it.
</p>
<h2>Manual Data Collection… yuk</h2>
<p>
This is all manual and I'll use a couple of different apps to get different results. I've been using an app on iOS called
<strong>
Roulette - Casino Style
</strong>
and I've already noticed a couple of patterns where it repeats numbers after a win.
</p>
<p>
I do have some concerns about using these apps because they offer in-app purchases. While the odds alone would lead to plenty of purchases, it certainly seems like it would be easy to program some occasional lose streaks to help out.
</p>
<p>
In my first day of testing, my longest losings streaks came from only betting black and using the system. I'll test more to see if that is normal.
</p>
<h2>What to Observe</h2>
<h4>
I want to know a few things:
</h4>
<ul>
<li>
How does it work over a long series of spins?
</li>
<li>
How does it perform over short sessions with a goal of 10 wins?
</li>
<li>
What bankroll would be necessary to complete the worst session?
</li>
<li>
What bankroll would be necessary to complete the average session?
</li>
<li>
What casino stakes allow for the worst session to be completed?
</li>
<li>
What casino stakes allow for the average session to be completed?
</li>
</ul>
<h2>The First Sessions</h2>
<p>
I believe that this is what I want to know and display about individual sessions. This part tells the important part of the data:
</p>
<p>
Can you successfully win 10 times your minimum wager within the stakes?
</p>
<p class="mbf">
If so, how much of a bankroll was necessary to achieve it and how many rolls did it take?
</p>
<div class="mbl tss">
(It seems you can get in 35 - 112 spins per hour depending on the number of players. <a href="http://wizardofodds.com/ask-the-wizard/136/" class="tss">Reference</a> )
</div>
<article class="tsm">
<h3>Session 001</h3>
<dl>
<dt>Winnings</dt>
<dd>10x</dd>
<dt>Spins</dt>
<dd>16</dd>
<dt>Max Bet</dt>
<dd>4x</dd>
<dt>Min Bankroll</dt>
<dd>7x</dd>
</dl>
<dl>
<dt>Mirage ($25 - $20,000) (800, 400, 200)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Mirage ($100 - $20,000) (-, -, 200)</dt>
<dd>-, -, Yes</dd>
<dt>MGM ($25 - $10,000) (400, 200, 100)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Beau Rivage ($10 - $15,000) (600, 300, 150)</dt>
<dd>Yes, Yes, Yes</dd>
</dl>
</article>
<article class="tsm">
<h3>Session 002</h3>
<dl>
<dt>Winnings</dt>
<dd>10x</dd>
<dt>Spins</dt>
<dd>21</dd>
<dt>Max Bet</dt>
<dd>8x</dd>
<dt>Min Bankroll</dt>
<dd>15x</dd>
</dl>
<dl>
<dt>Mirage ($25 - $20,000) (800, 400, 200)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Mirage ($100 - $20,000) (-, -, 200)</dt>
<dd>-, -, Yes</dd>
<dt>MGM ($25 - $10,000) (400, 200, 100)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Beau Rivage ($10 - $15,000) (600, 300, 150)</dt>
<dd>Yes, Yes, Yes</dd>
</dl>
</article>
<article class="tsm">
<h3>Session 003</h3>
<dl>
<dt>Winnings</dt>
<dd>10x</dd>
<dt>Spins</dt>
<dd>17</dd>
<dt>Max Bet</dt>
<dd>4x</dd>
<dt>Min Bankroll</dt>
<dd>7x</dd>
</dl>
<dl>
<dt>Mirage ($25 - $20,000) (800, 400, 200)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Mirage ($100 - $20,000) (-, -, 200)</dt>
<dd>-, -, Yes</dd>
<dt>MGM ($25 - $10,000) (400, 200, 100)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Beau Rivage ($10 - $15,000) (600, 300, 150)</dt>
<dd>Yes, Yes, Yes</dd>
</dl>
</article>
<article class="tsm">
<h3>Session 004</h3>
<dl>
<dt>Winnings</dt>
<dd>10x</dd>
<dt>Spins</dt>
<dd>31</dd>
<dt>Max Bet</dt>
<dd>128x</dd>
<dt>Min Bankroll</dt>
<dd>255x</dd>
</dl>
<dl>
<dt>Mirage ($25 - $20,000) (800, 400, 200)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Mirage ($100 - $20,000) (-, -, 200)</dt>
<dd>-, -, Yes</dd>
<dt>MGM ($25 - $10,000) (400, 200, 100)</dt>
<dd>Yes, Yes, No</dd>
<dt>Beau Rivage ($10 - $15,000) (600, 300, 150)</dt>
<dd>Yes, Yes, Yes</dd>
</dl>
</article>
<article class="tsm">
<h3>Session 005</h3>
<dl>
<dt>Winnings</dt>
<dd>10x</dd>
<dt>Spins</dt>
<dd>21</dd>
<dt>Max Bet</dt>
<dd>16x</dd>
<dt>Min Bankroll</dt>
<dd>31x</dd>
</dl>
<dl>
<dt>Mirage ($25 - $20,000) (800, 400, 200)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Mirage ($100 - $20,000) (-, -, 200)</dt>
<dd>-, -, Yes</dd>
<dt>MGM ($25 - $10,000) (400, 200, 100)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Beau Rivage ($10 - $15,000) (600, 300, 150)</dt>
<dd>Yes, Yes, Yes</dd>
</dl>
</article>
<article class="tsm">
<h3>Session 006</h3>
<dl>
<dt>Winnings</dt>
<dd>10x</dd>
<dt>Spins</dt>
<dd>22</dd>
<dt>Max Bet</dt>
<dd>16x</dd>
<dt>Min Bankroll</dt>
<dd>31x</dd>
</dl>
<dl>
<dt>Mirage ($25 - $20,000) (800, 400, 200)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Mirage ($100 - $20,000) (-, -, 200)</dt>
<dd>-, -, Yes</dd>
<dt>MGM ($25 - $10,000) (400, 200, 100)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Beau Rivage ($10 - $15,000) (600, 300, 150)</dt>
<dd>Yes, Yes, Yes</dd>
</dl>
</article>
<article class="tsm">
<h3>Session 007</h3>
<dl>
<dt>Winnings</dt>
<dd>10x</dd>
<dt>Spins</dt>
<dd>19</dd>
<dt>Max Bet</dt>
<dd>4x</dd>
<dt>Min Bankroll</dt>
<dd>7x</dd>
</dl>
<dl>
<dt>Mirage ($25 - $20,000) (800, 400, 200)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Mirage ($100 - $20,000) (-, -, 200)</dt>
<dd>-, -, Yes</dd>
<dt>MGM ($25 - $10,000) (400, 200, 100)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Beau Rivage ($10 - $15,000) (600, 300, 150)</dt>
<dd>Yes, Yes, Yes</dd>
</dl>
</article>
<article class="tsm">
<h3>Session 008</h3>
<dl>
<dt>Winnings</dt>
<dd>10x</dd>
<dt>Spins</dt>
<dd>21</dd>
<dt>Max Bet</dt>
<dd>32x</dd>
<dt>Min Bankroll</dt>
<dd>63x</dd>
</dl>
<dl>
<dt>Mirage ($25 - $20,000) (800, 400, 200)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Mirage ($100 - $20,000) (-, -, 200)</dt>
<dd>-, -, Yes</dd>
<dt>MGM ($25 - $10,000) (400, 200, 100)</dt>
<dd>Yes, Yes, Yes</dd>
<dt>Beau Rivage ($10 - $15,000) (600, 300, 150)</dt>
<dd>Yes, Yes, Yes</dd>
</dl>
</article>
<h2>Session Spins and Bets</h2>
<p>
I'm recording each spin and bet as well. While these aren't useful in answering the questions, they'll make for some interesting visualizations. I'll also need to learn how to compile and compare data sets, which is one of the goals of this little project.
</p>
<h2>Colors</h2>
<p>
I searched for
<strong>roulette</strong>
and
<strong>casino</strong>
on
<a href="http://colourlovers.com">colourlovers.com</a>
and found a few options that I dig.
</p><ul>
<li>
<img width="400" src="../img/tinkerings/roulettingale/palette-casino-royale.png">
</li>
<li>
<img width="400" src="../img/tinkerings/roulettingale/palette-roulette.png">
</li>
<li>
<img width="400" src="../img/tinkerings/roulettingale/palette-russian-roulette.png">
</li>
<li>
<img width="400" src="../img/tinkerings/roulettingale/palette-russian-roulette-2.png">
</li>
<li>
<img width="400" src="../img/tinkerings/roulettingale/palette-vintage-casino.png">
</li>
</ul>
<p></p>
<h2>Graphs</h2>
<p>
This is a loose example, but I'm thinking of plotting the rolls like this with the 00 through 36 on the Y axis and the X axis showing spin count and bet amount.
</p>
<img width="1200" height="508" src="../img/tinkerings/roulettingale/example-plot-graph.png">
<p>
Chartist gets closer to showing it, albeit with the usual range problem which I'll need to solve with d3 instead.
</p>
<img width="1200" height="800" src="../img/tinkerings/roulettingale/example-chartist.jpg">
<h3 class="mtm">
February 6, 2015
</h3>
<p>
Got a big JSON going and spewing out data. Let's get it on.
</p>
<h3>
February 7, 2015
</h3>
<p>
I went with the first color scheme, Casino Royale, and began adding some styles. I think this is a good time to learn some flexbox. I want some things vertically centered and I want the sidebar with information to have a different color background. The 2 columns are uneven and can vary as to which one is longer. There are hacks for that in the grid but I'd rather just learn flexbox since this is a side project and I'm not worried about people seeing it or what browser they're in.
</p>
<p>
I'm doing a weird combination of Middleman math and JS math to get the values. When I do a session, I've started recording them as single unit values. Ultimately, I want to show the results for multiple bet amounts: $25, $50, $100, maybe $200. For now, I got it working at $50 and I'll work out how to make it more flexible when I'm ready.
</p>
<h3>
February 8, 2015
</h3>
<p>
The beautiful thing about working with existing data to create the designs is that the data dictates the needs. Before collecting and organizing, I imagined that a scatter chart showing all of the numbers would be interesting. While it may look interesting visually, it doesn't have much impact on the proofing that I'm doing. In this case, I really don't care about what numbers are there. I only care what category they are in, with categories being an available even-money bet type: 1-18, 19-36, odd, even, black, red. I'm not recording this information, but that's just because it's so much more effort and leaves room for error. I'll be using Middleman for this, comparing the individual number against a set of numbers. I'll get a rough version working with template logic and then bug Drew for how to write it better.
</p>
<p>
Streaks are another thing of interest. They are the best or the worst thing that can happen to a session. A streak of wins is good, a streak of losses is bad. Right now, I can't get these at all. I'll need the results of the checks on the numbers to then identify streaks. Not sure how that will happen yet, but I'll work it out once I can see them.
</p>
<h4>Hitting a wall</h4>
<p>
I have this data, but I don't know how to extract certain bits out of it. These things are easily done manually, but I want to do them programmatically. I want to be able to programmatically show what category of bet a spin number is and then graph the results of those.
</p>
<p>
At this moment, I can't achieve that even with data that I do have recorded. In a session, I want to divide the numbers into their bet categories and graph opposing categories: Red vs. Black, Even vs. Odd, 1-18 vs. 19-36. I can create a table with some really complex if statements, but thinking that this may be a scenario where I have to combine Middleman and d3.
</p>
<p>
You can see the results and the streaks here, but I also want them in graphs. This is a start, though, so I'm going to put these in. Visually, the check and the 'x' aren't big enough to follow cleanly so I'll do them in a different way.
</p>
<table class="complex">
<thead>
<tr><th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td>27</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>26</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>26</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>21</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>8</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>33</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>21</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>32</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>13</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>34</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>29</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>26</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>21</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>32</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>21</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>33</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
</tbody></table>
<table class="complex">
<thead>
<tr><th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td>22</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>22</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>11</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>16</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>16</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>2</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>36</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>22</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>13</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>15</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>29</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>2</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>34</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>4</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>26</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>12</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>9</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>16</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>21</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>16</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>28</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
</tbody></table>
<table class="complex">
<thead>
<tr><th>Number</th>
<th>Red</th>
<th>Black</th>
<th>Even</th>
<th>Odd</th>
<th>1-18</th>
<th>19-36</th>
</tr></thead>
<tbody><tr>
<td>9</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>18</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>19</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>24</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>3</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>16</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>5</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>3</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>19</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>35</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>7</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>22</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>14</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>17</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
<tr>
<td>19</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>19</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
</tr>
<tr>
<td>10</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
<td>
<span class="positive">✓</span>
</td>
<td>
<span class="negative">✘</span>
</td>
</tr>
</tbody></table>
<h4 class="mtl">Digging this</h4>
<p>
Seeing this in action, I think it's something that I'll want to keep (in addition to visualizing the percentages. It's really interesting and important to betting to see the streaks. Identifying long streaks allows to show how bad it couldn't have gotten in any one session.
</p>
<p>
jQuery length will get me a lot of what I want so I'll probably start with that. Now that all of this stuff exists in the DOM I can loop over it pretty easily. One quick example is the number of times a number was 1-18 occurred in the first set. I chose this one because it's insanely low.
</p>
<code><pre>examplePos = $('.js-id001 .js-n-118 .positive--a').length;
exampleNeg = $('.js-id001 .js-n-118 .negative--a').length;
exampleTot = examplePos + exampleNeg
examplePosPer = examplePos / exampleTot
exampleNegPer = exampleNeg / exampleTot
$('.example-positive').append(examplePosPer)
$('.example-negative').append(exampleNegPer)</pre></code>
<div class="example">
<p>
1-18:
<strong class="example-positive"></strong>
</p>
<p>
19-36:
<strong class="example-negative"></strong>
</p>
</div>
<h4 class="mtl">Ready for Charting</h4>
<p>
As usual, getting the data in helped make decisions. Once I could see the percentages I realized that they're not as important. They'll make for a good graph (maybe a donut chart), but seeing the spin counts make things more apparent. It's awesome to see 009, which was a perfect session.
</p>
<h4 class="mtl">Bankroll Tables</h4>
<p>
I've had this in a spreadsheet for reference but I'd rather have it here since I can see the streaks visually now.
</p>
<table class="tableizer-table">
<tbody><tr class="tableizer-firstrow">
<th>Losses</th>
<th>Bets</th>
<th>Bankroll</th>
<th>Bets</th>
<th>Bankroll</th>
<th>Bets</th>
<th>Bankroll</th>
</tr>
<tr>
<td>1</td>
<td>25</td>
<td>25</td>
<td>50</td>
<td>50</td>
<td>100</td>
<td>100</td>
</tr>
<tr>
<td>2</td>
<td>50</td>
<td>75</td>
<td>100</td>
<td>150</td>
<td>200</td>
<td>300</td>
</tr>
<tr>
<td>3</td>
<td>100</td>
<td>175</td>
<td>200</td>
<td>350</td>
<td>400</td>
<td>700</td>
</tr>
<tr>
<td>4</td>
<td>200</td>
<td>375</td>
<td>400</td>
<td>750</td>
<td>800</td>
<td>1500</td>
</tr>
<tr>
<td>5</td>
<td>400</td>
<td>775</td>
<td>800</td>
<td>1550</td>
<td>1600</td>
<td>3100</td>
</tr>
<tr>
<td>6</td>
<td>800</td>
<td>1575</td>
<td>1600</td>
<td>3150</td>
<td>3200</td>
<td>6300</td>
</tr>
<tr>
<td>7</td>
<td>1600</td>
<td>3175</td>
<td>3200</td>
<td>6350</td>
<td>6400</td>
<td>12700</td>
</tr>
<tr>
<td>8</td>
<td>3200</td>
<td>6375</td>
<td>6400</td>
<td>12750</td>
<td>12800</td>
<td>25500</td>
</tr>
<tr>
<td>9</td>
<td>6400</td>
<td>12775</td>
<td>12800</td>
<td>25550</td>
<td>25600</td>
<td>51100</td>
</tr>
<tr>
<td>10</td>
<td>12800</td>
<td>25575</td>
<td>25600</td>
<td>51150</td>
<td>51200</td>
<td>102300</td>
</tr>
<tr>
<td>11</td>
<td>25600</td>
<td>51175</td>
<td>51200</td>
<td>102350</td>
<td>102400</td>
<td>204700</td>
</tr>
<tr>
<td>12</td>
<td>51200</td>
<td>102375</td>
<td>102400</td>
<td>204750</td>
<td>204800</td>
<td>409500</td>
</tr>
<tr>
<td>13</td>
<td>102400</td>
<td>204775</td>
<td>204800</td>
<td>409550</td>
<td>409600</td>
<td>819100</td>
</tr>
<tr>
<td>14</td>
<td>204800</td>
<td>409575</td>
<td>409600</td>
<td>819150</td>
<td>819200</td>
<td>1638300</td>
</tr>
<tr>
<td>15</td>
<td>409600</td>
<td>819175</td>
<td>819200</td>
<td>1638350</td>
<td>1638400</td>
<td>3276700</td>
</tr>
</tbody></table>
<h3>
February 8, 2015
</h3>
<p>
Drew fixed my two problems in minutes, like usual. For the ternary operator on classes, I just wasn't supposed to keep the word "if".
</p>
<code><pre>span{ class: (sp.result == 'l' ? 'negative' : 'positive') }</pre></code>
<p>
The comparisons are a bit more complicated. I need to set up a JSON with an array to compare to. It makes total sense, but I wouldn't have thought to do it on my own.
</p>
<h4>Cha cha cha changes</h4>
<p>
Changing up one small thing and one significant thing. I'm going to display the sessions in reverse order. When I add a new one it's silly to have to scroll past them all. The bigger thing is longer sessions.
</p>
<p>
In 15 sessions, the biggest bet was $6,400. While that was the last bet before disqualfying the MGM limits, there was one additional bet left for each of the others. It's time to push the system for some sessions to see where it breaks.
</p>
<p>
It didn't affect the session outcome because I was betting a new bet every time in rotation, but it had a 9 loss streak that would have made it impossible to bet the necessary amount at any of the casinos. With 9 losses, you need to be able to bet $25,600 but the most lenient allows for $20,000.
</p>
<p>
With a $20k cap, you'd have $45,550 invested and would win $40,000. The cap causes a $5,550 loss.
<br>
With a $10k cap, you'd have $22,750 invested and would win $20,000. The cap causes a $2,750 loss.
<br>
With a $15k cap, you'd have $40,550 invested and would win $30,000. The cap causes a $10,550 loss.
</p>
<p>
Imagine if you lost the max bet!
</p>
<p>
The $15k is clearly the worst loss, but you get to last one extra loss in that and the $20k. 8 losses in a row guarantees a financial loss at a $10k cap, 9 losses guarantees a financial loss at $15k and $20k caps.
</p>
<h3>February 10, 2015</h3>
<p>
Moving on to a new version:
</p>
<h4>Why</h4>
<p>
The purpose was to determine if it was possible to achieve a small number of wins before hitting a point in which the betting caps would force a loss. It's a small sample, but it is. In 20 sessions, the profit was $11,250. At this point, hitting the max bet but winning would still result in a profit. Hitting a the max bet is a whole other level of hurt.
</p>
<p>
More importantly, I'm now fascinated with other things in the numbers and I want to revamp what I'm showing. For one, I need 0 and 00 in the data. I'm comparing percentages of rolls incorrectly without them. Additionally, every time a set is completed there are 2 other winning sets. These can be compared as well to indicate how the bet decisions affected the outcome. Basically, there's a lot more data to dive into and it'll requre a new design. I really want to keep this version, though, to show what I learend. This is v1, onto v2.
</p>
</div>
</section>
