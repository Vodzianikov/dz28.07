// 1.1) Promise,Promise resolve,setTimeout,End
//1.2) before promise,One,Zero Promise,Zero Promise Invoked,Zero
//1.3) End,Success,user received,in promise,result,last set timeout,promise resolved

//2)
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

// const POSTS_URLId = async ()=> {
//     try{
//         const response = await fetch(POSTS_URL)
//         const users = await response.json();
//         console.log(users)
//     }catch(error){
//         console.log(error)
//     }finally{
//         console.log("finally")
//     }
// }
// const promise = POSTS_URLId()
// console.log(promise)


// 3)
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const todoIDs = [43, 21, 55, 100, 10];
// const TODOS_URLId = async(ids)=>{
//     try{
//         const response = await fetch(TODOS_URL)
//         const users =  await response.json()
//         const requests = ids.map((id) =>users[id]?.id );
//         // const usersId= await users[requests]?.id
//         const cartResponse = await fetch(`${TODOS_URL}/${requests}`)
//         const CUR = await cartResponse.json()
//         console.log(CUR)
//     }catch(error){
//                 console.log(error)
//             }finally{
//                 console.log("finally")
//             }
// }
// const TODOS_URLA = TODOS_URLId(todoIDs)
// console.log()



// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const todoIDs = [43, 21, 55, 100, 10];
// const TODOS_URLId = async(ids)=>{
//     try{

//         const response = await fetch(TODOS_URL)
//         const users =  await response.json()
//         const requests = ids.map((id) =>users[id]?.id );
//         const cartResponse = await fetch(`${TODOS_URL}/${requests}`)
//         const CUR = await cartResponse.json()
//         console.log(CUR)
//     }catch(error){
//                 console.log(error)
//             }finally{
//                 console.log("finally")
//             }
// }
// const TODOS_URLA = TODOS_URLId(todoIDs)
// console.log()





















/////////////////////////////////////////////////////////////////////////////////////
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const todoIDs = [43, 21, 55, 100, 10];
// const getTodosByIds = (ids) => {
//  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//  Promise.all(requests)
//  .then((responses) => {
//  const dataResults = responses.map((data) => data.json());
//  return Promise.all(dataResults);
//  })
//  .then((allTasks) => {
//  console.log(allTasks);
//  })
//  .catch((error) => {
//  console.log(error);
//  });
// };
// getTodosByIds(todoIDs);
////////////////////////////////////////////////////////////////////////////////////
// 4)

// const button = document.querySelector('.button');
// const button2 = document.querySelector('.button2');

// button.addEventListener('click', function () {
//     button.style.backgroundColor = "#f70707";
// });

// button2.addEventListener('click', function () {
//     button2.style.backgroundColor = "#37f707";
// });