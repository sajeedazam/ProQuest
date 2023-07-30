import { useDispatch } from 'react-redux';
import React from 'react';
import { deleteCartItemAsync } from '../../redux/notifications/thunks';

export default function ItemDeleteButton({ item }) {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        await dispatch(deleteCartItemAsync(item));
    };

    return (
        <button className="deleteButton" onClick={handleDelete}>
            X
        </button>
    );
}
