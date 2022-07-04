/**
 * @generated SignedSource<<bc4ce08305b57828abb62d2a9a4bcff4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemStoreFragment_background$data = {
  readonly starting_equipment: ReadonlyArray<{
    readonly __typename: "BackgroundStarting_equipment";
    readonly equipment: {
      readonly __typename: "BackgroundStarting_equipmentEquipment";
      readonly index: string | null;
      readonly name: string | null;
    } | null;
    readonly quantity: number | null;
  } | null> | null;
  readonly " $fragmentType": "ItemStoreFragment_background";
};
export type ItemStoreFragment_background$key = {
  readonly " $data"?: ItemStoreFragment_background$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemStoreFragment_background">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemStoreFragment_background",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundStarting_equipment",
      "kind": "LinkedField",
      "name": "starting_equipment",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "quantity",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "BackgroundStarting_equipmentEquipment",
          "kind": "LinkedField",
          "name": "equipment",
          "plural": false,
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
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Background",
  "abstractKey": null
};
})();

(node as any).hash = "5702033640d8221d61070d8d95ca16f5";

export default node;
