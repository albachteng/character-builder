/**
 * @generated SignedSource<<a2a21d6493b95396151b5ba30b29d358>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RaceDetailsFragment_race$data = {
  readonly age: string | null;
  readonly alignment: string | null;
  readonly language_desc: string | null;
  readonly size_description: string | null;
  readonly " $fragmentType": "RaceDetailsFragment_race";
};
export type RaceDetailsFragment_race$key = {
  readonly " $data"?: RaceDetailsFragment_race$data;
  readonly " $fragmentSpreads": FragmentRefs<"RaceDetailsFragment_race">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RaceDetailsFragment_race",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "language_desc",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "size_description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "alignment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "age",
      "storageKey": null
    }
  ],
  "type": "Race",
  "abstractKey": null
};

(node as any).hash = "00db1a5a76792e926a9ad070bad49d93";

export default node;
