import {takeEvery, takeLatest, take, put, call, all, race} from 'redux-saga/effects'
import {aaa, bbb} from '../api/index'
import * as types from '../constants/index'

function* fetchAddMessage(action) {
    console.log('clicked add saga...');
    console.log('action message:', action.message);
    console.log('action author', action.author);
    yield put({type: types.SHOW_MESSAGE, message: action.message, author: action.author})
}

function* takeEffect() {
    const action = yield take(types.ADD_MESSAGE);
    console.log('action:', action)
}

const handleNewMessage = function* handleNewMessage(params) {
    // yield takeEvery(types.ADD_MESSAGE, fetchAddMessage);
    // yield takeLatest(types.ADD_MESSAGE, fetchAddMessage)

    // const action = yield take(types.ADD_MESSAGE);
    // console.log('action:', action)

    // yield call(takeEffect);
    // yield call(aaa);

    // yield all([
    //     call(takeEffect),
    //     call(aaa),
    // ]);

    // yield race([
    //     call(takeEffect),
    //     call(bbb)
    // ])
};

export default handleNewMessage


/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

// export default mySaga;