import 'styled-components';
import { DefaultTheme } from 'styled-components';
import { ButtonPalette, IconButtonPalette } from '../components/buttons';
import { DropdownPalette } from '../components/dropdown';
import { CheckboxPalette } from '../components/form/checkbox';
import { FileUploaderPalette } from '../components/form/fileUploader';
import { InputHelperPalette } from '../components/form/inputHelper';
import { InputTextPalette } from '../components/form/inputText';
import { SelectPalette } from '../components/form/select';
import { TextAreaPalette } from '../components/form/textArea';
import { IconBackgroundPalette, IconPalette } from '../components/icon';
import { SidebarItemPalette } from '../components/layout/sidebarItem';
import { MicroTagPalette } from '../components/microTag';
import { StepperPalette } from '../components/stepper';
import { TablePalette } from '../components/table';
import { TagPalette } from '../components/tag';
import { TooltipPalette } from '../components/tooltip';
import { Palette } from './types';
interface Components {
    tag: TagPalette;
    tooltip: TooltipPalette;
    button: ButtonPalette;
    iconButton: IconButtonPalette;
    microTag: MicroTagPalette;
    checkbox: CheckboxPalette;
    icon: IconPalette;
    iconBackground: IconBackgroundPalette;
    dropdown: DropdownPalette;
    sidebarItem: SidebarItemPalette;
    stepper: StepperPalette;
    table: TablePalette;
    inputText: InputTextPalette;
    textArea: TextAreaPalette;
    inputHelper: InputHelperPalette;
    select: SelectPalette;
    fileUploader: FileUploaderPalette;
}
export interface Theme {
    palette: Palette;
    components: Components;
}
export declare const defaultTheme: DefaultTheme;
export {};
