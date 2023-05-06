import  {configureStore} from '@reduxjs/toolkit'
import noteReducer from './feature/note/noteSlice'

export default configureStore({
    reducer: {
        note: noteReducer,
    }
})