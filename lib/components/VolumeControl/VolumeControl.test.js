import React from 'react';
import { shallow } from 'enzyme';
import VolumeControl from './index';
import { VolumeBar, VolumeBtn } from './styles';
import { VolumeControlProps } from '../../../data-for-testing';

const { volume } = VolumeControlProps;

describe('VolumeControl Component', () => {
	let wrapper;
	const mockHandleVolumeChange = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<VolumeControl
				volume={volume}
				handleVolumeChange={mockHandleVolumeChange}
			/>
		);
	});

	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('VolumeBar calls handleVolumeChange on change', () => {
		wrapper.setState({ viewVolumeBar: true });
		wrapper.find(VolumeBar).simulate('change', { target: { value: 0.7 } });
		expect(mockHandleVolumeChange.mock.calls.length).toBe(1);
	});

	it('VolumeBtn updates state on change', () => {
		wrapper.setState({ viewVolumeBar: false });
		wrapper.find(VolumeBtn).simulate('click');
		expect(wrapper.state().viewVolumeBar).toBe(true);
	});
});
