import React, { useEffect } from 'react'
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

  useEffect(() => {
    console.log(links)
    dispatch(actions.profileFetching({id: id}))
  }, [id]);

  function uploadAvatar() {
    dispatch(actions.profileChangingAvatar())
  }

  const linkList = links.map((elem, index) => 
      <li key={elem.network + index}>{elem.network}: {elem.username}</li>
    )
  const tagList = tags.map((elem, index) => 
      <li key={'tag' + index}>#{elem}</li>
    )  

  return(
    <Layout>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <img src={avatar}/>
          <div>
            <Button text='Change Avatar' onclick={uploadAvatar}/>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            Networks
            <ul>
              {linkList}
            </ul>
          </div>
          <div>
            Tags
            <ul>
              {tagList}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile