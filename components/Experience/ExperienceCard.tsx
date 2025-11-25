interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  image: string;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <>
      <div className="w-[300px] md:w-[600px] flex flex-row border border-gray-300 rounded-lg p-3">
        <div className="w-1/3 flex justify-center items-center">
          <img width={100} height={100} src={props.image} alt="company logo"/>
        </div>
        <div className="w-2/3 flex flex-col justify-center">
          <h1 className="text-xl font-semibold mb-1 text-gray-700">{props.title}</h1>
          <h2 className="text-lg underline text-orange-600 mb-2">{props.company}</h2>
          <p className="text-gray-500 text-sm mb-3">{props.duration}</p>
          <p className="text-sm text-gray-700">{props.description}</p>
        </div>
      </div>
    </>
  )
}