/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type queriesEquipmentQuery$ref: FragmentReference;
declare export opaque type queriesEquipmentQuery$fragmentType: queriesEquipmentQuery$ref;
export type queriesEquipmentQuery = {|
  +starting_equipment: ?$ReadOnlyArray<?{|
    +quantity: ?number,
    +equipment: ?{|
      +name: ?string
    |},
  |}>,
  +starting_equipment_options: ?$ReadOnlyArray<?{|
    +choose: ?number,
    +from: ?$ReadOnlyArray<?{|
      +equipment: ?{|
        +name: ?string
      |},
      +quantity: ?number,
    |}>,
  |}>,
  +$refType: queriesEquipmentQuery$ref,
|};
export type queriesEquipmentQuery$data = queriesEquipmentQuery;
export type queriesEquipmentQuery$key = {
  +$data?: queriesEquipmentQuery$data,
  +$fragmentRefs: queriesEquipmentQuery$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "AbilityScoreSkills",
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
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "queriesEquipmentQuery",
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
        (v1/*: any*/)
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
            (v1/*: any*/),
            (v0/*: any*/)
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
// prettier-ignore
(node/*: any*/).hash = 'a6c972795f853e7e462950a26a239d7c';

module.exports = node;
