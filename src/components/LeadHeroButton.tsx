'use client'
import { Button } from '@/components/Button'
import { usePixel } from '@/lib/pixel'

export default function LeadHeroButton() {
  const { track } = usePixel();
  const handleClick = () => {
    track('Lead');
    window.location.replace("https://app.smartbrew.co/sign-up");
  }
  return(<Button color="slate" onClick={handleClick}>Free 7-Day Trial</Button>);
}
