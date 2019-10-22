import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { INITIAL_STATE } from '../store/constants';

import Main from '../containers/main';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('app render', () => {
  const props = {};
  const store = mockStore(INITIAL_STATE);

  const wrapper = mount(<Provider store={store}>
                          <MemoryRouter>
                            <Main {...props} />
                          </MemoryRouter>
                        </Provider>);

  it('app render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('app contain wrapper with class', () => {
    expect(wrapper.find('.message')).toHaveLength(1);
  });

  it('app componentDidMount', () => {
    const spy = jest.spyOn(wrapper.find('Main').instance(), 'componentDidMount');
    wrapper.find('Main').instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
