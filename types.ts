import React from 'react';

export interface Plan {
  id: string;
  name: string;
  price: string;
  oldPrice: string;
  features: string[];
  recommended?: boolean;
  link: string;
  duration: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}