import Image from 'next/image';

const images = [
  { src: '/images/NovelNote.jpg', title: 'NovelNote', description: 'An all-in-one Literature Lovers paradise. Featuring robust novel and quote recording capabilities.' },
  { src: '/images/meng2.jpg', description: 'Test' },
  { src: '/images/xiaochun.jpg', description: 'Test' },
  { src: '/images/spiritstream.jpg', description: 'Test' },
  { src: '/images/NovelNote.jpg', description: 'Test' },
];

const Gallery = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 p-8">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col md:flex-row">
            <div className="p-4 items-center justify-center">
              <p className="text-1xl font-semibold text-center">{image.title}</p>
              <p className="text-sm mb-2 tracking-tight font-thin text-center">{image.description}</p>
              <div className="relative overflow-hidden rounded-lg shadow-lg h-72 w-96 flex justify-center items-center">
                <Image
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Gallery;