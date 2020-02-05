import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { INITIAL_STATE } from '../store/constants';

import Header from '../containers/Header';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Header render', () => {
  const props = {};
  const store = mockStore(INITIAL_STATE);

  const wrapper = mount(<Provider store={store}>
                          <MemoryRouter>
                            <Header {...props} />
                          </MemoryRouter>
                        </Provider>);

  /* it('Header render correctly', () => {
    // expect(toJson(wrapper)).toMatchSnapshot();
  }); */

  it('Header contain wrapper with class', () => {
    expect(wrapper.find('.page__header')).toHaveLength(1);
    expect(wrapper.find('.header')).toHaveLength(1);
  });

  it('Header componentDidMount', () => {
    const spy = jest.spyOn(wrapper.find('Header').instance(), 'componentDidMount');
    wrapper.find('Header').instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
