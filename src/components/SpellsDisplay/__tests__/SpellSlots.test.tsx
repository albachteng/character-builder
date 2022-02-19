import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import SpellSlots from '../SpellSlots';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<SpellSlots />);

describe('----- SpellSlots -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
