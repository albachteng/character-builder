/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type queriesLevelFeatureOptionsQuery$ref: FragmentReference;
declare export opaque type queriesLevelFeatureOptionsQuery$fragmentType: queriesLevelFeatureOptionsQuery$ref;
export type queriesLevelFeatureOptionsQuery = {|
  +feature_choices: ?$ReadOnlyArray<?{|
    +name: ?string,
    +url: ?string,
  |}>,
  +features: ?$ReadOnlyArray<?{|
    +name: ?string,
    +url: ?string,
  |}>,
  +$refType: queriesLevelFeatureOptionsQuery$ref,
|};
export type queriesLevelFeatureOptionsQuery$data = queriesLevelFeatureOptionsQuery;
export type queriesLevelFeatureOptionsQuery$key = {
  +$data?: queriesLevelFeatureOptionsQuery$data,
  +$fragmentRefs: queriesLevelFeatureOptionsQuery$ref,
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
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "queriesLevelFeatureOptionsQuery",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AbilityScoreSkills",
      "kind": "LinkedField",
      "name": "feature_choices",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AbilityScoreSkills",
      "kind": "LinkedField",
      "name": "features",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Level",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c697772968cc35f7f383af2e43bf4ff';

module.exports = node;
