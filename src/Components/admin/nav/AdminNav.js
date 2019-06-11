import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';


const AdminNav = () => {

    const links = [
        {
            title: 'Spotkania',
            linkTo: '/admin_matches'
        },
        {
            title: 'Dodaj spotkanie',
            linkTo: '/admin_matches/edit_match'
        }
    ]

    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom:'1px solid #353535'
    }


    const renderItems = () => (
        links.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        ))
    )

    const logoutHandler = () => {
        firebase.auth().signOut().then(()=>{
            console.log('Log out succesfull')
        },(error)=>{
            console.log('Error logging out')
        })
    }


    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={()=> logoutHandler()}>
                Wyloguj
            </ListItem>
        </div>
    );
};

export default AdminNav;