---
id: web-monetization-api
title: Web Monetization API
sidebar_label: Web Monetization API
---
import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';


The Web Monetization API provides a seamless payment experience for site owners and site visitors. Unlike the W3C's Payment Request API, when a web-monetized visitor visits a web-monetized website, a continuous stream of micro-payments takes place automatically. Thus, visitors automatically send a small sum per time unit to any web-monetized website they visit. The payment rate is predetermined by the user's web monetization agent and adapts over time.

## Web Monetization concepts and usage

## Interfaces
[`MonetizationEvent`](monetization-event.md)
  
  An event object that contains the amount, currency code, and receipt of a successful web monetization event.  

## Basic example

```html
<link rel="monetization" href="https://example.com/pay">
```

## Guides and tutorials

[**Exclusive Content**](exclusive-content.md)

A tutorial on how to show Web Monetized viewers exclusive content.

[**Remove Ads**](remove-ads.md)

A guide on removing ads for Web Monetized viewers. 

[**Micropayment Counter**](counter.md)

Calculate how much you made from a Web Monetized visitor.  

[**Probabilistic Revenue Sharing**](probabilistic-rev-sharing.md)

A guide on revenue sharing amongst multiple payment pointers. 

[**Receipt Verifier Service**](receipt-verifier.md)

A reference on verifying payments. 

## Libraries

- [Hugo Web Monetization Component](https://github.com/sabineschaller/hugo-webmonetization-component) is a theme component that enables Web Monetization on your entire Hugo website. 

- [Monetize Eleventy](https://github.com/DanCanetti/eleventy-plugin-monetization) is an Eleventy plugin to monetize posts and site content by creating exclusive content areas. 

- [gridsome-plugin-monetization](https://github.com/Sergix/gridsome-plugin-monetization) is a Web Monetization plugin for Gridsome. 

- [gatsby-plugin-monetization](https://github.com/mrmuhammadali/gatsby-plugin-monetization) is a Gatsby plugin for react-monetize to speed up your integration with Web Monetization. 

- [ngx-monetization](https://github.com/CDDelta/ngx-monetization) is a Web Monetization API for Angular. 

- [VuePress plugin Web Monetization](https://github.com/spekulatius/vuepress-plugin-web-monetization) is a Web Monetization plugin for your VuePress website. 

- [Tessy](https://github.com/VladimirMikulic/tessy) is an advanced Web Monetization testing library with a powerful declarative API. 

- [svelte-monetization](https://github.com/wobsoriano/svelte-monetization) is a minimal and lightweight wrapper for the Web Monetization API. 

- [Moodle Web Monetization Module](https://github.com/andrewhancox/moodle-local_webmonetization) is a plugin for adding Web Monetization to your Moodle site. 

- [Jekyll + Web Monetization](https://github.com/philnash/jekyll-web_monetization) is a Jekyll plugin for adding Web Monetization to your site.  



## Specifications

<Specifications>Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="webmonetization.json">Web Monetization API</BrowserCompat>
