'use client'

import styles from '../styles/page.module.css';
import { FrontPage } from '@/components/home/FrontPage';
import { Content } from '@/components/home/Content';
import { Uniqueness } from '@/components/home/Uniqueness';
import { Video } from '@/components/home/Video';
import { Comunity } from '@/components/home/Comunity';
import { Discover } from '@/components/home/Discover';
import Banner from '@/components/home/Banner';

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <FrontPage />
      <Content />
      <Uniqueness />
      <Video />
      <Comunity />
      <Discover />
    </div>
  )
}
