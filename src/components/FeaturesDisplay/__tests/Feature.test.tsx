import Feature from '../Feature';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

const props = {
    feature: {
        name: 'Graham',
        index: 'graham',
        desc: ['it', 'works'],
        level: 1,
        __typename: 'test'
    }
}

const wrapper = shallow(<Feature {...props}></Feature>)

describe("----- Feature -----", () => {
    test("it renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    })
});
