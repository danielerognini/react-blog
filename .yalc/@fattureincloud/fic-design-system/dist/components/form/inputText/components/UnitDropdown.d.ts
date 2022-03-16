import { DropdownProps } from '../../../dropdown/types';
import { Unit } from './unitDropdown/UnitDropdownTrigger';
export interface UnitDropdownProps extends Pick<DropdownProps, 'renderContent' | 'placement' | 'className' | 'triggerStyles' | 'content' | 'maxWidth' | 'minWidthAsTrigger' | 'forceOpen'> {
    currentUnit: Unit;
}
declare const UnitDropdown: ({ currentUnit, ...dropdownProps }: UnitDropdownProps) => JSX.Element;
export default UnitDropdown;
