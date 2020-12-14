---
title: Spotify Data Project
date: 2015-01-27
summary: Learning how to grab data from Spotify and map out track performance
tags:
  - tinkerings
---

<style>
.group::after,.bucket::after,.g::after{clear:both;content:"";display:table}.debug{background-color:pink !important}.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ir{background-color:transparent;border:0;overflow:hidden}.ir::before{content:"";display:block;width:0;height:150%}.bucket--flag{display:table}.bucket--flag .bucket-content{vertical-align:middle}.bucket-content{display:table-cell;width:10000px}.bucket-media{float:left;margin-right:1.11111em}.bucket-media>img{display:block;max-width:none}.card{background:#fefefe;border:1px solid #f5f5f5;padding:1.11111em;position:relative}.cell,.cell--s{margin-left:auto;margin-right:auto;max-width:56.88889em;position:relative}.cell--s{max-width:38.88889em}.g{display:block;margin-left:-10px;margin-right:-10px}.g-b{box-sizing:border-box;float:left;margin:0;padding-left:10px;padding-right:10px;width:100%}.g-b--center{display:block;float:none;margin:0 auto}.g-b--1of1{width:100%}.g-b--1of2,.g-b--2of4,.g-b--3of6,.g-b--4of8,.g-b--5of10,.g-b--6of12{width:50%}.g-b--1of3,.g-b--2of6,.g-b--4of12{width:33.333%}.g-b--2of3,.g-b--4of6,.g-b--8of12{width:66.666%}.g-b--1of4,.g-b--2of8,.g-b--3of12{width:25%}.g-b--3of4,.g-b--6of8,.g-b--9of12{width:75%}.g-b--1of5,.g-b--2of10{width:20%}.g-b--2of5,.g-b--4of10{width:40%}.g-b--3of5,.g-b--6of10{width:60%}.g-b--4of5,.g-b--8of10{width:80%}.g-b--1of6,.g-b--2of12{width:16.666%}.g-b--5of6,.g-b--10of12{width:83.333%}.g-b--1of8{width:12.5%}.g-b--3of8{width:37.5%}.g-b--5of8{width:62.5%}.g-b--7of8{width:87.5%}.g-b--1of10{width:10%}.g-b--3of10{width:30%}.g-b--7of10{width:70%}.g-b--9of10{width:90%}.g-b--1of12{width:8.333%}.g-b--5of12{width:41.666%}.g-b--7of12{width:58.333%}.g-b--11of12{width:91.666%}@media screen and (min-width: 26.66667em){.g-b--s--1of1{width:100%}.g-b--s--1of2,.g-b--s--2of4,.g-b--s--3of6,.g-b--s--4of8,.g-b--s--5of10,.g-b--s--6of12{width:50%}.g-b--s--1of3,.g-b--s--2of6,.g-b--s--4of12{width:33.333%}.g-b--s--2of3,.g-b--s--4of6,.g-b--s--8of12{width:66.666%}.g-b--s--1of4,.g-b--s--2of8,.g-b--s--3of12{width:25%}.g-b--s--3of4,.g-b--s--6of8,.g-b--s--9of12{width:75%}.g-b--s--1of5,.g-b--s--2of10{width:20%}.g-b--s--2of5,.g-b--s--4of10{width:40%}.g-b--s--3of5,.g-b--s--6of10{width:60%}.g-b--s--4of5,.g-b--s--8of10{width:80%}.g-b--s--1of6,.g-b--s--2of12{width:16.666%}.g-b--s--5of6,.g-b--s--10of12{width:83.333%}.g-b--s--1of8{width:12.5%}.g-b--s--3of8{width:37.5%}.g-b--s--5of8{width:62.5%}.g-b--s--7of8{width:87.5%}.g-b--s--1of10{width:10%}.g-b--s--3of10{width:30%}.g-b--s--7of10{width:70%}.g-b--s--9of10{width:90%}.g-b--s--1of12{width:8.333%}.g-b--s--5of12{width:41.666%}.g-b--s--7of12{width:58.333%}.g-b--s--11of12{width:91.666%}}@media screen and (min-width: 44.44444em){.g-b--m--1of1{width:100%}.g-b--m--1of2,.g-b--m--2of4,.g-b--m--3of6,.g-b--m--4of8,.g-b--m--5of10,.g-b--m--6of12{width:50%}.g-b--m--1of3,.g-b--m--2of6,.g-b--m--4of12{width:33.333%}.g-b--m--2of3,.g-b--m--4of6,.g-b--m--8of12{width:66.666%}.g-b--m--1of4,.g-b--m--2of8,.g-b--m--3of12{width:25%}.g-b--m--3of4,.g-b--m--6of8,.g-b--m--9of12{width:75%}.g-b--m--1of5,.g-b--m--2of10{width:20%}.g-b--m--2of5,.g-b--m--4of10{width:40%}.g-b--m--3of5,.g-b--m--6of10{width:60%}.g-b--m--4of5,.g-b--m--8of10{width:80%}.g-b--m--1of6,.g-b--m--2of12{width:16.666%}.g-b--m--5of6,.g-b--m--10of12{width:83.333%}.g-b--m--1of8{width:12.5%}.g-b--m--3of8{width:37.5%}.g-b--m--5of8{width:62.5%}.g-b--m--7of8{width:87.5%}.g-b--m--1of10{width:10%}.g-b--m--3of10{width:30%}.g-b--m--7of10{width:70%}.g-b--m--9of10{width:90%}.g-b--m--1of12{width:8.333%}.g-b--m--5of12{width:41.666%}.g-b--m--7of12{width:58.333%}.g-b--m--11of12{width:91.666%}}@media screen and (min-width: 56.88889em){.g-b--l--1of1{width:100%}.g-b--l--1of2,.g-b--l--2of4,.g-b--l--3of6,.g-b--l--4of8,.g-b--l--5of10,.g-b--l--6of12{width:50%}.g-b--l--1of3,.g-b--l--2of6,.g-b--l--4of12{width:33.333%}.g-b--l--2of3,.g-b--l--4of6,.g-b--l--8of12{width:66.666%}.g-b--l--1of4,.g-b--l--2of8,.g-b--l--3of12{width:25%}.g-b--l--3of4,.g-b--l--6of8,.g-b--l--9of12{width:75%}.g-b--l--1of5,.g-b--l--2of10{width:20%}.g-b--l--2of5,.g-b--l--4of10{width:40%}.g-b--l--3of5,.g-b--l--6of10{width:60%}.g-b--l--4of5,.g-b--l--8of10{width:80%}.g-b--l--1of6,.g-b--l--2of12{width:16.666%}.g-b--l--5of6,.g-b--l--10of12{width:83.333%}.g-b--l--1of8{width:12.5%}.g-b--l--3of8{width:37.5%}.g-b--l--5of8{width:62.5%}.g-b--l--7of8{width:87.5%}.g-b--l--1of10{width:10%}.g-b--l--3of10{width:30%}.g-b--l--7of10{width:70%}.g-b--l--9of10{width:90%}.g-b--l--1of12{width:8.333%}.g-b--l--5of12{width:41.666%}.g-b--l--7of12{width:58.333%}.g-b--l--11of12{width:91.666%}}.row{overflow:hidden;padding:0 1.11111em}.row--a{background:#89b700}.row--b{background:#404040}.well{margin-bottom:1.11111em;margin-top:1.11111em}.well--l{margin-bottom:2.22222em;margin-top:2.22222em}.tac{text-align:center}.tch{color:#89b700}.tci{color:#111111}.tcs{color:#404040}.tct{color:#ffffff}.tfb{font-family:"proxima-nova-alt-ext-cond", sans-serif}.tfh{font-family:"proxima-nova-alt-ext-cond", sans-serif}.tsxs{font-size:60%}.tss{font-size:75%}.tsm{font-size:90%}.tsl{font-size:115%}.tsxl{font-size:150%}.twn{font-weight:400}.twb{font-weight:700}.twbl{font-weight:800}.ct-chart .ct-label{display:block;width:100%;height:100%;fill:#666;color:#666;font-size:0.75rem;text-align:left}.ct-chart .ct-label.ct-horizontal{display:block;width:100%;height:100%;fill:#666;color:#666;font-size:0.75rem;text-align:left}.ct-chart .ct-label.ct-vertical{display:block;width:100%;height:100%;fill:#666;color:#666;font-size:0.75rem;text-align:right}.ct-chart .ct-grid{stroke:#222326;stroke-width:1px;stroke-dasharray:2px}.ct-chart .ct-point{stroke-width:10px;stroke-linecap:round}.ct-chart .ct-line{fill:none;stroke-width:4px}.ct-chart .ct-area{stroke:none;fill-opacity:0.1}.ct-chart .ct-bar{fill:none;stroke-width:10px}.ct-chart .ct-slice.ct-donut{fill:none;stroke-width:60px}.ct-chart .ct-series.ct-series-a .ct-point,.ct-chart .ct-series.ct-series-a .ct-line,.ct-chart .ct-series.ct-series-a .ct-bar,.ct-chart .ct-series.ct-series-a .ct-slice.ct-donut{stroke:#89b700}.ct-chart .ct-series.ct-series-a .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-a .ct-area{fill:#89b700}.ct-chart .ct-series.ct-series-b .ct-point,.ct-chart .ct-series.ct-series-b .ct-line,.ct-chart .ct-series.ct-series-b .ct-bar,.ct-chart .ct-series.ct-series-b .ct-slice.ct-donut{stroke:#f05b4f}.ct-chart .ct-series.ct-series-b .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-b .ct-area{fill:#f05b4f}.ct-chart .ct-series.ct-series-c .ct-point,.ct-chart .ct-series.ct-series-c .ct-line,.ct-chart .ct-series.ct-series-c .ct-bar,.ct-chart .ct-series.ct-series-c .ct-slice.ct-donut{stroke:#f4c63d}.ct-chart .ct-series.ct-series-c .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-c .ct-area{fill:#f4c63d}.ct-chart .ct-series.ct-series-d .ct-point,.ct-chart .ct-series.ct-series-d .ct-line,.ct-chart .ct-series.ct-series-d .ct-bar,.ct-chart .ct-series.ct-series-d .ct-slice.ct-donut{stroke:#d17905}.ct-chart .ct-series.ct-series-d .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-d .ct-area{fill:#d17905}.ct-chart .ct-series.ct-series-e .ct-point,.ct-chart .ct-series.ct-series-e .ct-line,.ct-chart .ct-series.ct-series-e .ct-bar,.ct-chart .ct-series.ct-series-e .ct-slice.ct-donut{stroke:#453d3f}.ct-chart .ct-series.ct-series-e .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-e .ct-area{fill:#453d3f}.ct-chart .ct-series.ct-series-f .ct-point,.ct-chart .ct-series.ct-series-f .ct-line,.ct-chart .ct-series.ct-series-f .ct-bar,.ct-chart .ct-series.ct-series-f .ct-slice.ct-donut{stroke:#59922b}.ct-chart .ct-series.ct-series-f .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-f .ct-area{fill:#59922b}.ct-chart .ct-series.ct-series-g .ct-point,.ct-chart .ct-series.ct-series-g .ct-line,.ct-chart .ct-series.ct-series-g .ct-bar,.ct-chart .ct-series.ct-series-g .ct-slice.ct-donut{stroke:#0544d3}.ct-chart .ct-series.ct-series-g .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-g .ct-area{fill:#0544d3}.ct-chart .ct-series.ct-series-h .ct-point,.ct-chart .ct-series.ct-series-h .ct-line,.ct-chart .ct-series.ct-series-h .ct-bar,.ct-chart .ct-series.ct-series-h .ct-slice.ct-donut{stroke:#6b0392}.ct-chart .ct-series.ct-series-h .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-h .ct-area{fill:#6b0392}.ct-chart .ct-series.ct-series-i .ct-point,.ct-chart .ct-series.ct-series-i .ct-line,.ct-chart .ct-series.ct-series-i .ct-bar,.ct-chart .ct-series.ct-series-i .ct-slice.ct-donut{stroke:#f05b4f}.ct-chart .ct-series.ct-series-i .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-i .ct-area{fill:#f05b4f}.ct-chart .ct-series.ct-series-j .ct-point,.ct-chart .ct-series.ct-series-j .ct-line,.ct-chart .ct-series.ct-series-j .ct-bar,.ct-chart .ct-series.ct-series-j .ct-slice.ct-donut{stroke:#dda458}.ct-chart .ct-series.ct-series-j .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-j .ct-area{fill:#dda458}.ct-chart .ct-series.ct-series-k .ct-point,.ct-chart .ct-series.ct-series-k .ct-line,.ct-chart .ct-series.ct-series-k .ct-bar,.ct-chart .ct-series.ct-series-k .ct-slice.ct-donut{stroke:#eacf7d}.ct-chart .ct-series.ct-series-k .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-k .ct-area{fill:#eacf7d}.ct-chart .ct-series.ct-series-l .ct-point,.ct-chart .ct-series.ct-series-l .ct-line,.ct-chart .ct-series.ct-series-l .ct-bar,.ct-chart .ct-series.ct-series-l .ct-slice.ct-donut{stroke:#86797d}.ct-chart .ct-series.ct-series-l .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-l .ct-area{fill:#86797d}.ct-chart .ct-series.ct-series-m .ct-point,.ct-chart .ct-series.ct-series-m .ct-line,.ct-chart .ct-series.ct-series-m .ct-bar,.ct-chart .ct-series.ct-series-m .ct-slice.ct-donut{stroke:#b2c326}.ct-chart .ct-series.ct-series-m .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-m .ct-area{fill:#b2c326}.ct-chart .ct-series.ct-series-n .ct-point,.ct-chart .ct-series.ct-series-n .ct-line,.ct-chart .ct-series.ct-series-n .ct-bar,.ct-chart .ct-series.ct-series-n .ct-slice.ct-donut{stroke:#6188e2}.ct-chart .ct-series.ct-series-n .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-n .ct-area{fill:#6188e2}.ct-chart .ct-series.ct-series-o .ct-point,.ct-chart .ct-series.ct-series-o .ct-line,.ct-chart .ct-series.ct-series-o .ct-bar,.ct-chart .ct-series.ct-series-o .ct-slice.ct-donut{stroke:#a748ca}.ct-chart .ct-series.ct-series-o .ct-slice:not(.ct-donut),.ct-chart .ct-series.ct-series-o .ct-area{fill:#a748ca}.ct-chart.ct-square{display:block;position:relative;width:100%}.ct-chart.ct-square:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:100%}.ct-chart.ct-square:after{content:"";display:table;clear:both}.ct-chart.ct-square>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-minor-second{display:block;position:relative;width:100%}.ct-chart.ct-minor-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:93.75%}.ct-chart.ct-minor-second:after{content:"";display:table;clear:both}.ct-chart.ct-minor-second>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-second{display:block;position:relative;width:100%}.ct-chart.ct-major-second:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:88.88889%}.ct-chart.ct-major-second:after{content:"";display:table;clear:both}.ct-chart.ct-major-second>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-minor-third{display:block;position:relative;width:100%}.ct-chart.ct-minor-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:83.33333%}.ct-chart.ct-minor-third:after{content:"";display:table;clear:both}.ct-chart.ct-minor-third>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-third{display:block;position:relative;width:100%}.ct-chart.ct-major-third:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:80%}.ct-chart.ct-major-third:after{content:"";display:table;clear:both}.ct-chart.ct-major-third>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-perfect-fourth{display:block;position:relative;width:100%}.ct-chart.ct-perfect-fourth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:75%}.ct-chart.ct-perfect-fourth:after{content:"";display:table;clear:both}.ct-chart.ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-perfect-fifth{display:block;position:relative;width:100%}.ct-chart.ct-perfect-fifth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:66.66667%}.ct-chart.ct-perfect-fifth:after{content:"";display:table;clear:both}.ct-chart.ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-minor-sixth{display:block;position:relative;width:100%}.ct-chart.ct-minor-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:62.5%}.ct-chart.ct-minor-sixth:after{content:"";display:table;clear:both}.ct-chart.ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-golden-section{display:block;position:relative;width:100%}.ct-chart.ct-golden-section:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:61.8047%}.ct-chart.ct-golden-section:after{content:"";display:table;clear:both}.ct-chart.ct-golden-section>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-sixth{display:block;position:relative;width:100%}.ct-chart.ct-major-sixth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:60%}.ct-chart.ct-major-sixth:after{content:"";display:table;clear:both}.ct-chart.ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-minor-seventh{display:block;position:relative;width:100%}.ct-chart.ct-minor-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:56.25%}.ct-chart.ct-minor-seventh:after{content:"";display:table;clear:both}.ct-chart.ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-seventh{display:block;position:relative;width:100%}.ct-chart.ct-major-seventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:53.33333%}.ct-chart.ct-major-seventh:after{content:"";display:table;clear:both}.ct-chart.ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-octave{display:block;position:relative;width:100%}.ct-chart.ct-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:50%}.ct-chart.ct-octave:after{content:"";display:table;clear:both}.ct-chart.ct-octave>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-tenth{display:block;position:relative;width:100%}.ct-chart.ct-major-tenth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:40%}.ct-chart.ct-major-tenth:after{content:"";display:table;clear:both}.ct-chart.ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-eleventh{display:block;position:relative;width:100%}.ct-chart.ct-major-eleventh:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:37.5%}.ct-chart.ct-major-eleventh:after{content:"";display:table;clear:both}.ct-chart.ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-major-twelfth{display:block;position:relative;width:100%}.ct-chart.ct-major-twelfth:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:33.33333%}.ct-chart.ct-major-twelfth:after{content:"";display:table;clear:both}.ct-chart.ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}.ct-chart.ct-double-octave{display:block;position:relative;width:100%}.ct-chart.ct-double-octave:before{display:block;float:left;content:"";width:0;height:0;padding-bottom:25%}.ct-chart.ct-double-octave:after{content:"";display:table;clear:both}.ct-chart.ct-double-octave>svg{display:block;position:absolute;top:0;left:0}html{background:#222;color:#ffffff;font-family:"proxima-nova-alt-ext-cond", sans-serif;font-weight:400;line-height:1.75}body{margin:0;padding:0}h1,h2{font-weight:700;margin-bottom:0}h3,h4,h5{font-weight:400;line-height:1.2;margin-bottom:0;text-transform:uppercase}strong{font-weight:700}img{max-width:100%}.card{background:#fefefe;color:#111111;font-family:"Helvetica-Neue", Helvetica, sans-serif;padding:1.11111em;position:relative}footer{color:#ffffff;text-align:center}footer a{color:#ffffff;margin-left:1.11111em}footer a:hover{color:white}footer p{display:inline-block}footer nav{display:inline-block}img{display:block}h4,h5,p{margin:0 0 0.27778em 0}h4{padding:0.27778em}h5{opacity:0.6}li{list-style:none;margin-bottom:2.22222em}table{border:0;border-collapse:collapse;border-spacing:0;margin:0 auto 4.44444em}td{padding-bottom:1.11111em;vertical-align:top;width:130px}td img{transition:opacity 0.3s ease-in-out}td:first-child{position:relative;top:200px;width:70px}td:nth-child(2){position:relative;top:180px}td:nth-child(2) img{opacity:0.7}td:nth-child(3){position:relative;top:160px}td:nth-child(3) img{opacity:0.73}td:nth-child(4){position:relative;top:140px}td:nth-child(4) img{opacity:0.76}td:nth-child(5){position:relative;top:120px}td:nth-child(5) img{opacity:0.79}td:nth-child(6){position:relative;top:100px}td:nth-child(6) img{opacity:0.82}td:nth-child(7){position:relative;top:80px}td:nth-child(7) img{opacity:0.85}td:nth-child(8){position:relative;top:60px}td:nth-child(8) img{opacity:0.88}td:nth-child(9){position:relative;top:40px}td:nth-child(9) img{opacity:0.91}td:nth-child(10){position:relative;top:20px}td:nth-child(10) img{opacity:0.94}td:hover img{opacity:1}.title-count{color:#404040;font-size:200%;font-weight:800;text-align:center}.title-count td{padding:0}.track img{border-top:2px solid rgba(0,0,0,0.3);opacity:1 !important}.track h4{background:rgba(0,0,0,0.3)}.is-pathItem{opacity:1 !important}
</style>

<section>

<table>

<tbody>

<tr class="title-count">

<td style="opacity: 0.2;"> </td>

<td style="opacity: 0.2;">10</td>

<td style="opacity: 0.2;">09</td>

<td style="opacity: 0.2;">08</td>

<td class="is-pathItem" style="opacity: 0.2;">07</td>

<td style="opacity: 0.2;">06</td>

<td style="opacity: 0.2;">05</td>

<td style="opacity: 0.2;">04</td>

<td class="" style="opacity: 0.2;">03</td>

<td style="opacity: 0.2;">02</td>

<td style="opacity: 0.2;">01</td>

</tr>

<tr>

<td class="tac" style="opacity: 0.2;">

### Feb 02

</td>

<td class="dangerous" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/ee915e50041ce0dd1dfde71cc6e2c28e078aa8e8.jpeg)

