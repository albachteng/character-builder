/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type queriesSubclassOptionsQuery$ref: FragmentReference;
declare export opaque type queriesSubclassOptionsQuery$fragmentType: queriesSubclassOptionsQuery$ref;
export type queriesSubclassOptionsQuery = {|
  +subclasses: ?$ReadOnlyArray<?{|
    +name: ?string
  |}>,
  +$refType: queriesSubclassOptionsQuery$ref,
|};
export type queriesSubclassOptionsQuery$data = queriesSubclassOptionsQuery;
export type queriesSubclassOptionsQuery$key = {
  +$data?: queriesSubclassOptionsQuery$data,
  +$fragmentRefs: queriesSubclassOptionsQuery$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "queriesSubclassOptionsQuery",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AbilityScoreSkills",
      "kind": "LinkedField",
      "name": "subclasses",
      "plural": true,
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
    }
  ],
  "type": "Class",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'deb88a13f97b290c022d4c1fb04fb368';

module.exports = node;
