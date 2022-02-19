import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import Stat from '../Stat';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<Stat />);

describe('----- Stat -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
