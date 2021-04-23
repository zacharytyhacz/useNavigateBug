import React from "react";
import { shallow } from "enzyme";
import * as ReactRouterDom from "react-router-dom";

import Home from "../Home";


describe('Home component useNavigate', () => {
    beforeEach(() => { });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should call navigate on button click, no mocking;', () => {
        const wrapper = shallow(<Home />);

        wrapper.update()

        wrapper.find('button').simulate('click');
    })

    it('should call navigate on button click, normal mock with spyOn', () => {
        jest.spyOn(ReactRouterDom, 'useNavigate').mockReturnValue(jest.fn(() => jest.fn));
        const wrapper = shallow(<Home />);

        wrapper.update()

        wrapper.find('button').simulate('click');
    })

    it('should call navigate on button click, mocking normal expected mock', () => {
        jest.mock('react-router-dom', () => ({
            useNavigate: jest.fn(() => jest.fn),
        }))
        const wrapper = shallow(<Home />);

        wrapper.update()

        wrapper.find('button').simulate('click');
    })

    it('should call navigate on button click, mocking the module import', () => {
        jest.mock('react-router-dom', () => {
            // Require the original module to not be mocked...
            const originalModule = jest.requireActual('react-router-dom');

            return {
                __esModule: true,
                ...originalModule,
                // add your noops here
                useNavigate: jest.fn(() => 'bar')
            };
        });
        const wrapper = shallow(<Home />);

        wrapper.update()

        wrapper.find('button').simulate('click');
    })

    it('should call navigate on button click, mocking with Object.defineProperty', () => {
        Object.defineProperty(ReactRouterDom, 'useNavigate', {
            configurable: true,
            value: jest.fn(() => 'bar')
        });
        const wrapper = shallow(<Home />);

        wrapper.update()

        wrapper.find('button').simulate('click');
    })
})
