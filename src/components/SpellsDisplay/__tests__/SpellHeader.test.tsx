import SpellHeader from '../SpellHeader';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

//@ts-ignore
const wrapper = shallow(<SpellHeader/>)

describe("----- SpellHeader -----", () => {
    test("it renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    })
});