#### Dangerous

</div>

</td>

<td class="gdfr" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/b225984a1dec4cb4ea43345388ecae4f740cba0b.jpeg)

#### GDFR

</div>

</td>

<td class="cheerleader" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/f3cf87bfde0748d389702a69e0ba01f6091e2403.jpeg)

#### Cheerleader

</div>

</td>

<td class="firestone" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/c2e52266c4ed1541003babec2964a99ce0350aa3.jpeg)

#### Firestone

</div>

</td>

<td class="love-me-like-you-do" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/1c64a09fef47c954a6f5e779fbb21bf0245832dc.jpeg)

#### Love Me Like You Do

</div>

</td>

<td class="outside" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0e2747127c12222577e98ccec7ce44773c12c546.jpeg)

#### Outside

</div>

</td>

<td class="sugar" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/956a2c25a6a0cdfcf7e4d61af359b1b3e73575da.jpeg)

#### Sugar

</div>

</td>

<td class="thinking-out-loud" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/646e9619750dfa3d1eadbbea959dc6f528a9109e.jpeg)

#### Thinking Out Loud

</div>

</td>

<td class="take-me-to-church" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0080bec0581fe6edb83293c14d3a0d01942b1798.jpeg)

#### Take Me To Church

</div>

</td>

<td class="uptown-funk" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/95f7f3bff78df3fbf5402ee304c9344aaec52890.jpeg)

