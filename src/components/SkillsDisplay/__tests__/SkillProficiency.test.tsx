import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import SkillProficiency from '../SkillProficiency';

configure({ adapter: new Adapter() });

// @ts-ignore
const wrapper = shallow(<SkillProficiency />);

describe('----- SkillProficiency -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
