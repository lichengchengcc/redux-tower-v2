const initialState = [
  {
    id: '1',
    poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
    title: '课程1',
    likes: 2,
    showHeart: false
  },
  {
    id: '2',
    poster: 'http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png',
    title: '课程2',
    likes: 3,
    showHeart: false
  }
]

const courses = (state = initialState, action) => {
  switch (action.type) {
    case 'HIDE_HEART':
      return state.map(t => {
        if (t.id === action.courseId) {
          return {
            ...t,
            showHeart: false
          }
        }
        return t
      })
    case 'LIKE':
      return state.map(t => {
        if (t.id === action.courseId) {
          return {
            ...t,
            likes: t.likes + 1,
            showHeart: true
          }
        }
        return t
      })
    default:
      return state
  }
}

export default courses
