import Marquee from 'react-fast-marquee'

import Antd from '../assets/icons/antd.svg'
import Babel from '../assets/icons/babel.svg'
import Bootstrap from '../assets/icons/bootstrap5.svg'
import Css3 from '../assets/icons/css3.svg'
import Eslint from '../assets/icons/eslint.svg'
import Flutter from '../assets/icons/flutter.svg'
import Html5 from '../assets/icons/html5.svg'
import Jest from '../assets/icons/jest.svg'
import Next from '../assets/icons/nextjs2.svg'
import PWA from '../assets/icons/pwa.svg'
import React from '../assets/icons/react.svg'
import ReactQuery from '../assets/icons/reactquery.svg'
import ReactRouter from '../assets/icons/reactrouter.svg'
import Redux from '../assets/icons/redux.svg'
import Tailwind from '../assets/icons/tailwindcss.svg'

import Dart from '../assets/icons/dart.svg'
import Docker from '../assets/icons/docker.svg'
import Firebase from '../assets/icons/firebase.svg'
import Git from '../assets/icons/git.svg'
import Graphql from '../assets/icons/graphql.svg'
import MongoDB from '../assets/icons/mongodb.svg'
import MySQL from '../assets/icons/mysql.svg'
import NestJS from '../assets/icons/nestjs.svg'
import Node from '../assets/icons/nodejs.svg'
import Prisma from '../assets/icons/prisma.svg'
import Redis from '../assets/icons/redis.svg'
import Rust from '../assets/icons/rust.svg'
import Sass from '../assets/icons/sass.svg'
import Typescript from '../assets/icons/typescript.svg'
import ViteJS from '../assets/icons/vitejs.svg'
import Webpack from '../assets/icons/webpack.svg'
import Zod from '../assets/icons/zod.svg'

const firstMarqueeItems = [
  {source: Antd, alt: 'antd'},
  {source: Babel, alt: 'babel'},
  {source: Bootstrap, alt: 'bootstrap'},
  {source: Css3, alt: 'css3'},
  {source: Eslint, alt: 'eslint'},
  {source: Flutter, alt: 'flutter'},
  {source: Html5, alt: 'html5'},
  {source: Jest, alt: 'jest'},
  {source: Next, alt: 'nextjs'},
  {source: PWA, alt: 'pwa'},
  {source: React, alt: 'react'},
  {source: ReactQuery, alt: 'reactquery'},
  {source: ReactRouter, alt: 'reactrouter'},
  {source: Redux, alt: 'redux'},
  {source: Tailwind, alt: 'tailwindcss'}
]

const secondMarqueeItems = [
  {source: Dart, alt: 'dart'},
  {source: Docker, alt: 'docker'},
  {source: Firebase, alt: 'firebase'},
  {source: Git, alt: 'git'},
  {source: Graphql, alt: 'graphql'},
  {source: MongoDB, alt: 'mongodb'},
  {source: MySQL, alt: 'mysql'},
  {source: NestJS, alt: 'nestjs'},
  {source: Node, alt: 'nodejs'},
  {source: Prisma, alt: 'prisma'},
  {source: Redis, alt: 'redis'},
  {source: Rust, alt: 'rust'},
  {source: Sass, alt: 'sass'},
  {source: Typescript, alt: 'typescript'},
  {source: ViteJS, alt: 'vitejs'},
  {source: Webpack, alt: 'webpack'},
  {source: Zod, alt: 'zod'}
]

const Technologies = () => {
  return (
    <div id="technologies" className="text-center container mx-auto py-12 px-8 2xl:px-0">
      <h4 className="font-semibold tracking-widest md:text-[20px] mb-12">EXPERIENCE WITH</h4>
      <Marquee autoFill gradient gradientColor="#161513" pauseOnHover className="mb-12" speed={20}>
        {firstMarqueeItems.map(({source, alt}) => (
          <img key={alt} className="h-10 mx-6" src={source} alt={alt} loading="lazy" />
        ))}
      </Marquee>
      <Marquee autoFill gradient gradientColor="#161513" pauseOnHover direction="right" speed={20}>
        {secondMarqueeItems.map(({source, alt}) => (
          <img key={alt} className="h-10 mx-6" src={source} alt={alt} loading="lazy" />
        ))}
      </Marquee>
    </div>
  )
}

export default Technologies
