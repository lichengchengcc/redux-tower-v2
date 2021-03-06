const initialState = [
  {
    id: '1',
    user: 'peter',
    body: '很有意思',
    course: '1'
  },
  {
    id: '2',
    user: 'billie',
    body: 'nice',
    course: '2'
  },
  {
    id: '3',
    user: 'Jay',
    body: 'cool',
    course: '2'
  }
]

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment]
    case 'DELETE_COMMENT':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export default comments
