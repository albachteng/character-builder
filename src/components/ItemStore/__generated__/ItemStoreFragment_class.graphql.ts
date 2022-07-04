/**
 * @generated SignedSource<<74389e1a49717404610718e26c1b7285>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemStoreFragment_class$data = {
  readonly starting_equipment: ReadonlyArray<{
    readonly __typename: "ClassStarting_equipment";
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
      readonly __typename: "ClassStarting_equipment_optionsFrom";
      readonly equipment: {
        readonly __typename: "ClassStarting_equipment_optionsFromEquipment";
        readonly index: string | null;
        readonly name: string | null;
      } | null;
      readonly quantity: number | null;
    } | null> | null;
  } | null> | null;
  readonly " $fragmentType": "ItemStoreFragment_class";
};
export type ItemStoreFragment_class$key = {
  readonly " $data"?: ItemStoreFragment_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemStoreFragment_class">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemStoreFragment_class",
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
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ClassStarting_equipmentEquipment",
          "kind": "LinkedField",
          "name": "equipment",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v3/*: any*/),
            (v0/*: any*/)
          ],
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
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ClassStarting_equipment_optionsFromEquipment",
              "kind": "LinkedField",
              "name": "equipment",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                (v2/*: any*/),
                (v0/*: any*/)
              ],
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

(node as any).hash = "db379e7590f15d107e538d1eb12e3f46";

export default node;
