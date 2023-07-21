import { useDispatch } from 'react-redux';
import React from 'react';
import { deleteItemAsync } from '../../redux/notifications/thunks';

export default function ItemDeleteButton({ item }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItemAsync(item));
    };

    return (
        <button className="deleteButton" onClick={handleDelete}>
            Delete Item
        </button>
    );
}
