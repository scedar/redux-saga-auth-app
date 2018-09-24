import SignupSaga from '../containers/signup/sagas'
import LoginSaga from '../containers/login/sagas'
import WidgetSaga from '../containers/widgets/sagas'

export default function* IndexSaga() {
    yield [
        SignupSaga(),
        LoginSaga(),
        WidgetSaga()
    ]
}