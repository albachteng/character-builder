import { NamedIndex } from "./NamedIndex";

export interface Spell {
    area_of_effect: {
        size: number
        type: string
    }
    attack_type: string
    casting_time: string
    classes: NamedIndex[]
    components: string[]
    concentration: boolean
    damage: {
        damage_at_slot_level: JSON
        damage_at_character_level: JSON
        damage_type: NamedIndex 
    }
    dc: {
        dc_success: string
        dc_type: NamedIndex
        desc: string[]
    }
    desc: string[]
    duration: string
    heal_at_slot_level: JSON
    higher_level: string[]
    index: string
    level: number
    material: string
    name: string
    range: string
    ritual: boolean
    school: NamedIndex
    subclasses: NamedIndex[]
    url: string
}