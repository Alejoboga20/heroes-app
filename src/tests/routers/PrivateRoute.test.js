import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('PrivateRoute tests', () => {
  const props = {
    location: { pathname: '/marvel' }
  };

  Storage.prototype.setItem = jest.fn();

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
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });
});
