import Image from 'next/image';

export default function HomePage({  }) {
  return (
    <div className="flex flex-row w-screen h-screen bg-grey-200">
          <div className = 'py-10 mx-auto text-center flex flex-col items-center'>

            <div className="flex h-[70vh]">
                    {/* Left side with a circular image */}
                    <div className="flex justify-center items-center w-1/2">
                      <div className="rounded-full overflow-hidden w-96 h-96 border-solid border-4 border-orange-500">
                        <Image src="/images/me.jpg" alt="Your Photo" width = {500} height = {500} className="object-cover w-full h-full" />
                      </div>
                    </div>
            
                    {/* Right side with text */}
                    <div className="flex flex-col justify-center w-1/2 px-2">
                      <h1 className="text-6xl font-bold text-gray-900">Hey, I am {' '}
                        <span className='text-orange-500'>
                          Will
                        </span>
                      .</h1>
                      <br></br>
                      <p className="text-2xl text-gray-700 mt-4">
                        <br></br>2nd year Computer Science student @ UNSW <br></br><br></br>
                        ⚲ Sydney, Australia
                      </p>
                    </div>
                  </div>
            <hr className="w-48 h-1 bg-orange-600 border-0 rounded"></hr>
          </div>
    </div>
  );
};