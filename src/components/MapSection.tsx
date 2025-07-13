function MapSection() {
  return (
    <section className="h-[400px] md:h-[600px]">
      <iframe
        src="https://yandex.ru/map-widget/v1/-/CHwCZG8b"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={true}
        style={{ position: 'relative' }}
      ></iframe>
    </section>
  );
}

export default MapSection; 