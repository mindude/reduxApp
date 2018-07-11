"use strict"

//BOOKS REDUCERS
export function booksReducers(state={
	books:
	[
		{
			_id: 1,
			title: 'first book baby',
			description: 'and first desc kek',
			price: 10.18
		},
		{
			_id: 2,
			title: 'segundo book baby',
			description: 'and secundo desc kek',
			price: 21.12
		}
	]
}, action){
	switch(action.type){
		case "GET_BOOK":
			return {...state, books:[...state.books]}
			break;
		case "POST_BOOK":
			return {books:[...state.books, ...action.payload]}
			break;
		case "DELETE_BOOK":
			const currentBookToDelete = [...state.books]
			const indexToDelete = currentBookToDelete.findIndex(
				function(book){
					return book._id === Number(action.payload);
				}
			)
			return {books: [...currentBookToDelete.slice(0, indexToDelete),
				...currentBookToDelete.slice(indexToDelete + 1)]}

			break;
		case "UPDATE_BOOK":
			const currentBookToUpdate = [...state.books]

			const indexToUpdate = currentBookToUpdate.findIndex(
				function(book){
					return book._id === Number(action.payload._id);
				}
			)

			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			}

			return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
				...currentBookToUpdate.slice(indexToUpdate + 1)]}
			break;
	}
	return state
}
