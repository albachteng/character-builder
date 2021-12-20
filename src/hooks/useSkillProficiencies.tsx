import { useReducer } from "react";
import { SkillIndex } from "../types";

    type SkillAction = 
        {
            type: 'isProficient', 
            payload: SkillIndex
        } | {
            type: 'isNotProficient', 
            payload: SkillIndex
        } | {
            type: 'reset'
        };

    type SkillProficiencyState= {
        [key in SkillIndex]: boolean;
    }
    
    const initSkills: {[key in SkillIndex]: false} = {
        acrobatics: false,
        'animal-handling': false, 
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        'slight-of-hand': false,
        stealth: false,
        survival: false,
    }

    const reducer = (state: SkillProficiencyState, action: SkillAction) => {
        switch(action.type) {
            case 'isProficient': 
                return {...state, [action.payload]: true};
            case 'isNotProficient': 
                return {...state, [action.payload]: false};
            case 'reset': 
                return {...initSkills};
            default: 
                return state
        }
    }

const useSkillProficiencies = () => {

    const [ state, dispatch ] = useReducer(reducer, initSkills);

    return {
        state,
        dispatch
    }
}

export default useSkillProficiencies;