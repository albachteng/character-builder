/**
 * @generated SignedSource<<becea9edad3fdd4b93c0d669e1cac537>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellModFragment_spellcasting$data = {
  readonly info: ReadonlyArray<{
    readonly desc: ReadonlyArray<string | null> | null;
    readonly name: string | null;
  } | null> | null;
  readonly level: number | null;
  readonly spellcasting_ability: {
    readonly index: string | null;
    readonly name: string | null;
    readonly url: string | null;
  } | null;
  readonly " $fragmentType": "SpellModFragment_spellcasting";
};
export type SpellModFragment_spellcasting$key = {
  readonly " $data"?: SpellModFragment_spellcasting$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellModFragment_spellcasting">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellModFragment_spellcasting",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassSpellcastingSpellcasting_ability",
      "kind": "LinkedField",
      "name": "spellcasting_ability",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "index",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "level",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassSpellcastingInfo",
      "kind": "LinkedField",
      "name": "info",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "desc",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "ClassSpellcasting",
  "abstractKey": null
};
})();

(node as any).hash = "cfcb31c4474673c97a1d7da184d43ac0";

export default node;
