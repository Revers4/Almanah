import type { FC } from 'react';
import defaultUser from '../../icons/defaultUser.svg';
import { useDispatch} from 'react-redux';
import { logOut } from '../../store/UserSlice';

type IconProps = {
    src?: string,
}

const DefaultIcon: FC <IconProps> = ({src=''}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logOut())
    }
    return (
        <img className='rounded-md w-[37px] h-[37px] hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg p-1.5 transition cursor-pointer' onClick={handleClick} src={src || defaultUser} alt="user-icon" />
    )
}

export default DefaultIcon;