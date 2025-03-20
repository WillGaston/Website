import Photo from '@/components/Photos';


export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <div className = 'py-16 mx-auto text-center flex flex-col items-center'>
        <h1 className = 'text-5xl font-bold tracking-tight text-gray-800'>
          My {' '}
          <span className='text-orange-500'>
            Photos
          </span>
          .
        </h1>
      </div>
      <div className = 'py-4 mx-auto text-center flex flex-col items-center text-xl'>
        Below are various photos I have taken recently.
        <Photo />
      </div>
      
      
    

    </div>)
}