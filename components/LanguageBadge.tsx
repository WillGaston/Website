import Image from 'next/image';

type BadgeType = {
  language: string;
  imgLink: string;
  index: number;
}

export default function LanguageBadge({ language, imgLink, index }: BadgeType) {

  return (
    <div className={`flex items-center p-4 max-w-xs md:max-w-sm rounded-xl shadow-md border`}>
      <Image
        src={imgLink}
        alt={`Image ${index + 1}`}
        width={50}
        height={20}
        className="object-cover"
        />
      <h2 className="ml-2 text-md md:text-xl font-semibold text-gray-800">{language}</h2>
    </div>
  );
}