#### Uptown Funk

</div>

</td>

</tr>

<tr class="title-count">

<td style="opacity: 0.2;"> </td>

<td style="opacity: 0.2;">10</td>

<td style="opacity: 0.2;">09</td>

<td style="opacity: 0.2;">08</td>

<td style="opacity: 0.2;">07</td>

<td style="opacity: 0.2;">06</td>

<td style="opacity: 0.2;">05</td>

<td style="opacity: 0.2;">04</td>

<td style="opacity: 0.2;">03</td>

<td style="opacity: 0.2;">02</td>

<td style="opacity: 0.2;">01</td>

</tr>

<tr>

<td class="tac" style="opacity: 0.2;">

### Jan 26

</td>

<td class="love-me-like-you-do" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/1c64a09fef47c954a6f5e779fbb21bf0245832dc.jpeg)

#### Love Me Like You Do

</div>

</td>

<td class="dangerous" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/ee915e50041ce0dd1dfde71cc6e2c28e078aa8e8.jpeg)

#### Dangerous

</div>

</td>

<td class="cheerleader" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/f3cf87bfde0748d389702a69e0ba01f6091e2403.jpeg)

#### Cheerleader

</div>

</td>

<td class="gdfr" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/b225984a1dec4cb4ea43345388ecae4f740cba0b.jpeg)

