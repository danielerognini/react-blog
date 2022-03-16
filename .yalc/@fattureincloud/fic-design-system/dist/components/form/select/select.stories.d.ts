import { Meta, Story } from '@storybook/react';
import { OptionType } from './components/Option';
import { SelectProps } from './types';
export declare const Single: Story<SelectProps>;
export declare const Simple: Story<SelectProps>;
export declare const Multi: Story<SelectProps<OptionType, true>>;
declare const SelectStories: Meta<SelectProps>;
export default SelectStories;
