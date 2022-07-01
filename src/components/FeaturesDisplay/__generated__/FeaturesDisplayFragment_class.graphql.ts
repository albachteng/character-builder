/**
 * @generated SignedSource<<31cc6f172a2f83b55b770c2ffd4d2b56>>
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
    readonly subclass: {
      readonly index: string | null;
      readonly name: string | null;
    } | null;
  }>;
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
  "name": "choose",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
                (v2/*: any*/),
                (v3/*: any*/)
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
                (v4/*: any*/),
                (v5/*: any*/),
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
                (v4/*: any*/),
                (v5/*: any*/),
                (v6/*: any*/)
              ],
              "storageKey": null
            },
            (v4/*: any*/),
            (v1/*: any*/),
            (v5/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "FeaturePrerequisites",
              "kind": "LinkedField",
              "name": "prerequisites",
              "plural": true,
              "selections": [
                (v1/*: any*/),
                (v3/*: any*/)
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
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "FeatureFeature_specificSubfeature_optionsFrom",
                      "kind": "LinkedField",
                      "name": "from",
                      "plural": true,
                      "selections": [
                        (v7/*: any*/),
                        (v4/*: any*/),
                        (v5/*: any*/),
                        (v6/*: any*/)
                      ],
                      "storageKey": null
                    },
                    (v3/*: any*/)
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
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "FeatureFeature_specificExpertise_optionsFrom",
                      "kind": "LinkedField",
                      "name": "from",
                      "plural": true,
                      "selections": [
                        (v5/*: any*/),
                        (v4/*: any*/),
                        (v7/*: any*/)
                      ],
                      "storageKey": null
                    },
                    (v3/*: any*/)
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
        (v4/*: any*/),
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
          "concreteType": "LevelSubclass",
          "kind": "LinkedField",
          "name": "subclass",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            (v5/*: any*/)
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

(node as any).hash = "cdc1ccb8b27dcc6535f09f2ce0bccc5a";

export default node;
