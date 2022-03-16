export declare const rolesArray: readonly ["master", "admin", undefined];
export declare type roleType = typeof rolesArray[number];
interface Props {
    role: roleType;
}
declare const Role: ({ role }: Props) => JSX.Element | null;
export default Role;
