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
.personal-links {
  display: flex;
  gap: 0.5em;
  font-family: sans-serif;
  margin-bottom: 1em;
  flex-wrap: nowrap;
}

.personal-links details {
  position: relative;
}

.personal-links summary {
  color: #2AA198;
  cursor: pointer;
  text-decoration: none;
  display: inline;
  text-align: left;
  margin-bottom: 0.25em;
}

.personal-links summary:hover {
  text-decoration: underline;
}

.personal-links details > div {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.25em;
  text-align: left;
  background: none;
  padding: 0;
  min-width: 100%;
  max-width: 800px;
}

.personal-divider {
  cursor: text;
  user-select: none;
  all: unset;
  display: inline;
  margin: 0 0.5em;
}

summary::-webkit-details-marker,
summary::marker {
  display: none;
}
</style>

<b>I <i>love</i> a good story.</b>


I hold a variety of things in my heart –– all of which, in one way or another, have lent to my story and flavored my approach to cognitive science. Chief among these inspirations are the great outdoors and music, and yet no singular peak – terrestrial or acoustic – is independent in its contribution to my story. Everything below is laced with a lively blend of its own wonder, a compilation that perpetuates my present curiosities and has carved lessons into my past wanderings. If not through my own musings, I hope that what I've stumbled upon finds a place in your story.


Here are a few (<i>several</i>) of my favorite things . . . in no particular order. Ask me about them over coffee or on a hike sometime! :)


<div class="personal-links">
  <details>
    <summary>Art & Media</summary>
    <div>
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
        <li>Pocket-sized science with hand-picked experts: <a href="https://www.alieward.com">Ologies with Alie Ward</a></li>
      </ul>
    </div>
  </details>
  <span class="personal-divider"> | </span>
  <details>
    <summary>Communities</summary>
    <div>
      <p><b>Communities</b></p>
      <ul>
        <li>My home away from science: <a href="https://lavidacenter.org">La Vida At Gordon College</a></li>
        <li>Nurturing inclusivity, presence, and creativity: <a href="https://compasspath.org">Compass</a></li>
      </ul>
    </div>
  </details>
  <span class="personal-divider"> | </span>
  <details>
    <summary>Creative Initiatives</summary>
    <div>
      <p><b>Creatives</b></p>
      <ul>
        <li>The independent design studio, <a href="https://houseofdakh.com">HOUSEOFDAKH</a></li>
        <li>Data visualist, <a href="https://www.cedricscherer.com">Cédric Scherer</a></li>
        <li>My <i>talented</i> friend and storyteller, Eden Harfield, at <a href="https://www.edengracecreative.com">Eden Grace Creative</a></li>
        <li>Mesmerizing paintings and sketches done by my friend, <a href="https://www.instagram.com/jameswellborn.art/">James Wellborn</a></li>
      </ul>
      <p><b>Other Inspirations</b></p>
      <ul>
        <li>Landscape photography by <a href="https://www.frihead.ch">Mathilde Rietsch</a></li>
        <li>Jon Bellion's <a href="https://www.beautifulmindprojects.com">Beautiful Mind Projects</a></li>
        <li>Classical composer, <a href="https://www.christopherdenniscoleman.com">Christopher Dennis Coleman</a></li>
        <li>The gripping memoir, <em>I'm Glad My Mom Died</em>, from <a href="https://www.jennettemccurdy.com">Jennette McCurdy</a></li>
      </ul>
    </div>
  </details>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".personal-links details");
    dropdowns.forEach((target) => {
      target.addEventListener("toggle", () => {
        if (target.open) {
          dropdowns.forEach((el) => {
            if (el !== target) el.removeAttribute("open");
          });
        }
      });
    });
  });
</script>