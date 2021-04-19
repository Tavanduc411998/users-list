import React, { useEffect, useState } from 'react';
import './List.css';


function getList() {
    const axios = require('axios');
    // return fetch('https://randomuser.me/api?page=2&results=10')
    //     .then(data => data.json())
    return axios.get('https://randomuser.me/api?page=2&results=10')
        .then(function (response) {
            console.log(response.data);
            return response.data;
            
        })
}

function List() {
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getList()
            .then(users => {
                if (mounted)
                    setList(users.results);
            })
        return () => mounted = false;
    }, [])

    return (
        <div className="wrapper">
            <h1>My User List</h1>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(user =>
                            <tr>
                                <td>{user.name.last}</td>
                                <td>{user.gender}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;