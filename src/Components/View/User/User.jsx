import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'antd';
import UserCard from '../../Common/UserCard';


const User = () => {

    const [userData, setUserData] = useState([])

    /** Geting User List **/
    const getUser = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUserData(response.data)
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        (async () => {
            await getUser()
        })()
    }, []);

    return (
        <div>
            <Row>
                {
                    userData?.map((element, index) =>
                        <UserCard data={element} index={index} key={index} />
                    )
                }
            </Row>
        </div>
    )
}

export default User
