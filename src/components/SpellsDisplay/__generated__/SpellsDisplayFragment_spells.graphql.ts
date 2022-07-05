/**
 * @generated SignedSource<<9fcc1e350ed25782dcf1a4256f41cf34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpellsDisplayFragment_spells$data = {
  readonly area_of_effect: {
    readonly size: number | null;
    readonly type: string | null;
  } | null;
  readonly attack_type: string | null;
  readonly casting_time: string | null;
  readonly components: ReadonlyArray<string | null> | null;
  readonly concentration: boolean | null;
  readonly damage: {
    readonly damage_at_character_level: any | null;
    readonly damage_at_slot_level: any | null;
    readonly damage_type: {
      readonly index: string | null;
      readonly name: string | null;
    } | null;
  } | null;
  readonly dc: {
    readonly dc_success: string | null;
    readonly dc_type: {
      readonly index: string | null;
      readonly name: string | null;
    } | null;
    readonly desc: string | null;
  } | null;
  readonly desc: ReadonlyArray<string | null> | null;
  readonly duration: string | null;
  readonly heal_at_slot_level: any | null;
  readonly higher_level: ReadonlyArray<string | null> | null;
  readonly index: string | null;
  readonly level: number | null;
  readonly material: string | null;
  readonly name: string | null;
  readonly range: string | null;
  readonly ritual: boolean | null;
  readonly school: {
    readonly desc: string | null;
    readonly index: string | null;
    readonly name: string | null;
  } | null;
  readonly subclasses: ReadonlyArray<{
    readonly index: string | null;
    readonly name: string | null;
  } | null> | null;
  readonly " $fragmentType": "SpellsDisplayFragment_spells";
};
export type SpellsDisplayFragment_spells$key = {
  readonly " $data"?: SpellsDisplayFragment_spells$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpellsDisplayFragment_spells">;
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
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "desc",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpellsDisplayFragment_spells",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SpellArea_of_effect",
      "kind": "LinkedField",
      "name": "area_of_effect",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "size",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "attack_type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "casting_time",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "components",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "concentration",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SpellDamage",
      "kind": "LinkedField",
      "name": "damage",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "damage_at_slot_level",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "damage_at_character_level",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SpellDamageDamage_type",
          "kind": "LinkedField",
          "name": "damage_type",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SpellDc",
      "kind": "LinkedField",
      "name": "dc",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dc_success",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SpellDcDc_type",
          "kind": "LinkedField",
          "name": "dc_type",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "storageKey": null
    },
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "duration",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "heal_at_slot_level",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "higher_level",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "level",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "material",
      "storageKey": null
    },
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "range",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ritual",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MagicSchool",
      "kind": "LinkedField",
      "name": "school",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SpellSubclasses",
      "kind": "LinkedField",
      "name": "subclasses",
      "plural": true,
      "selections": (v2/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Spell",
  "abstractKey": null
};
})();

(node as any).hash = "95bff746f16490a82e2265216c66f93a";

export default node;
