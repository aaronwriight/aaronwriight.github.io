---
layout: archive
permalink: /
title: "hello!" # title that appears in url tab
author_profile: true
redirect_from: 
  - /research/
  - /research.html
---
<style>
  /* container for linked research topic blurbs */
  .topic-links {
    display: flex;
    gap: 0.5em;
    font-family: sans-serif;
    align-items: center;
    flex-wrap: wrap;
  }

  /* container for linked research topic blurbs */
  .sub-topic-links {
    display: flex;
    gap: 0.5em;
    font-family: sans-serif;
    align-items: center;
    flex-wrap: wrap;
  }

  /* inline formatting for individual dropdown containers */
  .topic-links details {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  /* inline formatting for individual dropdown containers */
  .sub-topic-links details {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  /* clickable summary text for dropdown toggles */
  .topic-links summary {
    display: inline;
    cursor: pointer;
    color: inherit;
    list-style: none;
  }

  /* clickable summary text for dropdown toggles */
  .sub-topic-links summary {
    display: inline;
    cursor: pointer;
    color: inherit;
    list-style: none;
  }

  /* apply pointer cursor and remove default marker globally */
  summary {
    cursor: pointer;
    list-style: none;
  }

  /* underline effect on hover for summary in topic links */
  .topic-links summary:hover {
    text-decoration: underline;
  }

  /* underline effect on hover for summary in topic links */
  .sub-topic-links summary:hover {
    text-decoration: underline;
  }

  /* hide dropdown marker in all browsers */
  .topic-links summary::-webkit-details-marker,
  summary::-webkit-details-marker,
  summary::marker {
    display: none;
  }

  /* hide dropdown marker in all browsers */
  .sub-topic-links summary::-webkit-details-marker,
  summary::-webkit-details-marker,
  summary::marker {
    display: none;
  }

  /* style open details content block inside topic links */
  .topic-links details[open] > div {
    position: static;
    background: none;
    border: none;
    margin: 0.25em 0 0 0;
    padding: 0;
  }

  /* style open details content block inside topic links */
  .sub-topic-links details[open] > div {
    position: static;
    background: none;
    border: none;
    margin: 0.25em 0 0 0;
    padding: 0;
  }

  /* inline toggle link for each research topic */
  .topic-toggle {
    text-decoration: none;
    cursor: pointer;
    color: #859901;
    white-space: nowrap;
  }

  /* inline toggle link for each research topic */
  .sub-topic-toggle {
    text-decoration: none;
    cursor: pointer;
    color: #859901;
    white-space: nowrap;
  }

  /* underline toggle on hover */
  .topic-toggle:hover {
    text-decoration: underline;
  }

  /* underline toggle on hover */
  .sub-topic-toggle:hover {
    text-decoration: underline;
  }

  /* non-clickable topic name style */
  .topic-label {
    cursor: text;
    white-space: nowrap;
  }

  /* non-clickable topic name style */
  .sub-topic-label {
    cursor: text;
    white-space: nowrap;
  }

  /* visual divider between topic label and description */
  .topic-separator {
    cursor: text;
    user-select: none;
    all: unset;
    display: inline;
    margin: 0 0.25em;
    color: inherit;
    white-space: nowrap;
  }

  /* visual divider between sub-topic label and description */
  .sub-topic-separator {
    cursor: text;
    user-select: none;
    all: unset;
    display: inline;
    margin: 0 0.25em;
    color: inherit;
    white-space: nowrap;
  }

  /* keep topic label and rq on the same line */
  .pub-block summary {
    display: flex;
    align-items: baseline;
    gap: 0.35em;
    flex-wrap: nowrap;
  }
  
</style>
---
<b class="topic-label">I study the <span style="color: #859901;">social mind in dialogue</span>: how the human brain processes <span style="color: #859901;">language</span> and structures <span style="color: #859901;">conversation</span>.</b>

<p class="topic-label"> My interests and experiences have brought me to MIT’s [Brain & Cognitive Sciences](https://bcs.mit.edu) department and the [McGovern Institute for Brain Research](https://mcgovern.mit.edu), where I work with [Ev Fedorenko](https://www.evlab.mit.edu/about-ev) and an incredible team of language scientists at [EvLab](https://www.evlab.mit.edu). While my research broadly aims to chart the footprints of language cognition in conversation, my interests follow a few primary trails:</p>

<ul>

  <li>
    <div class="pub-block">
      <details>
        <summary>
          <i><b class="topic-label">Emotion & affect in conversation</b></i> <i class="topic-separator">|</i> <span style="color: #859901;" class="topic-toggle"><i> How do we represent other mental and emotional states during conversation, and how do these representations guide conversational behavior?</i></span>
        </summary>
        <div class="abstract-text">
          <p>
          Conversation is one of the most natural, yet complex behaviors humans engage in. When two people talk, they are not merely exchanging words; they are coordinating attention, negotiating meaning, inferring intentions, and updating beliefs about each other in real time. Small cues – tone of voice (~prosody), pauses and silences, distinct and surprising word choices, facial expressions... — carry information about emotional states and social goals. Listeners constantly make inferences about what speakers mean, how they feel, and why they chose a particular phrasing. At the same time, speakers monitor their partner’s reactions and adjust their language accordingly. This dynamic feedback loop allows conversation to unfold smoothly (most of the time), despite the fact that meaning is rarely stated explicitly. Misunderstandings still occur, but they are often repaired quickly through clarification, repetition, or reformulation. In this way, conversation is not just a vehicle for communication, but a cognitive collaboration in which people navigate dnyamically evolving mental representations to construct shared meaning.
          <ul>
            <li>
                <details>
                  <summary>
                    <i><b class="sub-topic-label">Reactivity</b></i> <i class="sub-topic-separator">|</i> <span style="color: #859901;" class="sub-topic-toggle"><i> Why does miscommunication elicit strong reactions between speakers and comprehenders?</i></span>
                  </summary>
                  <div class="abstract-text">
                    <p>
                    In dialogue, we correct ourselves and others. This process of interactive repair is informative with respect to how we theorize about the content of speakers' minds. I am interested in what corrective strategies suggest about an intuitive theory of mind in spoken conversation.
                    When speakers detect a misunderstanding, conversations often shift into a brief period of repair. Speakers may clarify, rephrase, repeat, or explicitly negotiate meaning until both participants align on a shared interpretation. These repair sequences reveal the strategies people use to track their partner’s understanding and to update their own assumptions about what has been communicated. By studying repair behavior, we can gain insight into the implicit models speakers maintain of each other’s knowledge, beliefs, and intentions during conversation.
                    </p>
                  </div>
                </details>
              </li>
            </ul>
          </p>
        </div>
      </details>
    </div>
  </li>

  <li>
    <div class="pub-block">
      <details>
        <summary>
          <i><b class="topic-label">Miscommunication</b></i> <i class="topic-separator">|</i> <span style="color: #859901;" class="topic-toggle"><i> Why do we miscommunicate, and how do we anticipate, identify, and repair miscommunication?</i></span>
        </summary>
        <div class="abstract-text">
          <p>
          Misinterpretation is not a flaw, but a natural feature, of conversation. In day-to-day conversation, we readily assume we have arrived at a shared meaning between speakers, but often we have no more than approximately understood one another, instead maintaining quite distinct representations of the shared information. I use neuroimaging and computational methods to investage when, why, and how meanings may get distorted or lost during linguistic communication.
            <ul>
            <li>
                <details>
                  <summary>
                    <i><b class="sub-topic-label">Repair</b></i> <i class="sub-topic-separator">|</i> <span style="color: #859901;" class="sub-topic-toggle"><i> How do we anticipate and resolve miscommunication during linguistic communication?</i></span>
                  </summary>
                  <div class="abstract-text">
                    <p>
                    In dialogue, we correct ourselves and others. This process of interactive repair is informative with respect to how we theorize about the content of speakers' minds. I am interested in what corrective strategies suggest about an intuitive theory of mind in spoken conversation.
                    When speakers detect a misunderstanding, conversations often shift into a brief period of repair. Speakers may clarify, rephrase, repeat, or explicitly negotiate meaning until both participants align on a shared interpretation. These repair sequences reveal the strategies people use to track their partner’s understanding and to update their own assumptions about what has been communicated. By studying repair behavior, we can gain insight into the implicit models speakers maintain of each other’s knowledge, beliefs, and intentions during conversation.
                    </p>
                  </div>
                </details>
              </li>
            </ul>
          </p>
        </div>
      </details>
    </div>
  </li>

  <li>
    <div class="pub-block">
      <details>
        <summary>
          <i><b class="topic-label">Culture & bilingualism</b></i> <i class="topic-separator">|</i> <span style="color: #859901;" class="topic-toggle"><i> How does linguistic experience influence language cognition and communication?</i></span>
        </summary>
        <div class="abstract-text">
          <p>
          Mounting evidence suggests that experience with multiple linguistic inventories imposes structural and functional changes upon the brain. Using a mix of neuroimaging and behavioral techniques, I aim not only to understand these changes, but also to convey their importance as both a scientific lens and framework for interpersonal flourishing. Similarly, linguistic habits are influenced by culture and reflected in language use. Here I aim to understand <i><b>i</b>)</i> how individuals' various cultural backgrounds inform their production and comprehension of language, as well as <i><b>ii</b>)</i> how they differ in their internal representations of linguistic content.
          </p>
        </div>
      </details>
    </div>
  </li>

</ul>

<p class="topic-label">The brain's functional landscape is yet largely unexplored. You can read more about what I and my delightful collaborators have discovered in pursuit of these questions, where I've been along the way, and what other curiosities occupy my brain as you explore the terrain of this site. Otherwise –– if I'm not doing science, I'm probably hiking.</p>

<p class="topic-label">Happy (<i>neural</i>) trails! :)</p><br>

<hr>
<div style="margin: 0 auto; text-align: center;">
  <i>
    Well, that is one of the things to find out sometime. Isn't it splendid to think of all the things there are to find out about? 
    It just makes me feel glad to be alive –– it's such an interesting world. 
    It wouldn't be half so interesting if we know all about everything, would it? 
    There'd be no scope for imagination then, would there?
  </i>
  <div style="text-align: right; padding-right: 5em; margin-top: 0.5em;">
    –– <i><b>Anne of Green Gables</b>, L. M. Montgomery</i>
  </div>
</div>