import React from 'react';

const Vsl: React.FC = () => {
  return (
    <section className="relative py-4 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/S2enVzxMVjQ"
            title="HS MAX 3.0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Vsl;
