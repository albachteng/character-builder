import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import AbilityScoreDisplay from '../index';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<AbilityScoreDisplay />);

describe('----- Ability Score Display -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
