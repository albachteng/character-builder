import AbilityScoreDisplay from '../index';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

const wrapper = shallow(<AbilityScoreDisplay></AbilityScoreDisplay>)

describe("----- Ability Score Display -----", () => {
    test("it renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    })
})
