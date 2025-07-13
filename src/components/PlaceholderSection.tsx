import React from 'react';

const PlaceholderSection = ({ id, title }: { id: string, title: string }) => (
    <section id={id} className="bg-[#161616] text-white py-16 md:py-24">
        <div className="mx-auto px-[20%] text-center">
            <h2 className="text-4xl mb-4">{title}</h2>
            <p className="opacity-70">Этот раздел находится в разработке.</p>
        </div>
    </section>
);

export default PlaceholderSection; 