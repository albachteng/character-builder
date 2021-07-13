/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type queriesHitPointsFragment_class$ref: FragmentReference;
declare export opaque type queriesHitPointsFragment_class$fragmentType: queriesHitPointsFragment_class$ref;
export type queriesHitPointsFragment_class = {|
  +hit_die: ?number,
  +$refType: queriesHitPointsFragment_class$ref,
|};
export type queriesHitPointsFragment_class$data = queriesHitPointsFragment_class;
export type queriesHitPointsFragment_class$key = {
  +$data?: queriesHitPointsFragment_class$data,
  +$fragmentRefs: queriesHitPointsFragment_class$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "queriesHitPointsFragment_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hit_die",
      "storageKey": null
    }
  ],
  "type": "Class",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd3216555ef181dd82f6af049c676e695';

module.exports = node;
