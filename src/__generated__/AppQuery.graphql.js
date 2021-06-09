/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FilterFindOneClassInput = {|
  _id?: ?string,
  class_levels?: ?string,
  hit_die?: ?number,
  index?: ?string,
  name?: ?string,
  proficiencies?: ?$ReadOnlyArray<?FilterFindOneAbilityScoreSkillsInput>,
  proficiency_choices?: ?$ReadOnlyArray<?FilterFindOneClassProficiency_choicesInput>,
  saving_throws?: ?$ReadOnlyArray<?FilterFindOneAbilityScoreSkillsInput>,
  spellcasting?: ?FilterFindOneClassSpellcastingInput,
  spells?: ?string,
  starting_equipment?: ?$ReadOnlyArray<?FilterFindOneClassStarting_equipmentInput>,
  starting_equipment_options?: ?$ReadOnlyArray<?FilterFindOneClassStarting_equipment_optionsInput>,
  subclasses?: ?$ReadOnlyArray<?FilterFindOneAbilityScoreSkillsInput>,
  url?: ?string,
  _operators?: ?FilterFindOneClassOperatorsInput,
  OR?: ?$ReadOnlyArray<FilterFindOneClassInput>,
  AND?: ?$ReadOnlyArray<FilterFindOneClassInput>,
|};
export type FilterFindOneAbilityScoreSkillsInput = {|
  index?: ?string,
  name?: ?string,
  url?: ?string,
|};
export type FilterFindOneClassProficiency_choicesInput = {|
  choose?: ?number,
  from?: ?$ReadOnlyArray<?FilterFindOneAbilityScoreSkillsInput>,
  type?: ?string,
|};
export type FilterFindOneClassSpellcastingInput = {|
  info?: ?$ReadOnlyArray<?FilterFindOneClassSpellcastingInfoInput>,
  level?: ?number,
  spellcasting_ability?: ?FilterFindOneAbilityScoreSkillsInput,
|};
export type FilterFindOneClassSpellcastingInfoInput = {|
  desc?: ?$ReadOnlyArray<?string>,
  name?: ?string,
|};
export type FilterFindOneClassStarting_equipmentInput = {|
  equipment?: ?FilterFindOneAbilityScoreSkillsInput,
  quantity?: ?number,
|};
export type FilterFindOneClassStarting_equipment_optionsInput = {|
  choose?: ?number,
  from?: ?$ReadOnlyArray<?FilterFindOneClassStarting_equipment_optionsFromInput>,
  type?: ?string,
|};
export type FilterFindOneClassStarting_equipment_optionsFromInput = {|
  equipment?: ?FilterFindOneAbilityScoreSkillsInput,
  quantity?: ?number,
|};
export type FilterFindOneClassOperatorsInput = {|
  _id?: ?FilterFindOneClass_idOperatorsInput
|};
export type FilterFindOneClass_idOperatorsInput = {|
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
export type AppQueryVariables = {|
  FilterFindOneClassInput?: ?FilterFindOneClassInput
|};
export type AppQueryResponse = {|
  +class: ?{|
    +name: ?string,
    +hit_die: ?number,
    +class_levels: ?string,
    +saving_throws: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
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
    +starting_equipment: ?$ReadOnlyArray<?{|
      +quantity: ?number,
      +equipment: ?{|
        +name: ?string
      |},
    |}>,
    +proficiencies: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
    +proficiency_choices: ?$ReadOnlyArray<?{|
      +choose: ?number,
      +from: ?$ReadOnlyArray<?{|
        +name: ?string
      |}>,
    |}>,
    +starting_equipment_options: ?$ReadOnlyArray<?{|
      +choose: ?number,
      +from: ?$ReadOnlyArray<?{|
        +equipment: ?{|
          +name: ?string
        |},
        +quantity: ?number,
      |}>,
    |}>,
    +subclasses: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $FilterFindOneClassInput: FilterFindOneClassInput
) {
  class(filter: $FilterFindOneClassInput) {
    name
    hit_die
    class_levels
    saving_throws {
      name
    }
    spells
    spellcasting {
      spellcasting_ability {
        name
      }
      info {
        name
        desc
      }
      level
    }
    starting_equipment {
      quantity
      equipment {
        name
      }
    }
    proficiencies {
      name
    }
    proficiency_choices {
      choose
      from {
        name
      }
    }
    starting_equipment_options {
      choose
      from {
        equipment {
          name
        }
        quantity
      }
    }
    subclasses {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "FilterFindOneClassInput"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "AbilityScoreSkills",
  "kind": "LinkedField",
  "name": "equipment",
  "plural": false,
  "selections": (v2/*: any*/),
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "choose",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "filter",
        "variableName": "FilterFindOneClassInput"
      }
    ],
    "concreteType": "Class",
    "kind": "LinkedField",
    "name": "class",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
        "selections": (v2/*: any*/),
        "storageKey": null
      },
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
            "selections": (v2/*: any*/),
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
              (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ClassStarting_equipment",
        "kind": "LinkedField",
        "name": "starting_equipment",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AbilityScoreSkills",
        "kind": "LinkedField",
        "name": "proficiencies",
        "plural": true,
        "selections": (v2/*: any*/),
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
            "concreteType": "AbilityScoreSkills",
            "kind": "LinkedField",
            "name": "from",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
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
              (v4/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AbilityScoreSkills",
        "kind": "LinkedField",
        "name": "subclasses",
        "plural": true,
        "selections": (v2/*: any*/),
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
    "name": "AppQuery",
    "selections": (v6/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "3a007ff706bb713f78d0f81296d82950",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $FilterFindOneClassInput: FilterFindOneClassInput\n) {\n  class(filter: $FilterFindOneClassInput) {\n    name\n    hit_die\n    class_levels\n    saving_throws {\n      name\n    }\n    spells\n    spellcasting {\n      spellcasting_ability {\n        name\n      }\n      info {\n        name\n        desc\n      }\n      level\n    }\n    starting_equipment {\n      quantity\n      equipment {\n        name\n      }\n    }\n    proficiencies {\n      name\n    }\n    proficiency_choices {\n      choose\n      from {\n        name\n      }\n    }\n    starting_equipment_options {\n      choose\n      from {\n        equipment {\n          name\n        }\n        quantity\n      }\n    }\n    subclasses {\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc96cc1b1a836a21b1a4488927f8d6df';

module.exports = node;
