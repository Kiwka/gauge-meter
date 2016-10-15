import React from 'react';
import ImageSource from '../assets/loader.svg';

const Loader = () => <div>
  <img src={ImageSource} />
  <div>Loading...</div>
</div>;

export default Loader;
