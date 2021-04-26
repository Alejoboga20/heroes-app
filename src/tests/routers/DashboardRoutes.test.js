import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../components/auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router';

describe('DashboardRoutes tests', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, name: 'Test' }
  };

  test('should display properly', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Test');
  });
});
