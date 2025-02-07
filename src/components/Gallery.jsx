import React from 'react';
import Card from "./Card";
import '../styles/Gallery.css';
import datas from '../data/datas.json';

function Gallery() {
    return (
        <div className="gallery">
            {datas.map(({ id, cover, title }) => (
                <Card key={id} cover={cover} title={title} /> // Passer les bonnes props
            ))}
        </div>
    );
}

export default Gallery;
