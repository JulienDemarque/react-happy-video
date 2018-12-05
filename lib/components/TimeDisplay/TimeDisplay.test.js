import React from 'react';
import { shallow } from 'enzyme';
import TimeDisplay from './index';
import { TimeDisplayProps } from '../../../data-for-testing';

const { time, duration } = TimeDisplayProps;

describe('TimeDisplay Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<TimeDisplay time={time} duration={duration} />);
	});

	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
