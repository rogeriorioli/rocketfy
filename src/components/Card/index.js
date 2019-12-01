import React from 'react';
import { Container , Label } from './styles';
import { useDrag } from 'react-dnd';

export default function Card({ data }) {
  const [{ isDragging }, dragRef] = useDrag( {
    item : { type: 'CARD' },
    collect : monitor =>( {
      isDragging : monitor.isDragging(),
    })
  })

  return (
    <Container ref={dragRef} isDragging={isDragging} >
      <header>
        {data.labels.map(label => <Label key={label} color ={label} /> )}
      </header>
      <p>{ data.content }</p>
      { data.user ? <img src={data.user} alt=""/> : <img src="https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/s851x315/56457867_10205354246613292_2717701695403458560_n.jpg?_nc_cat=105&_nc_oc=AQkx-__Wsf98VRVzlA-t9jPK-_fNS8quTM7sFDjQ22QUxBi_A_PD1M3VXFmcXsjEZOU&_nc_ht=scontent.fcgh7-1.fna&oh=f50bc1171d7dbaad64fa79cde9c64bff&oe=5DD2C1DF" alt=""/> }
    </Container>
  );
}
