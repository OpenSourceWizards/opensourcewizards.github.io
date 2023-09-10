import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

const Search: React.FC = () => {
  return <DocSearch appId="id" apiKey="key" indexName="opensourcewizards" />;
};

export default Search;
