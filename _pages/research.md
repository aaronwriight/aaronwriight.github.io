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
  .page__content {
  max-width: 1600px;
  }

  .layout--archive .page {
  max-width: 1600px;
  }

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
    width: 120%;
    text-decoration: none;
    cursor: pointer;
    color: #859901;
    /* white-space: nowrap; */ /* green text on questions*/ 
  }

  /* inline toggle link for each research topic */
  .sub-topic-toggle {
    width: 120%;
    text-decoration: none;
    cursor: pointer;
    color: #859901;
    /* white-space: nowrap; */
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
    /* white-space: nowrap; */
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
    width: 100%;
    display: flex;
    align-items: baseline;
    gap: 0.35em;
    /* flex-wrap: nowrap; */
  }

  /* styling for abstract tab clickable text */
  .topic-text {
    max-width: 1200px;
    text-decoration: none;
    cursor: text;
  }
  
</style>
---
<b>I study the <span style="color: #859901;"><i>social mind in dialogue</i></span>: how the human brain processes <span style="color: #859901;"><i>language</i></span> and structures <span style="color: #859901;"><i>conversation</i></span>.</b>

My interests and experiences have brought me to MIT’s [Brain & Cognitive Sciences](https://bcs.mit.edu) department and the [McGovern Institute for Brain Research](https://mcgovern.mit.edu), where I work with [Ev Fedorenko](https://www.evlab.mit.edu/about-ev) and an incredible team of language scientists at [EvLab](https://www.evlab.mit.edu). While my research broadly aims to chart the footprints of language cognition in conversation, my interests follow a few primary trails:

<ul>

  <li>
    <div class="pub-block">
      <details>
        <summary>
          <i><b class="topic-label">Emotion & affect in conversation</b></i> <i class="topic-separator">|</i> <span style="color: #859901;" class="topic-toggle"><i> How do we represent other mental and emotional states during conversation, and how do these representations guide conversational behavior?</i></span>
        </summary>
        <div class="topic-text">
          <p>
          Conversation is one of the most natural, yet complex behaviors humans engage in. As people speak, they continuously signal attitudes, intentions, and emotional states through cues such as prosody, pauses, word choice, and facial expressions. Listeners use these signals to infer what a speaker feels or intends, while speakers monitor their partner’s reactions and adjust their language in response. This dynamic feedback loop allows conversation to unfold smoothly (most of the time...), making conversation a cognitive collaboration in which people navigate dnyamically evolving mental representations to construct shared meaning. My work asks how these emotional and mental-state representations are constructed during dialogue and how mechanisms like (mis)alignment shape the unfolding interaction between speakers. By studying the signals people produce and the inferences listeners draw from them, I aim to better understand how conversation allows individuals to coordinate their emotional and social understanding in real time.
          <ul>
            <li>
                <details>
                  <summary>
                    <i><b class="sub-topic-label">Reactivity</b></i> <i class="sub-topic-separator">|</i> <span style="color: #859901;" class="sub-topic-toggle"><i> Why does communication elicit strong reactions between speakers?</i></span>
                  </summary>
                  <div class="topic-text">
                    <p>
                    Conversation contains several unique cues – tone of voice (~prosody), pauses and silences, distinct and surprising word choices, facial expressions, etc. — that carry information about emotional states and social goals. Strategic use of these cues — especially in socially or emotionally meaningful contexts — often evokes salient emotional experiences like surprise, frustration, or amusement. These reactions are informative with respect to, e.g., how speakers interpret the intentions behind an utterance. I am interested in how these emotional experiences arise during conversation, how they are expressed through language and behavior, and how they influence the subsequent course of conversation.
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
        <div class="topic-text">
          <p>
          Conversation works remarkably well given how little meaning is stated explicitly. Speakers rely heavily on context, shared assumptions, and inference, rendering misinterpretation an inevitable feature of communication. Rather than being explicit failures, these moments are a powerful window how people represent meaning and track each other's understanding in dialogue. I use neuroimaging and computational methods to investage when and why miscommunication arises, how speakers and listeners detect that something has been lost in translation, and how they collaboratively restore shared meaning. By examining these breakdowns – and the strategies people use to resolve them – we can better understand the cognitive mechanisms that normally facilitate seamless conversation.
            <ul>
            <li>
                <details>
                  <summary>
                    <i><b class="sub-topic-label">Repair</b></i> <i class="sub-topic-separator">|</i> <span style="color: #859901;" class="sub-topic-toggle"><i> How do we anticipate and resolve miscommunication during linguistic communication?</i></span>
                  </summary>
                  <div class="topic-text">
                    <p>
                    In dialogue, we routinely correct ourselves and others. Misunderstandings may occur, but they are often repaired through clarification, repetition, or reformulation. These repair sequences reveal the strategies people use to track listeners' understanding, as well as update their own assumptions about what has been communicated. By studying repair behavior, I hope to gain insight into the implicit models speakers maintain of each other’s knowledge, beliefs, emotions, and intentions during conversation.
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
        <div class="topic-text">
          <p>
          Language experience shapes how people think, communicate, and interpret the world around them. Individuals with command of multiple languages — bilinguals, multilinguals, and polyglots – or with different cultural backgrounds often develop distinct representations that are reflected in language production and comprehension. Further evidence suggests that these idiosyncracies impose both structural and functional changes upon the brain, providing an important window into how linguistic and sociocultural experiences shape the cognitive systems that support communication. Using a combination of neuroimaging and behavioral methods, I study how these differences shape the brain and mind, and ultimately help us discern which aspects of human language are foundational, versus flexible.
          </p>
        </div>
      </details>
    </div>
  </li>

</ul>

The brain's functional landscape is yet largely unexplored. You can read more about what I and my delightful collaborators have discovered in pursuit of these questions, where I've been along the way, and what other curiosities occupy my brain as you explore the terrain of this site. Otherwise –– if I'm not doing science, I'm probably hiking.

Happy (<span style="color: #859901;"><i>neural</i></span>) trails! :)<br>

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