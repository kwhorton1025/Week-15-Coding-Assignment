import React from "react";
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            method: 'DELETE', //CRUD operation DELETE
           ...house, 
           rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => {
        const updatedHouse = {
            method: 'POST', //CRUD operation POST
            ...house, 
            rooms: [...house.rooms, room]
        };
        updateHouse(updatedHouse);
    }
    const rooms = () => (
        <ul class='room-list'>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label><br></br>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div class='all-houses'>
            <h1>{house.name}</h1>
            {
                rooms({rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};