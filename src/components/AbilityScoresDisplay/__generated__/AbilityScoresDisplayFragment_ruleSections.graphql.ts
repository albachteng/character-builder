/**
 * @generated SignedSource<<342aecd611c409dead3089c869c4c45a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AbilityScoresDisplayFragment_ruleSections$data = {
  readonly desc: string | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "AbilityScoresDisplayFragment_ruleSections";
};
export type AbilityScoresDisplayFragment_ruleSections$key = {
  readonly " $data"?: AbilityScoresDisplayFragment_ruleSections$data;
  readonly " $fragmentSpreads": FragmentRefs<"AbilityScoresDisplayFragment_ruleSections">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AbilityScoresDisplayFragment_ruleSections",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "index",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "desc",
      "storageKey": null
    }
  ],
  "type": "RuleSection",
  "abstractKey": null
};

(node as any).hash = "c89ece9265a71726291c7572eea329d9";

export default node;
