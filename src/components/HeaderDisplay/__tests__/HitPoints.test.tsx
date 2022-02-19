import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import HitPoints from '../HitPoints';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<HitPoints />);

describe('----- HitPoints -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
