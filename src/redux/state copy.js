/** New post text area literal */
const newPostDefaultPreview = 'New Post..'

/** OnStateChange broadcaster */
let OnStateChangeDelegate = {
  broadcast: state => { alert('should be override') }
}

/** UI Statement Model */
let State = {
  profile:
  {
    posts:[
      {id : 3, data:"Post N", numLikes:3},
      {id : 2, data:"Post 1", numLikes:6},
      {id : 1, data:"Post 0", numLikes:3},
      {id : 0, data:"Initial Post", numLikes:9}
    ],
    newPostPreview:newPostDefaultPreview
  } , 
  messenger: 
  { 
    dialogs:
    [
      {id : 3, companion:"Sergey"},
      {id : 2, companion:"Dmitriy"},
      {id : 1, companion:"Roman"},
      {id : 0, companion:"Nikita"}
    ],
    messanges :
    [
      {id : 3, text:"React is cool"},
      {id : 2, text:"I love you"},
      {id : 1, text:"Nice to meet you"},
      {id : 0, text:"Hello world"}
    ]
  }  
}

/** Post editor api */
export const PublishNewPost = () => {
  debugger
  const id = State.profile.posts.length
  const data = State.profile.newPostPreview
  const post = {id:id, data:data, numLikes:0}
  State.profile.posts.unshift(post);
  State.profile.newPostPreview = newPostDefaultPreview
  OnStateChangeDelegate.broadcast(State)
}
export const UpdateNewPostPreview = text => {
  State.profile.newPostPreview = text
  OnStateChangeDelegate.broadcast(State)
}

/** OnStateChange register listener function */
export const OnStateChange = observer => {
  OnStateChangeDelegate.broadcast = observer
}

export default State;