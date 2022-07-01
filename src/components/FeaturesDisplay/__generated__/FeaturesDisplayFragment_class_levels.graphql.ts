/**
 * @generated SignedSource<<0879be4df6dfa3b6db1dd7d4c72aad02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturesDisplayFragment_class_levels$data = {
  readonly ability_score_bonuses: number | null;
  readonly class: {
    readonly index: string | null;
    readonly name: string | null;
  } | null;
  readonly features: ReadonlyArray<{
    readonly choice: {
      readonly choose: number | null;
      readonly type: string | null;
    } | null;
    readonly class: {
      readonly hit_die: number | null;
      readonly index: string | null;
      readonly name: string | null;
      readonly url: string | null;
    } | null;
    readonly desc: ReadonlyArray<string | null> | null;
    readonly feature_specific: {
      readonly expertise_options: {
        readonly choose: number | null;
        readonly from: ReadonlyArray<{
          readonly __typename: "FeatureFeature_specificExpertise_optionsFrom";
          readonly index: string | null;
          readonly name: string | null;
        } | null> | null;
        readonly type: string | null;
      } | null;
      readonly subfeature_options: {
        readonly choose: number | null;
        readonly from: ReadonlyArray<{
          readonly __typename: "FeatureFeature_specificSubfeature_optionsFrom";
          readonly index: string | null;
          readonly name: string | null;
          readonly url: string | null;
        } | null> | null;
        readonly type: string | null;
      } | null;
    } | null;
    readonly index: string | null;
    readonly level: number | null;
    readonly name: string | null;
    readonly parent: {
      readonly index: string | null;
      readonly name: string | null;
      readonly url: string | null;
    } | null;
    readonly prerequisites: ReadonlyArray<{
      readonly level: number | null;
      readonly type: string | null;
    } | null> | null;
    readonly reference: string | null;
    readonly url: string | null;
  }>;
  readonly index: string | null;
  readonly level: number | null;
  readonly prof_bonus: number | null;
  readonly spellcasting: {
    readonly cantrips_known: number | null;
    readonly spell_slots_level_1: number | null;
    readonly spell_slots_level_2: number | null;
    readonly spell_slots_level_3: number | null;
    readonly spell_slots_level_4: number | null;
    readonly spell_slots_level_5: number | null;
    readonly spell_slots_level_6: number | null;
    readonly spell_slots_level_7: number | null;
    readonly spell_slots_level_8: number | null;
    readonly spell_slots_level_9: number | null;
    readonly spells_known: number | null;
  } | null;
  readonly subclass: {
    readonly index: string | null;
    readonly name: string | null;
  } | null;
  readonly " $fragmentType": "FeaturesDisplayFragment_class_levels";
};
export type FeaturesDisplayFragment_class_levels$key = {
  readonly " $data"?: FeaturesDisplayFragment_class_levels$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturesDisplayFragment_class_levels">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "level",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "choose",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturesDisplayFragment_class_levels",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ability_score_bonuses",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "LevelClass",
      "kind": "LinkedField",
      "name": "class",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "sort",
          "value": "LEVEL_ASC"
        }
      ],
      "concreteType": "Feature",
      "kind": "LinkedField",
      "name": "features",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FeatureChoice",
          "kind": "LinkedField",
          "name": "choice",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            (v5/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Class",
          "kind": "LinkedField",
          "name": "class",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hit_die",
              "storageKey": null
            },
            (v1/*: any*/),
            (v2/*: any*/),
            (v6/*: any*/)
          ],
          "storageKey": null
        },
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
          "concreteType": "FeatureParent",
          "kind": "LinkedField",
          "name": "parent",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/),
            (v6/*: any*/)
          ],
          "storageKey": null
        },
        (v1/*: any*/),
        (v0/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "FeaturePrerequisites",
          "kind": "LinkedField",
          "name": "prerequisites",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v5/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "reference",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "FeatureFeature_specific",
          "kind": "LinkedField",
          "name": "feature_specific",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FeatureFeature_specificSubfeature_options",
              "kind": "LinkedField",
              "name": "subfeature_options",
              "plural": false,
              "selections": [
                (v4/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "FeatureFeature_specificSubfeature_optionsFrom",
                  "kind": "LinkedField",
                  "name": "from",
                  "plural": true,
                  "selections": [
                    (v7/*: any*/),
                    (v1/*: any*/),
                    (v2/*: any*/),
                    (v6/*: any*/)
                  ],
                  "storageKey": null
                },
                (v5/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "FeatureFeature_specificExpertise_options",
              "kind": "LinkedField",
              "name": "expertise_options",
              "plural": false,
              "selections": [
                (v4/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "FeatureFeature_specificExpertise_optionsFrom",
                  "kind": "LinkedField",
                  "name": "from",
                  "plural": true,
                  "selections": [
                    (v2/*: any*/),
                    (v1/*: any*/),
                    (v7/*: any*/)
                  ],
                  "storageKey": null
                },
                (v5/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v6/*: any*/)
      ],
      "storageKey": "features(sort:\"LEVEL_ASC\")"
    },
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "prof_bonus",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "LevelSpellcasting",
      "kind": "LinkedField",
      "name": "spellcasting",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cantrips_known",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_1",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_2",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_3",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_4",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_5",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_6",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_7",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_8",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spell_slots_level_9",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spells_known",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "LevelSubclass",
      "kind": "LinkedField",
      "name": "subclass",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Level",
  "abstractKey": null
};
})();

(node as any).hash = "b8f482e1600142054c5baed25f9d53a7";

export default node;
