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
<style>
  .dropdown-toggle {
    color: #2AA198;
    cursor: pointer;
    text-decoration: none;
  }

  .dropdown-toggle:hover {
    text-decoration: underline;
  }

  .dropdown-divider {
    cursor: text;
    margin: 0 0.5em;
    color: #888;
    font-weight: 300;
  }

  .dropdown-content {
    display: none;
    margin-left: 2.25em;
    margin-bottom: 1em;
  }
</style>

<b>I <i>love</i> a good story.</b>


I hold a variety of things in my heart –– all of which, in one way or another, have lent to my story and flavored my approach to cognitive science. Chief among these inspirations are the great outdoors and music, and yet no singular peak – terrestrial or acoustic – is independent in its contribution to my story. Everything below is laced with a lively blend of its own wonder, a compilation that perpetuates my present curiosities and has carved lessons into my past wanderings. If not through my own musings, I hope that what I've stumbled upon finds a place in your story.


Here are a few (<i>several</i>) of my favorite things . . . in no particular order. Ask me about them over coffee or on a hike sometime! :)


<p>
  <span class="dropdown-toggle" data-target="art">Art & Media</span>
  <span class="dropdown-divider">|</span>
  <span class="dropdown-toggle" data-target="community">Communities</span>
  <span class="dropdown-divider">|</span>
  <span class="dropdown-toggle" data-target="creative">Creative Initiatives</span>
</p>

<div id="art" class="dropdown-content">
  <p><b>Artists & Albums</b></p>
  <ul>
    <li><a href="https://open.spotify.com/album/7EOvtHDxbltA0GNC4mvLAC"><em>The Definition</em></a>, Jon Bellion</li>
    <li><a href="https://open.spotify.com/album/1HiN2YXZcc3EjmVZ4WjfBk"><em>Everybody</em></a>, Logic</li>
    <li><a href="https://open.spotify.com/album/6B3LAqHoBKmSN9HLbyy0Ro"><em>Change of Scenery II</em></a>, Quinn XCII</li>
    <li><a href="https://open.spotify.com/album/2UrPmvaX5X76LIzE6Cfiqu"><em>Brol La Suite</em></a>, Angèle</li>
    <li><a href="https://open.spotify.com/album/42SAgjuUp25kQT9I04ph1w"><em>Rainbow Mixtape</em></a>, COIN</li>
    <li><a href="https://open.spotify.com/album/7eqdUZuRuOkurhzRWr6YUn"><em>True Love</em></a>, Crystal Gayle</li>
  </ul>
  <p><b>Films</b></p>
  <ul>
    <li>La La Land</li>
    <li>A Quiet Place</li>
    <li>Good Will Hunting</li>
    <li>Spirited Away</li>
  </ul>
  <p><b>Literature</b></p>
  <ul>
    <li><em>Anne of Green Gables</em>, Lucy Maud Montgomery</li>
    <li><em>The Haunting of Hill House</em>, Shirley Jackson</li>
    <li><em>A Girl of the Limberlost</em>, Gene Stratton-Porter</li>
  </ul>
  <p><b>Podcasts</b></p>
  <ul>
    <li><a href="https://www.alieward.com">Ologies with Alie Ward</a></li>
  </ul>
</div>

<div id="community" class="dropdown-content">
  <ul>
    <li><a href="https://lavidacenter.org">La Vida At Gordon College</a></li>
    <li><a href="https://compasspath.org">Compass</a></li>
  </ul>
</div>

<div id="creative" class="dropdown-content">
  <ul>
    <li><a href="https://houseofdakh.com">HOUSEOFDAKH</a></li>
    <li><a href="https://www.cedricscherer.com">Cédric Scherer</a></li>
    <li><a href="https://www.edengracecreative.com">Eden Grace Creative</a></li>
    <li><a href="https://www.instagram.com/jameswellborn.art/">James Wellborn</a></li>
  </ul>
  <p><b>Other Inspirations</b></p>
  <ul>
    <li><a href="https://www.frihead.ch">Mathilde Rietsch</a></li>
    <li><a href="https://www.beautifulmindprojects.com">Beautiful Mind Projects</a></li>
    <li><a href="https://www.christopherdenniscoleman.com">Christopher Dennis Coleman</a></li>
    <li><em>I'm Glad My Mom Died</em>, <a href="https://www.jennettemccurdy.com">Jennette McCurdy</a></li>
  </ul>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".dropdown-toggle");
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const targetId = toggle.dataset.target;
        const target = document.getElementById(targetId);
        const isVisible = target.style.display === "block";
        document.querySelectorAll(".dropdown-content").forEach(div => div.style.display = "none");
        if (!isVisible) {
          target.style.display = "block";
        }
      });
    });
  });
</script>