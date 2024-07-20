'use client';
import React from 'react';
import { HeroParallax } from './ui/hero-parallax';

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    thumbnail: '/images/auris-landing.png',
  },
  {
    thumbnail: '/images/pizza-landing.png',
  },
  {
    thumbnail: '/images/lndng-example.png',
  },
  {
    thumbnail: '/images/buzo-landing.png',
  },
  {
    thumbnail: '/images/hotel-landing.png',
  },
  {
    thumbnail: '/images/vielcomex-landing.png',
  },
  {
    thumbnail: '/images/webdesign.png',
  },
  {
    thumbnail: '/images/webdesign.png',
  },
  {
    thumbnail: '/images/webdesign.png',
  },
];