#### GDFR

</div>

</td>

<td class="sugar" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/956a2c25a6a0cdfcf7e4d61af359b1b3e73575da.jpeg)

#### Sugar

</div>

</td>

<td class="outside" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0e2747127c12222577e98ccec7ce44773c12c546.jpeg)

#### Outside

</div>

</td>

<td class="firestone" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/c2e52266c4ed1541003babec2964a99ce0350aa3.jpeg)

#### Firestone

</div>

</td>

<td class="take-me-to-church" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0080bec0581fe6edb83293c14d3a0d01942b1798.jpeg)

#### Take Me To Church

</div>

</td>

<td class="thinking-out-loud" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/646e9619750dfa3d1eadbbea959dc6f528a9109e.jpeg)

#### Thinking Out Loud

</div>

</td>

<td class="uptown-funk" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/95f7f3bff78df3fbf5402ee304c9344aaec52890.jpeg)

#### Uptown Funk

</div>

</td>

</tr>

<tr class="title-count">

<td style="opacity: 0.2;"> </td>

<td style="opacity: 0.2;">10</td>

<td style="opacity: 0.2;">09</td>

<td style="opacity: 0.2;">08</td>

<td style="opacity: 0.2;">07</td>

<td style="opacity: 0.2;">06</td>

<td style="opacity: 0.2;">05</td>

