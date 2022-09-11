import React, { useState } from 'react';
import { db } from './firebase';
import styled from 'styled-components';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mpesa, setMpesa] = useState(false);
  const [cash, setCash] = useState(false);
  const [nanyuki, setNanyuki] = useState(false);
  const [narumoru, setNarumoru] = useState(false);
  const [meru, setMeru] = useState(false);
  const [nyeri, setNyeri] = useState(false);
  const [isiolo, setIsiolo] = useState(false);
  const [other, setOther] = useState(false);
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('form')
      .add({
        name: name,
        email: email,
        phone: phone,
        mpesa: mpesa,
        cash: cash,
        nanyuki: nanyuki,
        narumoru: narumoru,
        meru: meru,
        nyeri: nyeri,
        isiolo: isiolo,
        other: other,
        location: location,
      })
      .catch((err) => console.log(err));
    setName('');
    setEmail('');
    setPhone('');
    setMpesa(false);
    setCash(false);
    setNanyuki(false);
    setNarumoru(false);
    setMeru(false);
    setNyeri(false);
    setIsiolo(false);
    setOther(false);
    setLocation('');
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>Congratulations!</h1>
      <h2>You just made an order request to Finebody Works Lab.</h2>
      <h3>Details you fill on the form will be used to deliver your package</h3>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Type your name...'
        maxLength='15'
        required
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Type your email...'
        maxLength='40'
        required
      />
      <label htmlFor='phone'>Phone</label>
      <input
        type='tel'
        name='phone'
        id='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='123-456-7890'
        maxLength='12'
      />
      <Container>
        <p>Select a payment method:</p> 
      </Container>
      <Container>
        <label htmlFor='info'>Mpesa</label>
        <input
          type='checkbox'
          checked={mpesa}
          onChange={(e) => setMpesa(e.target.checked)}
          name='mpesa'
          id='mpesa'
        />
      </Container>
      <Container>
        <label htmlFor='info'>Cash</label>
        <input
          type='checkbox'
          checked={cash}
          onChange={(e) => setCash(e.target.checked)}
          name='cash'
          id='cash'
        />
      </Container>
      <Container>
        <p>Select your location:</p> 
      </Container>
      <Container>
        <label htmlFor='info'>Nanyuki</label>
        <input
          type='checkbox'
          checked={nanyuki}
          onChange={(e) => setNanyuki(e.target.checked)}
          name='nanyuki'
          id='nanyuki'
        />
      </Container>
      <Container>
        <label htmlFor='info'>Nyeri</label>
        <input
          type='checkbox'
          checked={nyeri}
          onChange={(e) => setNyeri(e.target.checked)}
          name='nyeri'
          id='nyeri'
        />
      </Container>
      <Container>
        <label htmlFor='info'>Meru</label>
        <input
          type='checkbox'
          checked={meru}
          onChange={(e) => setMeru(e.target.checked)}
          name='meru'
          id='meru'
        />
      </Container>
      <Container>
        <label htmlFor='info'>Isiolo</label>
        <input
          type='checkbox'
          checked={isiolo}
          onChange={(e) => setIsiolo(e.target.checked)}
          name='isiolo'
          id='isiolo'
        />
      </Container>
      <Container>
        <label htmlFor='info'>Narumoru</label>
        <input
          type='checkbox'
          checked={narumoru}
          onChange={(e) => setNarumoru(e.target.checked)}
          name='narumoru'
          id='narumoru'
        />
      </Container>
      <Container>
        <label htmlFor='info'>Other Towns</label>
        <input
          type='checkbox'
          checked={other}
          onChange={(e) => setOther(e.target.checked)}
          name='other'
          id='other'
        />
      </Container>
      <Container>
        <p>Enter a detailed location description:</p> 
      </Container>
      <label htmlFor='message'>Detailed Location</label>
      <textarea
        name='location'
        id='location'
        placeholder='Estate, Street, Building, etc...'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      ></textarea>
      <Container><button type='subimt'>FINISH</button></Container>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.form`
  width: 20vw;
  margin: 5vh auto 0;
  display: grid;
  label {
    color: var(--first-color);
  }
  input {
    width: 20vw;
    border: 1px solid var(--third-color);
    height: 5vh;
    margin: 0.4rem 0 1rem 0;
    outline: none;
    border-radius: 0.4rem;
    padding: 0.2rem 0 0 1rem;
    &::placeholder {
      color: #000;
      letter-spacing: 1px;
    }
    &:focus {
      border-color: var(--first-color);
    }
  }
  textarea {
    width: 20vw;
    border: 1px solid var(--third-color);
    height: 10vh;
    margin: 0.4rem 0 1rem 0;
    outline: none;
    border-radius: 0.4rem;
    padding: 0.5rem 0 0 1rem;
    &::placeholder {
      color: #000;
      letter-spacing: 1px;
    }
    &:focus {
      border-color: var(--first-color);
    }
  }
  button {
    width: 100%;
    padding: 0.7rem 2rem;
    background: var(--second-color);
    border: none;
    outline: none;
    color: var(--third-color);
    margin: 1rem 0 0 0;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    input,
    textarea {
      width: 85vw;
    }
  }
`;
const Container = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: start;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  input {
    margin: 0 0 0 1rem;
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;
