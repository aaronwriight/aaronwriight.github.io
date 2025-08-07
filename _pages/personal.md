---
layout: archive
permalink: /personal/
title: "personal"
author_profile: true
# redirect_from:
#  - /personal
#  - /personal.html
---
---
<b>I <i>love</i> a good story.</b>


I hold a variety of things in my heart –– all of which, in one way or another, have lent to my story and flavored my approach to cognitive science. Chief among these inspirations are the great outdoors and music, and yet no singular peak – terrestrial or acoustic – is independent in its contribution to my story. Everything below is laced with a lively blend of its own wonder, a compilation that perpetuates my present curiosities and has carved lessons into my past wanderings. If not through my own musings, I hope that what I've stumbled upon finds a place in your story.


Here are a few (<i>several</i>) of my favorite things . . . in no particular order.

<div class="article-block">
  <div class="abstract-text" style="margin-left: 0;">
    <p>
      <b>Filter by type</b><br>
      <hr>
      {<span class="tag-filter" data-tag="art" style="color:#2AA198; cursor:pointer;">›</span>} <span class="tag-filter" data-tag="art" style="color:#2AA198; cursor:pointer;">art & media</span> |
      {<span class="tag-filter" data-tag="community" style="color:#268BD2; cursor:pointer;">›</span>} <span class="tag-filter" data-tag="community" style="color:#268BD2; cursor:pointer;">communities</span> |
      {<span class="tag-filter" data-tag="creative" style="color:#D33682; cursor:pointer;">›</span>} <span class="tag-filter" data-tag="creative" style="color:#D33682; cursor:pointer;">creative initiatives</span> |
      {<span class="tag-filter" data-tag="all" style="cursor:pointer;">›</span>} all
      <hr>
    </p>
  </div>
  <ul>
    <li class="art"><b>Music:</b> <em>The Definition</em> (Jon Bellion), <em>Everybody</em> (Logic), <em>Change of Scenery II</em> (Quinn XCII), <em>Brol La Suite</em> (Angèle), <em>Rainbow Mixtape</em> (COIN), <em>True Love</em> (Crystal Gayle)</li>
    <li class="art"><b>Films:</b> La La Land, A Quiet Place, Good Will Hunting, Spirited Away</li>
    <li class="art"><b>Literature:</b> Anne of Green Gables, The Haunting of Hill House, A Girl of the Limberlost</li>
    <li class="art"><b>Podcast:</b> <a href="https://www.alieward.com">Ologies with Alie Ward</a></li>
    <li class="community"><b>Communities:</b> <a href="https://lavidacenter.org">La Vida</a>, <a href="https://compasspath.org">Compass</a></li>
    <li class="creative"><b>Creatives:</b> <a href="https://houseofdakh.com">HOUSEOFDAKH</a>, <a href="https://www.cedricscherer.com">Cédric Scherer</a>, <a href="https://www.edengracecreative.com">Eden Grace Creative</a>, <a href="https://www.instagram.com/jameswellborn.art/">James Wellborn</a></li>
    <li class="creative"><b>Other Inspirations:</b> <a href="https://www.frihead.ch">Mathilde Rietsch</a>, <a href="https://www.beautifulmindprojects.com">Beautiful Mind Projects</a>, <a href="https://www.christopherdenniscoleman.com">Christopher Dennis Coleman</a>, <em>I'm Glad My Mom Died</em> by <a href="https://www.jennettemccurdy.com">Jennette McCurdy</a></li>
  </ul>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.tag-filter');
    const items = document.querySelectorAll('.article-block li');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;

        items.forEach(item => {
          if (tag === 'all') {
            item.style.display = '';
          } else {
            item.style.display = item.classList.contains(tag) ? '' : 'none';
          }
        });
      });
    });
  });
</script>