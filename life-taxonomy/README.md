# Marine Life Taxonomy + Functional Groups

This bundle contains:
- `taxonomy/taxonomy.json` — a compact marine-focused taxonomy tree (domain → kingdom → phylum → class → genus → species).
- `groups/*.json` — diver-facing functional groups (e.g. sharks, rays, reef-fish) each with:
  - a `group` object describing the concept, and
  - an `entries` array with representative species and dive-relevant metadata.

All IDs use `kebab-case` and are generally singular:
- `group-id`: e.g. `shark`, `reef-fish`
- `taxon-id`: e.g. `chondrichthyes`, `rhincodon-typus`
- `entry.id`: e.g. `hammerhead`, `whale-shark`

You can:
- Use `taxonomy.json` as the canonical tree for scientific lookup and lineage.
- Use `groups/*.json` as your diver-friendly UI layer and tagging system.
- Link the two via `taxon-id` on each species entry.

TODO

- A "kind":"group" has been introduced to allow for general references to say "seahorses" but needs more filling out. It needs a correct place in the taxonomy tree, and we need to be able to associate specific things - such as specific kinds groupers with a general grouper type (the formal taxonomy should support this).

- There is some mixing of general categories into species - for example humpback whale and whale so the data will need inspection and cleaning to make sure abstractions are abstractions