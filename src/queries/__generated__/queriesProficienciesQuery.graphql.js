/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type queriesProficienciesQuery$ref: FragmentReference;
declare export opaque type queriesProficienciesQuery$fragmentType: queriesProficienciesQuery$ref;
export type queriesProficienciesQuery = {|
  +proficiencies: ?$ReadOnlyArray<?{|
    +name: ?string
  |}>,
  +proficiency_choices: ?$ReadOnlyArray<?{|
    +choose: ?number,
    +from: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |}>,
  +$refType: queriesProficienciesQuery$ref,
|};
export type queriesProficienciesQuery$data = queriesProficienciesQuery;
export type queriesProficienciesQuery$key = {
  +$data?: queriesProficienciesQuery$data,
  +$fragmentRefs: queriesProficienciesQuery$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "queriesProficienciesQuery",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AbilityScoreSkills",
      "kind": "LinkedField",
      "name": "proficiencies",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassProficiency_choices",
      "kind": "LinkedField",
      "name": "proficiency_choices",
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
          "concreteType": "AbilityScoreSkills",
          "kind": "LinkedField",
          "name": "from",
          "plural": true,
          "selections": (v0/*: any*/),
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
(node/*: any*/).hash = 'e1080fbc29f9002f384cf58588dd7ecb';

module.exports = node;
