---
layout: archive
permalink: /personal/
title: "personal"
author_profile: true
# redirect_from:
#  - /personal
#  - /personal.html
---
<style>
  /* container for the horizontal list of expandable links */
  .personal-links {
    display: flex;
    gap: 0.5em;
    font-family: sans-serif;
    margin-bottom: 1em;
    flex-wrap: nowrap; /* keep summaries on a single line */
  }

  /* style for each summary element acting as a clickable label */
  .personal-links summary {
    color: #2AA198;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 0.25em;
    user-select: none;
  }

  /* underline effect on hover for link summaries */
  .personal-links summary:hover {
    text-decoration: underline;
  }

  /* position relative for each expandable section container */
  .personal-links details {
    position: relative;
  }

  /* absolute positioning for dropdown content inside each details */
  .personal-links details > div {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    margin-top: 0.25em;
    width: max-content;
    max-width: 800px;
    background: white;
    padding: 0.5em 1em;
  }

  /* visual divider between personal links */
  .personal-divider {
    user-select: none;
    margin: 0 0.5em;
    color: #888;
  }

  /* hide default dropdown marker on summaries */
  summary::-webkit-details-marker,
  summary::marker {
    display: none;
  }

  /* container for tabbed content sections */
  .personal-tabs {
    font-family: sans-serif;
  }

  /* container for row of tab toggle buttons */
  .tab-button-row {
    display: flex;
    gap: 0.75em;
    margin-bottom: 1em;
  }

  /* visual separator between tab buttons */
  .tab-button-row span {
    line-height: 1.5;
    color: #888;
  }

  /* base style for each tab toggle button */
  .tab-toggle {
    cursor: pointer;
    background: none;
    border: none;
    color: #2AA198;
    font-weight: bold;
    font-size: 1em;
    padding: 0.25em 0.5em;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;
  }

  /* underline effect for hover state of tab toggle */
  .tab-toggle:hover {
    border-color: #2AA198;
  }

  /* active tab toggle state */
  .tab-toggle.active {
    border-color: #2AA198;
    color: #1a746e;
    font-weight: 700;
  }

  /* style for container holding tab content */
  .tab-content {
    line-height: 1.4;
  }
</style>

<b>I <i>love</i> a good story.</b>


I hold a variety of things in my heart –– all of which, in one way or another, have lent to my story and flavored my approach to cognitive science. Chief among these inspirations are the great outdoors and music, and yet no singular peak – terrestrial or acoustic – is independent in its contribution to my story. Everything below is laced with a lively blend of its own wonder, a compilation that perpetuates my present curiosities and has carved lessons into my past wanderings. If not through my own musings, I hope that what I've stumbled upon finds a place in your story.


Here are a few (<i>several</i>) of my favorite things . . . in no particular order. Ask me about them over coffee or on a hike sometime! :)


<div class="personal-tabs">
  <div class="tab-button-row">
    <button class="tab-toggle" data-tab="art-media">Art & Media</button>
    <span>|</span>
    <button class="tab-toggle" data-tab="communities">Communities</button>
    <span>|</span>
    <button class="tab-toggle" data-tab="creative-initiatives">Creative Initiatives</button>
  </div>

  <div class="tab-content" id="art-media" style="display:none;">
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

  <div class="tab-content" id="communities" style="display:none;">
    <p><b>Communities</b></p>
    <ul>
      <li>My home away from science: <a href="https://lavidacenter.org">La Vida At Gordon College</a></li>
      <li>Nurturing inclusivity, presence, and creativity: <a href="https://compasspath.org">Compass</a></li>
    </ul>
  </div>

  <div class="tab-content" id="creative-initiatives" style="display:none;">
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
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // ensure all dropdowns start closed
  const dropdowns = document.querySelectorAll(".personal-links details");
  dropdowns.forEach(details => {
    details.open = false;

    const summary = details.querySelector("summary");
    summary.addEventListener("click", event => {
      event.preventDefault();
      const isOpen = details.open;
      dropdowns.forEach(d => d.open = false); // close all
      details.open = !isOpen; // toggle clicked one
    });
  });

  // handle tab toggles
  const tabButtons = document.querySelectorAll(".tab-toggle");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      const activeContent = document.getElementById(tabId);
      const isActive = btn.classList.contains("active");

      if (isActive) {
        btn.classList.remove("active");
        activeContent.style.display = "none";
        activeContent.classList.remove("active");
      } else {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => {
          c.style.display = "none";
          c.classList.remove("active");
        });

        btn.classList.add("active");
        activeContent.style.display = "block";
        activeContent.classList.add("active");
      }
    });
  });
});
</script>