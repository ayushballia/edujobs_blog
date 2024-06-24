import Image from 'next/image'
import TwitterIcon from "@/images/Twitter.svg"
import InstagramIcon from "@/images/Instagram.svg"
import FacebookIcon from "@/images/Facebook.svg"
import TikTokIcon from "@/images/TikTok.svg"
import RedditIcon from "@/images/Reddit.svg"
import DiscordIcon from "@/images/Discord.svg"

const SocialLinks = () => {
  return (
    <div className='flex gap-2 items-center my-3 mb-5'>
      <button className='bg-[#0A65CC] rounded-full p-1'><Image src={TwitterIcon} width={13} height={11} alt='twitter icon'/></button>
      <button className='bg-[#0A65CC] rounded-full p-1'><Image src={InstagramIcon} width={13} height={11} alt='twitter icon'/></button>
      <button className='bg-[#0A65CC] rounded-full p-1'><Image src={TikTokIcon} width={13} height={11} alt='twitter icon'/></button>
      <button className='bg-[#0A65CC] rounded-full p-1'><Image src={DiscordIcon} width={13} height={11} alt='twitter icon'/></button>
      <button className='bg-[#0A65CC] rounded-full p-1'><Image src={FacebookIcon} width={13} height={11} alt='twitter icon'/></button>
      <button className=' rounded-full'><Image src={RedditIcon} width={22} height={22} alt='twitter icon'/></button>
    </div>
  )
}

export default SocialLinks