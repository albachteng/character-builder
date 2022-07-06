/**
 * @generated SignedSource<<efceec627e309173b672c826fd7094a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TraitFragment_trait$data = {
  readonly __typename: "Trait";
  readonly desc: ReadonlyArray<string | null> | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "TraitFragment_trait";
};
export type TraitFragment_trait$key = {
  readonly " $data"?: TraitFragment_trait$data;
  readonly " $fragmentSpreads": FragmentRefs<"TraitFragment_trait">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TraitFragment_trait",
  "selections": [
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
      "name": "index",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
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
  "type": "Trait",
  "abstractKey": null
};

(node as any).hash = "9fb015d7898b02d39488294b45bf7b89";

export default node;
