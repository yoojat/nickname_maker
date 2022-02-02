import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Seo from '../components/Seo';
import { adjectiveArr, nounArr } from '../const';
import styles from '../styles/Home.module.css';
import randomValueFromArray from '../utils/randomValueFromArray';

const Home: NextPage = () => {
  const [name, setName] = useState('');

  const onButtonClick = () => {
    const adjectiveVar = randomValueFromArray(adjectiveArr);
    const nounVar = randomValueFromArray(nounArr);
    setName(`${adjectiveVar} ${nounVar}`);
  };
  return (
    <div className='container'>
      <Seo title='닉네임 생성기' />
      <div className='contentContainer'>
        <div className='content'>
          {name && <div className='createdText'>{name}</div>}

          <div>
            <button className='executeBtn' onClick={onButtonClick}>
              닉네임 생성
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .contentContainer {
            width: 100%;
            height: 100vh;
            background-color: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .content {
            text-align: center;
          }
          .createdText {
            font-size: 32px;
            padding: 20px;
          }
          .executeBtn {
            background-color: #3198e0;
            padding: 20px;
            width: 200px;
            color: white;
            border: none;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            font-size: 18px;
          }
          .executeBtn:hover {
            background-color: #2260a6;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
