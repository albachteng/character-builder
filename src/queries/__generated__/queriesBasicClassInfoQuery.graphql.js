/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type queriesBasicClassInfoQuery$ref: FragmentReference;
declare export opaque type queriesBasicClassInfoQuery$fragmentType: queriesBasicClassInfoQuery$ref;
export type queriesBasicClassInfoQuery = {|
  +name: ?string,
  +hit_die: ?number,
  +class_levels: ?string,
  +saving_throws: ?$ReadOnlyArray<?{|
    +name: ?string
  |}>,
  +$refType: queriesBasicClassInfoQuery$ref,
|};
export type queriesBasicClassInfoQuery$data = queriesBasicClassInfoQuery;
export type queriesBasicClassInfoQuery$key = {
  +$data?: queriesBasicClassInfoQuery$data,
  +$fragmentRefs: queriesBasicClassInfoQuery$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "queriesBasicClassInfoQuery",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hit_die",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "class_levels",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AbilityScoreSkills",
      "kind": "LinkedField",
      "name": "saving_throws",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Class",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a17442559e1e1f602fb37124b8ab2b80';

module.exports = node;
