import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Section = styled.div`
  width: 100vw;
  background-color: #f2f7f1;

  form {
    /* border: 1px solid red; */
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      letter-spacing: 0.16px;
      color: #000000;
      margin-bottom: 0.2rem;
    }

    h5 {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.16px;
      color: #525252;
      margin-bottom: 0.5rem;
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 18px 30px;
      gap: 10px;
      width: 584px;
      height: 67px;
      background: #6161fe;
      border: 2px solid #000000;
      box-shadow: 3px 3px 0px #000000;
      border-radius: 4px;
      /* margin: 0 auto; */
      color: white;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      letter-spacing: 0.16px;
      box-sizing: border-box;
    }

    input {
      margin-bottom: 2rem;
    }

    input#song-name {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 10px 24px;
      font-size: 1rem;
      gap: 10px;

      width: 434px;
      /* height: 58px; */
      box-sizing: border-box;
      background: #ffffff;
      border: 2px solid #000000;
      box-shadow: 3px 3px 0px #000000;
      border-radius: 4px;
      /* margin-bottom: 4rem; */
    }

    input#song {
      /* margin-bottom: 1rem; */
    }
  }
`;

const Heading = styled.div`
  width: 50%;
  margin: 0 auto;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.16px;
  color: #000000;
  margin-bottom: 3rem;
`;

const PostWork = () => {
  return (
    <Section>
      <Navbar />
      <Heading>Let's get your song published!</Heading>
      <form>
        <h1>Name of the song</h1>
        <input
          type="text"
          name=""
          id="song-name"
          placeholder="Name for your Song"
        />
        <h1>Upload your song</h1>
        <h5>Max file size is 10 Mb. Supported file types are .mp3 and .wav</h5>
        <input type="file" name="" id="song" />
        <h1>Upload your song cover</h1>
        <h5>Max file size is 5 Mb. Supported file types are .png and .jpg</h5>
        <input type="file" name="" id="" />
        <button type="submit">Publish my Song!!!</button>
      </form>
      <Footer />
    </Section>
  );
};

export default PostWork;