<td style="opacity: 0.2;">04</td>

<td style="opacity: 0.2;">03</td>

<td style="opacity: 0.2;">02</td>

<td style="opacity: 0.2;">01</td>

</tr>

<tr>

<td class="tac" style="opacity: 0.2;">

### Jan 19

</td>

<td class="blame" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0e2747127c12222577e98ccec7ce44773c12c546.jpeg)

#### Blame

</div>

</td>

<td class="dangerous" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/ee915e50041ce0dd1dfde71cc6e2c28e078aa8e8.jpeg)

#### Dangerous

</div>

</td>

<td class="love-me-harder" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/ded7eb8e29384d0d75be7ffc2411bb8008f055b4.jpeg)

#### Love Me Harder

</div>

</td>

<td class="gdfr" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/b225984a1dec4cb4ea43345388ecae4f740cba0b.jpeg)

#### GDFR

</div>

</td>

<td class="cheerleader" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/f3cf87bfde0748d389702a69e0ba01f6091e2403.jpeg)

#### Cheerleader

</div>

</td>

<td class="firestone" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/c2e52266c4ed1541003babec2964a99ce0350aa3.jpeg)

#### Firestone

</div>

</td>

<td class="outside" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0e2747127c12222577e98ccec7ce44773c12c546.jpeg)

