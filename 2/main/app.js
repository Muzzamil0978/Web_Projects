import{getLogedinUsers,signoutUser} from '../firebase.js'


getLogedinUsers()


document.getElementById('auth').addEventListener('click',(e)=>{
      function toggleAuth() {
        document.getElementById('authDrawer').classList.toggle('active');
    }toggleAuth()
});
document.getElementById('userInfo').addEventListener('click',(e)=>{
      function toggleAuth() {
        document.getElementById('authDrawer').classList.toggle('active');
    }toggleAuth()
});
document.getElementById('signOut').addEventListener('click',(e)=>{
   signoutUser()
});