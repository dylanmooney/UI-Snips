import Image from "next/image";

type AvatarProps = {
  image: string;
};

export function Avatar({ image }: AvatarProps) {
  return <Image src={image} width={35} height={35} alt="avatar" className="rounded-full" />;
}