#### Outside

</div>

</td>

<td class="thinking-out-loud" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/646e9619750dfa3d1eadbbea959dc6f528a9109e.jpeg)

#### Thinking Out Loud

</div>

</td>

<td class="take-me-to-church" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0080bec0581fe6edb83293c14d3a0d01942b1798.jpeg)

#### Take Me To Church

</div>

</td>

<td class="uptown-funk" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/95f7f3bff78df3fbf5402ee304c9344aaec52890.jpeg)

#### Uptown Funk

</div>

</td>

</tr>

<tr class="title-count">

<td style="opacity: 0.2;"> </td>

<td style="opacity: 0.2;">10</td>

<td style="opacity: 0.2;">09</td>

<td style="opacity: 0.2;">08</td>

<td style="opacity: 0.2;">07</td>

<td style="opacity: 0.2;">06</td>

<td style="opacity: 0.2;">05</td>

<td style="opacity: 0.2;">04</td>

<td style="opacity: 0.2;">03</td>

<td style="opacity: 0.2;">02</td>

<td style="opacity: 0.2;">01</td>

</tr>

<tr>

<td class="tac" style="opacity: 0.2;">

### Jan 12

</td>

<td class="stay-with-me" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/72d5bd1ecd38f261de6b7987283f35cd13d02fbd.jpeg)

#### Stay With Me

</div>

</td>

<td class="blame" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0e2747127c12222577e98ccec7ce44773c12c546.jpeg)

#### Blame

</div>

</td>

<td class="lips-are-movin" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/26b682beeb3bfefdfeed113bdbc0177bfb148b49.jpeg)

#### Lips Are Movin

</div>

</td>

<td class="dangerous" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/ee915e50041ce0dd1dfde71cc6e2c28e078aa8e8.jpeg)

#### Dangerous

</div>

</td>

<td class="love-me-harder" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/ded7eb8e29384d0d75be7ffc2411bb8008f055b4.jpeg)

#### Love Me Harder

</div>

</td>

<td class="firestone" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/c2e52266c4ed1541003babec2964a99ce0350aa3.jpeg)

#### Firestone

</div>

</td>

<td class="outside" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0e2747127c12222577e98ccec7ce44773c12c546.jpeg)

#### Outside

</div>

</td>

<td class="thinking-out-loud" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/646e9619750dfa3d1eadbbea959dc6f528a9109e.jpeg)

#### Thinking Out Loud

</div>

</td>

<td class="take-me-to-church" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0080bec0581fe6edb83293c14d3a0d01942b1798.jpeg)

#### Take Me To Church

</div>

</td>

<td class="uptown-funk" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/95f7f3bff78df3fbf5402ee304c9344aaec52890.jpeg)

#### Uptown Funk

</div>

</td>

</tr>

<tr class="title-count">

<td style="opacity: 0.2;"> </td>

<td style="opacity: 0.2;">10</td>

<td style="opacity: 0.2;">09</td>

<td style="opacity: 0.2;">08</td>

<td style="opacity: 0.2;">07</td>

<td style="opacity: 0.2;">06</td>

<td style="opacity: 0.2;">05</td>

<td style="opacity: 0.2;">04</td>

<td style="opacity: 0.2;">03</td>

<td style="opacity: 0.2;">02</td>

<td style="opacity: 0.2;">01</td>

</tr>

<tr>

