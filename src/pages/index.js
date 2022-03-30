import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useTheme from '../hooks/useTheme';
// import ThemedImage from '@theme/ThemedImage';
// import useBaseUrl from '@docusaurus/useBaseUrl';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkMode } = useTheme()

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='header-box'>
          {/* <ThemedImage
            alt="Docusaurus with Keytar"
            className='heroLogo'
            sources={{
              light: useBaseUrl('/img/docusaurus.svg'),
              dark: useBaseUrl('/img/docusaurus_keytar.svg'),
            }}
            width="200"
            height="200"
          /> */}
          <img
            alt="Docusaurus with Keytar"
            className="heroLogo"
            src={isDarkMode ? '/img/docusaurus_keytar.svg' : '/img/docusaurus.svg'}
            width="200"
            height="200"
          />
          <div className='user-info'>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Welcome 💋
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
