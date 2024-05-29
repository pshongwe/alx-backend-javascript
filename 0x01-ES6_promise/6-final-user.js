import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhot(fileName)])
    .then((response) => (
       response.map((o) => ({
         status: o.status,
         value: o.status === 'fulfilled' ? o.value : String(o.reason),
       }))
    ));
}
