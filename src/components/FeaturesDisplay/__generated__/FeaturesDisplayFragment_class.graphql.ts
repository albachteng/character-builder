/**
 * @generated SignedSource<<c642e0c009d37102afc2676b9fb8fd4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturesDisplayFragment_class$data = {
  readonly class_levels: ReadonlyArray<{
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
  }>;
  readonly hit_die: number | null;
  readonly index: string | null;
  readonly name: string | null;
  readonly proficiencies: ReadonlyArray<{
    readonly index: string | null;
    readonly name: string | null;
    readonly type: string | null;
    readonly url: string | null;
  }>;
  readonly proficiency_choices: ReadonlyArray<{
    readonly choose: number | null;
    readonly from: ReadonlyArray<{
      readonly index: string | null;
      readonly name: string | null;
    } | null> | null;
    readonly type: string | null;
  } | null> | null;
  readonly saving_throws: ReadonlyArray<{
    readonly index: string | null;
    readonly name: string | null;
  } | null> | null;
  readonly spellcasting: {
    readonly info: ReadonlyArray<{
      readonly desc: ReadonlyArray<string | null> | null;
      readonly name: string | null;
    } | null> | null;
    readonly level: number | null;
    readonly spellcasting_ability: {
      readonly index: string | null;
      readonly name: string | null;
    } | null;
  } | null;
  readonly starting_equipment: ReadonlyArray<{
    readonly equipment: {
      readonly index: string | null;
      readonly name: string | null;
    } | null;
    readonly quantity: number | null;
  } | null> | null;
  readonly starting_equipment_options: ReadonlyArray<{
    readonly choose: number | null;
    readonly from: ReadonlyArray<{
      readonly quantity: number | null;
    } | null> | null;
    readonly type: string | null;
  } | null> | null;
  readonly subclasses: ReadonlyArray<{
    readonly index: string | null;
    readonly name: string | null;
  } | null> | null;
  readonly " $fragmentType": "FeaturesDisplayFragment_class";
};
export type FeaturesDisplayFragment_class$key = {
  readonly " $data"?: FeaturesDisplayFragment_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturesDisplayFragment_class">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "sort",
  "value": "LEVEL_ASC"
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "level",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "choose",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hit_die",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "desc",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "level"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturesDisplayFragment_class",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "limit",
          "variableName": "level"
        },
        (v0/*: any*/)
      ],
      "concreteType": "Level",
      "kind": "LinkedField",
      "name": "class_levels",
      "plural": true,
      "selections": [
        (v1/*: any*/),
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
          "selections": (v4/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            (v0/*: any*/)
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
                (v5/*: any*/),
                (v6/*: any*/)
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
                (v7/*: any*/),
                (v2/*: any*/),
                (v3/*: any*/),
                (v8/*: any*/)
              ],
              "storageKey": null
            },
            (v9/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "FeatureParent",
              "kind": "LinkedField",
              "name": "parent",
              "plural": false,
              "selections": [
                (v2/*: any*/),
                (v3/*: any*/),
                (v8/*: any*/)
              ],
              "storageKey": null
            },
            (v2/*: any*/),
            (v1/*: any*/),
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "FeaturePrerequisites",
              "kind": "LinkedField",
              "name": "prerequisites",
              "plural": true,
              "selections": [
                (v1/*: any*/),
                (v6/*: any*/)
              ],
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
                    (v5/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "FeatureFeature_specificSubfeature_optionsFrom",
                      "kind": "LinkedField",
                      "name": "from",
                      "plural": true,
                      "selections": [
                        (v10/*: any*/),
                        (v2/*: any*/),
                        (v3/*: any*/),
                        (v8/*: any*/)
                      ],
                      "storageKey": null
                    },
                    (v6/*: any*/)
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
                    (v5/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "FeatureFeature_specificExpertise_optionsFrom",
                      "kind": "LinkedField",
                      "name": "from",
                      "plural": true,
                      "selections": [
                        (v3/*: any*/),
                        (v2/*: any*/),
                        (v10/*: any*/)
                      ],
                      "storageKey": null
                    },
                    (v6/*: any*/)
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            (v8/*: any*/)
          ],
          "storageKey": "features(sort:\"LEVEL_ASC\")"
        },
        (v2/*: any*/),
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
          "selections": (v4/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v7/*: any*/),
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Proficiency",
      "kind": "LinkedField",
      "name": "proficiencies",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v6/*: any*/),
        (v8/*: any*/)
      ],
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
        (v5/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ClassProficiency_choicesFrom",
          "kind": "LinkedField",
          "name": "from",
          "plural": true,
          "selections": (v4/*: any*/),
          "storageKey": null
        },
        (v6/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassSaving_throws",
      "kind": "LinkedField",
      "name": "saving_throws",
      "plural": true,
      "selections": (v4/*: any*/),
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
          "concreteType": "ClassSpellcastingInfo",
          "kind": "LinkedField",
          "name": "info",
          "plural": true,
          "selections": [
            (v9/*: any*/),
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ClassSpellcastingSpellcasting_ability",
          "kind": "LinkedField",
          "name": "spellcasting_ability",
          "plural": false,
          "selections": (v4/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassStarting_equipment",
      "kind": "LinkedField",
      "name": "starting_equipment",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClassStarting_equipmentEquipment",
          "kind": "LinkedField",
          "name": "equipment",
          "plural": false,
          "selections": (v4/*: any*/),
          "storageKey": null
        },
        (v11/*: any*/)
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
        (v5/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ClassStarting_equipment_optionsFrom",
          "kind": "LinkedField",
          "name": "from",
          "plural": true,
          "selections": [
            (v11/*: any*/)
          ],
          "storageKey": null
        },
        (v6/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClassSubclasses",
      "kind": "LinkedField",
      "name": "subclasses",
      "plural": true,
      "selections": (v4/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Class",
  "abstractKey": null
};
})();

(node as any).hash = "193585ee6fb9c19da22253c3165b0c90";

export default node;
