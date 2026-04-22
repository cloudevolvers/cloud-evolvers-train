# Signs of AI writing (reference)

Reference list distilled from Wikipedia: *Signs of AI writing*
(https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

This file is the source of truth for what counts as AI slop on the
Cloud Evolvers site. Anyone (human or model) authoring marketing copy,
blog posts, legal text, or UI strings should cross-check their draft
against this list before shipping.

## 1. Word-level tells

Overused verbs, adjectives, and abstract nouns to avoid:

additionally (especially at the start of a sentence), align with, boasts
(as a synonym for "has"), bolstered, crucial, delve, emphasizing,
enduring, enhance, fostering, garner, highlight (as a verb), interplay,
intricate, intricacies, key (as an adjective), landscape (when it means
"area"), meticulous, meticulously, pivotal, showcase, tapestry,
testament, underscore, valuable, vibrant.

Travel-guide and puffery adjectives to avoid:

vibrant, rich, profound, enhancing, showcasing, exemplifies, commitment
to, natural beauty, nestled, in the heart of, groundbreaking, renowned,
featuring, diverse array, breathtaking, seamless, thoughtfully,
cohesive, dynamic hub.

Significance and legacy boilerplate to avoid:

stands as, serves as, is a testament, is a reminder, plays a vital role,
plays a significant role, plays a crucial role, plays a pivotal role,
plays a key role, underscores its importance, highlights its
importance, reflects broader trends, symbolizing its ongoing legacy,
contributing to the, setting the stage for, marking a shift, shaping
the, represents a shift, key turning point, evolving landscape, focal
point, indelible mark, deeply rooted.

Weasel attributions to avoid:

industry reports, observers have cited, experts argue, some critics
argue, several sources, several publications, researchers and
conservationists, scholars note. Do not follow a generalization with
"such as" and a bullet-like run of examples.

Notability and promo puffery to avoid:

independent coverage, profiled in, written by a leading expert, active
digital presence, strong social media presence, substantial secondary
coverage.

Copula avoidance to reject (prefer plain "is / are / has"):

serves as, stands as, marks, represents, boasts, features, maintains,
offers, ventured into.

Trailing "-ing" analysis connectors to avoid:

highlighting, underscoring, emphasizing, ensuring, reflecting,
symbolizing, contributing to, cultivating, fostering, encompassing,
resonating with, aligning with.

Chatbot leakage to strip before shipping:

I hope this helps, Of course, Certainly, You're absolutely right, Would
you like, Is there anything else, Let me know, more detailed breakdown,
here is a, I hope this message finds you well, as of my last knowledge
update, up to my last training update, in the provided sources, based
on available information, while specific details are limited.

## 2. Sentence-structure tells

- Negative parallelism: "not only X but also Y", "not just X, but Y",
  "it's not X, it's Y", "no X, no Y, just Z".
- Rule of three: adjective-adjective-adjective triplets and triplet
  clause lists. Prefer one or two concrete adjectives.
- Trailing present-participle analysis clauses ("..., highlighting its
  significance").
- Formulaic "Despite its X, Y faces several challenges" followed by
  vague optimism.
- Elegant variation: restating the subject with synonyms ("the lead
  trainer / the MCT / the Azure architect") to avoid repetition. Pick
  one label and use it.
- Long em-dash clauses for flourish. Use a comma, colon, or period. The
  Cloud Evolvers feedback rule is: no em dashes and no en dashes in
  copy. Use periods, commas, or parentheses.
- Treating a descriptive page title as a proper noun.

## 3. Paragraph and discourse tells

- Undue emphasis on significance, legacy, broader trends, or cultural
  heritage for ordinary subjects (a training track is a training track,
  not a "pivotal moment in cloud education").
- Hedging preambles that concede a subject is minor, then inflate it.
- Press-release tone: "commitment to sustainability", "gateway to".
- Over-attribution of uncontroversial facts.
- Canned sections like "Media Coverage", "Future Prospects", "Key
  Takeaways", "Legacy" outside of specifically journalistic contexts.
- Overgeneralized opinion: "scholars", "reviewers", "several
  publications" citing a single or no source.
- Sudden shift in register mid-document (clean human prose becoming
  flowery AI prose).
- Superficial ecosystem or conservation framing for biology or
  technology topics that do not need it.

## 4. Markup and formatting tells

- Title Case headings on every section.
- Arbitrary boldface on key terms, or "key takeaways" style emphasis.
- Inline-header vertical lists: bullet, bold phrase, colon, description.
- Curly quotation marks and curly apostrophes mixed with straight ones.
- Skipping H2 and starting at H3. Thematic breaks placed before
  headings.
- Small tables for content that should be prose.
- Leftover Markdown in contexts that do not render it (headings, fenced
  code blocks, wikitext fences).
- Placeholder strings left in the draft: `[Your Name]`, `[link to...]`,
  `INSERT_SOURCE_URL`, `PASTE_..._HERE`, `2025-XX-XX`,
  `<!-- Add if available -->`.
- Chatbot UI artifacts: `citeturn0search0`, `turn0image1`,
  `:contentReference[oaicite:0]{index=0}`, `oai_citation`,
  `[attached_file:1]`, `[web:1]`, `<grok-card ...>`, `({"attribution":...})`.
- Emoji used as bullets or section markers.
- Hallucinated categories, templates, infobox parameters, or shortcuts.

## How to use this list

When writing or reviewing any copy for the Cloud Evolvers site:

1. Draft first. Do not self-censor during drafting.
2. Before committing, open this file and scan each of the four sections
   against the draft. Remove every match.
3. If a sentence is only grammatical because of a banned phrase, rewrite
   the sentence, do not just swap the phrase.
4. Leave it better than you found it: if you touch an old file that
   contains banned phrases, fix them in the same commit.

A reasonable rule of thumb: a paragraph that reads like it could be the
opening of a product brochure is probably AI slop. A paragraph that
reads like a working engineer explaining what they actually do is
probably fine.
