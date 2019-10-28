import React from 'react';
import { useParams } from 'react-router-dom';

export default function Perfil(props) {
    let { username }= useParams();
    return (<div>
        {username}
    </div>);
}