import SkillsDisplay from '../index';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import useSkillProficiencies from '../../../hooks/useSkillProficiencies';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

jest.mock(
    '../../../hooks/useSkillProficiencies', 
    () => {
        return () => {
            return { proficiencies: [] }
        }
});

const wrapper = shallow(<SkillsDisplay></SkillsDisplay>)

describe("----- SkillsDisplay -----", () => {
    test("it renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    })
});
