import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import useSkillProficiencies from '../../../hooks/useSkillProficiencies';
import SkillsDisplay from '../index';

configure({ adapter: new Adapter() });

jest.mock(
  '../../../hooks/useSkillProficiencies',
  () => () => ({ proficiencies: [] }),
);

// @ts-ignore
const wrapper = shallow(<SkillsDisplay />);

describe('----- SkillsDisplay -----', () => {
  test('it renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
