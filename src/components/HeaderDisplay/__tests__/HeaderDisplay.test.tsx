import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import HeaderDisplay from '../index';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<HeaderDisplay />);

describe('----- HeaderDisplay -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
