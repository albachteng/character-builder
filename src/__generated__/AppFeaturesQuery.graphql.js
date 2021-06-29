/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FilterFindManyFeatureInput = {|
  _id?: ?string,
  choice?: ?FilterFindManyFeatureChoiceInput,
  class?: ?FilterFindManyAbilityScoreSkillsInput,
  desc?: ?$ReadOnlyArray<?string>,
  group?: ?string,
  index?: ?string,
  level?: ?number,
  name?: ?string,
  prerequisites?: ?$ReadOnlyArray<?FilterFindManyFeaturePrerequisitesInput>,
  reference?: ?string,
  subclass?: ?FilterFindManyAbilityScoreSkillsInput,
  url?: ?string,
  _operators?: ?FilterFindManyFeatureOperatorsInput,
  OR?: ?$ReadOnlyArray<FilterFindManyFeatureInput>,
  AND?: ?$ReadOnlyArray<FilterFindManyFeatureInput>,
|};
export type FilterFindManyFeatureChoiceInput = {|
  choose?: ?number,
  from?: ?$ReadOnlyArray<?FilterFindManyAbilityScoreSkillsInput>,
  type?: ?string,
|};
export type FilterFindManyAbilityScoreSkillsInput = {|
  index?: ?string,
  name?: ?string,
  url?: ?string,
|};
export type FilterFindManyFeaturePrerequisitesInput = {|
  level?: ?number,
  type?: ?string,
|};
export type FilterFindManyFeatureOperatorsInput = {|
  _id?: ?FilterFindManyFeature_idOperatorsInput
|};
export type FilterFindManyFeature_idOperatorsInput = {|
  gt?: ?string,
  gte?: ?string,
  lt?: ?string,
  lte?: ?string,
  ne?: ?string,
  in?: ?$ReadOnlyArray<?string>,
  nin?: ?$ReadOnlyArray<?string>,
  regex?: ?any,
  exists?: ?boolean,
|};
export type AppFeaturesQueryVariables = {|
  FilterFindManyFeatureInput?: ?FilterFindManyFeatureInput
|};
export type AppFeaturesQueryResponse = {|
  +features: $ReadOnlyArray<{|
    +name: ?string,
    +desc: ?$ReadOnlyArray<?string>,
  |}>
|};
export type AppFeaturesQuery = {|
  variables: AppFeaturesQueryVariables,
  response: AppFeaturesQueryResponse,
|};
*/


/*
query AppFeaturesQuery(
  $FilterFindManyFeatureInput: FilterFindManyFeatureInput
) {
  features(filter: $FilterFindManyFeatureInput) {
    name
    desc
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "FilterFindManyFeatureInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "FilterFindManyFeatureInput"
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
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "desc",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFeaturesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppFeaturesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3bd9652c646d700802bfa692ca46067d",
    "id": null,
    "metadata": {},
    "name": "AppFeaturesQuery",
    "operationKind": "query",
    "text": "query AppFeaturesQuery(\n  $FilterFindManyFeatureInput: FilterFindManyFeatureInput\n) {\n  features(filter: $FilterFindManyFeatureInput) {\n    name\n    desc\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '795013f4a3f1b9cf330cb6c27d29561f';

module.exports = node;
