import React from 'react';
import { shallow } from 'enzyme';
import SpeedControl from './index';
import { Container_Controls } from './styles';
import { SpeedControlProps } from '../../../data-for-testing';
const { speed } = SpeedControlProps;

describe('SpeedControl Component', () => {
	let wrapper;
	const mockHandleSlowDown = jest.fn();
	const mockHandleSpeedUp = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<SpeedControl
				speed={speed}
				handleSlowDown={mockHandleSlowDown}
				handleSpeedUp={mockHandleSpeedUp}
			/>
		);
	});

	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call the mock mockHandleSlowDown function on click', () => {
		wrapper
			.find(Container_Controls)
			.children()
			.first()
			.simulate('click');
		expect(mockHandleSlowDown.mock.calls.length).toBe(1);
	});

	it('should call the mock mockHandleSpeedUp function on click', () => {
		wrapper
			.find(Container_Controls)
			.children()
			.at(2)
			.simulate('click');
		expect(mockHandleSpeedUp.mock.calls.length).toBe(1);
	});
});
