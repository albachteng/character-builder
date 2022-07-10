/**
 * @generated SignedSource<<2283c9d4905ade29010af100d1cd0e5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellsDisplaySpellFragment_ruleSections$data = {
  readonly desc: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "SpellsDisplaySpellFragment_ruleSections";
};
export type SpellsDisplaySpellFragment_ruleSections$key = {
  readonly " $data"?: SpellsDisplaySpellFragment_ruleSections$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellsDisplaySpellFragment_ruleSections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellsDisplaySpellFragment_ruleSections",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "desc",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "RuleSection",
  "abstractKey": null
};

(node as any).hash = "d005205493987287582a199493406a1e";

export default node;
