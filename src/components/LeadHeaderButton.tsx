'use client'
import { Button } from '@/components/Button'
import { usePixel } from '@/lib/pixel'

export default function LeadHeaderButton() {
  const { track } = usePixel();
  const handleClick = () => {
    track('Lead');
    window.location.replace("https://app.smartbrew.co/sign-up");
  }
  return(<Button onClick={handleClick} color="blue">
          <span>
            Start Brewing<span className="hidden lg:inline"> Today</span>
          </span>
         </Button>);
}