<td class="tac" style="opacity: 0.2;">

### Jan 05

</td>

<td class="firestone" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/c2e52266c4ed1541003babec2964a99ce0350aa3.jpeg)

#### Firestone

</div>

</td>

<td class="all-about-that-bass" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/d7fe19b11c2814f98aa1449713cdc42668070a49.jpeg)

#### All About That Bass

</div>

</td>

<td class="love-me-harder" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/ded7eb8e29384d0d75be7ffc2411bb8008f055b4.jpeg)

#### Love Me Harder

</div>

</td>

<td class="stay-with-me" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/72d5bd1ecd38f261de6b7987283f35cd13d02fbd.jpeg)

#### Stay With Me

</div>

</td>

<td class="blame" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0e2747127c12222577e98ccec7ce44773c12c546.jpeg)

#### Blame

</div>

</td>

<td class="dangerous" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/ee915e50041ce0dd1dfde71cc6e2c28e078aa8e8.jpeg)

#### Dangerous

</div>

</td>

<td class="outside" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0e2747127c12222577e98ccec7ce44773c12c546.jpeg)

#### Outside

</div>

</td>

<td class="thinking-out-loud" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/646e9619750dfa3d1eadbbea959dc6f528a9109e.jpeg)

#### Thinking Out Loud

</div>

</td>

<td class="take-me-to-church" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/0080bec0581fe6edb83293c14d3a0d01942b1798.jpeg)

#### Take Me To Church

</div>

</td>

<td class="uptown-funk" style="opacity: 0.2;">

<div class="dib track">

![](/img/tinkerings/spotify-data-project/95f7f3bff78df3fbf5402ee304c9344aaec52890.jpeg)

#### Uptown Funk

</div>

</td>

</tr>

</tbody>

</table>

</section>

<article class="row">

<div class="cell cell--s well">

<div class="card">

# Spotify Project: <strike>Today's Top Hits</strike> Top 100 Data

## The Idea

Visualize the top 10 of Spotify’s Today’s Top Hits playlist throughout 2015.

In wanting to learn data visualization, it’s best for me to learn by projects. This process will help me understand data collection, sanitation, and visualization on a small scale. Plus, I love music and listen to this playlist often.

## Manual Data Collection… yuk

In time, I’ll find out if there is an automated way of getting this information. For the moment, I’ll manually grab the information from the playlist every Monday.

I chose Mondays because Tuesday is the day for new music. It will allow 6 days for the new music to work through the list.

I quickly learned that the Today's Top Hits list is more of a curated list, so I switched to grabbing data from the Top 100 Playlist which appears to be by data. I was lucky that I had done some sampling before the start of the year or I would have missed out on a week of info.

## Attributes

- Date
- Position
- Title
- Artist
- ID
- Image URL

## Grabbing Data

I started by grabbing the information that Spotify makes easily available: HTTP Link, Spotify URI, and Embed Code. Here is an example of the information for the first song:

- HTTP Link = http://open.spotify.com/track/4bBrKDo8rchikwZOtmXbIH
- Spotify URI = spotify:track:4bBrKDo8rchikwZOtmXbIH
- Embed Code =<iframe src="https://embed.spotify.com/?uri=spotify:track:4bBrKDo8rchikwZOtmXbIH" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>

It seems that the ID is used for all of the attributes. There’s a lot of redundancy if I’m collecting 10 songs per week and it can all be generated if necessary automatically. All I need from that is the ID: 4bBrKDo8rchikwZOtmXbIH

## Visualization Plans

I know that I’ll be using D3 because this won’t be a simple graph. Over time, I’m guessing that there will be some interesting info to be shown and that it will require customization.

While I have minimal data, the first decision is whether to display the dates horizontally or vertically. On a small screen, vertically makes the most sense. On a large screen, horizontal will allow for linear scrolling. Showing the path of a track through the weeks will always be tough on a small screen so that’ll be something to learn along the way.

## Setup

Fortunately, this will be very simple. There’s no need for a build system. An HTML file, the data file, and D3 should suffice for now. If there ends up being a way to grab this data from an API I would need to set up an app, but I’ll deal with that later if necessary.

Everything will be in the repo:

## Design Decisions

In playing with the sample data, there are already some decisions to make. While listing the #1 first feels right for the data, my eyes tend to follow the list to the right. If it stays horizontal, I think the #1 should be last.

![screenshot of samples](/img/tinkerings/spotify-data-project/design-decisions.jpg)

- Should dates run vertically or horizontally?
- What data should be shown in the up state vs. a hover state?
- What other data should be shown?
- Where should additional data be shown?

## January 18

Some changes are already in play. In playing with the arrangement and figuring out what data should be shown, it became clear to me that the individual song data is more interesting than the week-to-week.

This means that I need to structure the data in a way that allows for tracking an individual song's stats as well as each week's. I'm picturing that each week will be 10 vertical rows with each song showing it's meta data and a graph of it's performance through the list. I'll need a way of designating the entry point of the song because that will be interesting info to show as well.

