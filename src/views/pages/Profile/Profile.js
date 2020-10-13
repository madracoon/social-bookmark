import React from 'react'
import Layout from '../../layouts'
import { actions } from '../../../store/ducks/profile'
import { Button } from '../../../components/UIComponents'

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import styles from './styles.module.scss'

function Profile() {
  const { id } = useParams();

  const links = useSelector((state) => state.profile.links)
  const tags = useSelector((state) => state.profile.tags)
  const avatar = useSelector((state) => state.profile.avatar)

  const dispatch = useDispatch();

  function pushAvatar() {
    dispatch(actions.profileFetching())
  }

  return(
    <Layout>
      <div className={styles.main}>
        <div>{id}</div>
        <div className={styles.avatar}><img src={avatar}/></div>
        <Button text='GetData' onclick={pushAvatar}/>
      </div>
    </Layout>
  )
}

export default Profile