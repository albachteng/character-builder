/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type queriesMagicAbilitiesQuery$ref: FragmentReference;
declare export opaque type queriesMagicAbilitiesQuery$fragmentType: queriesMagicAbilitiesQuery$ref;
export type queriesMagicAbilitiesQuery = {|
  +spells: ?string,
  +spellcasting: ?{|
    +spellcasting_ability: ?{|
      +name: ?string
    |},
    +info: ?$ReadOnlyArray<?{|
      +name: ?string,
      +desc: ?$ReadOnlyArray<?string>,
    |}>,
    +level: ?number,
  |},
  +$refType: queriesMagicAbilitiesQuery$ref,
|};
export type queriesMagicAbilitiesQuery$data = queriesMagicAbilitiesQuery;
export type queriesMagicAbilitiesQuery$key = {
  +$data?: queriesMagicAbilitiesQuery$data,
  +$fragmentRefs: queriesMagicAbilitiesQuery$ref,
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
  "name": "queriesMagicAbilitiesQuery",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "spells",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassSpellcasting",
      "kind": "LinkedField",
      "name": "spellcasting",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AbilityScoreSkills",
          "kind": "LinkedField",
          "name": "spellcasting_ability",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ClassSpellcastingInfo",
          "kind": "LinkedField",
          "name": "info",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "desc",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "level",
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
(node/*: any*/).hash = 'd89001fda71f35644e167949af42097c';

module.exports = node;
