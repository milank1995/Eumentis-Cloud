import React from 'react'
import { Card, Col } from 'antd';
import { EditOutlined, MailOutlined, HeartOutlined, GlobalOutlined, PhoneOutlined, DeleteFilled } from '@ant-design/icons';
import classes from './usercard.module.css'

const UserCard = (props) => {

    /** mergeClass function is created for mergeing a classes **/
    const mergeClass = (arr) => {
        return arr.reduce((arr, current) => arr + ' ' + current, '')
    }

    return (
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
                className={classes.marginCard}
                hoverable
                cover={
                    <div className={mergeClass([classes.defaultBackground, classes.textCenter])}>
                        <img
                            style={{
                                width: "200px",
                                height: "200px"
                            }}
                            src={`https://avatars.dicebear.com/v2/avataaars/${props.data.username}.svg?options[mood][]=happy`}
                            alt="User Avtar"
                        />
                    </div>
                }
                actions={[
                    <HeartOutlined key="like" className={mergeClass([classes.iconSize, classes.like])} />,
                    <EditOutlined key="edit" className={classes.iconSize} />,
                    <DeleteFilled key="delete" className={classes.iconSize} />
                ]}>

                <div>
                    <div>
                        <h3>{props.data.name}</h3>
                    </div>
                    <div>
                        <div className={classes.flex}>
                            <MailOutlined className={classes.icons} />
                            <p className={classes.cardText}>{props.data.email}</p>
                        </div>
                        <div className={classes.flex}>
                            <PhoneOutlined className={classes.icons} />
                            <p className={classes.cardText}>{props.data.phone}</p>
                        </div>
                        <div className={classes.flex}>
                            <GlobalOutlined className={classes.icons} />
                            <p className={classes.cardText}>http://{props.data.website}</p>
                        </div>
                    </div>
                </div>
            </Card >
        </Col >
    )
}

export default UserCard
