'use client'
import { Button } from '@/components/Button'
import { usePixel } from '@/lib/pixel'

export default function LeadCTAButton() {
  const { track } = usePixel();
  const handleClick = () => {
    track('Lead');
    window.location.replace("https://app.smartbrew.co/sign-up");
  }
  return(<Button onClick={handleClick} color="white" className="mt-10">Try SmartBrew for Free</Button>);
}
