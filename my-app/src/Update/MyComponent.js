import React from 'react';
import { useSelector } from 'react-redux';


const MyComponent = () => {
    const name = useSelector(state => state.user.name)
    const email = useSelector(state => state.user.email)
    return (
        <div>
            <div>name is {name} from MyCompoment</div>
            <div>emamil is {email} from MyCompoment</div>
        </div>
    );
};

export default MyComponent;