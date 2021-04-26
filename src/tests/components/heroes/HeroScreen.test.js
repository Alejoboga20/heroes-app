import React from 'react';
import { mount } from 'enzyme';
import HeroScreen from '../../../components/heroes/HeroScreen';
import { MemoryRouter } from 'react-router';

describe('HeroScreen Tests', () => {
  const historyMock = {
    length: 10,
    goBack: jest.fn(),
    puh: jest.fn()
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen history={historyMock} />
    </MemoryRouter>
  );

  test('should display Redirect components with no url', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });
});
