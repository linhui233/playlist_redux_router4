let nextId = 0
const reducer = (state=[], action) => {
    state = state.length === 0 ?  [
        {
          id: 111,
          name: '歌曲',
          author: '歌曲111',
          isChecked: false,
          isCollect: false
        },
        {
          id: 112,
          name: '歌曲',
          author: '歌曲112',
          isChecked: false,
          isCollect: false
        }
      ] : state
    switch(action.type){
        case 'ADD':
            return [
                ...state,
                {
                    id: ++nextId,
                    name: action.name,
                    author: action.author,
                    isChecked: false,
                    isCollect: false
                }
            ]
        case 'REMOVE':
            return state.filter(item => item.id !== action.id)
        case 'CHECK_ALL':
            return state.map(item => {
                return {
                    ...item,
                    isChecked: action.checked
                }
            })
        case 'CHECK':
            
            return state.map(item => {
                if(item.id === action.id) {
                    item = Object.assign({}, item, {isChecked: action.checked})
                }
                return item
            })
        case 'COLLECT':
            
            return state.map(item => {
                if(item.id === action.id) {
                    return {
                        ...item,
                        isCollect: action.checked
                    }
                }
                return item
            })
        case 'REMOVE_SELECTED':
            return state.filter(item => !item.isChecked)
        case 'COLLECT_SELECTED':
            return state.map(item => {
                if(item.isChecked){
                    return Object.assign({}, item, {isCollect: true})
                }
                return item
            })
        default: 
            return state
    }
}
export default reducer