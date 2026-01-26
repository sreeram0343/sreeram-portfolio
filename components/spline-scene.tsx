'use client'

import Spline from '@splinetool/react-spline'
import { Spotlight } from './ui/spotlight'

export function SplineScene({ scene, className }: { scene: string, className?: string }) {
    return (
        <div className={`relative w-full h-full ${className}`}>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <Spline scene={scene} />
        </div>
    )
}
