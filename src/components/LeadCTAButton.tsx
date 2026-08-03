'use client'
import { Button } from '@/components/Button'
import { usePixel } from '@/lib/pixel'

export default function LeadCTAButton() {
  const { track } = usePixel();
  const handleClick = () => {
    track('Lead');
    window.location.replace("https://smart-brew-app.vercel.app/sign-up");
  }
  return(<Button onClick={handleClick} color="white">Get your first recipe</Button>);
}
