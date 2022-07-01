/**
 * @generated SignedSource<<004d2376ce2a324d4d25233131b840d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InventoryDisplayFragment_class$data = {
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
      readonly quantity: number | null;
    } | null> | null;
    readonly type: string | null;
  } | null> | null;
  readonly " $fragmentType": "InventoryDisplayFragment_class";
};
export type InventoryDisplayFragment_class$key = {
  readonly " $data"?: InventoryDisplayFragment_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"InventoryDisplayFragment_class">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
  "name": "InventoryDisplayFragment_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassStarting_equipment",
      "kind": "LinkedField",
      "name": "starting_equipment",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClassStarting_equipmentEquipment",
          "kind": "LinkedField",
          "name": "equipment",
          "plural": false,
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
            }
          ],
          "storageKey": null
        },
        (v0/*: any*/)
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
            (v0/*: any*/)
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
  "type": "Class",
  "abstractKey": null
};
})();

(node as any).hash = "d51383c7d7c5fe4b6620cfa7aca773ab";

export default node;
