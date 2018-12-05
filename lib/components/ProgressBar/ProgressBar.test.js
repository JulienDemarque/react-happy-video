import React from 'react';
import { shallow } from 'enzyme';
import { ProgressBarProps } from '../../../data-for-testing';
import ProgressBar from './index';
import { FullBar } from './styles';
const { colorgiven, progress } = ProgressBarProps;

describe('ProgressBar Component', () => {
	let wrapper;
	const mockMoveCurrentTime = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<ProgressBar
				colorgiven={colorgiven}
				progress={progress}
				moveCurrentTime={mockMoveCurrentTime}
			/>
		);
	});

	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call the mock mockMoveCurrentTime function on click', () => {
		const mockedEvent = {
			currentTarget: {
				offsetWidth: 50,
				getBoundingClientRect: function() {
					return { left: 10 };
				}
			},
			clientX: 20
		};
		wrapper.find(FullBar).simulate('click', mockedEvent);
		expect(mockMoveCurrentTime.mock.calls.length).toBe(1);
	});
});
