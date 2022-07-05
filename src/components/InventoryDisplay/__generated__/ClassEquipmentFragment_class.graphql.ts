/**
 * @generated SignedSource<<81c7da2ce1fb228e243a5469081f6cd2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClassEquipmentFragment_class$data = {
  readonly starting_equipment: ReadonlyArray<{
    readonly equipment: {
      readonly __typename: "ClassStarting_equipmentEquipment";
      readonly index: string | null;
      readonly name: string | null;
    } | null;
    readonly quantity: number | null;
  } | null> | null;
  readonly starting_equipment_options: ReadonlyArray<{
    readonly choose: number | null;
    readonly from: ReadonlyArray<{
      readonly equipment: {
        readonly __typename: "ClassStarting_equipment_optionsFromEquipment";
        readonly index: string | null;
        readonly name: string | null;
      } | null;
      readonly quantity: number | null;
    } | null> | null;
  } | null> | null;
  readonly " $fragmentType": "ClassEquipmentFragment_class";
};
export type ClassEquipmentFragment_class$key = {
  readonly " $data"?: ClassEquipmentFragment_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClassEquipmentFragment_class">;
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
  "name": "ClassEquipmentFragment_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassStarting_equipment",
      "kind": "LinkedField",
      "name": "starting_equipment",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ClassStarting_equipmentEquipment",
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
      "concreteType": "ClassStarting_equipment_options",
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
          "concreteType": "ClassStarting_equipment_optionsFrom",
          "kind": "LinkedField",
          "name": "from",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ClassStarting_equipment_optionsFromEquipment",
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
  "type": "Class",
  "abstractKey": null
};
})();

(node as any).hash = "067f952c0c9f20fd07f52376ce31cbe3";

export default node;
