import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { INITIAL_STATE } from '../store/constants';

import LangSwitch from '../containers/LangSwitch';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('LangSwitch render', () => {
  const props = {};
  const store = mockStore(INITIAL_STATE);

  const wrapper = mount(<Provider store={store}>
                          <MemoryRouter>
                            <LangSwitch {...props} />
                          </MemoryRouter>
                        </Provider>);

  it('LangSwitch render correctly', () => {
    // expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('LangSwitch contain wrapper with class', () => {
    // expect(wrapper.find('.message')).toHaveLength(1);
  });

  it('LangSwitch componentDidMount', () => {
    const spy = jest.spyOn(wrapper.find('LangSwitch').instance(), 'componentDidMount');
    wrapper.find('LangSwitch').instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
