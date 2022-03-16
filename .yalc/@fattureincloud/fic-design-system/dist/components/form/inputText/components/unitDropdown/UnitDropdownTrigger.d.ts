export interface Unit {
    name: string;
    shortName?: string;
}
interface Props {
    unit: Unit;
}
declare const UnitDropdownTrigger: ({ unit }: Props) => JSX.Element;
export default UnitDropdownTrigger;
