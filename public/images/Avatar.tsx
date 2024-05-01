import Image from 'next/image'
 
export default function Avatar() {
  return (
    <Image
      src="/Avatars.png"
      width={40}
      height={40}
      alt="Picture of the Intern"
    />
  )
}