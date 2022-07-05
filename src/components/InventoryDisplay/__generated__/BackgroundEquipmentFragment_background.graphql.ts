/**
 * @generated SignedSource<<3bf01882c450a267eae32ee1dfcf0ce7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BackgroundEquipmentFragment_background$data = {
  readonly starting_equipment: ReadonlyArray<{
    readonly equipment: {
      readonly __typename: "BackgroundStarting_equipmentEquipment";
      readonly index: string | null;
      readonly name: string | null;
    } | null;
    readonly quantity: number | null;
  } | null> | null;
  readonly starting_equipment_options: ReadonlyArray<{
    readonly choose: number | null;
    readonly from: ReadonlyArray<{
      readonly equipment: {
        readonly __typename: "BackgroundStarting_equipment_optionsFromEquipment";
        readonly index: string | null;
        readonly name: string | null;
      } | null;
      readonly quantity: number | null;
    } | null> | null;
  } | null> | null;
  readonly " $fragmentType": "BackgroundEquipmentFragment_background";
};
export type BackgroundEquipmentFragment_background$key = {
  readonly " $data"?: BackgroundEquipmentFragment_background$data;
  readonly " $fragmentSpreads": FragmentRefs<"BackgroundEquipmentFragment_background">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v1 = [
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
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BackgroundEquipmentFragment_background",
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
          "concreteType": "BackgroundStarting_equipmentEquipment",
          "kind": "LinkedField",
          "name": "equipment",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundStarting_equipment_options",
      "kind": "LinkedField",
      "name": "starting_equipment_options",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "choose",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "BackgroundStarting_equipment_optionsFrom",
          "kind": "LinkedField",
          "name": "from",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "BackgroundStarting_equipment_optionsFromEquipment",
              "kind": "LinkedField",
              "name": "equipment",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
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

(node as any).hash = "db945de0d4ebd99a1effff867fe7dfd9";

export default node;
