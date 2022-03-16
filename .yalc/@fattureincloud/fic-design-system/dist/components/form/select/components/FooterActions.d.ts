import { DropdownItemProps } from '../../../dropdown';
export interface SelectActionsType extends DropdownItemProps {
    closeOnClick?: boolean;
}
interface Props {
    actions: SelectActionsType[];
    triggerClose: () => void;
}
declare const FooterActions: ({ actions, triggerClose }: Props) => JSX.Element;
export default FooterActions;
