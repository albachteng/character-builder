/**
 * @generated SignedSource<<016f679eacf246265a7ef882ebfa2184>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InventoryDisplayFragment_background$data = {
  readonly starting_equipment: ReadonlyArray<{
    readonly equipment: {
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
    readonly type: string | null;
  } | null> | null;
  readonly " $fragmentType": "InventoryDisplayFragment_background";
};
export type InventoryDisplayFragment_background$key = {
  readonly " $data"?: InventoryDisplayFragment_background$data;
  readonly " $fragmentSpreads": FragmentRefs<"InventoryDisplayFragment_background">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InventoryDisplayFragment_background",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BackgroundStarting_equipment",
      "kind": "LinkedField",
      "name": "starting_equipment",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "BackgroundStarting_equipmentEquipment",
          "kind": "LinkedField",
          "name": "equipment",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ],
          "storageKey": null
        },
        (v2/*: any*/)
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
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "BackgroundStarting_equipment_optionsFromEquipment",
              "kind": "LinkedField",
              "name": "equipment",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
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

(node as any).hash = "c2b58df3bbf02f41d1613057a5560a5f";

export default node;
