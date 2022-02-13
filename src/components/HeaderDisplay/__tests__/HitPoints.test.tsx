import HitPoints from '../HitPoints';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

//@ts-ignore
const wrapper = shallow(<HitPoints/>)

describe("----- HitPoints -----", () => {
    test("it renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    })
});