I was using Numbers to track this, exporting to CSV, using a CSV to JSON automater, and then working with the JSON. Now that I'm using Middleman, I think I'm going to use YML for a bit because of the clean structuring. If I ever tried grabbing all of the info from Spotify's API, I'd likely need to use JSON but I'm not sure I can pull off the structuring I need.

For example, this week I'm going to try using their API to make the data collection faster. They don't link to the image URL so that part will still be manual. You can grab [playlist info](https://developer.spotify.com/web-api/get-playlist/).

I'm slightly scared of the maintenance of the solution for tracking the progress of the track. It's simple but requires backwards updates. You're probably just not supposed to do things like this without a database. We shall see...

Final note for the day: I'm pretty sure that I want the embed available as an option. What's the fun of seeing a song if you can't play it, right? The embeds actually display all of the meta information that I am showing as well. They're so big, but I'm wondering what it'd look like with a bunch of them. So I'm going to replace the images for the moment and compare a couple things.

Final note for the day: I'm pretty sure that I want the embed available as an option. What's the fun of seeing a song if you can't play it, right? The embeds actually display all of the meta information that I am showing as well. They're so big, but I'm wondering what it'd look like with a bunch of them. So I'm going to replace the images for the moment and compare a couple things.

A page with images has 49 requests and weighs in at 1.1mb A page with embeds has 428 requests and weighs in at 4.4mb

It'd be irresponsible to do that for every set, so I'll have to work in the embeds in a different way.

## January 19

Grabbing data from the Spotify API is pretty straight forward but it's a lot of data. I can trim it down but I still have to comb through a lot. The nice thing is that I think it would be possible to grab all of the meta that I want from it if I wanted to. It's set to grab the current state of a playlist, though, so this would have to be set to an automated job or I would have to do it weekly. It may be worthwhile to set that up just in case.

Already borked the data once. I put the concurrent weeks in the wrong order. Sooooo thankful for that numbers sheet. Added just the slightest bit of styles just so it didn't look like an explosion.

Made a mess of things tonight. I need to learn Bower. I was able to install Chartist from it, but I'm not sure how to reference it from Middleman so I ended up just duping it in the repo. Also, writing the Chartist JS in Coffee is odd. It requires weird structuring. The saddest part is that I'm likely not going to be able to use it. I love the simplicity of it, the weight, and the styles. However, I think I need the customization of d3\. I want the scales to increase by 1 so you can see 10 places and I need to invert the scale so that 6 is higher than 8, for example.

## January 20

I guess it needs to be design time. I have the information I need in a structure that seems to work. There are patterns emerging in the data that give me an idea of what I want to show. I can't use Chartist for it, so now I need to figure out how I want it to look so that I know what to learn in d3.

I've been [stashing](http://www.pinterest.com/dandenney/data-visualization/) a bunch of interesting data viz work for inspiration and there was [a piece](https://www.behance.net/gallery/Weather-Dashboard-Global-Outlook-UIUX/12748107) that caught my eye today. There are so many good ideas in that set and a few patterns that make sense for this project.

## January 21

Archiving screenshots of things that I'm killing. User tested the layouts and everyone (Cherrie and Jasmine) prefer the grid of album covers. So, I'm rolling with that. Also killing the chartist stuff since I can't use it.

![screenshot of column layout](/img/tinkerings/spotify-data-project/sample-column-view.png)

![screenshot of column layout](/img/tinkerings/spotify-data-project/sample-song-graph.png)

## January 22

Drew had exactly what I needed the whole time as I fought to make the classes from the song titles last night. [middleman library](https://github.com/drewbarontini/middleman-library)

## January 27

Negative numbers! It hit me today while driving that negative numbers would help with plotting and showing change from week to week. I still can't use Chartist because of the lack of control over the guides, but making 10 and 1 be -10 and -1 would allow for the graph to work properly.

![screenshot of graph with negative plots](/img/tinkerings/spotify-data-project/sample-graph-negative-plots.png)

Showing the change from week to week would work too: 4 - 2 = 2, but it's really a drop of 2 spots. If -4 and -2 are used, -4 - -2 = -2\. We'll see what I can do with that.

## Feb 2

I played with a staggered view a bit and I'll keep it for now. So far it's the best representaiton of the positions but I'm not sold on it.

Some interesting data is starting to form. There are definitely things that I want to be able to show: highest jump in the charts, best starting point, and total number of individual tracks are a few. Those will definitely take some learning and I hope it can be done with the data as is.

</div>

</div>

</article>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
(function(){var t,s;s=function(){return new Chartist.Line(".ct-chart",{labels:["Jan 5","Jan 12","Jan 19"],series:[[8,6,8]]},{axisY:{scaleMinSpace:22,showLabel:!1},offset:0,height:390,high:10,low:0,showArea:!0})},(t=function(){return $("td").on("click",function(){var t;return $("td").removeClass("is-pathItem").css("opacity",.2),t=$(this).attr("class"),$(this).addClass("is-pathItem"),$(this).parent().siblings().find("td."+t).addClass("is-pathItem")})})()}).call(this);
</script>
