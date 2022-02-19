import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import SpellDetails from '../SpellDetails';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<SpellDetails />);

describe('----- SpellDetails -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
