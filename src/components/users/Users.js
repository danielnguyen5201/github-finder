import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
// import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext)

  if (githubContext.loading) {
    return <Spinner/>
  } else {
    return (
      <div className="grid-3">
        {githubContext.users.map(user =>
          <UserItem user={user} key={user.id}/>,
        )}
      </div>
    )
  }
}

Users.propTypes = {
}

export default Users
