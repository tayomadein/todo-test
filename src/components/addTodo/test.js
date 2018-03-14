/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();
  const undoMock = jest.fn();

  beforeEach(() => {
    component = shallow(<AddTodo submitTodo={submitMock} undoDelete={undoMock} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('Should have one button', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('Should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} undoDelete={undoMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });

  describe('Undo Delete button', () => {
    it('Should exist', () => {
      expect(component.find('.undo-delete').length).toEqual(1);
    });

    it('Should call the undoDelete function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} undoDelete={undoMock} />);

      expect(undoMock.mock.calls.length).toEqual(0);
      component.find('.undo-delete').simulate('click');
      expect(undoMock.mock.calls.length).toEqual(1);
    });
  });
});
