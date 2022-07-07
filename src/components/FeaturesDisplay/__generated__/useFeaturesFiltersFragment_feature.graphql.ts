/**
 * @generated SignedSource<<3465601f924ba3d8ccad182ad6de71f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useFeaturesFiltersFragment_feature$data = {
  readonly choice: {
    readonly choose: number | null;
    readonly type: string | null;
  } | null;
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
  readonly " $fragmentType": "useFeaturesFiltersFragment_feature";
};
export type useFeaturesFiltersFragment_feature$key = {
  readonly " $data"?: useFeaturesFiltersFragment_feature$data;
  readonly " $fragmentSpreads": FragmentRefs<"useFeaturesFiltersFragment_feature">;
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
  "name": "choose",
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
  "name": "__typename",
  "storageKey": null
},
v4 = {
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
  "name": "useFeaturesFiltersFragment_feature",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "FeatureChoice",
      "kind": "LinkedField",
      "name": "choice",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/)
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
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "FeatureFeature_specificSubfeature_optionsFrom",
              "kind": "LinkedField",
              "name": "from",
              "plural": true,
              "selections": [
                (v3/*: any*/),
                (v0/*: any*/),
                (v4/*: any*/),
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
          "concreteType": "FeatureFeature_specificExpertise_options",
          "kind": "LinkedField",
          "name": "expertise_options",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "FeatureFeature_specificExpertise_optionsFrom",
              "kind": "LinkedField",
              "name": "from",
              "plural": true,
              "selections": [
                (v4/*: any*/),
                (v0/*: any*/),
                (v3/*: any*/)
              ],
              "storageKey": null
            },
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Feature",
  "abstractKey": null
};
})();

(node as any).hash = "acaa08366da62ccde1b6952179a212f5";

export default node;
