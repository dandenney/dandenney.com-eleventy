---
title: Roulettystem
date: 2015-02-22
summary: Can a system win enough times to be profitable?
tags:
  - tinkerings
---

<style>
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.group::after,.bucket::after{clear:both;content:"";display:table}html{background:#fff;color:#535353;font-family:"canada-type-gibson", serif;font-size:16px;line-height:1.75}body{background:#ffffff;font-size:100%;font-weight:300}@media screen and (min-width: 1024px){body{font-size:125%}}ul,p{margin-bottom:32px;margin-top:0}ul,li{list-style:none;padding:0}li{margin-bottom:24px;margin-top:0}h1,.h1,h2,.h2,h3,.h3,h4,.h4{color:#535353;font-family:"canada-type-gibson", serif;font-weight:600;line-height:1.5;margin-bottom:8px;margin-top:0}h1,.h1{font-size:140%}@media screen and (min-width: 1024px){h1,.h1{font-size:200%}}h2,.h2{font-size:130%}@media screen and (min-width: 1024px){h2,.h2{font-size:150%}}h3,.h3{font-size:120%}@media screen and (min-width: 1024px){h3,.h3{font-size:125%}}h4,.h4{font-size:110%}a{color:#b51f24;position:relative;text-decoration:none;-webkit-transition:color 0.3s linear;transition:color 0.3s linear}a::before,a::after{background:#a5a5a5;content:"";height:1px;left:0;opacity:0;position:absolute;width:100%;-webkit-transition:opacity 0.3s, -webkit-transform 0.3s;transition:opacity 0.3s, -webkit-transform 0.3s;transition:opacity 0.3s, transform 0.3s;transition:opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}a::after{bottom:0;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px)}a::before{top:0;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}a:hover,a:focus{color:#df4247}a:hover::after,a:focus::after{opacity:1;-webkit-transform:translateY(3px);-ms-transform:translateY(3px);transform:translateY(3px)}a:hover::before,a:focus::before{opacity:1;-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px)}strong{font-weight:900}img{height:auto;max-width:100%}.bucket--flag{display:table}.bucket--flag .bucket-content{vertical-align:middle}.bucket-content{display:table-cell;width:10000px}.bucket-media{float:left;margin-right:32px}.bucket-media>img{display:block;max-width:none}.cell,.cell--s{margin-left:auto;margin-right:auto;max-width:1024px;position:relative}.cell--s{max-width:700px}.row{overflow:hidden;padding:0 32px}.row--a{background:#f5f5f5}.well{margin-bottom:32px;margin-top:32px}.well--l{margin-bottom:48px;margin-top:48px}header{background:#ffffff;border-bottom:1px solid #bfbfbf;font-size:75%;padding-top:32px;text-align:center}footer{border-top:1px solid #bfbfbf;font-size:75%;padding-top:32px;text-align:center}.bc-white{background:#ffffff}.db{display:block}.di{display:inline}.dib{display:inline-block}.dn{display:none}.lh1{line-height:1}.maxs{margin:16px}.mas{margin:24px}.mam{margin:32px}.mal{margin:48px}.maxl{margin:64px}.mbf{margin-bottom:0}.mbxs{margin-bottom:16px}.mbs{margin-bottom:24px}.mbm{margin-bottom:32px}.mbl{margin-bottom:48px}.mbxl{margin-bottom:64px}.mhc{margin-left:auto;margin-right:auto}.mlf{margin-left:0}.mlxs{margin-left:16px}.mls{margin-left:24px}.mlm{margin-left:32px}.mll{margin-left:48px}.mrf{margin-right:0}.mrxs{margin-right:16px}.mrs{margin-right:24px}.mrm{margin-right:32px}.mrl{margin-right:48px}.mtf{margin-top:0}.mtxs{margin-top:16px}.mts{margin-top:24px}.mtm{margin-top:32px}.mtl{margin-top:48px}.mtxl{margin-top:64px}.oh{overflow:hidden}.paxs{padding:16px}.pas{padding:24px}.pam{padding:32px}.pal{padding:48px}.paxl{padding:64px}@media screen and (min-width: 760px){.pal_m{padding:48px}}.pbf{padding-bottom:0}.pbxs{padding-bottom:16px}.pbs{padding-bottom:24px}.pbm{padding-bottom:32px}.pbl{padding-bottom:48px}.pbxl{padding-bottom:64px}@media screen and (min-width: 760px){.pbl_m{padding-bottom:48px}}.plf{padding-left:0}.plxs{padding-left:16px}.pls{padding-left:24px}.plm{padding-left:32px}.pll{padding-left:48px}@media screen and (min-width: 760px){.pll_m{padding-left:48px}}.prf{padding-right:0}.prxs{padding-right:16px}.prs{padding-right:24px}.prm{padding-right:32px}.prl{padding-right:48px}@media screen and (min-width: 760px){.prl_m{padding-right:48px}}.ptf{padding-top:0}.ptxs{padding-top:16px}.pts{padding-top:24px}.ptm{padding-top:32px}.ptl{padding-top:48px}.ptxl{padding-top:64px}@media screen and (min-width: 760px){.ptl_m{padding-top:48px}}.fl{float:left}.fr{float:right}.poa{position:absolute}.pof{position:fixed}.por{position:relative}.pos{position:static}.ra{border-radius:50%}.ram{border-radius:3px}.ran{border-radius:0}.tac{text-align:center}.tal{text-align:left}@media screen and (min-width: 760px){.tac_m{text-align:center}}.c-davyGrey{color:#535353}.tfb{font-family:"canada-type-gibson", serif}.tfh{font-family:"canada-type-gibson", serif}.tsxs{font-size:60%}.tss{font-size:75%}.tsm{font-size:90%}.tsl{font-size:115%}.tsxl{font-size:150%}.tsxxl{font-size:225%}.tsxxxl{font-size:800%}.tsi{font-style:italic}.ttu,.h5,h5{text-transform:uppercase}.twb{font-weight:700}.twl{font-weight:300}.twn{font-weight:400}.z1{z-index:1}.troubleshoot{-webkit-box-shadow:0 0 0 1px pink;box-shadow:0 0 0 1px pink}body{background:#fff;font-family:"proxima-nova-alt-ext-cond", "Helvetica Neue";font-weight:300}h1,h2,h3,h4,h5{color:#0e1123;font-family:"proxima-nova-alt-ext-cond", "Helvetica Neue";font-weight:400}.h5,h5{color:#0e1123;font-size:16px;margin-top:-24px}p{font-family:"Helvetica Neue"}dl,dt,dd{margin:0;padding:0}dd+dt{margin-top:24px}ul,li{margin:0;padding:0}article{margin-top:48px}.tsxl{font-size:200%}.tar{text-align:right}.tcgd{color:#78833c}.tcyd{color:#c5cb96}.tcr{color:#b9323a}.js-spins td{border:1px solid #ededed;font-size:75%;padding:16px 0;width:12.5%}.js-spins .negative--a,.js-spins .positive--a{color:#fff;border-radius:50%;margin:0 auto}.js-spins .negative--a{background:#d18477;border:2px solid #bc776b;height:14px;line-height:14px;width:14px}.js-spins .positive--a{border:2px solid #c3d3bf;height:14px;line-height:14px;width:14px}.striped-h th{border:1px solid #f2e5d3}.striped-h td{border:1px solid #f2e5d3}.categories{background:#f6ede0}.categories td{background:#f2e5d3;height:35px;text-align:center;width:35px}.categories td:first-child{width:80px}.categories td+td{border-left:0}.categories .bgn{background:none}.js-l-118+.js-l-118 td:nth-child(3) .negative--a{position:relative}.js-l-118+.js-l-118 td:nth-child(3) .negative--a:before{background:#bc776b;content:"";height:12px;left:50%;margin-left:-1px;position:absolute;top:-14px;width:2px}.js-l-1936+.js-l-1936 td:nth-child(6) .negative--a{position:relative}.js-l-1936+.js-l-1936 td:nth-child(6) .negative--a:before{background:#bc776b;content:"";height:12px;left:50%;margin-left:-1px;position:absolute;top:-14px;width:2px}.js-l-even+.js-l-even td:nth-child(4) .negative--a{position:relative}.js-l-even+.js-l-even td:nth-child(4) .negative--a:before{background:#bc776b;content:"";height:12px;left:50%;margin-left:-1px;position:absolute;top:-14px;width:2px}.js-l-odd+.js-l-odd td:nth-child(7) .negative--a{position:relative}.js-l-odd+.js-l-odd td:nth-child(7) .negative--a:before{background:#bc776b;content:"";height:12px;left:50%;margin-left:-1px;position:absolute;top:-14px;width:2px}.js-l-red+.js-l-red td:nth-child(8) .negative--a{position:relative}.js-l-red+.js-l-red td:nth-child(8) .negative--a:before{background:#bc776b;content:"";height:12px;left:50%;margin-left:-1px;position:absolute;top:-14px;width:2px}.js-l-black+.js-l-black td:nth-child(5) .negative--a{position:relative}.js-l-black+.js-l-black td:nth-child(5) .negative--a:before{background:#bc776b;content:"";height:12px;left:50%;margin-left:-1px;position:absolute;top:-14px;width:2px}.js-l+.js-l+.js-l+.js-l+.js-l+.js-l+.js-l+.js-l+.js-l td:nth-child(3){background:#bc776b}.js-l+.js-l+.js-l+.js-l+.js-l+.js-l+.js-l+.js-l+.js-l td:nth-child(3) .negative--a{background:#f6ede1}
</style>

<section class='row'>
<div class='cell well'>
<div class='card'>
<h3 class='mtm tac'>Spins</h3>
<table class='spins js-spins bordered-h mhc tac'>
<thead>
<th>Bet</th>
<th>Number</th>
<th>Result</th>
</thead>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>38</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>38</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>25</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>25</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>3</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>11</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>6</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>5</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>36</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>12</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>11</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>21</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>35</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>30</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>34</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>24</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>8</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>12</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>29</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>33</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>7</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>27</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>17</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>15</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>31</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>30</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>15</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>17</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>2</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>5</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>13</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>20</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>1</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>28</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>13</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>19</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>18</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>32</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>4</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>0</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>31</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>2</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>19</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>1</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>9</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>23</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>16</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>8</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>9</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>18</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>6</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>22</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>36</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>14</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>4</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>0</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>32</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>14</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>33</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>22</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>20</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>34</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>26</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>35</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>28</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>24</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>16</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>26</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>7</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>21</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>29</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>23</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>even</td>
<td>27</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
<tr>
<td>1-18</td>
<td>10</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>odd</td>
<td>3</td>
<td class='js-result js-w'>
<div class='positive--a'></div>
</td>
</tr>
<tr>
<td>19-36</td>
<td>10</td>
<td class='js-result js-l'>
<div class='negative--a'></div>
</td>
</tr>
</table>
<ul class='wins'>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
<li>w</li>
</ul>
</div>
</div>
</section>

<!-- Typekit -->
<script src="//use.typekit.net/tyi7qzy.js"></script>
<script>try{Typekit.load();}catch(e){}</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
(function(){var t,n,s;t=function(){return $(".js-result.js-l").parent().addClass("js-l")},t(),s=function(){return $(".js-toggler").on("click",function(){return $(this).toggleClass("is-toggled"),$(this).parent().parent().next().toggleClass("is-hidden")})},s(),(n=function(){return $(".session:first-of-type").find(".js-toggler").trigger("click")})()}).call(this);
</script>