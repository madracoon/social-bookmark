import React from 'react'
import Layout from '../../layouts'
import { actions } from '../../../store/ducks/checkProfiles'
import { Button } from '../../../components/UIComponents'

import { useSelector, useDispatch } from "react-redux";
import styles from './styles.module.scss'

function Main(props) {
  const { instagram, github } = useSelector((state) => state.checkProfiles)
  const dispatch = useDispatch();

  let usernameInput = '';

  function sendUsername() {
    dispatch(actions.profilesChecking({username: usernameInput.value}))
    usernameInput.value = '';
  }

  return(
    <Layout>
      <div className={styles.main}>
        <input ref={input => { usernameInput = input }} type='text' placeholder='Enter username'/>
        <ul>
          <li key='instagram'>Instagram - {instagram.toString()}</li>
          <li key='github'>Github - {github.toString()}</li>
        </ul>
        <Button text='Check username' onclick={sendUsername}/>
      </div>
    </Layout>
  )
}

export default Main