import Image from 'next/image'
import SmartbrewLogo from '@/images/smartbrew/smartbrew.png'

export function Logo(props: any) {
  return (
    <Image 
        src={SmartbrewLogo} 
        alt="SmartBrew.co Logo" 
        {...props} />
  )
}
