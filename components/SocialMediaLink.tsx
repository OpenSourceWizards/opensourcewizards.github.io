import { IconBrandInstagram } from '@tabler/icons-react';

const SocialMediaLink: React.FC<{ image: string; name: string; instagramName: string }> = ({
  image,
  name,
  instagramName,
}) => {
  return (
    <div className="flex w-32 flex-col items-center justify-center gap-2">
      <p>{name}</p>
      <img src={image} alt={`${name}-image`} className="rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900" />
      <a href={`https://instagram.com/${instagramName}`} target="_blank" className="w-full">
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-sky-500/20 p-2 text-sky-500 hover:bg-sky-500/30">
          <IconBrandInstagram />
          İletişim
        </button>
      </a>
    </div>
  );
};

export default SocialMediaLink;
