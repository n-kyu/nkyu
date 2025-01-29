import Image from 'next/image'
import PinIcon from '../../../public/icons/map-svg.svg'
import GithubIcon from '../../../public/icons/github-svg.svg'
import LinkedinIcon from '../../../public/icons/linkedin-svg.svg'
import Link from 'next/link'
export default function Index() {
    return (
        <>
        <div className="flex px-6 py-4 border-t border-[--dark-purple] gap-5">
            <div className='flex items-start'>
                <Image alt='Map Pin' src={PinIcon} width={20} height={20}/>
                <p className='text-[--footer-colors]'>Brazil</p>
            </div>
            <div className='flex items-start gap-5'>
                <Link className='flex items-start gap-[2px] text-[--footer-colors] hover:text-[--white]' href="https://github.com/n-kyu" target='_blank'>
                    <Image alt='Github Icon' src={GithubIcon} width={20} height={20}/>
                    Github
                </Link>
                <Link className='flex items-start gap-[2px] text-[--footer-colors] hover:text-[--white]' href="https://github.com/n-kyu" target='_blank'>
                    <Image alt='Github Icon' src={LinkedinIcon} width={20} height={20}/>
                    LinkedIn
                </Link>
            </div>
        </div>
        </>
    )
}