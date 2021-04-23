import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('PrivateRoute tests', () => {
  const props = {
    location: { patname: '/marvel' }
  };

  test('should should component if authenticated and save in localstorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={true}
          component={() => <span>Done</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
  });
});
