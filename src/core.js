import {useContext} from 'react'

import Usecontext, { context } from '../src/hooks/Usecontext';
const { createProxyMiddleware } = require('http-proxy-middleware');
// eslint-disable-next-line react-hooks/rules-of-hooks
const {category,cartIteam,} = useContext(context);

const api=`https://api.themoviedb.org/3/movie/${category}/?api_key=e7b12004b75308c7c4a6e84c00d2477e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${cartIteam}&with_watch_monetization_types=flatrate`
module.exports = function(app) {
  app.use(
    
    `${api}`,
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};
