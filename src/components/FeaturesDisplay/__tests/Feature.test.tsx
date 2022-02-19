import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import Feature from '../Feature';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<Feature />);

describe('----- Feature -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
