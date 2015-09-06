// ==UserScript==
// @name         OddshotBot
// @namespace    https://gist.github.com/Oisann/00c1ef39e5960a015869
// @version      1.1
// @description  Moves OddshotBot's comment to the top of the comment list on reddit threads
// @author       Oisann, Kebabpizza
// @match        http*://*.reddit.com/r/*/comments/*
// @grant        none
// ==/UserScript==

if($('a.title').attr('href').toLowerCase().indexOf("oddshot.tv")) { //Link check
    var post = $(".commentarea a.author[href$='/user/OddshotBot']").parent().parent().parent(); //Comment + children
    post.parent().prepend(post); //Move it to the top
    post.css({outline: "1px solid #FF0000"}); //Red outline
}
