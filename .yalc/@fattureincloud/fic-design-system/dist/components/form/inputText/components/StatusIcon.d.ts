import { statusType } from '../../common/types';
interface Props {
    status: statusType;
}
declare const StatusIcon: ({ status }: Props) => JSX.Element | null;
export default StatusIcon;
