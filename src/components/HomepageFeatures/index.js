import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enjoy Life',
    Svg: require('@site/static/img/index/enjoy.svg').default,
    description: (
      <>
        There are so many interesting things in the world. Relatives and friends
        are aroud me. How lucky I live in the beautiful world!
      </>
    ),
  },
  {
    title: 'Good at Communicating',
    Svg: require('/img/index/talk.svg').default,
    description: (
      <>
        It is necessary that communicate with others, and everything is going well.
        If not, every relationship maybe awful!
      </>
    ),
  },
  {
    title: 'Love Code',
    Svg: require('/img/index/code.svg').default,
    description: (
      <>
        IT is really a good tool that provides people much help and brings convenience
        to our life. So, <code>Code</code> is cute!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
