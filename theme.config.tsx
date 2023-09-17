import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Search from '@components/Search';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://opensourcewizards.works${asPath}`;
  const description = frontMatter.description || "Documentation for Open Source Wizards's resources for HavocRP";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/osw.ico" />
      <meta httpEquiv="Content-Language" content="tr" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Open Source Wizards';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://avatars.githubusercontent.com/u/142421395?s=38&v=4') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Open Source Wizards
    </div>
  ),
  project: {
    link: 'https://github.com/OpenSourceWizards',
  },
  chat: {
    link: 'https://discord.gg/2Y9TkaTTVZ',
  },
  docsRepositoryBase: 'https://github.com/opensourcewizards/opensourcewizards.works/blob/main',
  footer: {
    text: 'Open Source Wizards, © 2023 Tüm Hakları Saklıdır.',
  },
  // search: {
  //   component: <Search />,
  // },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
