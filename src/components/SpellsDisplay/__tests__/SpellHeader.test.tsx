import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import SpellHeader from '../SpellHeader';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<SpellHeader />);

describe('----- SpellHeader -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
