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
export type queriesFeaturesByClassQueryVariables = {|
  FilterFindManyFeatureInput?: ?FilterFindManyFeatureInput
|};
export type queriesFeaturesByClassQueryResponse = {|
  +features: $ReadOnlyArray<{|
    +name: ?string,
    +desc: ?$ReadOnlyArray<?string>,
  |}>
|};
export type queriesFeaturesByClassQuery = {|
  variables: queriesFeaturesByClassQueryVariables,
  response: queriesFeaturesByClassQueryResponse,
|};
*/


/*
query queriesFeaturesByClassQuery(
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
    "name": "queriesFeaturesByClassQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "queriesFeaturesByClassQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9b78f8e97ed13e40653f644ac7d7687c",
    "id": null,
    "metadata": {},
    "name": "queriesFeaturesByClassQuery",
    "operationKind": "query",
    "text": "query queriesFeaturesByClassQuery(\n  $FilterFindManyFeatureInput: FilterFindManyFeatureInput\n) {\n  features(filter: $FilterFindManyFeatureInput) {\n    name\n    desc\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63134f737f92efcff9aa643d59cc561d';

module.exports = node;
