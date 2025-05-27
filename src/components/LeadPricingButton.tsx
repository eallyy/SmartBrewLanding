'use client'
import { Button } from '@/components/Button'
import { usePixel } from '@/lib/pixel'

export default function LeadPricingButton() {
  const { track } = usePixel();
  const handleClick = () => {
    track('Lead');
    window.location.replace("https://app.smartbrew.co/sign-up");
  }
  return(<Button onClick={handleClick} color="white" className="mt-8">Get Started</Button>);
}
