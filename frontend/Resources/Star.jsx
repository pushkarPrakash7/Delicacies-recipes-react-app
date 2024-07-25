/* eslint-disable react/prop-types */
import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ star }) {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    star >= index + 1 ? <FaStar /> : star >= number ? <FaStarHalfAlt />: <AiOutlineStar />
                }
            </span>
        );
    });
    return (
        <div className='flex gap-1'>
            {ratingStar}
        </div>
    )
}

export default Star
