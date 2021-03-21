import React from "react";
import { unFollow, follow, setCurrentPage, getUsers } from "../../store/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber)
  }

  render() {
    return (
        <>
          { this.props.isFetching ? <Preloader /> : null }
          <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                users = {this.props.users}
                unFollow = {this.props.unFollow}
                follow = {this.props.follow}
                usersWithToggleFollowing = {this.props.usersWithToggleFollowing}
                toggleFollowing = {this.props.toggleFollowing}
                onPageChanged = {this.onPageChanged} />
        </>
        )
  }
}

const mapStateToProps = ( state ) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    usersWithToggleFollowing: state.usersPage.usersWithToggleFollowing
  }
}

export default connect(mapStateToProps, {
  unFollow,
  follow,
  setCurrentPage,
  getUsers
})(UsersContainer);