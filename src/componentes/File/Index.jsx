import React from 'react'

export default function File({data, type, alt, w="300px", h="500px"}) {
    console.log(data)
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <object key={alt} data={data} type={type} alt={alt} width={w} height={h} ></object>
    )
}
