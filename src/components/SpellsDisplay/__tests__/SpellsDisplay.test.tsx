import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import SpellsDisplay from '../index';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<SpellsDisplay />);

describe('----- SpellsDisplay -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
