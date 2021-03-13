const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING"

export const follow = (id) => ({
  type: FOLLOW,
  id: id
})

export const unFollow = (id) => ({
  type: UNFOLLOW,
  id: id
})

export const setUsers = (users) => ({
  type: SET_USERS,
  users: users
})

export const setTotalUsersCount = (number) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalUsersCount: number
})

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  currentPage: page,
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching: isFetching,
})

const initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: true
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, users: state.users.map( el => {
          if (el.id === action.id) {
            return { ...el, followed: true }
          }
          return el;
        })
      }
    case UNFOLLOW:
      return {
        ...state, users: state.users.map( el => {
          if (el.id === action.id) {
            return {...el, followed: false}
          }
          return el;
        })
      }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case TOGGLE_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    default:
      return state;
  }
}

export default usersReducer;