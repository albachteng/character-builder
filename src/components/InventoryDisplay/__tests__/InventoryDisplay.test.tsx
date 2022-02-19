import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import InventoryDisplay from '../index';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<InventoryDisplay />);

describe('----- InventoryDisplay -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
