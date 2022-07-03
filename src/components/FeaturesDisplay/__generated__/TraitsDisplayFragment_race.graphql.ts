/**
 * @generated SignedSource<<84507d9b3ed75b18bbaf0fea2242a17a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TraitsDisplayFragment_race$data = {
  readonly traits: ReadonlyArray<{
    readonly parent: {
      readonly index: string | null;
      readonly name: string | null;
    } | null;
    readonly proficiencies: ReadonlyArray<{
      readonly index: string | null;
      readonly name: string | null;
      readonly type: string | null;
    }>;
    readonly proficiency_choices: {
      readonly choose: number | null;
      readonly from: ReadonlyArray<{
        readonly __typename: "TraitProficiency_choicesFrom";
        readonly index: string | null;
        readonly name: string | null;
      } | null> | null;
      readonly type: string | null;
    } | null;
    readonly trait_specific: {
      readonly breath_weapon: {
        readonly damage: ReadonlyArray<{
          readonly damage_at_character_level: any | null;
        } | null> | null;
        readonly dc: {
          readonly dc_type: {
            readonly index: string | null;
            readonly name: string | null;
          } | null;
          readonly success_type: string | null;
        } | null;
        readonly desc: string | null;
        readonly name: string | null;
        readonly usage: {
          readonly times: number | null;
          readonly type: string | null;
        } | null;
      } | null;
      readonly damage_type: {
        readonly index: string | null;
        readonly name: string | null;
      } | null;
      readonly spell_options: {
        readonly choose: number | null;
        readonly from: ReadonlyArray<{
          readonly __typename: "TraitTrait_specificSpell_optionsFrom";
          readonly index: string | null;
          readonly name: string | null;
        } | null> | null;
        readonly type: string | null;
      } | null;
      readonly subtrait_options: {
        readonly choose: number | null;
        readonly from: ReadonlyArray<{
          readonly __typename: "TraitTrait_specificSubtrait_optionsFrom";
          readonly index: string | null;
          readonly name: string | null;
          readonly url: string | null;
        } | null> | null;
        readonly type: string | null;
      } | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"TraitFragment_trait">;
  }>;
  readonly " $fragmentType": "TraitsDisplayFragment_race";
};
export type TraitsDisplayFragment_race$key = {
  readonly " $data"?: TraitsDisplayFragment_race$data;
  readonly " $fragmentSpreads": FragmentRefs<"TraitsDisplayFragment_race">;
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
  "name": "type",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "choose",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = [
  (v1/*: any*/),
  (v0/*: any*/),
  (v4/*: any*/)
],
v6 = [
  (v0/*: any*/),
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TraitsDisplayFragment_race",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Trait",
      "kind": "LinkedField",
      "name": "traits",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TraitFragment_trait"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Proficiency",
          "kind": "LinkedField",
          "name": "proficiencies",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TraitProficiency_choices",
          "kind": "LinkedField",
          "name": "proficiency_choices",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "TraitProficiency_choicesFrom",
              "kind": "LinkedField",
              "name": "from",
              "plural": true,
              "selections": (v5/*: any*/),
              "storageKey": null
            },
            (v2/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TraitParent",
          "kind": "LinkedField",
          "name": "parent",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TraitTrait_specific",
          "kind": "LinkedField",
          "name": "trait_specific",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TraitTrait_specificSubtrait_options",
              "kind": "LinkedField",
              "name": "subtrait_options",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TraitTrait_specificSubtrait_optionsFrom",
                  "kind": "LinkedField",
                  "name": "from",
                  "plural": true,
                  "selections": [
                    (v4/*: any*/),
                    (v0/*: any*/),
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": null
                    }
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
              "concreteType": "TraitTrait_specificSpell_options",
              "kind": "LinkedField",
              "name": "spell_options",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TraitTrait_specificSpell_optionsFrom",
                  "kind": "LinkedField",
                  "name": "from",
                  "plural": true,
                  "selections": (v5/*: any*/),
                  "storageKey": null
                },
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TraitTrait_specificDamage_type",
              "kind": "LinkedField",
              "name": "damage_type",
              "plural": false,
              "selections": (v6/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TraitTrait_specificBreath_weapon",
              "kind": "LinkedField",
              "name": "breath_weapon",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "desc",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TraitTrait_specificBreath_weaponUsage",
                  "kind": "LinkedField",
                  "name": "usage",
                  "plural": false,
                  "selections": [
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "times",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TraitTrait_specificBreath_weaponDc",
                  "kind": "LinkedField",
                  "name": "dc",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "TraitTrait_specificBreath_weaponDcDc_type",
                      "kind": "LinkedField",
                      "name": "dc_type",
                      "plural": false,
                      "selections": (v6/*: any*/),
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "success_type",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TraitTrait_specificBreath_weaponDamage",
                  "kind": "LinkedField",
                  "name": "damage",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "damage_at_character_level",
                      "storageKey": null
                    }
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
      "storageKey": null
    }
  ],
  "type": "Race",
  "abstractKey": null
};
})();

(node as any).hash = "fa5e6ed8a42e53bfeaabc4c1be3b607c";

export default node;
