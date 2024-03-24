import {FC} from 'react';

interface IProps {

}

const UserInfo :FC<IProps> = () => {
    return (
        <div>
            <img width="100" height="100" src="https://img.icons8.com/clouds/100/user.png" alt="user"/>
        </div>
    );
};

export {UserInfo};